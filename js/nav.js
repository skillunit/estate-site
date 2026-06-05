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
  document.getElementById('videoOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideo(e) {
  if (!e || e.target === document.getElementById('videoOverlay')) {
    document.getElementById('videoOverlay').classList.remove('open');
    document.getElementById('videoIframe').src = '';
    document.body.style.overflow = '';
  }
}

// ── LIGHTBOX ──
let lbImgs = [], lbIdx = 0;
function openLightbox(imgs, idx) {
  lbImgs = imgs; lbIdx = idx;
  document.getElementById('lbImg').src = imgs[idx];
  document.getElementById('lbCounter').textContent = (idx+1) + ' / ' + imgs.length;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbImgs.length) % lbImgs.length;
  document.getElementById('lbImg').src = lbImgs[lbIdx];
  document.getElementById('lbCounter').textContent = (lbIdx+1) + ' / ' + lbImgs.length;
}

// ── FORM ──
function submitContact(e) {
  e.preventDefault ? e.preventDefault() : null;
  document.getElementById('formSuccess').style.display = 'block';
}

// ── KEY EVENTS ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeVideo(); closeContactPopup(); }
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

