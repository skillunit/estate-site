/* ═══════════════════════════════════
   REVIEWS — Georgia Real Estate
   localStorage-based reviews (no backend)
═══════════════════════════════════ */

const Reviews = (() => {
  const KEY = 'gre_reviews';

  function _load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  function _save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }

  /* ── Public API ── */
  function getReviews(propId) {
    const data = _load();
    return (data[propId] || []).filter(r => r.status === 'approved');
  }

  function getAllReviews() {
    const data = _load();
    const all = [];
    Object.keys(data).forEach(propId => {
      (data[propId] || []).forEach(r => all.push({ ...r, propId }));
    });
    return all.sort((a, b) => b.ts - a.ts);
  }

  function getPendingReviews() {
    return getAllReviews().filter(r => r.status === 'pending');
  }

  function addReview(propId, rating, text) {
    const user = (typeof Auth !== 'undefined') ? Auth.currentUser() : null;
    if (!user) return { ok: false, msg: 'Необходима авторизация' };
    if (hasUserReviewed(propId)) return { ok: false, msg: 'Вы уже оставили отзыв на этот объект' };
    if (!rating || rating < 1 || rating > 5) return { ok: false, msg: 'Выберите оценку' };
    if (!text || text.trim().length < 20) return { ok: false, msg: 'Минимум 20 символов' };
    if (text.trim().length > 1000) return { ok: false, msg: 'Максимум 1000 символов' };

    const data = _load();
    if (!data[propId]) data[propId] = [];
    const review = {
      id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36),
      propId,
      userEmail: user.email,
      userName: user.name,
      rating,
      text: text.trim(),
      ts: Date.now(),
      status: 'pending',
      reported: false,
    };
    data[propId].push(review);
    _save(data);
    return { ok: true, review };
  }

  function setReviewStatus(id, status) {
    const data = _load();
    Object.keys(data).forEach(propId => {
      data[propId] = data[propId].map(r => r.id === id ? { ...r, status } : r);
    });
    _save(data);
  }

  function deleteReview(id) {
    const data = _load();
    Object.keys(data).forEach(propId => {
      data[propId] = data[propId].filter(r => r.id !== id);
    });
    _save(data);
  }

  function reportReview(id) {
    const data = _load();
    Object.keys(data).forEach(propId => {
      data[propId] = data[propId].map(r => r.id === id ? { ...r, reported: true } : r);
    });
    _save(data);
  }

  function getAvgRating(propId) {
    const approved = getReviews(propId);
    if (!approved.length) return { avg: 0, count: 0 };
    const avg = approved.reduce((s, r) => s + r.rating, 0) / approved.length;
    return { avg: Math.round(avg * 10) / 10, count: approved.length };
  }

  function hasUserReviewed(propId) {
    const user = (typeof Auth !== 'undefined') ? Auth.currentUser() : null;
    if (!user) return false;
    const data = _load();
    return (data[propId] || []).some(r => r.userEmail === user.email);
  }

  function getUserReview(propId) {
    const user = (typeof Auth !== 'undefined') ? Auth.currentUser() : null;
    if (!user) return null;
    const data = _load();
    return (data[propId] || []).find(r => r.userEmail === user.email) || null;
  }

  /* ── Render helpers ── */
  function starsHtml(rating, interactive = false, size = 18) {
    if (interactive) {
      return [1,2,3,4,5].map(i =>
        `<span class="rev-star-input" data-val="${i}" style="font-size:${size}px;cursor:pointer;" aria-label="${i} звезда">★</span>`
      ).join('');
    }
    const full = Math.round(rating);
    return [1,2,3,4,5].map(i =>
      `<span style="color:${i<=full?'#F39C12':'#DDD'};font-size:${size}px;">★</span>`
    ).join('');
  }

  function formatDate(ts) {
    return new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function avatarHtml(name) {
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    return `<div class="rev-avatar">${initials}</div>`;
  }

  /* ── Render review block on detail page ── */
  function renderReviewBlock(propId) {
    const container = document.getElementById('reviewsBlock');
    if (!container) return;

    const { avg, count } = getAvgRating(propId);
    const approved = getReviews(propId);
    const user = (typeof Auth !== 'undefined') ? Auth.currentUser() : null;
    const userReview = getUserReview(propId);

    // Distribution
    const dist = [5,4,3,2,1].map(s => ({
      star: s,
      cnt: approved.filter(r => r.rating === s).length
    }));

    let ratingBlockHtml = '';
    if (count > 0) {
      ratingBlockHtml = `
        <div class="rev-summary">
          <div class="rev-avg-block">
            <div class="rev-avg-num">${avg.toFixed(1)}</div>
            <div class="rev-avg-stars">${starsHtml(avg, false, 20)}</div>
            <div class="rev-avg-count">на основе ${count} отзыв${count===1?'а':count<5?'ов':'ов'}</div>
          </div>
          <div class="rev-bars">
            ${dist.map(d => `
              <div class="rev-bar-row">
                <span class="rev-bar-label">${d.star}★</span>
                <div class="rev-bar-wrap"><div class="rev-bar-fill" style="width:${count>0?Math.round(d.cnt/count*100):0}%"></div></div>
                <span class="rev-bar-cnt">${d.cnt}</span>
              </div>`).join('')}
          </div>
        </div>`;
    }

    // Form or user's review status
    let formHtml = '';
    if (!user) {
      formHtml = `<div class="rev-login-prompt">
        <button class="btn btn-outline rev-login-btn" onclick="Auth.openAuthModal()">Войдите, чтобы оставить отзыв</button>
      </div>`;
    } else if (userReview) {
      const statusLabel = userReview.status === 'approved' ? '✅ Опубликован' :
                          userReview.status === 'rejected' ? '❌ Отклонён' : '⏳ На модерации';
      formHtml = `<div class="rev-user-own">
        <div class="rev-user-own-label">Ваш отзыв <span class="rev-status-badge">${statusLabel}</span></div>
        <div class="rev-card">
          ${avatarHtml(userReview.userName)}
          <div class="rev-card-body">
            <div class="rev-card-top">
              <span class="rev-card-name">${userReview.userName}</span>
              <span class="rev-card-date">${formatDate(userReview.ts)}</span>
            </div>
            <div class="rev-card-stars">${starsHtml(userReview.rating, false, 15)}</div>
            <div class="rev-card-text">${escapeHtml(userReview.text)}</div>
          </div>
        </div>
      </div>`;
    } else {
      formHtml = `<div class="rev-form" id="reviewForm">
        <div class="rev-form-title">Оставить отзыв</div>
        <div class="rev-stars-wrap">
          <div class="rev-stars-input" id="revStarsInput" data-val="0">
            ${starsHtml(0, true, 28)}
          </div>
          <span class="rev-stars-hint" id="revStarsHint">Нажмите на звезду</span>
        </div>
        <textarea class="rev-textarea" id="revText" placeholder="Ваш отзыв об объекте (минимум 20 символов)..." maxlength="1000"></textarea>
        <div class="rev-form-footer">
          <span class="rev-char-count" id="revCharCount">0 / 1000</span>
          <button class="btn btn-red rev-submit-btn" id="revSubmitBtn" onclick="Reviews.submitForm('${propId}')" disabled>Отправить отзыв</button>
        </div>
        <div class="rev-form-error" id="revFormError"></div>
      </div>`;
    }

    // Reviews list
    let listHtml = '';
    if (approved.length === 0 && !userReview) {
      listHtml = `<div class="rev-empty">Будьте первым, кто оставит отзыв об этом объекте.</div>`;
    } else if (approved.length > 0) {
      listHtml = `<div class="rev-list" id="revList">` +
        approved.slice(0, 5).map(r => reviewCardHtml(r)).join('') +
        `</div>` +
        (approved.length > 5 ? `<button class="rev-load-more" onclick="Reviews.loadMore('${propId}',5)">Показать ещё</button>` : '');
    }

    container.innerHTML = `
      <div class="rev-section">
        <h3 class="rev-section-title">Рейтинг и отзывы</h3>
        ${ratingBlockHtml}
        ${formHtml}
        ${listHtml}
      </div>`;

    // Init star input
    if (!user || !userReview) initStarInput();
  }

  function reviewCardHtml(r) {
    const text = escapeHtml(r.text);
    const long = r.text.length > 300;
    const shortText = long ? escapeHtml(r.text.slice(0, 300)) + '...' : text;
    return `<div class="rev-card" id="rc-${r.id}">
      ${avatarHtml(r.userName)}
      <div class="rev-card-body">
        <div class="rev-card-top">
          <span class="rev-card-name">${escapeHtml(r.userName)}</span>
          <span class="rev-card-date">${formatDate(r.ts)}</span>
        </div>
        <div class="rev-card-stars">${starsHtml(r.rating, false, 14)}</div>
        <div class="rev-card-text" id="rct-${r.id}">${shortText}</div>
        ${long ? `<button class="rev-expand-btn" onclick="Reviews.expandReview('${r.id}','${escapeHtml(r.text).replace(/'/g,"\\'")}')">Показать полностью</button>` : ''}
        <button class="rev-report-btn ${r.reported ? 'reported' : ''}" id="rrb-${r.id}" onclick="Reviews.report('${r.id}')">
          ${r.reported ? 'Жалоба отправлена' : 'Пожаловаться'}
        </button>
      </div>
    </div>`;
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function initStarInput() {
    const wrap = document.getElementById('revStarsInput');
    const hint = document.getElementById('revStarsHint');
    const btn = document.getElementById('revSubmitBtn');
    const textarea = document.getElementById('revText');
    const charCount = document.getElementById('revCharCount');
    if (!wrap) return;

    const labels = ['','Плохо','Неплохо','Нормально','Хорошо','Отлично'];

    wrap.querySelectorAll('.rev-star-input').forEach(star => {
      star.addEventListener('mouseenter', () => {
        const v = +star.dataset.val;
        wrap.querySelectorAll('.rev-star-input').forEach(s => {
          s.style.color = +s.dataset.val <= v ? '#F39C12' : '#DDD';
        });
        if (hint) hint.textContent = labels[v] || '';
      });
      star.addEventListener('mouseleave', () => {
        const cur = +wrap.dataset.val;
        wrap.querySelectorAll('.rev-star-input').forEach(s => {
          s.style.color = +s.dataset.val <= cur ? '#F39C12' : '#DDD';
        });
        if (hint) hint.textContent = cur > 0 ? labels[cur] : 'Нажмите на звезду';
      });
      star.addEventListener('click', () => {
        const v = +star.dataset.val;
        wrap.dataset.val = v;
        wrap.querySelectorAll('.rev-star-input').forEach(s => {
          s.style.color = +s.dataset.val <= v ? '#F39C12' : '#DDD';
        });
        if (hint) hint.textContent = labels[v];
        validateForm();
      });
    });

    if (textarea) {
      textarea.addEventListener('input', () => {
        if (charCount) {
          charCount.textContent = textarea.value.length + ' / 1000';
          charCount.style.color = textarea.value.length > 900 ? 'var(--red)' : '';
        }
        validateForm();
      });
    }

    function validateForm() {
      const rating = +wrap.dataset.val;
      const text = textarea ? textarea.value.trim() : '';
      if (btn) btn.disabled = !(rating >= 1 && text.length >= 20);
    }
  }

  function submitForm(propId) {
    const wrap = document.getElementById('revStarsInput');
    const textarea = document.getElementById('revText');
    const errEl = document.getElementById('revFormError');
    if (!wrap || !textarea) return;

    const rating = +wrap.dataset.val;
    const text = textarea.value;
    const result = addReview(propId, rating, text);

    if (!result.ok) {
      if (errEl) errEl.textContent = result.msg;
      return;
    }

    // Show success
    const form = document.getElementById('reviewForm');
    if (form) {
      form.innerHTML = `<div class="rev-sent">
        <div style="font-size:2rem;margin-bottom:8px;">✅</div>
        <div style="font-weight:600;margin-bottom:4px;">Отзыв отправлен на модерацию</div>
        <div style="font-size:0.85rem;color:var(--gray-500);">Он появится после проверки.</div>
      </div>`;
    }
  }

  function expandReview(id, fullText) {
    const el = document.getElementById('rct-' + id);
    const btn = el ? el.nextElementSibling : null;
    if (el) el.innerHTML = fullText;
    if (btn && btn.classList.contains('rev-expand-btn')) btn.remove();
  }

  function report(id) {
    const btn = document.getElementById('rrb-' + id);
    reportReview(id);
    if (btn) {
      btn.textContent = 'Жалоба отправлена';
      btn.classList.add('reported');
    }
  }

  function loadMore(propId, offset) {
    const approved = getReviews(propId);
    const list = document.getElementById('revList');
    const loadBtn = list ? list.nextElementSibling : null;
    if (!list) return;
    const nextSlice = approved.slice(offset, offset + 5);
    nextSlice.forEach(r => {
      list.insertAdjacentHTML('beforeend', reviewCardHtml(r));
    });
    if (loadBtn && loadBtn.classList.contains('rev-load-more')) {
      if (offset + 5 >= approved.length) loadBtn.remove();
      else loadBtn.onclick = () => loadMore(propId, offset + 5);
    }
  }

  /* ── Mini rating for catalog cards ── */
  function getMiniRatingHtml(propId) {
    const { avg, count } = getAvgRating(propId);
    if (!count) return '';
    return `<div class="rev-mini-rating">
      <span class="rev-mini-star">★</span>
      <span class="rev-mini-avg">${avg.toFixed(1)}</span>
      <span class="rev-mini-count">(${count})</span>
    </div>`;
  }

  /* ── Schema.org AggregateRating injector ── */
  function injectSchema(prop) {
    const { avg, count } = getAvgRating(prop.id);
    let el = document.getElementById('schemaLd');
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'schemaLd';
      document.head.appendChild(el);
    }
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Apartment',
      name: prop.name,
      description: prop.desc,
      address: { '@type': 'PostalAddress', addressLocality: prop.cityLabel },
      offers: { '@type': 'Offer', price: prop.price.replace(/[^0-9]/g,''), priceCurrency: 'USD' }
    };
    if (count > 0) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: avg.toFixed(1),
        reviewCount: String(count),
        bestRating: '5',
        worstRating: '1'
      };
    }
    el.textContent = JSON.stringify(schema);
  }

  return {
    getReviews, getAllReviews, getPendingReviews,
    addReview, setReviewStatus, deleteReview, reportReview,
    getAvgRating, hasUserReviewed, getUserReview,
    renderReviewBlock, getMiniRatingHtml, injectSchema,
    submitForm, expandReview, report, loadMore
  };
})();
