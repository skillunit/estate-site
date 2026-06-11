// ════════════════════════════════════════════════════
//  ANIMATIONS.JS
//  1. Sticky Header
//  2. Scroll Reveal — плавный fade + slide, каскад
// ════════════════════════════════════════════════════

// ── 1. STICKY HEADER ─────────────────────────────────
(function() {
  const header = document.getElementById('header');
  if (!header) return;

  header.classList.add('header-anim');

  let lastY   = window.scrollY;
  let hidden  = false;
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      const y  = window.scrollY;
      const dy = y - lastY;

      if (y < 80) {
        if (hidden) { hidden = false; header.style.transform = ''; }
      } else if (dy > 4 && !hidden) {
        hidden = true;
        header.style.transform = 'translateY(-100%)';
      } else if (dy < -2 && hidden) {
        hidden = false;
        header.style.transform = '';
      }

      lastY   = y;
      ticking = false;
    });
  }, { passive: true });
})();


// ── 2. SCROLL REVEAL ─────────────────────────────────
(function() {

  const SELECTORS = [
    '.catalog-card',
    '.prop-card',
    '.section-title',
    '.section-text',
    '.direction-card',
    '.stat-item',
    '.team-card',
    '.testi-card',
    '.blog-card',
    '.blog-featured',
    '.detail-spec',
    '.prop-desc-feature',
    '.invest-row',
    '.contact-card',
    '.form-card',
    '.about-text',
  ].join(', ');

  // Каскад: задержка внутри одного «экрана» появления
  // Считаем не глобальный индекс, а позицию среди карточек
  // которые попали в viewport одновременно
  const STAGGER_MS     = 80;   // шаг между карточками
  const MAX_STAGGER_MS = 320;  // максимум — не больше 4 карточек в каскаде

  // Очередь элементов которые появились одновременно (один батч Observer)
  let batchQueue   = [];
  let batchTimer   = null;

  function flushBatch() {
    // Сортируем по вертикальной позиции — сверху вниз
    batchQueue.sort(function(a, b) {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });

    batchQueue.forEach(function(el, i) {
      var delay = Math.min(i * STAGGER_MS, MAX_STAGGER_MS);
      setTimeout(function() {
        el.classList.add('reveal-in');
      }, delay);
    });

    batchQueue = [];
    batchTimer = null;
  }

  function reveal(el) {
    batchQueue.push(el);
    // Даём 16ms (один фрейм) чтобы собрать все элементы одного скролл-события
    if (batchTimer) clearTimeout(batchTimer);
    batchTimer = setTimeout(flushBatch, 16);
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Запускаем заранее — элемент ещё не виден, но вот-вот появится
    rootMargin: '0px 0px -40px 0px',
    threshold: 0,
  });

  function prepare(root) {
    var scope = root || document;
    scope.querySelectorAll(SELECTORS).forEach(function(el) {
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = '1';
      el.classList.add('reveal-init');
      observer.observe(el);
    });
  }

  // Перехват showPage (SPA index.html)
  var _origShowPage = window.showPage;
  if (typeof _origShowPage === 'function') {
    window.showPage = function(id) {
      _origShowPage(id);
      setTimeout(function() {
        var page = document.getElementById('page-' + id);
        if (page) prepare(page);
      }, 60);
    };
  }

  // Перехват renderCatalogGrid — карточки рисуются динамически
  var _origRender = window.renderCatalogGrid;
  if (typeof _origRender === 'function') {
    window.renderCatalogGrid = function() {
      _origRender.apply(this, arguments);
      // Ждём один paint-цикл, потом подписываем новые карточки
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          prepare();
        });
      });
    };
  }

  document.addEventListener('DOMContentLoaded', function() {
    prepare();
  });

})();


// ── 3. PARALLAX PAGE HERO ─────────────────────────────
(function() {
  // All subpage hero bg selectors
  var BG_SELECTORS = [
    '.catalog-hero-bg',
    '.team-hero-bg',
    '.blog-hero-bg',
    '.contacts-hero-bg',
    '.blog-article-hero-bg',
    '.fav-hero-bg',
    '.hist-hero-bg',
  ];

  var PARALLAX_FACTOR = 0.38; // bg moves at 38% of scroll speed
  var bgEls = [];

  function init() {
    bgEls = [];
    BG_SELECTORS.forEach(function(sel) {
      var el = document.querySelector(sel);
      if (el) bgEls.push(el);
    });
    if (bgEls.length) tick();
  }

  var ticking = false;

  function tick() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var y = window.scrollY;
      bgEls.forEach(function(el) {
        el.style.transform = 'translateY(' + (y * PARALLAX_FACTOR) + 'px)';
      });
      ticking = false;
    });
  }

  window.addEventListener('scroll', tick, { passive: true });
  window.addEventListener('resize', tick, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
