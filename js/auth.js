/* ═══════════════════════════════════
   AUTH — Georgia Real Estate
   localStorage-based auth (no backend)
═══════════════════════════════════ */

const Auth = (() => {

  /* ── Storage helpers ── */
  const USERS_KEY  = 'gre_users';
  const SESSION_KEY = 'gre_session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; } catch { return {}; }
  }
  function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
  function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; } catch { return null; }
  }
  function saveSession(s) { localStorage.setItem(SESSION_KEY, JSON.stringify(s)); }
  function clearSession() { localStorage.removeItem(SESSION_KEY); }

  /* ── Auth actions ── */
  function register(name, email, password) {
    const users = getUsers();
    if (users[email]) return { ok: false, msg: 'Этот email уже зарегистрирован' };
    users[email] = { name: name.trim(), email, password, createdAt: Date.now(), favorites: [] };
    saveUsers(users);
    const session = { name: name.trim(), email };
    saveSession(session);
    return { ok: true, session };
  }

  function login(email, password) {
    const users = getUsers();
    const u = users[email];
    if (!u) return { ok: false, msg: 'Пользователь не найден' };
    if (u.password !== password) return { ok: false, msg: 'Неверный пароль' };
    const session = { name: u.name, email };
    saveSession(session);
    return { ok: true, session };
  }

  function logout() {
    clearSession();
    renderAuthBtn();
  }

  function currentUser() { return getSession(); }

  /* ── Favorites ── */
  function getFavorites() {
    const s = getSession();
    if (!s) return [];
    const users = getUsers();
    return (users[s.email] && users[s.email].favorites) || [];
  }
  function toggleFavorite(id) {
    const s = getSession();
    if (!s) { openAuthModal(); return false; }
    const users = getUsers();
    const u = users[s.email];
    if (!u) return false;
    u.favorites = u.favorites || [];
    const idx = u.favorites.indexOf(id);
    if (idx === -1) { u.favorites.push(id); }
    else { u.favorites.splice(idx, 1); }
    saveUsers(users);
    return idx === -1; // true = added
  }
  function isFavorite(id) { return getFavorites().includes(id); }

  /* ─────────────────────────────────
     UI
  ───────────────────────────────── */

  /* Inject modal + overlay HTML once */
  function injectModal() {
    if (document.getElementById('authModal')) return;
    const html = `
    <!-- Auth Overlay -->
    <div id="authOverlay" class="auth-overlay" onclick="Auth.closeAuthModal(event)">
      <div class="auth-modal" id="authModal">
        <button class="auth-modal-close" onclick="Auth.closeAuthModal(true)" aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Tabs -->
        <div class="auth-tabs">
          <button class="auth-tab active" id="tabLogin" onclick="Auth.switchTab('login')">Войти</button>
          <button class="auth-tab" id="tabReg" onclick="Auth.switchTab('reg')">Регистрация</button>
        </div>

        <!-- Login form -->
        <div id="formLogin" class="auth-form-section">
          <p class="auth-subtitle">Добро пожаловать!</p>
          <div class="auth-field">
            <label>Email</label>
            <input type="email" id="loginEmail" placeholder="you@example.com" autocomplete="email">
          </div>
          <div class="auth-field">
            <label>Пароль</label>
            <input type="password" id="loginPass" placeholder="••••••••" autocomplete="current-password">
          </div>
          <div class="auth-error" id="loginError"></div>
          <button class="auth-submit btn btn-primary" onclick="Auth.submitLogin()">Войти</button>
        </div>

        <!-- Register form -->
        <div id="formReg" class="auth-form-section" style="display:none">
          <p class="auth-subtitle">Создайте аккаунт</p>
          <div class="auth-field">
            <label>Имя</label>
            <input type="text" id="regName" placeholder="Ваше имя" autocomplete="name">
          </div>
          <div class="auth-field">
            <label>Email</label>
            <input type="email" id="regEmail" placeholder="you@example.com" autocomplete="email">
          </div>
          <div class="auth-field">
            <label>Пароль</label>
            <input type="password" id="regPass" placeholder="Минимум 6 символов" autocomplete="new-password">
          </div>
          <div class="auth-error" id="regError"></div>
          <button class="auth-submit btn btn-primary" onclick="Auth.submitReg()">Создать аккаунт</button>
        </div>
      </div>
    </div>

    <!-- User dropdown -->
    <div id="userDropdown" class="user-dropdown" style="display:none">
      <div class="user-dropdown-name" id="userDropdownName"></div>
      <div class="user-dropdown-divider"></div>
      <a class="user-dropdown-item" onclick="Auth.closeDropdown(); alert('Раздел «Избранное» в разработке')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Избранное
      </a>
      <a class="user-dropdown-item" onclick="Auth.closeDropdown(); alert('Раздел «История» в разработке')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        История просмотров
      </a>
      <div class="user-dropdown-divider"></div>
      <a class="user-dropdown-item user-dropdown-logout" onclick="Auth.logout()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Выйти
      </a>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    // Enter key support
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAuthModal(true);
      if (e.key === 'Enter') {
        const overlay = document.getElementById('authOverlay');
        if (overlay && overlay.classList.contains('open')) {
          const tab = document.getElementById('tabLogin').classList.contains('active') ? 'login' : 'reg';
          tab === 'login' ? submitLogin() : submitReg();
        }
      }
    });
  }

  /* ── Auth button in header ── */
  function renderAuthBtn() {
    const container = document.getElementById('authBtnWrap');
    if (!container) return;
    const user = getSession();
    if (user) {
      const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      container.innerHTML = `
        <button class="user-avatar-btn" id="userAvatarBtn" onclick="Auth.toggleDropdown()" title="${user.name}" aria-label="Личный кабинет">
          ${initials}
        </button>
      `;
    } else {
      container.innerHTML = `
        <button class="auth-icon-btn" id="authIconBtn" onclick="Auth.openAuthModal()" title="Войти" aria-label="Войти">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      `;
    }
  }

  /* ── Modal open/close ── */
  function openAuthModal(tab) {
    injectModal();
    if (tab) switchTab(tab);
    const overlay = document.getElementById('authOverlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const el = document.getElementById(tab === 'reg' ? 'regName' : 'loginEmail');
        if (el) el.focus();
      }, 80);
    }
  }

  function closeAuthModal(force) {
    if (force === true || (force && force.target === document.getElementById('authOverlay'))) {
      const overlay = document.getElementById('authOverlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
      clearErrors();
    }
  }

  function clearErrors() {
    ['loginError', 'regError'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
  }

  /* ── Tabs ── */
  function switchTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('tabLogin').classList.toggle('active', isLogin);
    document.getElementById('tabReg').classList.toggle('active', !isLogin);
    document.getElementById('formLogin').style.display = isLogin ? '' : 'none';
    document.getElementById('formReg').style.display  = isLogin ? 'none' : '';
    clearErrors();
  }

  /* ── Submit ── */
  function submitLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPass').value;
    const errEl = document.getElementById('loginError');
    if (!email || !pass) { errEl.textContent = 'Заполните все поля'; return; }
    const res = login(email, pass);
    if (!res.ok) { errEl.textContent = res.msg; return; }
    closeAuthModal(true);
    renderAuthBtn();
    showAuthToast(`Добро пожаловать, ${res.session.name}!`);
  }

  function submitReg() {
    const name  = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass  = document.getElementById('regPass').value;
    const errEl = document.getElementById('regError');
    if (!name || !email || !pass) { errEl.textContent = 'Заполните все поля'; return; }
    if (pass.length < 6) { errEl.textContent = 'Пароль — минимум 6 символов'; return; }
    if (!/\S+@\S+\.\S+/.test(email)) { errEl.textContent = 'Введите корректный email'; return; }
    const res = register(name, email, pass);
    if (!res.ok) { errEl.textContent = res.msg; return; }
    closeAuthModal(true);
    renderAuthBtn();
    showAuthToast(`Аккаунт создан! Добро пожаловать, ${name}!`);
  }

  /* ── Dropdown ── */
  function toggleDropdown() {
    const dd = document.getElementById('userDropdown');
    if (!dd) return;
    const btn = document.getElementById('userAvatarBtn');
    const user = getSession();
    if (user) document.getElementById('userDropdownName').textContent = user.name;
    const isOpen = dd.style.display !== 'none';
    if (isOpen) {
      closeDropdown();
    } else {
      // Position below avatar button
      if (btn) {
        const rect = btn.getBoundingClientRect();
        dd.style.top  = (rect.bottom + 8) + 'px';
        dd.style.right = (window.innerWidth - rect.right) + 'px';
        dd.style.left  = 'auto';
      }
      dd.style.display = 'block';
      setTimeout(() => dd.classList.add('open'), 10);
      // Close on outside click
      setTimeout(() => {
        document.addEventListener('click', outsideDropdownClick);
      }, 50);
    }
  }

  function outsideDropdownClick(e) {
    const dd  = document.getElementById('userDropdown');
    const btn = document.getElementById('userAvatarBtn');
    if (dd && !dd.contains(e.target) && e.target !== btn) {
      closeDropdown();
    }
  }

  function closeDropdown() {
    const dd = document.getElementById('userDropdown');
    if (dd) { dd.classList.remove('open'); setTimeout(() => { dd.style.display = 'none'; }, 180); }
    document.removeEventListener('click', outsideDropdownClick);
  }

  /* ── Toast ── */
  function showAuthToast(msg) {
    const t = document.createElement('div');
    t.className = 'auth-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
  }

  /* ── Init ── */
  function init() {
    injectModal();
    renderAuthBtn();
  }

  return {
    init, openAuthModal, closeAuthModal, switchTab,
    submitLogin, submitReg, logout,
    toggleDropdown, closeDropdown,
    toggleFavorite, isFavorite, getFavorites, currentUser
  };
})();

document.addEventListener('DOMContentLoaded', () => Auth.init());
