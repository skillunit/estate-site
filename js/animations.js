// ════════════════════════════════════════════════════
//  ANIMATIONS.JS
//  1. Sticky Header — скрывается при скролле вниз,
//     появляется при малейшем скролле вверх
//  2. Scroll Reveal — fade-in + slide-up с каскадом
// ════════════════════════════════════════════════════

// ── 1. STICKY HEADER ─────────────────────────────────
(function() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastY      = window.scrollY;
  let hidden     = false;
  let ticking    = false;

  // Добавляем transition один раз через CSS-класс
  header.classList.add('header-anim');

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      const y   = window.scrollY;
      const dy  = y - lastY;

      if (y < 80) {
        // У самого верха — всегда показываем
        showHeader();
      } else if (dy > 4 && !hidden) {
        // Скроллим вниз больше 4px — прячем
        hideHeader();
      } else if (dy < -2 && hidden) {
        // Скроллим вверх хоть немного — показываем
        showHeader();
      }

      lastY   = y;
      ticking = false;
    });
  }

  function hideHeader() {
    hidden = true;
    header.style.transform = 'translateY(-100%)';
  }

  function showHeader() {
    hidden = false;
    header.style.transform = 'translateY(0)';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


// ── 2. SCROLL REVEAL ─────────────────────────────────
(function() {

  // Селекторы элементов которые будут анимироваться
  const SELECTORS = [
    // Карточки каталога (каскад по индексу в сетке)
    '.catalog-card',
    // Карточки объектов на главной
    '.prop-card',
    // Секции и блоки
    '.section-title',
    '.section-text',
    // Направления/страны
    '.direction-card',
    // Статистика
    '.stat-item',
    // Команда
    '.team-card',
    // Отзывы
    '.testi-card',
    // Блог
    '.blog-card',
    '.blog-featured',
    // Детальная страница
    '.detail-spec',
    '.prop-desc-feature',
    '.invest-row',
    // Контакты
    '.contact-card',
    '.form-card',
    // About strip
    '.about-text',
  ].join(', ');

  // Задержки для каскада (элементы в одном контейнере)
  const STAGGER_MS = 100;
  // Максимальная задержка одного каскада
  const MAX_STAGGER_MS = 500;

  // Устанавливаем начальное состояние всем элементам
  function prepare() {
    document.querySelectorAll(SELECTORS).forEach(el => {
      // Не трогаем если уже видно или уже отмечено
      if (el.dataset.revealed) return;
      el.classList.add('reveal-init');
      el.dataset.revealed = '0';
    });
  }

  // Группируем соседние элементы в сетке для каскада
  function getStaggerDelay(el) {
    const parent = el.parentElement;
    if (!parent) return 0;

    // Ищем всех siblings с классом reveal в том же родителе
    const siblings = Array.from(parent.children).filter(
      ch => ch.dataset.revealed !== undefined
    );
    const idx = siblings.indexOf(el);
    if (idx < 0) return 0;

    return Math.min(idx * STAGGER_MS, MAX_STAGGER_MS);
  }

  // Запускаем анимацию для элемента
  function reveal(el) {
    if (el.dataset.revealed === '1') return;
    el.dataset.revealed = '1';

    const delay = getStaggerDelay(el);

    setTimeout(function() {
      el.classList.remove('reveal-init');
      el.classList.add('reveal-in');
    }, delay);
  }

  // IntersectionObserver — следим за появлением в viewport
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,   // запускаем когда 8% элемента видно
    rootMargin: '0px 0px -30px 0px'  // чуть раньше нижней границы
  });

  function observeAll() {
    document.querySelectorAll(SELECTORS).forEach(el => {
      if (el.dataset.revealed === '0') {
        observer.observe(el);
      }
    });
  }

  // При переключении SPA-страниц (showPage) — заново готовим элементы
  const _origShowPage = window.showPage;
  if (typeof _origShowPage === 'function') {
    window.showPage = function(id) {
      _origShowPage(id);
      // Небольшая задержка чтобы DOM успел отрисоваться
      setTimeout(function() {
        prepare();
        observeAll();
      }, 50);
    };
  }

  // Также перехватываем renderCatalogGrid — карточки рендерятся динамически
  const _origRender = window.renderCatalogGrid;
  if (typeof _origRender === 'function') {
    window.renderCatalogGrid = function() {
      _origRender.apply(this, arguments);
      setTimeout(function() {
        prepare();
        observeAll();
      }, 30);
    };
  }

  // Первичная инициализация
  document.addEventListener('DOMContentLoaded', function() {
    prepare();
    observeAll();
  });

})();
