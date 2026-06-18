/**
 * i18n.js — движок переводов Georgia Real Estate
 *
 * Работает в паре с lang/translations.js
 * WordPress-совместимо: data-i18n="key" → <?php _e('key', 'gre') ?>
 *
 * Поддерживаемые атрибуты:
 *   data-i18n="key"                    → textContent
 *   data-i18n-html="key"               → innerHTML (для <br> и т.п.)
 *   data-i18n-attr="placeholder:key"   → атрибут элемента
 *   data-i18n-param='{"city":"Batumi"}' → подстановка {city}
 */

const I18n = (() => {
  const STORAGE_KEY  = 'gre_lang';
  const DEFAULT_LANG = 'ru';
  const SUPPORTED    = ['ru', 'en', 'he'];

  let _lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

  // ── Получить перевод ───────────────────────────────────
  function t(key, params) {
    if (typeof window.GRE_T === 'function') return window.GRE_T(key, params);
    return key; // fallback до загрузки translations.js
  }

  // ── Применить переводы ко всему DOM ───────────────────
  function applyAll(root) {
    root = root || document;

    // Текстовые узлы
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key    = el.dataset.i18n;
      const params = el.dataset.i18nParam ? JSON.parse(el.dataset.i18nParam) : null;
      el.textContent = t(key, params);
    });

    // HTML (для <br>, <b> и т.п.)
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key    = el.dataset.i18nHtml;
      const params = el.dataset.i18nParam ? JSON.parse(el.dataset.i18nParam) : null;
      el.innerHTML = t(key, params);
    });

    // Атрибуты: data-i18n-attr="placeholder:key | title:key2"
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split('|').forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });

    // RTL / LTR
    const dir = t('meta.dir') || 'ltr';
    document.documentElement.setAttribute('lang', _lang);
    document.documentElement.setAttribute('dir', dir);
    document.body.classList.toggle('rtl', dir === 'rtl');

    // Заголовок страницы
    const page = document.body.dataset.page;
    if (page) {
      const title = t('meta.title_' + page);
      if (title && title !== 'meta.title_' + page) document.title = title;
    }

    // Уведомить другие модули
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: _lang } }));
  }

  // ── Обновить активную кнопку языка ───────────────────
  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === _lang);
    });
  }

  // ── Переключить язык ──────────────────────────────────
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    _lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyAll();
    updateLangButtons();
    // Перерендер каталога если он инициализирован
    if (typeof renderCatalogGrid === 'function') renderCatalogGrid();
    if (typeof renderFeatured    === 'function') renderFeatured();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // ── Инициализация ─────────────────────────────────────
  function init() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    applyAll();
    updateLangButtons();
  }

  return { init, t, setLang, applyAll, getLang: () => _lang };
})();

// Автоинициализация
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
  I18n.init();
}
