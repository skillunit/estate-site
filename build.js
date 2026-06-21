#!/usr/bin/env node
/**
 * build.js — собирает финальный HTML каждой страницы, подставляя
 * partials/header.html и partials/footer.html вместо <header>/<footer>.
 *
 * Запуск: node build.js
 *
 * Как это работает:
 *   1. Каждая страница в PAGES читается как есть.
 *   2. Всё между маркерами <!-- HEADER:START --> и <!-- HEADER:END -->
 *      заменяется на содержимое partials/header.html (обёрнутое теми
 *      же маркерами — так скрипт можно запускать повторно сколько
 *      угодно раз, без накопления дублей).
 *   3. То же самое для <!-- FOOTER:START --> / <!-- FOOTER:END -->.
 *      Если на странице несколько футеров (как было на projects.html —
 *      по одному на каждый "псевдо-раздел" в legacy SPA-разметке),
 *      заменяются ВСЕ найденные пары маркеров.
 *   4. Если маркеров ещё нет (первый запуск на старых файлах),
 *      скрипт сам найдёт исходный <header id="header">...</header>
 *      / <footer>...</footer> и обернёт его маркерами при замене.
 *   5. Результат перезаписывает исходный файл — partials/*.html
 *      остаются единственным местом, где правится контент хедера
 *      и футера на будущее.
 *
 * Это сознательно НЕ npm-пакет и не требует зависимостей — чистый
 * Node.js, чтобы build не разваливался от npm install проблем.
 * Если позже захочется перейти на WordPress — partials/header.html
 * и partials/footer.html переносятся в header.php/footer.php
 * практически без изменений (showPage()-специфика уже убрана).
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// Страницы, которые получают единый хедер/футер.
// admin.html сознательно не включён — это отдельная служебная панель,
// не часть публичного сайта с общей навигацией.
const PAGES = [
  'index.html',
  'projects.html',
  'team.html',
  'blog.html',
  'article.html',
  'contact.html',
  'favorites.html',
  'history.html',
  'legal.html',
  'privacy.html',
];

const HEADER_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/header.html'), 'utf-8').trim();
const FOOTER_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/footer.html'), 'utf-8').trim();

function wrap(marker, content) {
  return `<!-- ${marker}:START -->\n${content}\n<!-- ${marker}:END -->`;
}

/**
 * Заменяет все вхождения блока между маркерами MARKER:START/MARKER:END
 * на новый контент. Если маркеров на странице ещё нет — ищет исходные
 * <header>...</header> или <footer>...</footer> теги и заменяет их.
 *
 * Важно: все позиции исходных тегов собираются ДО какой-либо замены,
 * иначе уже вставленный partial (который сам содержит, например,
 * <header id="header">) был бы найден повторно на следующей
 * итерации — отсюда и идёт замена с конца строки к началу, по
 * заранее собранному списку, без повторного поиска по уже
 * изменённой строке.
 */
function replaceBlock(html, marker, fallbackTagRegex, newInner) {
  const markerRegex = new RegExp(
    `<!-- ${marker}:START -->[\\s\\S]*?<!-- ${marker}:END -->`,
    'g'
  );

  const markerMatches = [...html.matchAll(markerRegex)];
  if (markerMatches.length > 0) {
    let result = html;
    for (let i = markerMatches.length - 1; i >= 0; i--) {
      const m = markerMatches[i];
      result = result.slice(0, m.index) + wrap(marker, newInner) + result.slice(m.index + m[0].length);
    }
    return { html: result, count: markerMatches.length };
  }

  // Первый запуск — маркеров ещё нет, собираем позиции исходных тегов разом
  const tagMatches = [...html.matchAll(fallbackTagRegex)];
  let result = html;
  for (let i = tagMatches.length - 1; i >= 0; i--) {
    const m = tagMatches[i];
    result = result.slice(0, m.index) + wrap(marker, newInner) + result.slice(m.index + m[0].length);
  }
  return { html: result, count: tagMatches.length };
}

function buildPage(filename) {
  const filePath = path.join(ROOT, filename);
  let html = fs.readFileSync(filePath, 'utf-8');

  const headerResult = replaceBlock(
    html,
    'HEADER',
    /<header\b[^>]*>[\s\S]*?<\/header>/g,
    HEADER_PARTIAL
  );
  html = headerResult.html;

  const footerResult = replaceBlock(
    html,
    'FOOTER',
    /<footer\b[^>]*>[\s\S]*?<\/footer>/g,
    FOOTER_PARTIAL
  );
  html = footerResult.html;

  // Подключаем nav-active.js, если его ещё нет на странице —
  // он подсвечивает активный пункт меню на основе body[data-page].
  // Проверяем именно тег <script src="...">, а не любое упоминание
  // имени файла — иначе документационный комментарий внутри самого
  // partials/header.html (который как раз объясняет, что делает
  // nav-active.js) ложно считался бы за «уже подключено».
  if (!/<script\s+src=["']js\/nav-active\.js/.test(html)) {
    html = html.replace(
      /<\/body>/,
      '<script src="js/nav-active.js?v=1"></script>\n</body>'
    );
  }

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(
    `${filename}: header x${headerResult.count}, footer x${footerResult.count}`
  );
}

console.log('Building pages from partials/header.html + partials/footer.html...\n');
PAGES.forEach(buildPage);
console.log('\nDone.');
