// ── NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.header-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  window.scrollTo({top:0, behavior:'instant'});
  document.getElementById('mainNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// ── LANG ──
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', function(){
    document.querySelectorAll('.lang-btn').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── SEARCH TABS ──
function setSearchTab(el) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ── CATALOG FILTER ──
function goToCountry(country) {
  // Если нет страницы каталога в DOM (index.html) — редирект на projects.html
  if (!document.getElementById('page-catalog')) {
    var dataCountry = country === 'georgia' ? 'all' : country;
    var params = 'deal=buy&country=' + dataCountry;
    window.location.href = 'projects.html?' + params;
    return;
  }

  const countrySelect = document.querySelector('#page-catalog .filter-field--country .filter-select');
  // Georgian properties have country:'all' in data, treat 'georgia' as 'all'
  const dataCountry = country === 'georgia' ? 'all' : country;
  if (countrySelect) countrySelect.value = dataCountry;
  const citySelect = document.getElementById('citySelect');
  const statusSelect = document.getElementById('statusSelect');
  const typeSelect = document.getElementById('typeSelect');
  if (statusSelect) statusSelect.value = 'all';
  if (typeSelect) typeSelect.value = 'all';

  // Синхронизируем _prevCountry чтобы filterCatalog не сбросил состояние
  _prevCountry = dataCountry;

  // Обновляем список городов под выбранную страну
  updateCityOptions(dataCountry);
  if (citySelect) citySelect.value = 'all';

  // Обновляем заголовок «Покупка в ОАЭ» и т.д.
  updateCatalogHeadline(dataCountry);

  showPage('catalog');
  renderCatalogGrid(dataCountry, 'all', 'all');
  renderMapMarkers(dataCountry, 'all', 'all');
}

const COUNTRY_LABELS = { 'all': 'Грузии', 'usa': 'США', 'uae': 'ОАЭ', 'cyprus': 'Кипре', 'greece': 'Греции' };

const COUNTRY_CITIES = {
  'all':    [['all','Любой город'],['tbilisi','Тбилиси'],['batumi','Батуми'],['gonio','Гонио'],['kakheti','Кахетия'],['bakuriani','Бакуриани']],
  'usa':    [['all','Любой город'],['new-york','Нью-Йорк'],['miami','Майами']],
  'uae':    [['all','Любой город'],['dubai','Дубай']],
  'cyprus': [['all','Любой город'],['limassol','Лимасол'],['paphos','Пафос']],
  'greece': [['all','Любой город'],['athens','Афины'],['mykonos','Миконос']],
};

function updateCityOptions(country) {
  const citySelect = document.getElementById('citySelect');
  if (!citySelect) return;
  const cities = COUNTRY_CITIES[country] || COUNTRY_CITIES['all'];
  citySelect.innerHTML = cities.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
}

function updateCatalogHeadline(country) {
  const el = document.getElementById('catalogHeadline');
  if (!el) return;
  const deal = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';
  const dealLabel = deal === 'rent' ? 'Аренда' : 'Покупка';
  const countryLabel = COUNTRY_LABELS[country] || 'Грузии';
  el.textContent = `${dealLabel} в ${countryLabel}`;
}

let _prevCountry = 'all';

function onCountryChange(select) {
  const country = select.value;
  _prevCountry = country;
  updateCityOptions(country);
  const citySelect = document.getElementById('citySelect');
  if (citySelect) citySelect.value = 'all';
  const statusSelect = document.getElementById('statusSelect');
  if (statusSelect) statusSelect.value = 'all';
  const typeSelect = document.getElementById('typeSelect');
  if (typeSelect) typeSelect.value = 'all';
  ['priceMin','priceMax','areaMin','areaMax'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const roomsVal = document.getElementById('roomsVal');
  if (roomsVal) roomsVal.value = 'all';
  document.querySelectorAll('.rooms-btn').forEach(b => b.classList.toggle('active', b.dataset.val === 'all'));
  updateCatalogHeadline(country);
  renderCatalogGrid(country, 'all', 'all', 'all', {});
  renderMapMarkers(country, 'all', 'all', 'all', {});
}

function filterCatalog() {
  const cityEl     = document.getElementById('citySelect');
  const statusEl   = document.getElementById('statusSelect');
  const typeEl     = document.getElementById('typeSelect');
  const priceMinEl = document.getElementById('priceMin');
  const priceMaxEl = document.getElementById('priceMax');
  const areaMinEl  = document.getElementById('areaMin');
  const areaMaxEl  = document.getElementById('areaMax');
  const roomsEl    = document.getElementById('roomsVal');

  const status   = statusEl ? statusEl.value : 'all';
  const type     = typeEl   ? typeEl.value   : 'all';
  const rooms    = roomsEl  ? roomsEl.value  : 'all';
  const priceMin = priceMinEl && priceMinEl.value ? parseFloat(priceMinEl.value.replace(/[^0-9.]/g, '')) || 0        : 0;
  const priceMax = priceMaxEl && priceMaxEl.value ? parseFloat(priceMaxEl.value.replace(/[^0-9.]/g, '')) || Infinity : Infinity;
  // Конвертируем в USD (данные хранятся в USD)
  const _rate = (typeof CURRENCY_RATES !== 'undefined' && typeof currentCurrency !== 'undefined')
    ? (CURRENCY_RATES[currentCurrency] || 1) : 1;
  const priceMinUsd = priceMin > 0       ? priceMin / _rate : 0;
  const priceMaxUsd = priceMax < Infinity ? priceMax / _rate : Infinity;
  const areaMin  = areaMinEl  && areaMinEl.value  ? parseFloat(areaMinEl.value)  || 0        : 0;
  const areaMax  = areaMaxEl  && areaMaxEl.value  ? parseFloat(areaMaxEl.value)  || Infinity : Infinity;

  const catalogFilterBar = document.querySelector('#page-catalog .filter-bar .filter-field--country .filter-select');
  const country = catalogFilterBar ? catalogFilterBar.value : 'all';
  const city = cityEl ? cityEl.value : 'all';
  const extra = { priceMin: priceMinUsd, priceMax: priceMaxUsd, areaMin, areaMax, rooms };
  updateCatalogHeadline(country);
  renderCatalogGrid(country, city, status, type, extra);
  renderMapMarkers(country, city, status, type, extra);
}

// ── VIDEO ──
function openVideo(id) {
  document.getElementById('videoIframe').src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
  const ov = document.getElementById('videoOverlay');
  ov.style.display = 'flex';
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideo(e) {
  const ov = document.getElementById('videoOverlay');
  if (!e || e.target === ov) {
    ov.style.display = 'none';
    ov.classList.remove('open');
    document.getElementById('videoIframe').src = '';
    document.body.style.overflow = '';
  }
}

// ── LIGHTBOX ──
let lbImgs = [], lbIdx = 0;
function openLightbox(imgs, idx) {
  lbImgs = imgs; lbIdx = idx;
  const img = document.getElementById('lbImg');
  img.src = imgs[idx];
  lbRenderDots();
  const lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.style.display = 'none';
  document.body.style.overflow = '';
}
function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbImgs.length) % lbImgs.length;
  const img = document.getElementById('lbImg');
  img.classList.add('fade');
  setTimeout(() => {
    img.src = lbImgs[lbIdx];
    img.onload = () => img.classList.remove('fade');
  }, 180);
  lbRenderDots();
}
function lbRenderDots() {
  const dots = document.getElementById('lbDots');
  if (!dots) return;
  dots.innerHTML = lbImgs.map((_, i) =>
    `<div class="lb-dot${i===lbIdx?' active':''}" onclick="lbGoTo(${i})"></div>`
  ).join('');
}
function lbGoTo(i) {
  if (i === lbIdx) return;
  lbIdx = i;
  const img = document.getElementById('lbImg');
  img.classList.add('fade');
  setTimeout(() => { img.src = lbImgs[lbIdx]; img.onload = () => img.classList.remove('fade'); }, 180);
  lbRenderDots();
}
// Swipe support
let lbTouchX = null;
document.addEventListener('touchstart', e => { if (document.getElementById('lightbox').classList.contains('open')) lbTouchX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  if (!lbTouchX || !document.getElementById('lightbox').classList.contains('open')) return;
  const dx = e.changedTouches[0].clientX - lbTouchX;
  if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1);
  lbTouchX = null;
});

// ── FORM ──
function submitContact(e) {
  e.preventDefault ? e.preventDefault() : null;
  document.getElementById('formSuccess').style.display = 'block';
}

// ── KEY EVENTS ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeVideo(); closeContactPopup(); closePresentPopup(); closeManagerPopup(); }
  if (e.key === 'ArrowLeft'  && document.getElementById('lightbox').classList.contains('open')) lbNav(-1);
  if (e.key === 'ArrowRight' && document.getElementById('lightbox').classList.contains('open')) lbNav(1);
});

// ── FAV buttons ──
document.querySelectorAll('.prop-fav').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? 'var(--red)' : '';
  });
});

// ── MOBILE GALLERY SLIDER ──
let mobGalleryImgs = [], mobGalleryIdx = 0, mobTouchStartX = null, mobGalleryInited = false;

function mobGalleryInit(imgs) {
  mobGalleryImgs = imgs;
  mobGalleryIdx = 0;
  mobGalleryRender();
  // Attach touch handlers once
  if (!mobGalleryInited) {
    mobGalleryInited = true;
    const gallery = document.getElementById('detailGallery');
    if (gallery) {
      gallery.addEventListener('touchstart', e => { mobTouchStartX = e.touches[0].clientX; }, {passive:true});
      gallery.addEventListener('touchend', e => {
        if (mobTouchStartX === null) return;
        const dx = e.changedTouches[0].clientX - mobTouchStartX;
        if (Math.abs(dx) > 40) mobGalleryNav(dx < 0 ? 1 : -1);
        mobTouchStartX = null;
      });
    }
  }
}

function mobGalleryNav(dir) {
  if (!mobGalleryImgs.length) return;
  mobGalleryIdx = (mobGalleryIdx + dir + mobGalleryImgs.length) % mobGalleryImgs.length;
  mobGalleryRender();
}

function mobGalleryRender() {
  const img = document.getElementById('mobGalleryImg');
  if (img) {
    img.style.transition = 'opacity 0.15s';
    img.style.opacity = '0';
    setTimeout(() => { img.src = mobGalleryImgs[mobGalleryIdx]; img.style.opacity = '1'; }, 150);
  }
  // Dots
  const dots = document.getElementById('mobDots');
  if (dots) {
    dots.innerHTML = mobGalleryImgs.map((_, i) =>
      '<div class="gallery-mob-dot' + (i===mobGalleryIdx?' active':'') + '" onclick="mobGalleryGoTo(' + i + ')"></div>'
    ).join('');
  }
  // Clicking the photo opens lightbox at current index
  const main = document.querySelector('.gallery-main');
  if (main) {
    main.onclick = function() { openLightbox(mobGalleryImgs, mobGalleryIdx); };
  }
  // All photos button
  const allBtn = document.getElementById('mobAllBtn');
  if (allBtn) allBtn.onclick = function(e) { e.stopPropagation(); openLightbox(mobGalleryImgs, 0); };
}

function mobGalleryGoTo(i) {
  mobGalleryIdx = i;
  mobGalleryRender();
}

// ── ABOUT EXPAND ──
function toggleAbout() {
  const block = document.getElementById('teamAboutExpand');
  const btn   = document.getElementById('teamAboutBtn');
  const text  = document.getElementById('teamAboutBtnText');
  const open  = block.classList.toggle('open');
  btn.classList.toggle('open', open);
  text.textContent = open ? 'Свернуть' : 'Читать далее';
}

// Blog filter buttons
document.addEventListener('click', function(e) {
  if (!e.target.classList.contains('blog-filter-btn')) return;

  // Переключаем активную кнопку
  document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');

  const tag = e.target.dataset.tag;
  const featured = document.querySelector('#page-blog [data-was-featured], #page-blog .blog-featured');

  // Большая карточка — только при «Все»
  if (featured) {
    if (tag === 'all') {
      featured.classList.add('blog-featured');
      delete featured.dataset.wasFeatured;
    } else {
      featured.classList.remove('blog-featured');
      featured.dataset.wasFeatured = '1';
    }
  }

  // Фильтруем карточки
  document.querySelectorAll('#page-blog .blog-card').forEach(card => {
    if (tag === 'all' || card.dataset.tag === tag) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

// ── SHARE POPUP ──
function openSharePopup(propId) {
  // Build the shareable URL
  if (propId) {
    const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/') + 'index.html';
    window._shareUrl = base + '?prop=' + propId;
    // Also grab the prop name for title
    const prop = typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(p => p.id === propId) : null;
    window._shareTitle = prop ? prop.name : 'Georgia Real Estate';
  } else {
    window._shareUrl = window.location.href;
    window._shareTitle = document.querySelector('.detail-title') ? document.querySelector('.detail-title').textContent : 'Georgia Real Estate';
  }
  const ov = document.getElementById('shareOverlay');
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSharePopup(e) {
  if (e && e.target !== document.getElementById('shareOverlay') && !e.target.closest('.cpopup-close')) return;
  document.getElementById('shareOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('shareCopied').classList.remove('show');
}
function shareAction(type) {
  const url = window._shareUrl || window.location.href;
  const title = window._shareTitle || (document.querySelector('.detail-title') ? document.querySelector('.detail-title').textContent : 'Georgia Real Estate');
  if (type === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      document.getElementById('shareCopied').classList.add('show');
      setTimeout(() => document.getElementById('shareCopied').classList.remove('show'), 2000);
    });
  } else if (type === 'email') {
    window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
    closeSharePopup({target: document.getElementById('shareOverlay')});
  } else if (type === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`);
    closeSharePopup({target: document.getElementById('shareOverlay')});
  } else if (type === 'telegram') {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
    closeSharePopup({target: document.getElementById('shareOverlay')});
  } else if (type === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
    closeSharePopup({target: document.getElementById('shareOverlay')});
  }
}

// ── BLOG ARTICLE OPENER ──
function openArticle(imgUrl) {
  const heroBg = document.querySelector('.blog-article-hero-bg');
  if (heroBg && imgUrl) {
    heroBg.style.backgroundImage = `url('${imgUrl}')`;
  }
  showPage('blog-article');
}

// ── DEAL TYPE TOGGLE ──
let currentDealType = 'buy';

const STATUS_OPTIONS = {
  buy:  [
    ['all',          'Любой статус'],
    ['ready',        'Сдан в эксплуатацию'],
    ['construction', 'На стадии строительства'],
    ['investment',   'Инвестиция'],
    ['sale',         'Эксклюзив'],
  ],
  rent: [
    ['all',       'Любой статус'],
    ['longterm',  'Долгосрочная аренда'],
    ['shortterm', 'Краткосрочная аренда'],
    ['daily',     'Посуточно'],
  ],
};

function updateStatusOptions(type) {
  const statusSelect = document.getElementById('statusSelect');
  if (!statusSelect) return;
  statusSelect.innerHTML = STATUS_OPTIONS[type]
    .map(([v, l]) => `<option value="${v}">${l}</option>`)
    .join('');
}

function setDealType(type) {
  currentDealType = type;
  document.getElementById('dealBtnBuy').classList.toggle('active', type === 'buy');
  document.getElementById('dealBtnRent').classList.toggle('active', type === 'rent');
  updateStatusOptions(type);
  filterCatalog();
}

document.addEventListener('DOMContentLoaded', function() {
  updateStatusOptions('buy');
});

// ── CUSTOM SORT DROPDOWN ──
function toggleSortDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('sortDropdown');
  const isOpen = dd.classList.toggle('open');
  if (isOpen) {
    // Закрыть при клике вне
    setTimeout(() => {
      document.addEventListener('click', closeSortDropdownOutside, { once: true });
    }, 0);
  }
}

function closeSortDropdownOutside(e) {
  const dd = document.getElementById('sortDropdown');
  if (dd && !dd.contains(e.target)) {
    dd.classList.remove('open');
  }
}

function selectSort(el) {
  const value = el.dataset.value;

  // Обновить активный пункт
  document.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');

  // Обновить лейбл кнопки
  const label = el.textContent.trim();
  const labelEl = document.getElementById('sortCurrentLabel');
  if (labelEl) labelEl.textContent = label;

  // Обновить скрытый input и вызвать фильтрацию
  const input = document.getElementById('catalogSort');
  if (input) {
    input.value = value;
    filterCatalog();
  }

  // Закрыть дропдаун
  document.getElementById('sortDropdown').classList.remove('open');
}

// ── CARD SLIDER TOUCH SWIPE ──
(function() {
  let touchStartX = 0;
  let touchStartY = 0;
  let activeSlider = null;

  document.addEventListener('touchstart', function(e) {
    const slider = e.target.closest('.card-slider');
    if (!slider) return;
    activeSlider = slider;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (!activeSlider) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    activeSlider = null;
    // ignore mostly-vertical swipes
    if (Math.abs(dx) < 30 || Math.abs(dy) > Math.abs(dx)) return;
    const dir = dx < 0 ? 1 : -1;
    const slider = e.target.closest('.card-slider');
    if (!slider) return;
    const imgs = JSON.parse(slider.dataset.imgs || '[]');
    if (imgs.length <= 1) return;
    let idx = parseInt(slider.dataset.idx || 0) + dir;
    if (idx < 0) idx = imgs.length - 1;
    if (idx >= imgs.length) idx = 0;
    slider.dataset.idx = idx;
    const img = slider.querySelector('.card-slider-img');
    img.style.transition = 'opacity 0.22s ease-in-out';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = imgs[idx];
      img.onload = () => { img.style.opacity = '1'; };
      if (img.complete) img.style.opacity = '1';
    }, 180);
    slider.querySelectorAll('.card-slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  }, { passive: true });
})();

// ── CARD IMAGE SLIDER ──
function cardSlide(e, btn, dir) {
  e.stopPropagation();
  const slider = btn.closest('.card-slider');
  const imgs = JSON.parse(slider.dataset.imgs);
  if (imgs.length <= 1) return;

  let idx = parseInt(slider.dataset.idx) + dir;
  if (idx < 0) idx = imgs.length - 1;
  if (idx >= imgs.length) idx = 0;
  slider.dataset.idx = idx;

  const img = slider.querySelector('.card-slider-img');
  img.style.transition = 'opacity 0.22s ease-in-out, transform 0.4s ease';
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = imgs[idx];
    img.onload = () => { img.style.opacity = '1'; };
    // fallback если картинка уже в кеше
    if (img.complete) img.style.opacity = '1';
  }, 180);

  slider.querySelectorAll('.card-slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

// ── URL PARAM: ?page=catalog открывает нужную страницу ──
(function() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  if (page) {
    window.addEventListener('DOMContentLoaded', function() {
      if (document.getElementById('page-' + page)) {
        showPage(page);
      }
    });
  }

  // ── URL PARAM: ?prop=tbilisi-elite открывает страницу объекта ──
  const propId = params.get('prop');
  if (propId) {
    window.addEventListener('DOMContentLoaded', function() {
      var attempts = 0;
      function tryShow() {
        if (typeof showDetail === 'function' && typeof MAP_PROPERTIES !== 'undefined') {
          showDetail(propId);
        } else if (attempts++ < 20) {
          setTimeout(tryShow, 100);
        }
      }
      tryShow();
    });
  }
})();

// ── FILTER URL SYNC ──
(function() {
  var FILTER_PARAMS = ['deal','country','city','status','type','priceMin','priceMax','areaMin','areaMax','rooms','currency'];

  function readFilterState() {
    var s = {};
    s.deal    = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';
    var countryEl = document.querySelector('#page-catalog .filter-field--country .filter-select');
    s.country = countryEl ? countryEl.value : 'all';
    var cityEl    = document.getElementById('citySelect');    s.city    = cityEl    ? cityEl.value    : 'all';
    var statusEl  = document.getElementById('statusSelect');  s.status  = statusEl  ? statusEl.value  : 'all';
    var typeEl    = document.getElementById('typeSelect');    s.type    = typeEl    ? typeEl.value    : 'all';
    var pMinEl    = document.getElementById('priceMin');      s.priceMin = pMinEl   ? pMinEl.value    : '';
    var pMaxEl    = document.getElementById('priceMax');      s.priceMax = pMaxEl   ? pMaxEl.value    : '';
    var aMinEl    = document.getElementById('areaMin');       s.areaMin  = aMinEl   ? aMinEl.value    : '';
    var aMaxEl    = document.getElementById('areaMax');       s.areaMax  = aMaxEl   ? aMaxEl.value    : '';
    var roomsEl   = document.getElementById('roomsVal');      s.rooms   = roomsEl   ? roomsEl.value   : 'all';
    s.currency = typeof currentCurrency !== 'undefined' ? currentCurrency : 'USD';
    return s;
  }

  var _urlTimer = null;
  window.syncFilterToUrl = function() {
    if (!document.getElementById('page-catalog')) return;
    var activePage = document.querySelector('.page.active');
    if (!activePage || activePage.id !== 'page-catalog') return;
    clearTimeout(_urlTimer);
    _urlTimer = setTimeout(function() {
      var s = readFilterState();
      var p = new URLSearchParams();
      p.set('deal', s.deal);
      if (s.country  && s.country  !== 'all') p.set('country',  s.country);
      if (s.city     && s.city     !== 'all') p.set('city',     s.city);
      if (s.status   && s.status   !== 'all') p.set('status',   s.status);
      if (s.type     && s.type     !== 'all') p.set('type',     s.type);
      if (s.priceMin) p.set('priceMin', s.priceMin);
      if (s.priceMax) p.set('priceMax', s.priceMax);
      if (s.areaMin)  p.set('areaMin',  s.areaMin);
      if (s.areaMax)  p.set('areaMax',  s.areaMax);
      if (s.rooms && s.rooms !== 'all') p.set('rooms', s.rooms);
      if (s.currency && s.currency !== 'USD') p.set('currency', s.currency);
      history.replaceState(null, '', window.location.pathname + '?' + p.toString());
    }, 150);
  };

  // Восстанавливаем фильтры из URL при загрузке
  window._restoreFilterFromUrl = function() {
    if (!document.getElementById('page-catalog')) return;
    var params = new URLSearchParams(window.location.search);
    var hasFilter = FILTER_PARAMS.some(function(k) { return params.has(k); });
    if (!hasFilter) return;

    // deal — без вызова setDealType чтобы не триггерить filterCatalog раньше времени
    var deal = params.get('deal') || 'buy';
    currentDealType = deal;
    var btnBuy  = document.getElementById('dealBtnBuy');
    var btnRent = document.getElementById('dealBtnRent');
    if (btnBuy)  btnBuy.classList.toggle('active',  deal === 'buy');
    if (btnRent) btnRent.classList.toggle('active', deal === 'rent');
    if (typeof updateStatusOptions === 'function') updateStatusOptions(deal);

    // currency
    var currency = params.get('currency');
    if (currency && typeof CURRENCY_RATES !== 'undefined' && CURRENCY_RATES[currency]) {
      currentCurrency = currency;
      localStorage.setItem('grre_currency', currency);
      document.querySelectorAll('.currency-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.cur === currency);
      });
      var priceLabel = document.getElementById('priceCurrencyLabel');
      var SYMBOLS = { USD:'$', GEL:'₾', EUR:'€' };
      if (priceLabel) priceLabel.textContent = 'Цена, ' + (SYMBOLS[currency] || '$');
    }

    // country
    var countryEl = document.querySelector('#page-catalog .filter-field--country .filter-select');
    var country = params.get('country') || 'all';
    if (countryEl) {
      countryEl.value = country;
      if (typeof updateCityOptions === 'function') updateCityOptions(country);
    }

    // city
    var cityEl = document.getElementById('citySelect');
    if (cityEl && params.get('city')) cityEl.value = params.get('city');

    // status
    var statusEl = document.getElementById('statusSelect');
    if (statusEl && params.get('status')) statusEl.value = params.get('status');

    // type
    var typeEl = document.getElementById('typeSelect');
    if (typeEl && params.get('type')) typeEl.value = params.get('type');

    // price & area
    ['priceMin','priceMax','areaMin','areaMax'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && params.get(id)) el.value = params.get(id);
    });

    // rooms
    var roomsVal = params.get('rooms');
    if (roomsVal) {
      var roomsEl = document.getElementById('roomsVal');
      if (roomsEl) roomsEl.value = roomsVal;
      document.querySelectorAll('.rooms-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.val === roomsVal);
      });
    }
  };

})();


})();





