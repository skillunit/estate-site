// ── NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.header-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === id);
  });
  window.scrollTo({top:0, behavior:'instant'});
  document.getElementById('mainNav').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
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
function filterCatalog() {
  const cityEl   = document.getElementById('citySelect');
  const statusEl = document.getElementById('statusSelect');
  const city   = cityEl ? cityEl.value : 'all';
  const status = statusEl ? statusEl.value : 'all';
  const catalogFilterBar = document.querySelector('#page-catalog .filter-bar .filter-field--country .filter-select');
  const country = catalogFilterBar ? catalogFilterBar.value : 'all';

  renderCatalogGrid(country, city, status);
  renderMapMarkers(country, city, status);
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
  if (e.target.classList.contains('blog-filter-btn')) {
    document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  }
});

// Blog category filter
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.blog-filter-btn');
  if (!btn) return;

  // Active state
  btn.closest('.blog-filters').querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const selected = btn.textContent.trim();
  const grid = btn.closest('.blog-section-inner').querySelector('.blog-grid');
  const cards = grid.querySelectorAll('.blog-card');

  cards.forEach(card => {
    const match = selected === 'Все' || card.dataset.category === selected;
    card.style.display = match ? '' : 'none';
  });

  // Featured card: remove/restore wide layout when hidden
  const featured = grid.querySelector('.blog-featured');
  if (featured) {
    if (featured.style.display === 'none') {
      featured.classList.remove('blog-featured');
      featured.dataset.wasFeatured = '1';
    } else if (featured.dataset.wasFeatured) {
      featured.classList.add('blog-featured');
      delete featured.dataset.wasFeatured;
    }
  }
});
