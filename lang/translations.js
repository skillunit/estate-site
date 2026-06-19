/**
 * translations.js — загрузчик языков Georgia Real Estate
 *
 * Отдельные файлы переводов:
 *   lang/ru.js — русский  (редактирует контент-менеджер RU)
 *   lang/en.js — английский (редактирует переводчик EN)
 *   lang/he.js — иврит     (редактирует переводчик HE)
 *
 * WordPress (WPML): каждый файл → отдельный .po файл языка
 *   wp i18n make-pot → lang/gre-en_US.po
 *
 * GRE_T('key') = аналог <?php _e('key', 'gre') ?>
 */

window.GRE_T = function(key, params) {
  var lang = localStorage.getItem('gre_lang') || 'ru';

  // Выбираем нужный словарь
  var dict = window['GRE_LANG_' + lang.toUpperCase()]
          || window.GRE_LANG_RU
          || {};

  var val = dict[key];

  // Fallback: если ключ не найден в текущем языке → берём из RU
  if (val === undefined && window.GRE_LANG_RU) {
    val = window.GRE_LANG_RU[key];
  }

  // Если ключа нет вообще → возвращаем сам ключ
  if (val === undefined) {
    if (window.console && console.warn) {
      console.warn('[GRE_T] Missing translation key:', key, '| RU dict loaded:', !!window.GRE_LANG_RU, '| keys count:', window.GRE_LANG_RU ? Object.keys(window.GRE_LANG_RU).length : 0);
    }
    return key;
  }

  // Подстановка {placeholder}
  if (params) {
    val = String(val).replace(/\{([\w-]+)\}/g, function(_, k) {
      return params[k] !== undefined ? params[k] : '{' + k + '}';
    });
  }

  return String(val);
};

/**
 * GRE_PLURAL_OBJECTS — склонение "N объект/объекта/объектов" по языку
 * RU: 1 объект, 2-4 объекта, 5+ объектов
 * EN/HE: N properties / 1 property
 */
window.GRE_PLURAL_OBJECTS = function(n) {
  var lang = localStorage.getItem('gre_lang') || 'ru';

  if (lang === 'ru') {
    var mod10 = n % 10, mod100 = n % 100;
    var word;
    if (mod10 === 1 && mod100 !== 11) word = 'объект';
    else if ([2,3,4].includes(mod10) && ![12,13,14].includes(mod100)) word = 'объекта';
    else word = 'объектов';
    return n + ' ' + word;
  }
  if (lang === 'he') {
    return n + ' ' + (n === 1 ? 'נכס' : 'נכסים');
  }
  // en
  return n + ' ' + (n === 1 ? 'property' : 'properties');
};
