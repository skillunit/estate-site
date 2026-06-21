/**
 * nav-active.js — подсвечивает активный пункт меню в header-nav
 * на основе атрибута <body data-page="...">.
 *
 * Это позволяет header.html (partials/header.html) быть полностью
 * одинаковым на всех страницах — ни одна копия не хардкодит
 * class="active" вручную, поэтому он не может "потеряться" или
 * остаться не на том пункте при копировании хедера на новую страницу.
 *
 * index.html — особый случай: там переключение между разделами
 * происходит через showPage() (одностраничный режим), и подсветка
 * активного пункта уже встроена в саму showPage() в js/nav.js.
 * Этот скрипт ей не мешает: на первой загрузке index.html тоже
 * получает page === 'home' через data-page и подсвечивает то же
 * самое, что showPage() сделала бы сама.
 */
(function () {
  function highlightActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('.header-nav a[data-page]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.page === page);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightActiveNav);
  } else {
    highlightActiveNav();
  }
})();
