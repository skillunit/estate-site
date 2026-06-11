/* ═══════════════════════════════════
   FAVORITES — Georgia Real Estate
═══════════════════════════════════ */

/* ── Storage ── */
const FAVS_KEY = 'gre_favorites';

function getFavsMap() {
  try { return JSON.parse(localStorage.getItem(FAVS_KEY)) || {}; } catch { return {}; }
}
function saveFavsMap(m) { localStorage.setItem(FAVS_KEY, JSON.stringify(m)); }

function isFavById(id) {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return false;
  const m = getFavsMap();
  return !!(m[u.email] && m[u.email][id]);
}

function toggleFav(id) {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) { if (typeof Auth !== 'undefined') Auth.openAuthModal(); return false; }
  const m = getFavsMap();
  if (!m[u.email]) m[u.email] = {};
  const already = !!m[u.email][id];
  if (already) { delete m[u.email][id]; }
  else { m[u.email][id] = Date.now(); }
  saveFavsMap(m);
  return !already;
}

function getFavsList() {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return [];
  const m = getFavsMap();
  const userFavs = m[u.email] || {};
  return Object.entries(userFavs).sort((a, b) => b[1] - a[1]).map(([id]) => id);
}

function getFavsCount() { return getFavsList().length; }

/* ── SVG icons ── */
function heartSVG(filled) {
  return filled
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="#C0392B" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

/* ── Click handler (called from catalog.js card templates) ── */
function handleFavClick(e, id) {
  e.stopPropagation();
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) { if (typeof Auth !== 'undefined') Auth.openAuthModal(); return; }

  const added = toggleFav(id);

  // Update all inline card buttons
  document.querySelectorAll(`.card-fav-inline[data-fav-id="${id}"]`).forEach(btn => {
    btn.innerHTML = heartSVG(added);
    btn.classList.toggle('fav-active', added);
    btn.classList.add('fav-pop');
    btn.addEventListener('animationend', () => btn.classList.remove('fav-pop'), { once: true });
  });

  // Update detail page button
  const detailBtn = document.getElementById('detailFavBtn');
  if (detailBtn && detailBtn.dataset.favId === id) {
    detailBtn.innerHTML = heartSVG(added) + `<span>${added ? 'В избранном' : 'В избранное'}</span>`;
    detailBtn.classList.toggle('fav-active', added);
  }

  showFavToast(added);
  updateFavBadge();
}

/* ── Refresh all buttons after login/logout ── */
function refreshAllFavBtns() {
  document.querySelectorAll('.card-fav-inline[data-fav-id]').forEach(btn => {
    const filled = isFavById(btn.dataset.favId);
    btn.innerHTML = heartSVG(filled);
    btn.classList.toggle('fav-active', filled);
  });
  const detailBtn = document.getElementById('detailFavBtn');
  if (detailBtn && detailBtn.dataset.favId) {
    const filled = isFavById(detailBtn.dataset.favId);
    detailBtn.innerHTML = heartSVG(filled) + `<span>${filled ? 'В избранном' : 'В избранное'}</span>`;
    detailBtn.classList.toggle('fav-active', filled);
  }
  updateFavBadge();
}

/* ── Toast ── */
function showFavToast(added) {
  const existing = document.querySelector('.fav-toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'fav-toast';
  if (added) {
    t.innerHTML = `${heartSVG(true)} <span>Добавлено в избранное · <a href="favorites.html" style="color:#fff;text-decoration:underline;pointer-events:all;">Открыть</a></span>`;
  } else {
    t.innerHTML = `${heartSVG(false)} <span>Удалено из избранного</span>`;
  }
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ── Badge counter in dropdown ── */
function updateFavBadge() {
  const badge = document.getElementById('favCountBadge');
  if (!badge) return;
  const count = getFavsCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ── Wire up detail page fav button after showDetail() ── */
document.addEventListener('DOMContentLoaded', () => {
  updateFavBadge();

  // Patch showDetail to update the detail fav button each time
  const origShowDetail = window.showDetail;
  if (typeof origShowDetail === 'function') {
    window.showDetail = function(id) {
      origShowDetail(id);
      setTimeout(() => {
        const btn = document.getElementById('detailFavBtn');
        if (btn) {
          const filled = isFavById(id);
          btn.innerHTML = heartSVG(filled) + `<span>${filled ? 'В избранном' : 'В избранное'}</span>`;
          btn.classList.toggle('fav-active', filled);
          btn.dataset.favId = id;
          btn.onclick = (e) => { e.stopPropagation(); handleFavClick(e, id); };
        }
        updateFavBadge();
      }, 80);
    };
  }
});

/* ════════════════════════════════════
   FAVORITES PAGE (favorites.html)
════════════════════════════════════ */
function renderFavoritesPage() {
  const grid    = document.getElementById('favGrid');
  const emptyEl = document.getElementById('favEmpty');
  const countEl = document.getElementById('favCount');
  const sortSel = document.getElementById('favSort');
  const toolbar = document.getElementById('favToolbar');
  if (!grid) return;

  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;

  if (!u) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="fav-empty-icon">${heartSVG(false)}</div>
        <div class="fav-empty-title">Войдите, чтобы видеть избранное</div>
        <div class="fav-empty-sub">Сохраняйте понравившиеся объекты и возвращайтесь к ним в любое время</div>
        <button class="btn btn-primary" onclick="Auth.openAuthModal()" style="margin-top:20px;">Войти / Зарегистрироваться</button>`;
    }
    if (countEl) countEl.textContent = '0 объектов';
    if (toolbar) toolbar.style.display = 'none';
    return;
  }

  if (toolbar) toolbar.style.display = '';

  const m = getFavsMap();
  const userFavs = m[u.email] || {};
  const sort = sortSel ? sortSel.value : 'newest';

  let entries = Object.entries(userFavs);
  if (sort === 'newest')     entries.sort((a, b) => b[1] - a[1]);
  else if (sort === 'oldest') entries.sort((a, b) => a[1] - b[1]);
  else if (sort === 'price-asc')  entries.sort((a, b) => priceNum(a[0]) - priceNum(b[0]));
  else if (sort === 'price-desc') entries.sort((a, b) => priceNum(b[0]) - priceNum(a[0]));

  const props = entries
    .map(([id]) => typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(p => p.id === id) : null)
    .filter(Boolean);

  const n = props.length;
  if (countEl) countEl.textContent = `${n} ${plural(n, 'объект', 'объекта', 'объектов')}`;

  if (!n) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="fav-empty-icon">${heartSVG(false)}</div>
        <div class="fav-empty-title">В избранном пока пусто</div>
        <div class="fav-empty-sub">Нажимайте ❤ на карточках объектов — они сохранятся здесь</div>
        <a href="index.html" class="btn btn-primary" style="margin-top:20px;">Перейти к объектам</a>`;
    }
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  grid.innerHTML = props.map(p => {
    const imgs = p.imgs || [p.img];
    const badge = getPropBadgeLocal(p);
    return `
    <div class="catalog-card fav-page-card" data-id="${p.id}" onclick="window.location.href='index.html?prop=${p.id}'" style="cursor:pointer;">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${imgs[0]}" alt="${p.name}" loading="lazy">
          ${imgs.length > 1 ? `
          <button class="card-slider-btn card-slider-prev" onclick="favCardSlide(event,this,-1)" aria-label="Назад">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="favCardSlide(event,this,1)" aria-label="Вперёд">&#8250;</button>
          <div class="card-slider-dots">${imgs.map((_,i)=>`<span class="card-slider-dot${i===0?' active':''}"></span>`).join('')}</div>` : ''}
        </div>
        <span class="prop-badge ${badge.cls}" style="position:absolute;top:12px;left:12px;z-index:2;">${badge.text}</span>
        ${p.top ? '<span class="top-label" style="z-index:2;">★ ТОП</span>' : ''}
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city">${p.cityLabel}</div>
        <div class="catalog-name-row">
          <div class="catalog-name">${p.name}</div>
          <button class="card-fav-inline fav-active" data-fav-id="${p.id}"
            onclick="removeFavFromPage(event,'${p.id}')" aria-label="Убрать из избранного">
            ${heartSVG(true)}
          </button>
        </div>
        <div class="fav-card-added">Добавлено ${formatFavDate(userFavs[p.id])}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${p.price}</span>
            ${p.area ? `<span class="catalog-price-sqm" style="font-size:0.72rem;color:var(--gray-500);">${formatSqmLocal(p)}</span>` : ''}
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
        <div class="fav-card-actions">
          <a class="catalog-detail-link" href="index.html?prop=${p.id}" onclick="event.stopPropagation()">Подробнее →</a>
          <button class="fav-delete-btn" onclick="removeFavFromPage(event,'${p.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            Удалить
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function removeFavFromPage(e, id) {
  e.stopPropagation();
  toggleFav(id);
  showFavToast(false);
  renderFavoritesPage();
  updateFavBadge();
}

function favCardSlide(e, btn, dir) {
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
function priceNum(id) {
  const p = typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(x => x.id === id) : null;
  return p ? (parseInt((p.price || '0').replace(/[^0-9]/g, '')) || 0) : 0;
}
function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return `${n} ${one}`;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return `${n} ${few}`;
  return `${n} ${many}`;
}
function formatFavDate(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
}
function getPropBadgeLocal(p) {
  if (typeof getPropBadge === 'function') return getPropBadge(p);
  const map = { ready: { cls:'badge-ready', text:'Сдан' }, construction: { cls:'badge-build', text:'Строится' }, sale: { cls:'badge-sale', text:'Акция' } };
  return map[p.status] || { cls:'badge-ready', text:'Сдан' };
}
function formatSqmLocal(p) {
  if (typeof formatSqm === 'function') return formatSqm(p);
  const num = parseInt((p.price||'').replace(/[^0-9]/g,''));
  const area = parseFloat(p.area);
  if (!num || !area) return '';
  return `$${Math.round(num/area).toLocaleString('en-US')}/м²`;
}

/* ── Deep link: index.html?prop=id ── */
(function() {
  const params = new URLSearchParams(window.location.search);
  const propId = params.get('prop');
  if (propId) {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => { if (typeof showDetail === 'function') showDetail(propId); }, 300);
    });
  }
})();
