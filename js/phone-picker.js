// ══════════════════════════════════════════════
//  PhonePicker — международный селектор телефона
//  Georgia Real Estate
// ══════════════════════════════════════════════
const PhonePicker = (() => {

  const COUNTRIES = [
    { code: 'GE', flag: '🇬🇪', name: 'Georgia',       dial: '+995', mask: '___ ___ ___',  re: /^[5789]\d{8}$/ },
    { code: 'RU', flag: '🇷🇺', name: 'Россия',         dial: '+7',   mask: '___ ___ __ __', re: /^9\d{9}$/      },
    { code: 'IL', flag: '🇮🇱', name: 'ישראל',          dial: '+972', mask: '__ ___ ____',   re: /^5\d{8}$/      },
    { code: 'UA', flag: '🇺🇦', name: 'Україна',        dial: '+380', mask: '__ ___ __ __',  re: /^[0-9]\d{8}$/  },
    { code: 'US', flag: '🇺🇸', name: 'United States',  dial: '+1',   mask: '___ ___ ____',  re: /^\d{10}$/      },
    { code: 'AE', flag: '🇦🇪', name: 'UAE',            dial: '+971', mask: '__ ___ ____',   re: /^[0-9]\d{8}$/  },
    { code: 'DE', flag: '🇩🇪', name: 'Deutschland',    dial: '+49',  mask: '___ ________',  re: /^\d{10,11}$/   },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom', dial: '+44',  mask: '____ ______',   re: /^7\d{9}$/      },
    { code: 'FR', flag: '🇫🇷', name: 'France',         dial: '+33',  mask: '_ __ __ __ __', re: /^[1-9]\d{8}$/  },
    { code: 'TR', flag: '🇹🇷', name: 'Türkiye',        dial: '+90',  mask: '___ ___ ____',  re: /^5\d{9}$/      },
  ];

  function defaultCountry() {
    const lang = (typeof I18n !== 'undefined') ? I18n.getLang() : 'ru';
    if (lang === 'he') return COUNTRIES.find(c => c.code === 'IL');
    if (lang === 'ru') return COUNTRIES.find(c => c.code === 'RU');
    return COUNTRIES.find(c => c.code === 'GE');
  }

  function maskToPlaceholder(mask) {
    return mask.replace(/_/g, 'X');
  }

  function applyMask(digits, mask) {
    let out = '', di = 0;
    for (let i = 0; i < mask.length && di < digits.length; i++) {
      out += mask[i] === '_' ? digits[di++] : mask[i];
    }
    return out;
  }

  function maxDigits(mask) {
    return (mask.match(/_/g) || []).length;
  }

  function initField(wrap) {
    const input = wrap.querySelector('input[type="tel"]');
    if (!input || wrap._phonePickerInit) return;
    wrap._phonePickerInit = true;

    let current = defaultCountry();
    let _digits = '';

    // Build flag button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'phone-flag-btn';

    // Build dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'phone-dropdown';
    dropdown.innerHTML = COUNTRIES.map(c => `
      <div class="phone-dropdown-item" data-code="${c.code}">
        <span class="ph-flag">${c.flag}</span>
        <span class="ph-name">${c.name}</span>
        <span class="ph-code">${c.dial}</span>
      </div>`).join('');

    wrap.insertBefore(btn, input);
    wrap.appendChild(dropdown);

    function updateBtn() {
      btn.innerHTML = `<span class="ph-flag">${current.flag}</span><span class="ph-code">${current.dial}</span><span class="ph-arrow">▾</span>`;
    }

    function selectCountry(code, silent) {
      current = COUNTRIES.find(c => c.code === code) || current;
      if (!silent) { _digits = ''; input.value = ''; }
      input.placeholder = maskToPlaceholder(current.mask);
      input.maxLength = current.mask.length;
      updateBtn();
      dropdown.classList.remove('open');
    }

    // Dropdown toggle
    btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    dropdown.querySelectorAll('.phone-dropdown-item').forEach(item => {
      item.addEventListener('mousedown', e => {
        e.preventDefault();
        selectCountry(item.dataset.code);
        input.focus();
      });
    });

    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) dropdown.classList.remove('open');
    });

    // Mask input on typing
    input.addEventListener('input', function() {
      _digits = this.value.replace(/\D/g, '');
      const max = maxDigits(current.mask);
      if (_digits.length > max) _digits = _digits.slice(0, max);
      this.value = applyMask(_digits, current.mask);
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && this.value === '') _digits = '';
    });

    // Init
    selectCountry(current.code, true);

    // Expose data getter on wrap
    wrap._getPhoneData = () => ({
      full: current.dial + ' ' + input.value,
      digits: _digits,
      country: current,
      valid: current.re.test(_digits),
    });
  }

  function init() {
    document.querySelectorAll('.phone-wrap').forEach(initField);
  }

  function getPhoneData(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return null;
    const wrap = input.closest('.phone-wrap');
    return (wrap && wrap._getPhoneData) ? wrap._getPhoneData() : null;
  }

  // Re-init on language switch (default country may change)
  document.addEventListener('i18n:applied', () => {
    document.querySelectorAll('.phone-wrap').forEach(wrap => {
      if (!wrap._phonePickerInit) initField(wrap);
    });
  });

  document.addEventListener('DOMContentLoaded', init);

  return { init, getPhoneData };
})();
