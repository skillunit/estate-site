/**
 * i18n.js — интернационализация Georgia Real Estate
 *
 * Архитектура совместима с WordPress:
 * - data-i18n="key.path"       → заменяет textContent
 * - data-i18n-html="key.path"  → заменяет innerHTML (для тегов <br> и т.п.)
 * - data-i18n-attr="placeholder:key | title:key"  → заменяет атрибуты
 * - data-i18n-param="{city}"   → подстановка динамических значений
 *
 * При переносе на WordPress:
 * - JSON-файлы → .po/.mo через WP-CLI: `wp i18n make-pot`
 * - data-i18n атрибуты → <?php _e( 'key', 'gre' ) ?>
 * - Движок отключается, WP берёт управление
 */

const I18n = (() => {
  const STORAGE_KEY = 'gre_lang';
  const DEFAULT_LANG = 'ru';
  const SUPPORTED = ['ru', 'en', 'he'];

  let _lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  let _dict = {};

  // ── Загрузка JSON ──────────────────────────────────────────
  async function load(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    try {
      const res = await fetch(`lang/${lang}.json?v=1`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      _dict = await res.json();
      _lang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      return true;
    } catch (e) {
      console.warn('[i18n] Failed to load', lang, e);
      return false;
    }
  }

  // ── Получить перевод по пути "nav.home" ────────────────────
  function t(key, params) {
    const parts = key.split('.');
    let val = _dict;
    for (const p of parts) {
      if (val == null) return key;
      val = val[p];
    }
    if (val == null) return key;
    if (params) {
      return String(val).replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
    }
    return String(val);
  }

  // ── Применить переводы ко всему DOM ──────────────────────
  function applyAll(root) {
    root = root || document;

    // Простой текст
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const params = el.dataset.i18nParam ? JSON.parse(el.dataset.i18nParam) : null;
      el.textContent = t(key, params);
    });

    // HTML (для <br>, <b> и т.п.)
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const params = el.dataset.i18nParam ? JSON.parse(el.dataset.i18nParam) : null;
      el.innerHTML = t(key, params);
    });

    // Атрибуты: data-i18n-attr="placeholder:filter.name_placeholder | title:nav.home"
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split('|').forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });

    // Направление текста RTL/LTR
    const dir = (_dict.meta && _dict.meta.dir) || 'ltr';
    document.documentElement.setAttribute('lang', _lang);
    document.documentElement.setAttribute('dir', dir);
    document.body.classList.toggle('rtl', dir === 'rtl');

    // Заголовок страницы
    const page = document.body.dataset.page;
    if (page && _dict.meta) {
      const titleKey = `meta.title_${page}`;
      const title = t(titleKey);
      if (title !== titleKey) document.title = title;
    }
  }

  // ── Переключить язык ──────────────────────────────────────
  async function setLang(lang) {
    if (lang === _lang) return;
    const ok = await load(lang);
    if (!ok) return;
    applyAll();
    updateLangButtons();
    // Событие для других модулей (catalog.js, nav.js)
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // ── Обновить активную кнопку языка ───────────────────────
  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === _lang);
    });
  }

  // ── Инициализация ─────────────────────────────────────────
  async function init() {
    // Привязать кнопки языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    await load(_lang);
    applyAll();
    updateLangButtons();
  }

  // ── Публичное API ─────────────────────────────────────────
  return { init, t, setLang, applyAll, getLang: () => _lang, getDict: () => _dict };
})();

// Автоинициализация при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
  I18n.init();
}
