/* ═══════════════════════════════════
   HISTORY — Georgia Real Estate
   Tracks viewed properties per user
═══════════════════════════════════ */

const HIST_KEY = 'gre_history';   // { email: [ {id, ts}, ... ] }
const HIST_MAX = 50;

function getHistMap() {
  try { return JSON.parse(localStorage.getItem(HIST_KEY)) || {}; } catch { return {}; }
}
function saveHistMap(m) { localStorage.setItem(HIST_KEY, JSON.stringify(m)); }

/* Record a view — called from catalog.js showDetail */
function trackHistory(id) {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  const ts = Date.now();

  // Always update anonymous recent (for homepage widget, max 4)
  let anon = [];
  try { anon = JSON.parse(localStorage.getItem('grre_recent') || '[]'); } catch {}
  anon = anon.filter(x => x !== id);
  anon.unshift(id);
  localStorage.setItem('grre_recent', JSON.stringify(anon.slice(0, 4)));

  // If logged in — track in full per-user history
  if (!u) return;
  const m = getHistMap();
  if (!m[u.email]) m[u.email] = [];
  // Remove if already exists, then prepend
  m[u.email] = m[u.email].filter(x => x.id !== id);
  m[u.email].unshift({ id, ts });
  m[u.email] = m[u.email].slice(0, HIST_MAX);
  saveHistMap(m);
}

function getHistoryList() {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return [];
  const m = getHistMap();
  return m[u.email] || [];
}

function getHistoryCount() { return getHistoryList().length; }

function clearHistory() {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return;
  const m = getHistMap();
  m[u.email] = [];
  saveHistMap(m);
}

/* ── Patch showDetail in catalog.js to call trackHistory ── */
document.addEventListener('DOMContentLoaded', () => {
  const orig = window.showDetail;
  if (typeof orig === 'function') {
    window.showDetail = function(id) {
      orig(id);
      trackHistory(id);
    };
  }
});

/* ════════════════════════════════════
   HISTORY PAGE RENDERER (history.html)
════════════════════════════════════ */
function renderHistoryPage() {
  const grid    = document.getElementById('histGrid');
  const emptyEl = document.getElementById('histEmpty');
  const countEl = document.getElementById('histCount');
  const sortSel = document.getElementById('histSort');
  const toolbar = document.getElementById('histToolbar');
  if (!grid) return;

  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;

  if (!u) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="hist-empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="hist-empty-title">Войдите, чтобы видеть историю</div>
        <div class="hist-empty-sub">История просмотров сохраняется для авторизованных пользователей</div>
        <button class="btn btn-primary" onclick="Auth.openAuthModal()" style="margin-top:20px;">Войти / Зарегистрироваться</button>`;
    }
    if (countEl) countEl.textContent = '0 объектов';
    if (toolbar) toolbar.style.display = 'none';
    return;
  }

  if (toolbar) toolbar.style.display = '';

  let entries = getHistoryList(); // [{id, ts}, ...]
  const sort = sortSel ? sortSel.value : 'newest';
  if (sort === 'newest')      entries = [...entries].sort((a, b) => b.ts - a.ts);
  else if (sort === 'oldest') entries = [...entries].sort((a, b) => a.ts - b.ts);
  else if (sort === 'price-asc')  entries = [...entries].sort((a, b) => histPriceNum(a.id) - histPriceNum(b.id));
  else if (sort === 'price-desc') entries = [...entries].sort((a, b) => histPriceNum(b.id) - histPriceNum(a.id));

  const props = entries
    .map(e => {
      const p = typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(x => x.id === e.id) : null;
      return p ? { ...p, viewedAt: e.ts } : null;
    })
    .filter(Boolean);

  const n = props.length;
  if (countEl) countEl.textContent = `${n} ${histPlural(n)}`;

  if (!n) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="hist-empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="hist-empty-title">История просмотров пуста</div>
        <div class="hist-empty-sub">Открывайте объекты — они будут отображаться здесь</div>
        <a href="index.html" class="btn btn-primary" style="margin-top:20px;">Перейти к объектам</a>`;
    }
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  grid.innerHTML = props.map(p => {
    const imgs = p.imgs || [p.img];
    const badge = histGetBadge(p);
    const favFilled = typeof isFavById === 'function' ? isFavById(p.id) : false;
    const favIcon = favFilled
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="#C0392B" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

    return `
    <div class="catalog-card hist-card" data-id="${p.id}" onclick="window.location.href='index.html?prop=${p.id}'" style="cursor:pointer;">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${imgs[0]}" alt="${p.name}" loading="lazy">
          ${imgs.length > 1 ? `
          <button class="card-slider-btn card-slider-prev" onclick="histCardSlide(event,this,-1)" aria-label="Назад">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="histCardSlide(event,this,1)" aria-label="Вперёд">&#8250;</button>
          <div class="card-slider-dots">${imgs.map((_,i)=>`<span class="card-slider-dot${i===0?' active':''}"></span>`).join('')}</div>` : ''}
        </div>
        <span class="prop-badge ${badge.cls}" style="position:absolute;top:12px;left:12px;z-index:2;">${badge.text}</span>
        ${p.top ? '<span class="top-label" style="z-index:2;">★ ТОП</span>' : ''}
        <!-- Fav button on photo -->
        <button class="card-fav-inline${favFilled ? ' fav-active' : ''}" data-fav-id="${p.id}"
          onclick="event.stopPropagation(); if(typeof handleFavClick==='function') handleFavClick(event,'${p.id}')"
          aria-label="В избранное">${favIcon}</button>
      </div>
      <div class="catalog-card-body">
        <div class="hist-viewed-at">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Просмотрено ${histFormatDate(p.viewedAt)}
        </div>
        <div class="catalog-city">${p.cityLabel}</div>
        <div class="catalog-name">${p.name}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${p.price}</span>
            ${p.area ? `<span class="catalog-price-sqm" style="font-size:0.72rem;color:var(--gray-500);">${histFormatSqm(p)}</span>` : ''}
          </div>
          ${p.oldPrice ? `<div class="catalog-price-old">${p.oldPrice}</div>` : ''}
        </div>
        <div class="catalog-specs">
          <span class="spec-item"><strong>${p.area}</strong> м²</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.rooms}</strong> спал.</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.floor}</strong> эт.</span>
          ${p.year ? `<span class="spec-sep">·</span><span class="spec-item"><strong>${p.year}</strong> г.</span>` : ''}
        </div>
        <div class="hist-card-actions">
          <a class="catalog-detail-link" href="index.html?prop=${p.id}" onclick="event.stopPropagation()">Подробнее →</a>
          <button class="fav-delete-btn" onclick="removeHistItem(event,'${p.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            Удалить
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function removeHistItem(e, id) {
  e.stopPropagation();
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return;
  const m = getHistMap();
  if (m[u.email]) m[u.email] = m[u.email].filter(x => x.id !== id);
  saveHistMap(m);
  renderHistoryPage();
}

function histCardSlide(e, btn, dir) {
  e.stopPropagation();
  const slider = btn.closest('.card-slider');
  if (!slider) return;
  const imgs = JSON.parse(slider.dataset.imgs || '[]');
  let idx = (parseInt(slider.dataset.idx) || 0) + dir;
  idx = (idx + imgs.length) % imgs.length;
  slider.dataset.idx = idx;
  const img = slider.querySelector('.card-slider-img');
  if (img) img.src = imgs[idx];
  slider.querySelectorAll('.card-slider-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ── Helpers ── */
function histPriceNum(id) {
  const p = typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(x => x.id === id) : null;
  return p ? (parseInt((p.price || '0').replace(/[^0-9]/g, '')) || 0) : 0;
}
function histPlural(n) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return `${n} объект`;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return `${n} объекта`;
  return `${n} объектов`;
}
function histFormatDate(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  const now = new Date();
  const diffMs = now - d;
  const diffMin = Math.floor(diffMs / 60000);
  const diffH = Math.floor(diffMs / 3600000);
  const diffD = Math.floor(diffMs / 86400000);
  if (diffMin < 1)  return 'только что';
  if (diffMin < 60) return `${diffMin} мин. назад`;
  if (diffH < 24)   return `${diffH} ч. назад`;
  if (diffD === 1)  return 'вчера';
  if (diffD < 7)    return `${diffD} дн. назад`;
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}
function histGetBadge(p) {
  if (typeof getPropBadge === 'function') return getPropBadge(p);
  const map = { ready: { cls:'badge-ready', text:'Сдан' }, construction: { cls:'badge-build', text:'Строится' }, sale: { cls:'badge-sale', text:'Акция' } };
  return map[p.status] || { cls:'badge-ready', text:'Сдан' };
}
function histFormatSqm(p) {
  if (typeof formatSqm === 'function') return formatSqm(p);
  const num = parseInt((p.price || '').replace(/[^0-9]/g, ''));
  const area = parseFloat(p.area);
  if (!num || !area) return '';
  return `$${Math.round(num / area).toLocaleString('en-US')}/м²`;
}
