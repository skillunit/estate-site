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
