// ── CONTACT POPUP ──
function openContactPopup() {
  const overlay = document.getElementById('contactPopup');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('cpopupForm').style.display = '';
  document.getElementById('cpopupSuccess').style.display = 'none';
  ['cpName','cpPhone','cpEmail','cpMessage'].forEach(id => {
    const el = document.getElementById(id);
    el.value = '';
    el.classList.remove('cpopup-input-error');
  });
  document.querySelectorAll('.cpopup-error-msg').forEach(e => e.remove());
}
function closeContactPopup() {
  document.getElementById('contactPopup').classList.remove('open');
  document.body.style.overflow = '';
}
function closeContactPopupOutside(e) {
  if (e.target === document.getElementById('contactPopup')) closeContactPopup();
}

// Georgian phone mask: +995 5XX XXX XXX
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const ph = document.getElementById('cpPhone');
    if (!ph) return;
    ph.addEventListener('input', function() {
      let digits = this.value.replace(/\D/g, '');
      if (digits.startsWith('995')) digits = digits.slice(3);
      if (digits.length > 9) digits = digits.slice(0, 9);
      let formatted = '+995';
      if (digits.length > 0) formatted += ' ' + digits.slice(0, 3);
      if (digits.length > 3) formatted += ' ' + digits.slice(3, 6);
      if (digits.length > 6) formatted += ' ' + digits.slice(6, 9);
      this.value = formatted;
    });
    ph.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && this.value === '+995') { e.preventDefault(); this.value = ''; }
    });
    ph.addEventListener('focus', function() { if (!this.value) this.value = '+995 '; });
    ph.addEventListener('blur', function() { if (this.value === '+995 ' || this.value === '+995') this.value = ''; });
  });
})();

function validateGeoPhone(val) {
  const digits = val.replace(/\D/g, '');
  const num = digits.startsWith('995') ? digits.slice(3) : digits;
  return /^[5789]\d{8}$/.test(num);
}
function setFieldError(id, msg) {
  const el = document.getElementById(id);
  el.classList.add('cpopup-input-error');
  const prev = el.parentElement.querySelector('.cpopup-error-msg');
  if (prev) prev.remove();
  const err = document.createElement('span');
  err.className = 'cpopup-error-msg';
  err.textContent = msg;
  el.parentElement.appendChild(err);
}
function clearFieldError(id) {
  const el = document.getElementById(id);
  el.classList.remove('cpopup-input-error');
  const prev = el.parentElement.querySelector('.cpopup-error-msg');
  if (prev) prev.remove();
}
function submitContactPopup() {
  let valid = true;
  ['cpName','cpPhone','cpEmail','cpMessage'].forEach(id => clearFieldError(id));
  const name  = document.getElementById('cpName').value.trim();
  const phone = document.getElementById('cpPhone').value.trim();
  const email = document.getElementById('cpEmail').value.trim();
  const msg   = document.getElementById('cpMessage').value.trim();
  if (!name) { setFieldError('cpName', 'Введите ваше имя'); valid = false; }
  if (!validateGeoPhone(phone)) { setFieldError('cpPhone', 'Введите грузинский номер: +995 5XX XXX XXX'); valid = false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('cpEmail', 'Введите корректный email'); valid = false; }
  if (!msg) { setFieldError('cpMessage', 'Напишите ваш вопрос'); valid = false; }
  if (!valid) return;
  document.getElementById('cpopupForm').style.display = 'none';
  document.getElementById('cpopupSuccess').style.display = 'block';
  setTimeout(closeContactPopup, 3200);
}

// ── TESTIMONIALS CAROUSEL ──
(function() {
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('testiDots');
  if (!track) return;
  const cards = track.querySelectorAll('.testi-card');
  const total = cards.length;
  let perView = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  let cur = 0;
  function pages() { return total - perView() + 1; }
  function buildDots() {
    dotsWrap.innerHTML = '';
    const n = pages();
    for (let i = 0; i < n; i++) {
      const d = document.createElement('div');
      d.className = 'testi-dot' + (i === cur ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }
  function goTo(idx) {
    const n = pages();
    cur = Math.max(0, Math.min(idx, n - 1));
    const gap = 24;
    const cardW = (track.parentElement.offsetWidth - gap * (perView() - 1)) / perView();
    track.style.transform = `translateX(-${cur * (cardW + gap)}px)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }
  window.testiNav = function(dir) { goTo(cur + dir); resumeAuto(); };
  buildDots();
  window.addEventListener('resize', () => { buildDots(); goTo(Math.min(cur, pages() - 1)); });

  let autoTimer = setInterval(() => { goTo(cur + 1 < pages() ? cur + 1 : 0); }, 4000);
  function pauseAuto() { clearInterval(autoTimer); }
  function resumeAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => { goTo(cur + 1 < pages() ? cur + 1 : 0); }, 4000); }
  const section = document.getElementById('testimonials');
  if (section) {
    section.addEventListener('mouseenter', pauseAuto);
    section.addEventListener('mouseleave', resumeAuto);
    section.addEventListener('touchstart', pauseAuto, { passive: true });
    section.addEventListener('touchend', resumeAuto, { passive: true });
  }
})();


// ═══════════════════════════════════

// ── PRESENTATION POPUP ──
function openPresentPopup() {
  // Pre-fill project name from detail page
  const title = document.querySelector('#page-detail .detail-title');
  const ppProject = document.getElementById('ppProject');
  if (ppProject && title) ppProject.value = title.textContent;
  document.getElementById('presentForm').style.display = '';
  document.getElementById('presentSuccess').style.display = 'none';
  const el = document.getElementById('presentPopup');
  el.style.display = 'flex';
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePresentPopup() {
  const el = document.getElementById('presentPopup');
  el.classList.remove('open');
  el.style.display = 'none';
  document.body.style.overflow = '';
}
function closePresentPopupOutside(e) {
  if (e.target === document.getElementById('presentPopup')) closePresentPopup();
}
function submitPresentPopup() {
  document.getElementById('presentForm').style.display = 'none';
  document.getElementById('presentSuccess').style.display = 'block';
  setTimeout(closePresentPopup, 3200);
}

// ── MANAGER POPUP ──
function openManagerPopup() {
  document.getElementById('managerForm').style.display = '';
  document.getElementById('managerSuccess').style.display = 'none';
  const el = document.getElementById('managerPopup');
  el.style.display = 'flex';
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeManagerPopup() {
  const el = document.getElementById('managerPopup');
  el.classList.remove('open');
  el.style.display = 'none';
  document.body.style.overflow = '';
}
function closeManagerPopupOutside(e) {
  if (e.target === document.getElementById('managerPopup')) closeManagerPopup();
}
function submitManagerPopup() {
  document.getElementById('managerForm').style.display = 'none';
  document.getElementById('managerSuccess').style.display = 'block';
  setTimeout(closeManagerPopup, 3200);
}

// ── FEATURED PROPERTIES SLIDER ──
function createFeaturedSlider(trackId, dotsId, navFunc) {
  const track = document.getElementById(trackId);
  const dotsWrap = document.getElementById(dotsId);
  if (!track) return null;
  const cards = track.querySelectorAll('.catalog-card');
  const total = cards.length;
  const gap = 24;
  let cur = 0;
  let perView = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;

  function pages() { return Math.max(1, total - perView() + 1); }

  function getTrackWidth() {
    // Walk up to .container, use offsetWidth - padding (most reliable, no sub-pixel issues)
    let el = track.parentElement;
    while (el && el !== document.body) {
      if (el.classList.contains('container')) {
        const s = window.getComputedStyle(el);
        return el.offsetWidth
          - parseInt(s.paddingLeft, 10)
          - parseInt(s.paddingRight, 10);
      }
      el = el.parentElement;
    }
    return track.parentElement.offsetWidth;
  }

  function setCardWidths() {
    const w = getTrackWidth();
    const pv = perView();
    const cardW = Math.floor((w - gap * (pv - 1)) / pv);
    track.style.width = w + 'px';
    cards.forEach(c => {
      c.style.width    = cardW + 'px';
      c.style.minWidth = cardW + 'px';
      c.style.maxWidth = cardW + 'px';
    });
    return cardW;
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pages(); i++) {
      const d = document.createElement('div');
      d.className = 'testi-dot' + (i === cur ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    cur = Math.max(0, Math.min(idx, pages() - 1));
    const cardW = cards[0] ? cards[0].offsetWidth : 0;
    track.style.transform = `translateX(-${cur * (cardW + gap)}px)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  window[navFunc] = function(dir) { goTo(cur + dir); };

  function init() {
    cur = 0;
    track.style.transform = 'translateX(0)';
    setCardWidths();
    buildDots();
    goTo(0);
  }

  return init;
}

function initFeaturedSlider(deal) {
  // Double rAF: first frame commits DOM changes, second frame measures after layout
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!deal || deal === 'buy') {
      const init = createFeaturedSlider('featuredTrack', 'featuredDots', 'featuredNav');
      if (init) {
        init();
        window.removeEventListener('resize', window._featuredResizeHandler);
        window._featuredResizeHandler = init;
        window.addEventListener('resize', window._featuredResizeHandler);
      }
    }
    if (!deal || deal === 'rent') {
      const initRent = createFeaturedSlider('featuredRentTrack', 'featuredRentDots', 'featuredRentNav');
      if (initRent) {
        initRent();
        window.removeEventListener('resize', window._featuredRentResizeHandler);
        window._featuredRentResizeHandler = initRent;
        window.addEventListener('resize', window._featuredRentResizeHandler);
      }
    }
  }));
}
