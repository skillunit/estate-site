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
  const areaMin  = areaMinEl  && areaMinEl.value  ? parseFloat(areaMinEl.value)  || 0        : 0;
  const areaMax  = areaMaxEl  && areaMaxEl.value  ? parseFloat(areaMaxEl.value)  || Infinity : Infinity;

  const catalogFilterBar = document.querySelector('#page-catalog .filter-bar .filter-field--country .filter-select');
  const country = catalogFilterBar ? catalogFilterBar.value : 'all';

  if (country !== _prevCountry) {
    _prevCountry = country;
    updateCityOptions(country);
    if (cityEl) cityEl.value = 'all';
  }

  const city = cityEl ? cityEl.value : 'all';
  const extra = { priceMin, priceMax, areaMin, areaMax, rooms };
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
function openSharePopup() {
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
  const url = window.location.href;
  const title = document.querySelector('.detail-title') ? document.querySelector('.detail-title').textContent : 'Georgia Real Estate';
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

function setDealType(type) {
  currentDealType = type;
  document.getElementById('dealBtnBuy').classList.toggle('active', type === 'buy');
  document.getElementById('dealBtnRent').classList.toggle('active', type === 'rent');
  filterCatalog();
}

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
})();
