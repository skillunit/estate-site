/* ═══════════════════════════════════
   FAVORITES — Georgia Real Estate
   Depends on: auth.js (Auth), catalog.js (MAP_PROPERTIES)
═══════════════════════════════════ */

/* ── Storage helpers ── */
const FAVS_KEY = 'gre_favorites'; // { id: timestamp }

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
  if (!u) {
    if (typeof Auth !== 'undefined') Auth.openAuthModal();
    return false;
  }
  const m = getFavsMap();
  if (!m[u.email]) m[u.email] = {};
  const already = !!m[u.email][id];
  if (already) {
    delete m[u.email][id];
  } else {
    m[u.email][id] = Date.now();
  }
  saveFavsMap(m);
  return !already; // true = added
}

function getFavsList() {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) return [];
  const m = getFavsMap();
  const userFavs = m[u.email] || {};
  // Return array sorted by timestamp desc (last added first)
  return Object.entries(userFavs)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);
}

function getFavsCount() { return getFavsList().length; }

/* ── Heart SVG ── */
function heartSVG(filled) {
  return filled
    ? `<svg width="17" height="17" viewBox="0 0 24 24" fill="#C0392B" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

/* ── Build fav button HTML for a card ── */
function favBtnHTML(id) {
  const filled = isFavById(id);
  return `<button class="fav-btn${filled ? ' fav-active' : ''}" data-fav-id="${id}" onclick="handleFavClick(event,'${id}')" aria-label="${filled ? 'Убрать из избранного' : 'В избранное'}" title="${filled ? 'Убрать из избранного' : 'В избранное'}">${heartSVG(filled)}</button>`;
}

/* ── Handle click on any fav button ── */
function handleFavClick(e, id) {
  e.stopPropagation();
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) {
    if (typeof Auth !== 'undefined') Auth.openAuthModal();
    return;
  }
  const added = toggleFav(id);
  // Update ALL matching buttons on the page
  document.querySelectorAll(`.fav-btn[data-fav-id="${id}"]`).forEach(btn => {
    btn.innerHTML = heartSVG(added);
    btn.title = added ? 'Убрать из избранного' : 'В избранное';
    btn.classList.toggle('fav-active', added);
  });
  // Update detail page button too
  const detailBtn = document.getElementById('detailFavBtn');
  if (detailBtn && detailBtn.dataset.favId === id) {
    detailBtn.innerHTML = heartSVG(added) + `<span>${added ? 'В избранном' : 'В избранное'}</span>`;
    detailBtn.classList.toggle('fav-active', added);
    detailBtn.dataset.favId = id;
  }
  showFavToast(added);
  updateFavBadge();
}

/* ── Toast notification ── */
function showFavToast(added) {
  const existing = document.querySelector('.fav-toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'fav-toast';
  if (added) {
    t.innerHTML = `${heartSVG(true)} <span>Добавлено в избранное · <a href="favorites.html" style="color:inherit;text-decoration:underline;">Открыть</a></span>`;
  } else {
    t.innerHTML = `${heartSVG(false)} <span>Удалено из избранного</span>`;
  }
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ── Update fav badge counter on auth dropdown ── */
function updateFavBadge() {
  const badge = document.getElementById('favCountBadge');
  if (!badge) return;
  const count = getFavsCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ── Inject fav button into all catalog-card img-wraps ── */
function injectFavBtns() {
  document.querySelectorAll('.catalog-card[data-id]').forEach(card => {
    const id = card.dataset.id;
    if (!id) return;
    const wrap = card.querySelector('.catalog-card-img-wrap');
    if (!wrap || wrap.querySelector('.fav-btn')) return;
    wrap.insertAdjacentHTML('beforeend', favBtnHTML(id));
  });
}

/* ── Refresh all fav buttons (after login/logout) ── */
function refreshAllFavBtns() {
  document.querySelectorAll('.fav-btn[data-fav-id]').forEach(btn => {
    const id = btn.dataset.favId;
    const filled = isFavById(id);
    btn.innerHTML = heartSVG(filled);
    btn.classList.toggle('fav-active', filled);
  });
  // Also refresh detail btn if visible
  const detailBtn = document.getElementById('detailFavBtn');
  if (detailBtn && detailBtn.dataset.favId) {
    const id = detailBtn.dataset.favId;
    const filled = isFavById(id);
    detailBtn.innerHTML = heartSVG(filled) + `<span>${filled ? 'В избранном' : 'В избранное'}</span>`;
    detailBtn.classList.toggle('fav-active', filled);
  }
  updateFavBadge();
}

/* ── Patch catalog.js renderCatalogGrid to add fav buttons ──
   We override by observing DOM mutations on catalog-grid */
function observeCatalogGrid() {
  const target = document.getElementById('catalogGrid');
  if (!target) return;
  const obs = new MutationObserver(() => {
    injectFavBtns();
  });
  obs.observe(target, { childList: true });
}

/* ── Also patch slider renders by wrapping after a short delay ── */
function patchSliderRenders() {
  // After any showDetail / renderRelated / renderFeatured call,
  // new cards may appear — observe all slider tracks
  const sliderIds = ['featuredGrid','recentlyViewedGrid','relatedGrid'];
  sliderIds.forEach(sid => {
    const el = document.getElementById(sid);
    if (!el) return;
    const obs = new MutationObserver(() => { setTimeout(injectFavBtns, 50); });
    obs.observe(el, { childList: true });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  // Run after a brief delay so catalog.js renders first
  setTimeout(() => {
    injectFavBtns();
    observeCatalogGrid();
    patchSliderRenders();
    updateFavBadge();
  }, 200);

  // Re-inject whenever showDetail is called
  const origShowDetail = window.showDetail;
  if (origShowDetail) {
    window.showDetail = function(id) {
      origShowDetail(id);
      setTimeout(() => {
        injectFavBtns();
        // update detail page fav button
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

/* ── Favorites page renderer (used on favorites.html) ── */
function renderFavoritesPage() {
  const grid = document.getElementById('favGrid');
  const emptyEl = document.getElementById('favEmpty');
  const countEl = document.getElementById('favCount');
  const sortSel = document.getElementById('favSort');
  if (!grid) return;

  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) {
    // Show login prompt
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="fav-empty-icon">${heartSVG(false)}</div>
        <div class="fav-empty-title">Войдите, чтобы видеть избранное</div>
        <div class="fav-empty-sub">Сохраняйте понравившиеся объекты и возвращайтесь к ним в любое время</div>
        <button class="btn btn-primary" onclick="Auth.openAuthModal()" style="margin-top:20px;">Войти / Зарегистрироваться</button>
      `;
    }
    if (countEl) countEl.textContent = '0 объектов';
    return;
  }

  const m = getFavsMap();
  const userFavs = m[u.email] || {};

  // Get sort order
  const sort = sortSel ? sortSel.value : 'newest';
  let entries = Object.entries(userFavs); // [[id, ts], ...]
  if (sort === 'newest')   entries.sort((a, b) => b[1] - a[1]);
  if (sort === 'oldest')   entries.sort((a, b) => a[1] - b[1]);
  if (sort === 'price-asc')  entries.sort((a, b) => priceNum(a[0]) - priceNum(b[0]));
  if (sort === 'price-desc') entries.sort((a, b) => priceNum(b[0]) - priceNum(a[0]));

  const ids = entries.map(([id]) => id);
  const props = ids.map(id => (typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(p => p.id === id) : null)).filter(Boolean);

  if (countEl) countEl.textContent = `${props.length} ${plural(props.length, 'объект', 'объекта', 'объектов')}`;

  if (!props.length) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div class="fav-empty-icon">${heartSVG(false)}</div>
        <div class="fav-empty-title">В избранном пока пусто</div>
        <div class="fav-empty-sub">Нажимайте ❤ на карточках объектов — они сохранятся здесь</div>
        <a href="projects.html" class="btn btn-primary" style="margin-top:20px;">Перейти к объектам</a>
      `;
    }
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  grid.innerHTML = props.map(p => {
    const imgs = p.imgs || [p.img];
    const filled = true; // all items on this page are favorites
    const badgeInfo = getPropBadgeLocal(p);
    return `
    <div class="catalog-card fav-card" data-id="${p.id}" onclick="window.location.href='index.html?prop=${p.id}'" style="cursor:pointer;">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${imgs[0]}" alt="${p.name}">
          ${imgs.length > 1 ? `
          <button class="card-slider-btn card-slider-prev" onclick="favCardSlide(event,this,-1)" aria-label="Назад">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="favCardSlide(event,this,1)" aria-label="Вперёд">&#8250;</button>
          <div class="card-slider-dots">${imgs.map((_,i) => `<span class="card-slider-dot${i===0?' active':''}"></span>`).join('')}</div>
          ` : ''}
        </div>
        <span class="prop-badge ${badgeInfo.cls}" style="position:absolute;top:12px;left:12px;z-index:2;">${badgeInfo.text}</span>
        ${p.top ? '<span class="top-label" style="z-index:2;">★ ТОП</span>' : ''}
        <button class="fav-btn fav-active fav-remove-btn" data-fav-id="${p.id}" onclick="removeFavFromPage(event,'${p.id}')" aria-label="Убрать из избранного" title="Убрать из избранного">${heartSVG(true)}</button>
      </div>
      <div class="catalog-card-body">
        <div class="fav-card-added">Добавлено ${formatFavDate(userFavs[p.id])}</div>
        <div class="catalog-city">${p.cityLabel}</div>
        <div class="catalog-name">${p.name}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${p.price}</span>
            ${p.area ? `<span class="catalog-price-sqm" style="margin-left:8px;font-size:0.78rem;color:var(--gray-500);">${formatSqmLocal(p)}</span>` : ''}
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
          <button class="fav-delete-btn" onclick="removeFavFromPage(event,'${p.id}')" title="Удалить из избранного">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            Удалить
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function removeFavFromPage(e, id) {
  e.stopPropagation();
  toggleFav(id); // removes
  showFavToast(false);
  renderFavoritesPage();
  updateFavBadge();
}

function favCardSlide(e, btn, dir) {
  e.stopPropagation();
  const slider = btn.closest('.card-slider');
  if (!slider) return;
  const imgs = JSON.parse(slider.dataset.imgs || '[]');
  let idx = parseInt(slider.dataset.idx) || 0;
  idx = (idx + dir + imgs.length) % imgs.length;
  slider.dataset.idx = idx;
  const img = slider.querySelector('.card-slider-img');
  if (img) img.src = imgs[idx];
  slider.querySelectorAll('.card-slider-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ── Helpers ── */
function priceNum(id) {
  const p = typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(x => x.id === id) : null;
  if (!p) return 0;
  return parseInt((p.price || '0').replace(/[^0-9]/g, '')) || 0;
}

function plural(n, one, few, many) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return `${n} ${few}`;
  return `${n} ${many}`;
}

function formatFavDate(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
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

/* ── Handle ?prop=id deep link on index.html ── */
(function checkPropParam() {
  if (!window.location.search) return;
  const params = new URLSearchParams(window.location.search);
  const propId = params.get('prop');
  if (propId && typeof showDetail === 'function') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => showDetail(propId), 300);
    });
  }
})();
