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
  if (val === undefined) return key;

  // Подстановка {placeholder}
  if (params) {
    val = String(val).replace(/\{([\w-]+)\}/g, function(_, k) {
      return params[k] !== undefined ? params[k] : '{' + k + '}';
    });
  }

  return String(val);
};
