/* ═══════════════════════════════════
   COMPARE — Georgia Real Estate
   Лимит: 4 объекта
═══════════════════════════════════ */

const COMPARE_KEY = 'gre_compare';
const COMPARE_MAX = 4;

function _cmpT(key, fallback) {
  return (typeof window.GRE_T === 'function') ? window.GRE_T(key, {}) : fallback;
}

/* ── Storage ── */
function getCompareList() {
  try { return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; } catch { return []; }
}
function saveCompareList(list) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(list));
}
function isInCompare(id) { return getCompareList().includes(id); }
function getCompareCount() { return getCompareList().length; }

/* ── SVG icon (scales/balance) ── */
function compareSVG(active) {
  const color = active ? '#C0392B' : 'currentColor';
  const fill  = active ? '#C0392B' : 'none';
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 9l4-4 4 4"/><path d="M17 15l4 4-4 4"/><line x1="7" y1="5" x2="7" y2="19"/><line x1="17" y1="5" x2="17" y2="19"/>
  </svg>`;
}

/* ── Toggle ── */
function toggleCompare(id) {
  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) { if (typeof Auth !== 'undefined') Auth.openAuthModal(); return; }

  let list = getCompareList();
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    saveCompareList(list);
    refreshAllCompareBtns();
    updateCompareBadge();
    showCompareToast(false);
    return;
  }
  if (list.length >= COMPARE_MAX) {
    showCompareLimitPopup();
    return;
  }
  list.push(id);
  saveCompareList(list);
  refreshAllCompareBtns();
  updateCompareBadge();
  showCompareToast(true);
}

/* ── Button HTML for card ── */
function compareCardBtn(id) {
  const active = isInCompare(id);
  return `<button class="card-compare-inline${active ? ' compare-active' : ''}" data-compare-id="${id}"
    onclick="event.stopPropagation();toggleCompare('${id}')"
    aria-label="Сравнить">${compareSVG(active)}</button>`;
}

/* ── Refresh all buttons ── */
function refreshAllCompareBtns() {
  document.querySelectorAll('.card-compare-inline[data-compare-id]').forEach(btn => {
    const active = isInCompare(btn.dataset.compareId);
    btn.innerHTML = compareSVG(active);
    btn.classList.toggle('compare-active', active);
  });
  updateCompareBadge();
}

/* ── Badge in nav dropdown ── */
function updateCompareBadge() {
  const badge = document.getElementById('compareCountBadge');
  if (!badge) return;
  const count = getCompareCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ── Toast ── */
function showCompareToast(added) {
  const existing = document.querySelector('.compare-toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'compare-toast fav-toast';
  if (added) {
    const link = `<a href="compare.html" style="color:#fff;text-decoration:underline;">${_cmpT('compare.toast_link', 'Сравнить')}</a>`;
    t.innerHTML = `${compareSVG(true)} <span>${_cmpT('compare.toast_added', 'Добавлено в сравнение · {link}').replace('{link}', link)}</span>`;
  } else {
    t.innerHTML = `${compareSVG(false)} <span>${_cmpT('compare.toast_removed', 'Убрано из сравнения')}</span>`;
  }
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ── Limit popup ── */
function showCompareLimitPopup() {
  const existing = document.getElementById('compareLimitPopup');
  if (existing) { existing.style.display = 'flex'; return; }

  const popup = document.createElement('div');
  popup.id = 'compareLimitPopup';
  popup.className = 'cpopup-overlay';
  popup.style.cssText = 'display:flex;';
  popup.innerHTML = `
    <div class="cpopup" style="max-width:420px;text-align:center;padding:40px 32px;">
      <div style="font-size:2.5rem;margin-bottom:16px;">⚖️</div>
      <div class="cpopup-title" style="font-size:1.2rem;margin-bottom:12px;">
        ${_cmpT('compare.limit_title', 'Максимум 4 объекта')}
      </div>
      <p style="color:var(--gray-500);font-size:0.88rem;margin-bottom:24px;line-height:1.6;">
        ${_cmpT('compare.limit_text', 'Вы уже добавили 4 объекта для сравнения. Удалите один из списка, чтобы добавить новый.')}
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="compare.html" class="btn btn-red" style="min-width:140px;">
          ${_cmpT('compare.go_compare', 'Перейти к сравнению')}
        </a>
        <button class="btn btn-outline" onclick="document.getElementById('compareLimitPopup').style.display='none'" style="min-width:120px;">
          ${_cmpT('compare.close', 'Закрыть')}
        </button>
      </div>
    </div>`;
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.style.display = 'none';
  });
  document.body.appendChild(popup);
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCompareBadge();

  // Patch showDetail to add compare button in detail page
  const origShowDetail = window.showDetail;
  if (typeof origShowDetail === 'function') {
    window.showDetail = function(id) {
      origShowDetail(id);
      setTimeout(() => {
        updateCompareBadge();
        refreshAllCompareBtns();
      }, 80);
    };
  }
});

/* ════════════════════════════════════
   COMPARE PAGE (compare.html)
════════════════════════════════════ */
function renderComparePage() {
  const wrap = document.getElementById('compareWrap');
  const emptyEl = document.getElementById('compareEmpty');
  const countEl = document.getElementById('compareCount');
  if (!wrap) return;

  const u = typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  if (!u) {
    wrap.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div style="font-size:3rem;margin-bottom:16px;">⚖️</div>
        <div class="fav-empty-title">${_cmpT('compare.login_title', 'Войдите, чтобы сравнивать объекты')}</div>
        <div class="fav-empty-sub">${_cmpT('compare.login_sub', 'Добавляйте объекты через иконку ⚖ на карточке')}</div>
        <button class="btn btn-red" onclick="Auth.openAuthModal()" style="margin-top:20px;">${_cmpT('fav.login_or_register', 'Войти / Зарегистрироваться')}</button>`;
    }
    return;
  }

  const ids = getCompareList();
  if (countEl) countEl.textContent = `${ids.length} / ${COMPARE_MAX}`;

  if (!ids.length) {
    wrap.innerHTML = '';
    if (emptyEl) {
      emptyEl.style.display = '';
      emptyEl.innerHTML = `
        <div style="font-size:3rem;margin-bottom:16px;">⚖️</div>
        <div class="fav-empty-title">${_cmpT('compare.empty_title', 'Список сравнения пуст')}</div>
        <div class="fav-empty-sub">${_cmpT('compare.empty_sub', 'Нажмите ⚖ на карточке объекта, чтобы добавить его в сравнение')}</div>
        <a href="projects.html" class="btn btn-red" style="margin-top:20px;">${_cmpT('fav.browse_properties', 'Перейти к объектам')}</a>`;
    }
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  const props = ids
    .map(id => typeof MAP_PROPERTIES !== 'undefined' ? MAP_PROPERTIES.find(p => p.id === id) : null)
    .filter(Boolean);

  if (!props.length) return;

  // Rows to compare
  const rows = [
    { key: 'photo',    label: _cmpT('compare.row_photo',    'Фото'),               fn: p => `<img src="${(p.imgs||[p.img])[0]}" style="width:100%;height:160px;object-fit:cover;border-radius:8px;cursor:pointer;" onclick="window.location.href='index.html?prop=${p.id}'" loading="lazy">` },
    { key: 'price',    label: _cmpT('compare.row_price',    'Цена'),               fn: p => `<strong>${typeof formatPrice==='function'?formatPrice(p.price):p.price}</strong>` },
    { key: 'area',     label: _cmpT('compare.row_area',     'Площадь'),            fn: p => `${p.area} м²` },
    { key: 'rooms',    label: _cmpT('compare.row_rooms',    'Спальни'),            fn: p => p.rooms },
    { key: 'floor',    label: _cmpT('compare.row_floor',    'Этаж'),               fn: p => p.floor },
    { key: 'year',     label: _cmpT('compare.row_year',     'Год сдачи'),          fn: p => p.year || '—' },
    { key: 'city',     label: _cmpT('compare.row_city',     'Город'),              fn: p => typeof getCityLabel==='function'?getCityLabel(p):(p.cityLabel||p.city) },
    { key: 'type',     label: _cmpT('compare.row_type',     'Тип'),                fn: p => p.type || '—' },
    { key: 'status',   label: _cmpT('compare.row_status',   'Статус'),             fn: p => { const b=typeof getPropBadge==='function'?getPropBadge(p):{text:p.status||'—',cls:''}; return `<span class="prop-badge ${b.cls}" style="position:static;display:inline-block;">${b.text}</span>`; } },
    { key: 'roi',      label: _cmpT('compare.row_roi',      'ROI'),                fn: p => p.roi ? `<span style="color:#3B6D11;font-weight:700;">${p.roi}%</span>` : '—' },
    { key: 'growth',   label: _cmpT('compare.row_growth',   'Рост цены/год'),      fn: p => p.growth ? `${p.growth}%` : '—' },
    { key: 'payback',  label: _cmpT('compare.row_payback',  'Окупаемость'),        fn: p => p.payback ? `${p.payback} лет` : '—' },
  ];

  const colW = `${Math.floor(100 / (props.length + 1))}%`;

  wrap.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="compare-label-col"></th>
            ${props.map(p => `
              <th class="compare-prop-col">
                <div class="compare-prop-name">${typeof getPropName==='function'?getPropName(p):p.name}</div>
                <div class="compare-prop-city">${typeof getCityLabel==='function'?getCityLabel(p):(p.cityLabel||p.city)}</div>
                <button class="compare-remove-btn" onclick="removeFromCompare('${p.id}')" title="${_cmpT('compare.remove','Убрать')}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  ${_cmpT('compare.remove', 'Убрать')}
                </button>
              </th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr class="compare-row">
              <td class="compare-label">${row.label}</td>
              ${props.map(p => `<td class="compare-cell">${row.fn(p)}</td>`).join('')}
            </tr>`).join('')}
          <tr class="compare-row compare-cta-row">
            <td class="compare-label"></td>
            ${props.map(p => `
              <td class="compare-cell">
                <a href="index.html?prop=${p.id}" class="btn btn-red" style="width:100%;justify-content:center;">
                  ${_cmpT('card.details','Подробнее')}
                </a>
              </td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>`;
}

function removeFromCompare(id) {
  let list = getCompareList().filter(x => x !== id);
  saveCompareList(list);
  updateCompareBadge();
  renderComparePage();
}
