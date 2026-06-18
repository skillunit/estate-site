/**
 * translations.js — полные переводы Georgia Real Estate
 *
 * Архитектура для WordPress (WPML):
 * - Каждый ключ = одна строка перевода
 * - При переносе на WP: значение → <?php _e('key', 'gre') ?>
 * - Динамические значения через {placeholder} → func args
 *
 * Использование:
 *   GRE_T('nav.home')        → 'Home'
 *   GRE_T('catalog.found', {n: 10}) → '10 properties found'
 */

window.GRE_TRANSLATIONS = {

  ru: {
    // ── Мета ──────────────────────────────────────────────
    'meta.lang': 'ru',
    'meta.dir': 'ltr',
    'meta.title_home': 'Georgia Real Estate — Недвижимость в Грузии',
    'meta.title_catalog_h1': 'Наши проекты',
    'meta.title_catalog': 'Georgia Real Estate — Наши проекты',
    'meta.desc': 'Купить или арендовать недвижимость в Грузии. Квартиры и апартаменты в Тбилиси, Батуми, Гонио. Инвестиции с доходностью 8–14%.',

    // ── Навигация ──────────────────────────────────────────
    'nav.home': 'Главная',
    'nav.team': 'Команда',
    'nav.projects': 'Проекты',
    'nav.blog': 'Блог',
    'nav.contact': 'Связаться с нами',
    'nav.phone': '+995 32 2 123 456',

    // ── Hero ───────────────────────────────────────────────
    'hero.eyebrow': 'Международный девелопер',
    'hero.title': 'Недвижимость<br>в Грузии',
    'hero.sub': 'Для жизни и инвестиций',
    'hero.cta_catalog': 'Смотреть проекты',
    'hero.cta_contact': 'Связаться с нами',

    // ── Фильтр ─────────────────────────────────────────────
    'filter.buy': 'Покупка',
    'filter.rent': 'Аренда',
    'filter.country': 'Страна',
    'filter.city': 'Город',
    'filter.type': 'Тип недвижимости',
    'filter.type_all': 'Любой',
    'filter.type_apartment': 'Квартира',
    'filter.type_apart': 'Апартаменты',
    'filter.type_villa': 'Вилла',
    'filter.type_commercial': 'Коммерческая',
    'filter.name_label': 'Поиск по названию',
    'filter.name_placeholder': 'Название, район, тип…',
    'filter.status': 'Статус',
    'filter.status_all': 'Любой статус',
    'filter.status_ready': 'Сдан в эксплуатацию',
    'filter.status_build': 'На стадии строительства',
    'filter.status_invest': 'Инвестиции',
    'filter.price': 'Цена, $',
    'filter.area': 'Площадь, м²',
    'filter.rooms': 'Спальни',
    'filter.rooms_any': 'Любое',
    'filter.from': 'От',
    'filter.to': 'До',
    'filter.reset': 'Сброс',
    'filter.find': 'Найти',

    // ── Направления ────────────────────────────────────────
    'directions.title': 'Популярные направления',
    'directions.see_all': 'Смотреть все',
    'directions.georgia_cities': 'Тбилиси, Батуми, Бакуриани',
    'directions.usa_cities': 'Нью-Йорк, Майами',
    'directions.uae_cities': 'Дубай',
    'directions.cyprus_cities': 'Лимасол, Пафос',
    'directions.greece_cities': 'Афины, Миконос',

    // ── О компании ─────────────────────────────────────────
    'about.title': 'О компании',
    'about.desc': 'Мы — команда профессионалов с многолетним опытом на рынке недвижимости Грузии. Наша миссия — помочь вам найти идеальный объект для жизни, отдыха или инвестиций.',
    'about.btn': 'Подробнее о нас',
    'about.stat_years': 'лет на рынке недвижимости',
    'about.stat_clients': 'довольных клиентов',
    'about.stat_objects': 'Общее количество предложений',
    'about.stat_locations': 'лучших локаций по всей Грузии',

    // ── Каталог / Заголовки секций ─────────────────────────
    'catalog.buy_title': 'Топовые предложения покупки в Грузии',
    'catalog.rent_title': 'Топовые предложения аренды в Грузии',
    'catalog.see_all': 'Смотреть все',
    'catalog.found': 'Найдено предложений:',
    'catalog.empty_title': 'Объектов не найдено',
    'catalog.empty_sub': 'Попробуйте изменить параметры поиска или сбросьте фильтры',
    'catalog.sort_top': 'Топ продаж',
    'catalog.sort_price_asc': 'Цена: по возрастанию',
    'catalog.sort_price_desc': 'Цена: по убыванию',
    'catalog.sort_name_az': 'Название: А-Я',
    'catalog.sort_name_za': 'Название: Я-А',

    // ── Карточка объекта ───────────────────────────────────
    'card.details': 'Подробнее',
    'card.ask': 'Спросить',
    'card.top': '★ ТОП',
    'card.roi_year': '/ год',
    'card.savings_from': 'от начальной цены',
    'card.sqm_abbr': 'м²',
    'card.rooms_abbr': 'спал.',
    'card.floor_abbr': 'эт.',

    // ── Бейджи статуса ─────────────────────────────────────
    'badge.sale': 'Продажа',
    'badge.rent': 'Аренда',
    'badge.invest': 'Инвестиция',
    'badge.ready': 'Сдан в эксплуатацию',
    'badge.build': 'На стадии строительства',
    'badge.exclusive': 'Эксклюзив',
    'badge.rent_long': 'Долгосрочная аренда',
    'badge.rent_short': 'Краткосрочная аренда',

    // ── Детальная страница объекта ─────────────────────────
    'detail.invest_title': 'Потенциал для инвестиций',
    'detail.invest_growth': 'Ожидаемый рост цены:',
    'detail.invest_roi': 'Доход от аренды:',
    'detail.invest_payback': 'Окупаемость:',
    'detail.spec_location': 'Расположение',
    'detail.spec_area': 'Площадь',
    'detail.spec_rooms': 'Спальни',
    'detail.spec_floor': 'Этаж',
    'detail.spec_type': 'Тип',
    'detail.spec_year': 'Год постройки',
    'detail.video_label': 'Видео презентация проекта',
    'detail.nearby_title': 'Что рядом',
    'detail.all_photos': 'Все фото',
    'detail.related_title': 'Другие объекты в {city}',
    'detail.related_see_all': 'Смотреть все',
    'detail.back': '← Назад к каталогу',
    'detail.rent_title': 'Об аренде',
    'detail.rent_deposit': 'Депозит:',
    'detail.rent_term': 'Минимальный срок:',
    'detail.rent_utilities': 'Коммунальные:',
    'detail.rent_utilities_val': 'включены',

    // ── Калькулятор ────────────────────────────────────────
    'calc.title': 'Ипотечный калькулятор',
    'calc.down': 'Первоначальный взнос',
    'calc.term': 'Срок кредита',
    'calc.rate': 'Ставка по ипотеке',
    'calc.installment': 'Рассрочка',
    'calc.term_from': '1 год',
    'calc.term_to': '30 лет',
    'calc.payment_label': 'Ежемесячный платёж',
    'calc.disclaimer': 'Расчёт ориентировочный. Точные условия — у банка-партнёра.',
    'calc.installment_sub': 'Рассрочка без % на {term} {word}',
    'calc.mortgage_sub': 'Взнос {down} · Кредит {loan}',

    // ── Попап заявки ───────────────────────────────────────
    'popup.eyebrow': 'Оставьте заявку',
    'popup.title': 'Получить консультацию',
    'popup.sub': 'Наш специалист свяжется с вами в удобное время',
    'popup.name_label': 'Ваше имя',
    'popup.name_placeholder': 'Иван Иванов',
    'popup.phone_label': 'Телефон / WhatsApp',
    'popup.phone_placeholder': '+7 (999) 000-00-00',
    'popup.time_label': 'Удобное время',
    'popup.time_morning': 'Утром (9–12)',
    'popup.time_day': 'Днём (12–17)',
    'popup.time_evening': 'Вечером (17–21)',
    'popup.whatsapp': 'WhatsApp',
    'popup.telegram': 'Telegram',
    'popup.call': 'Звонок',
    'popup.submit': 'Отправить заявку',
    'popup.success_title': 'Заявка принята!',
    'popup.success_sub': 'Менеджер свяжется с вами в указанное время.',
    'popup.close': 'Закрыть',

    // ── Отзывы ─────────────────────────────────────────────
    'testi.eyebrow': 'Отзывы',
    'testi.title': 'Нам доверяют<br><span>партнёры и инвесторы</span>',
    'testi.tag_investor': 'Инвестор',
    'testi.tag_partner': 'Партнёр',
    'testi.tag_client': 'Клиент',
    'testi.q1': 'Команда Georgia Real Estate провела нас через весь процесс покупки квартиры в Батуми — от первого звонка до получения ключей. Профессионализм и прозрачность на каждом шагу.',
    'testi.q1_name': 'Алексей Морозов',
    'testi.q1_role': 'Частный инвестор, Москва',
    'testi.q2': 'Сотрудничаем с компанией уже третий год. Надёжный партнёр для масштабных инвестиций в грузинскую недвижимость. Особо ценим юридическую чистоту сделок и постпродажное сопровождение.',
    'testi.q2_name': 'David Kvaratskhelia',
    'testi.q2_role': 'CEO, KvGroup Invest',
    'testi.q3': 'Искала апартаменты у моря для семейного отдыха и сдачи в аренду. Менеджер подобрал идеальный вариант в Гонио — уже получаю 12% годовых. Рекомендую всем, кто думает об инвестициях.',
    'testi.q3_name': 'Ольга Степанова',
    'testi.q3_role': 'Предприниматель, Киев',
    'testi.q4': 'Приобрели коммерческое помещение в Тбилиси для открытия ресторана. Georgia Real Estate сопроводили не только сделку, но и помогли с регистрацией бизнеса.',
    'testi.q4_name': 'Михаил Тетрадзе',
    'testi.q4_role': 'Ресторатор, Тбилиси',
    'testi.q5': 'Направляю всех своих клиентов именно сюда. Лучшая база объектов по грузинскому рынку, честные комиссии и молниеносная реакция команды.',
    'testi.q5_name': 'Nino Bakradze',
    'testi.q5_role': 'Директор, Prime Realty GE',
    'testi.q6': 'Диверсифицируем портфель зарубежной недвижимостью. Грузия оказалась лучшим выбором — стабильный рост, доступный вход. Команда дала исчерпывающие аналитические материалы ещё на этапе переговоров.',
    'testi.q6_name': 'Роман Шевченко',
    'testi.q6_role': 'Управляющий активами, Дубай',

    // ── Футер ──────────────────────────────────────────────
    'footer.brand_desc': 'Ваш надёжный партнёр на рынке недвижимости в Грузии.',
    'footer.menu_title': 'Меню',
    'footer.menu_about': 'О компании',
    'footer.menu_catalog': 'Недвижимость',
    'footer.menu_services': 'Услуги',
    'footer.menu_blog': 'Блог',
    'footer.menu_contact': 'Контакты',
    'footer.menu_legal': 'Сделка, налоги, ВНЖ',
    'footer.services_title': 'Услуги',
    'footer.services_1': 'Подбор недвижимости',
    'footer.services_2': 'Юридическое сопровождение',
    'footer.services_3': 'Управление недвижимостью',
    'footer.services_4': 'Инвестиционные консультации',
    'footer.contacts_title': 'Контакты',
    'footer.address': 'г. Тбилиси,<br>ул. Чаокаедзе, 37',
    'footer.copyright': '© 2026 Georgia Real Estate',
    'footer.privacy': 'Политика конфиденциальности',

    // ── Страница команды ───────────────────────────────────
    'team.hero_title': 'Наша команда',
    'team.role_ceo': 'Генеральный директор',
    'team.role_sales': 'Руководитель отдела продаж',
    'team.role_lawyer': 'Юрист',
    'team.role_agent': 'Агент по недвижимости',
    'team.role_marketing': 'Директор по маркетингу',
    'team.agent_ask': 'Задать вопрос',

    // ── Страница блога ─────────────────────────────────────
    'blog.hero_title': 'Блог',
    'blog.hero_sub': 'Статьи о недвижимости, инвестициях и жизни в Грузии',
    'blog.read_more': 'Читать далее',
    'blog.tag_all': 'Все',
    'blog.tag_invest': 'Инвестиции',
    'blog.tag_market': 'Рынок',
    'blog.tag_life': 'Жизнь в Грузии',
    'blog.tag_legal': 'Юридические вопросы',

    // ── Страница контактов ─────────────────────────────────
    'contact.hero_title': 'Свяжитесь с нами',
    'contact.hero_sub': 'Мы готовы ответить на любые вопросы',
    'contact.form_name': 'Ваше имя',
    'contact.form_email': 'Email',
    'contact.form_phone': 'Телефон',
    'contact.form_message': 'Сообщение',
    'contact.form_submit': 'Отправить',
    'contact.office_title': 'Наш офис',
    'contact.work_hours': 'Пн–Пт: 9:00–19:00',

    // ── Избранное ──────────────────────────────────────────
    'favorites.title': 'Избранное',
    'favorites.empty': 'Вы ещё не добавили объекты в избранное',
    'favorites.empty_sub': 'Нажмите на ♡ в карточке объекта, чтобы сохранить его здесь',

    // ── История ────────────────────────────────────────────
    'history.title': 'История просмотров',
    'history.empty': 'Вы ещё не просматривали объекты',
    'history.clear': 'Очистить историю',

    // ── Плавающие кнопки ───────────────────────────────────
    'floating.consult': 'Онлайн консультация',
    'floating.top': 'Наверх',

    // ── Страны и города ────────────────────────────────────
    'country.all': '🌍 Все страны',
    'country.georgia': '🇬🇪 Грузия',
    'country.usa': '🇺🇸 США',
    'country.uae': '🇦🇪 ОАЭ',
    'country.cyprus': '🇨🇾 Кипр',
    'country.greece': '🇬🇷 Греция',
    'city.all': 'Любой город',
    'city.tbilisi': 'Тбилиси',
    'city.batumi': 'Батуми',
    'city.gonio': 'Гонио',
    'city.kakheti': 'Кахетия',
    'city.bakuriani': 'Бакуриани',
    'city.new-york': 'Нью-Йорк',
    'city.miami': 'Майами',
    'city.dubai': 'Дубай',
    'city.limassol': 'Лимасол',
    'city.paphos': 'Пафос',
    'city.athens': 'Афины',
    'city.mykonos': 'Миконос',

    // ── Недавно просмотренные ──────────────────────────────
    'recent.title': 'Недавно просмотренные',
    'recent.clear': 'Очистить',
  },

  en: {
    // ── Meta ───────────────────────────────────────────────
    'meta.lang': 'en',
    'meta.dir': 'ltr',
    'meta.title_home': 'Georgia Real Estate — Property in Georgia',
    'meta.title_catalog_h1': 'Our Projects',
    'meta.title_catalog': 'Georgia Real Estate — Our Projects',
    'meta.desc': 'Buy or rent property in Georgia. Apartments in Tbilisi, Batumi, Gonio. Investment with 8–14% yield.',

    // ── Navigation ─────────────────────────────────────────
    'nav.home': 'Home',
    'nav.team': 'Team',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',
    'nav.phone': '+995 32 2 123 456',

    // ── Hero ───────────────────────────────────────────────
    'hero.eyebrow': 'International Developer',
    'hero.title': 'Real Estate<br>in Georgia',
    'hero.sub': 'For living and investment',
    'hero.cta_catalog': 'Browse Properties',
    'hero.cta_contact': 'Contact Us',

    // ── Filter ─────────────────────────────────────────────
    'filter.buy': 'Buy',
    'filter.rent': 'Rent',
    'filter.country': 'Country',
    'filter.city': 'City',
    'filter.type': 'Property type',
    'filter.type_all': 'Any',
    'filter.type_apartment': 'Apartment',
    'filter.type_apart': 'Apartments',
    'filter.type_villa': 'Villa',
    'filter.type_commercial': 'Commercial',
    'filter.name_label': 'Search by name',
    'filter.name_placeholder': 'Name, district, type…',
    'filter.status': 'Status',
    'filter.status_all': 'Any status',
    'filter.status_ready': 'Ready to move in',
    'filter.status_build': 'Under construction',
    'filter.status_invest': 'Investment',
    'filter.price': 'Price, $',
    'filter.area': 'Area, m²',
    'filter.rooms': 'Bedrooms',
    'filter.rooms_any': 'Any',
    'filter.from': 'From',
    'filter.to': 'To',
    'filter.reset': 'Reset',
    'filter.find': 'Search',

    // ── Directions ─────────────────────────────────────────
    'directions.title': 'Popular destinations',
    'directions.see_all': 'See all',
    'directions.georgia_cities': 'Tbilisi, Batumi, Bakuriani',
    'directions.usa_cities': 'New York, Miami',
    'directions.uae_cities': 'Dubai',
    'directions.cyprus_cities': 'Limassol, Paphos',
    'directions.greece_cities': 'Athens, Mykonos',

    // ── About ──────────────────────────────────────────────
    'about.title': 'About us',
    'about.desc': 'We are a team of professionals with years of experience in the Georgian real estate market. Our mission is to help you find the perfect property for living, leisure or investment.',
    'about.btn': 'Learn more about us',
    'about.stat_years': 'years on the market',
    'about.stat_clients': 'satisfied clients',
    'about.stat_objects': 'Total properties listed',
    'about.stat_locations': 'prime locations across Georgia',

    // ── Catalog ────────────────────────────────────────────
    'catalog.buy_title': 'Top properties for sale in Georgia',
    'catalog.rent_title': 'Top rental properties in Georgia',
    'catalog.see_all': 'See all',
    'catalog.found': 'Properties found:',
    'catalog.empty_title': 'No properties found',
    'catalog.empty_sub': 'Try adjusting your search filters or reset them',
    'catalog.sort_top': 'Top sales',
    'catalog.sort_price_asc': 'Price: low to high',
    'catalog.sort_price_desc': 'Price: high to low',
    'catalog.sort_name_az': 'Name: A–Z',
    'catalog.sort_name_za': 'Name: Z–A',

    // ── Card ───────────────────────────────────────────────
    'card.details': 'View Details',
    'card.ask': 'Enquire',
    'card.top': '★ TOP',
    'card.roi_year': '/ yr',
    'card.savings_from': 'off initial price',
    'card.sqm_abbr': 'm²',
    'card.rooms_abbr': 'bd.',
    'card.floor_abbr': 'fl.',

    // ── Badges ─────────────────────────────────────────────
    'badge.sale': 'For Sale',
    'badge.rent': 'For Rent',
    'badge.invest': 'Investment',
    'badge.ready': 'Ready to move in',
    'badge.build': 'Under construction',
    'badge.exclusive': 'Exclusive',
    'badge.rent_long': 'Long-term rental',
    'badge.rent_short': 'Short-term rental',

    // ── Detail page ────────────────────────────────────────
    'detail.invest_title': 'Investment potential',
    'detail.invest_growth': 'Expected price growth:',
    'detail.invest_roi': 'Rental income:',
    'detail.invest_payback': 'Payback period:',
    'detail.spec_location': 'Location',
    'detail.spec_area': 'Area',
    'detail.spec_rooms': 'Bedrooms',
    'detail.spec_floor': 'Floor',
    'detail.spec_type': 'Type',
    'detail.spec_year': 'Year built',
    'detail.video_label': 'Project video tour',
    'detail.nearby_title': 'Nearby',
    'detail.all_photos': 'All photos',
    'detail.related_title': 'More in {city}',
    'detail.related_see_all': 'See all',
    'detail.back': '← Back to catalog',
    'detail.rent_title': 'About this rental',
    'detail.rent_deposit': 'Deposit:',
    'detail.rent_term': 'Minimum stay:',
    'detail.rent_utilities': 'Utilities:',
    'detail.rent_utilities_val': 'included',

    // ── Calculator ─────────────────────────────────────────
    'calc.title': 'Mortgage Calculator',
    'calc.down': 'Down payment',
    'calc.term': 'Loan term',
    'calc.rate': 'Interest rate',
    'calc.installment': 'Installment',
    'calc.term_from': '1 year',
    'calc.term_to': '30 years',
    'calc.payment_label': 'Monthly payment',
    'calc.disclaimer': 'Estimate only. Exact terms — contact our bank partner.',
    'calc.installment_sub': '0% installment for {term} {word}',
    'calc.mortgage_sub': 'Down payment {down} · Loan {loan}',

    // ── Popup ──────────────────────────────────────────────
    'popup.eyebrow': 'Leave a request',
    'popup.title': 'Get a consultation',
    'popup.sub': 'Our specialist will contact you at a convenient time',
    'popup.name_label': 'Your name',
    'popup.name_placeholder': 'John Smith',
    'popup.phone_label': 'Phone / WhatsApp',
    'popup.phone_placeholder': '+1 (555) 000-0000',
    'popup.time_label': 'Preferred time',
    'popup.time_morning': 'Morning (9–12)',
    'popup.time_day': 'Afternoon (12–17)',
    'popup.time_evening': 'Evening (17–21)',
    'popup.whatsapp': 'WhatsApp',
    'popup.telegram': 'Telegram',
    'popup.call': 'Call',
    'popup.submit': 'Send request',
    'popup.success_title': 'Request received!',
    'popup.success_sub': 'Our manager will contact you at the agreed time.',
    'popup.close': 'Close',

    // ── Testimonials ───────────────────────────────────────
    'testi.eyebrow': 'Testimonials',
    'testi.title': 'Trusted by<br><span>partners and investors</span>',
    'testi.tag_investor': 'Investor',
    'testi.tag_partner': 'Partner',
    'testi.tag_client': 'Client',
    'testi.q1': 'The Georgia Real Estate team guided us through the entire process of buying an apartment in Batumi — from the first call to getting the keys. Professionalism and transparency at every step.',
    'testi.q1_name': 'Alexey Morozov',
    'testi.q1_role': 'Private investor, Moscow',
    'testi.q2': 'We have been working with the company for three years. A reliable partner for large-scale investments in Georgian real estate. We especially value the legal purity of transactions and after-sales support.',
    'testi.q2_name': 'David Kvaratskhelia',
    'testi.q2_role': 'CEO, KvGroup Invest',
    'testi.q3': 'I was looking for sea-view apartments for family holidays and rental. The manager found the perfect option in Gonio — I am already earning 12% per year. I recommend it to everyone thinking about investments.',
    'testi.q3_name': 'Olga Stepanova',
    'testi.q3_role': 'Entrepreneur, Kyiv',
    'testi.q4': 'We purchased a commercial space in Tbilisi to open a restaurant. Georgia Real Estate supported not only the deal, but also helped with business registration.',
    'testi.q4_name': 'Mikhail Tetradze',
    'testi.q4_role': 'Restaurateur, Tbilisi',
    'testi.q5': 'I refer all my clients here. The best property database in the Georgian market, fair commissions and lightning-fast team response.',
    'testi.q5_name': 'Nino Bakradze',
    'testi.q5_role': 'Director, Prime Realty GE',
    'testi.q6': 'We are diversifying our portfolio with international real estate. Georgia turned out to be the best choice — stable growth, accessible entry. The team provided comprehensive analytical materials already at the negotiation stage.',
    'testi.q6_name': 'Roman Shevchenko',
    'testi.q6_role': 'Asset Manager, Dubai',

    // ── Footer ─────────────────────────────────────────────
    'footer.brand_desc': 'Your trusted partner in Georgian real estate.',
    'footer.menu_title': 'Menu',
    'footer.menu_about': 'About us',
    'footer.menu_catalog': 'Properties',
    'footer.menu_services': 'Services',
    'footer.menu_blog': 'Blog',
    'footer.menu_contact': 'Contact',
    'footer.menu_legal': 'Deal, taxes & residency',
    'footer.services_title': 'Services',
    'footer.services_1': 'Property selection',
    'footer.services_2': 'Legal support',
    'footer.services_3': 'Property management',
    'footer.services_4': 'Investment consulting',
    'footer.contacts_title': 'Contacts',
    'footer.address': 'Tbilisi,<br>37 Chaokaidze St.',
    'footer.copyright': '© 2026 Georgia Real Estate',
    'footer.privacy': 'Privacy Policy',

    // ── Team page ──────────────────────────────────────────
    'team.hero_title': 'Our team',
    'team.role_ceo': 'CEO',
    'team.role_sales': 'Head of Sales',
    'team.role_lawyer': 'Legal Counsel',
    'team.role_agent': 'Real Estate Agent',
    'team.role_marketing': 'Marketing Director',
    'team.agent_ask': 'Ask a question',

    // ── Blog page ──────────────────────────────────────────
    'blog.hero_title': 'Blog',
    'blog.hero_sub': 'Articles about real estate, investment and life in Georgia',
    'blog.read_more': 'Read more',
    'blog.tag_all': 'All',
    'blog.tag_invest': 'Investment',
    'blog.tag_market': 'Market',
    'blog.tag_life': 'Life in Georgia',
    'blog.tag_legal': 'Legal',

    // ── Contact page ───────────────────────────────────────
    'contact.hero_title': 'Contact us',
    'contact.hero_sub': 'We are ready to answer any questions',
    'contact.form_name': 'Your name',
    'contact.form_email': 'Email',
    'contact.form_phone': 'Phone',
    'contact.form_message': 'Message',
    'contact.form_submit': 'Send',
    'contact.office_title': 'Our office',
    'contact.work_hours': 'Mon–Fri: 9:00–19:00',

    // ── Favorites ──────────────────────────────────────────
    'favorites.title': 'Saved properties',
    'favorites.empty': 'You have not saved any properties yet',
    'favorites.empty_sub': 'Click ♡ on any property card to save it here',

    // ── History ────────────────────────────────────────────
    'history.title': 'Viewing history',
    'history.empty': 'You have not viewed any properties yet',
    'history.clear': 'Clear history',

    // ── Floating buttons ───────────────────────────────────
    'floating.consult': 'Online consultation',
    'floating.top': 'Back to top',

    // ── Countries and cities ───────────────────────────────
    'country.all': '🌍 All countries',
    'country.georgia': '🇬🇪 Georgia',
    'country.usa': '🇺🇸 USA',
    'country.uae': '🇦🇪 UAE',
    'country.cyprus': '🇨🇾 Cyprus',
    'country.greece': '🇬🇷 Greece',
    'city.all': 'Any city',
    'city.tbilisi': 'Tbilisi',
    'city.batumi': 'Batumi',
    'city.gonio': 'Gonio',
    'city.kakheti': 'Kakheti',
    'city.bakuriani': 'Bakuriani',
    'city.new-york': 'New York',
    'city.miami': 'Miami',
    'city.dubai': 'Dubai',
    'city.limassol': 'Limassol',
    'city.paphos': 'Paphos',
    'city.athens': 'Athens',
    'city.mykonos': 'Mykonos',

    // ── Recently viewed ────────────────────────────────────
    'recent.title': 'Recently viewed',
    'recent.clear': 'Clear',
  },

  he: {
    // ── מטא ───────────────────────────────────────────────
    'meta.lang': 'he',
    'meta.dir': 'rtl',
    'meta.title_home': 'Georgia Real Estate — נדל"ן בגאורגיה',
    'meta.title_catalog_h1': 'הפרויקטים שלנו',
    'meta.title_catalog': 'Georgia Real Estate — הפרויקטים שלנו',
    'meta.desc': 'קנה או שכור נדל"ן בגאורגיה. דירות בטביליסי, באטומי, גוניו. השקעה עם תשואה של 8–14%.',

    // ── ניווט ──────────────────────────────────────────────
    'nav.home': 'ראשי',
    'nav.team': 'צוות',
    'nav.projects': 'פרויקטים',
    'nav.blog': 'בלוג',
    'nav.contact': 'צור קשר',
    'nav.phone': '+995 32 2 123 456',

    // ── Hero ───────────────────────────────────────────────
    'hero.eyebrow': 'יזם בינלאומי',
    'hero.title': 'נדל"ן<br>בגאורגיה',
    'hero.sub': 'למגורים ולהשקעה',
    'hero.cta_catalog': 'לצפייה בנכסים',
    'hero.cta_contact': 'צור קשר',

    // ── פילטר ─────────────────────────────────────────────
    'filter.buy': 'קנייה',
    'filter.rent': 'שכירות',
    'filter.country': 'מדינה',
    'filter.city': 'עיר',
    'filter.type': 'סוג נכס',
    'filter.type_all': 'הכל',
    'filter.type_apartment': 'דירה',
    'filter.type_apart': 'אפרטמנט',
    'filter.type_villa': 'וילה',
    'filter.type_commercial': 'מסחרי',
    'filter.name_label': 'חיפוש לפי שם',
    'filter.name_placeholder': 'שם, שכונה, סוג…',
    'filter.status': 'סטטוס',
    'filter.status_all': 'כל הסטטוסים',
    'filter.status_ready': 'מוכן למגורים',
    'filter.status_build': 'בשלבי בנייה',
    'filter.status_invest': 'השקעה',
    'filter.price': 'מחיר, $',
    'filter.area': 'שטח, מ"ר',
    'filter.rooms': 'חדרי שינה',
    'filter.rooms_any': 'הכל',
    'filter.from': 'מ-',
    'filter.to': 'עד',
    'filter.reset': 'אפס',
    'filter.find': 'חפש',

    // ── יעדים ─────────────────────────────────────────────
    'directions.title': 'יעדים פופולריים',
    'directions.see_all': 'ראה הכל',
    'directions.georgia_cities': 'טביליסי, באטומי, בקוריאני',
    'directions.usa_cities': 'ניו יורק, מיאמי',
    'directions.uae_cities': 'דובאי',
    'directions.cyprus_cities': 'לימסול, פאפוס',
    'directions.greece_cities': 'אתונה, מיקונוס',

    // ── אודות ─────────────────────────────────────────────
    'about.title': 'אודותינו',
    'about.desc': 'אנחנו צוות של אנשי מקצוע עם ניסיון רב שנים בשוק הנדל"ן הגאורגי. המשימה שלנו — לעזור לך למצוא את הנכס המושלם למגורים, לנופש או להשקעה.',
    'about.btn': 'עוד עלינו',
    'about.stat_years': 'שנות ניסיון',
    'about.stat_clients': 'לקוחות מרוצים',
    'about.stat_objects': 'סך הנכסים המוצעים',
    'about.stat_locations': 'מיקומים מובחרים בגאורגיה',

    // ── קטלוג ─────────────────────────────────────────────
    'catalog.buy_title': 'נכסים מובילים למכירה בגאורגיה',
    'catalog.rent_title': 'נכסים מובילים להשכרה בגאורגיה',
    'catalog.see_all': 'ראה הכל',
    'catalog.found': 'נכסים נמצאו:',
    'catalog.empty_title': 'לא נמצאו נכסים',
    'catalog.empty_sub': 'נסה לשנות את פרמטרי החיפוש או אפס את הפילטרים',
    'catalog.sort_top': 'הנמכרים ביותר',
    'catalog.sort_price_asc': 'מחיר: מנמוך לגבוה',
    'catalog.sort_price_desc': 'מחיר: מגבוה לנמוך',
    'catalog.sort_name_az': 'שם: א-ת',
    'catalog.sort_name_za': 'שם: ת-א',

    // ── כרטיס ─────────────────────────────────────────────
    'card.details': 'פרטים נוספים',
    'card.ask': 'שאל',
    'card.top': '★ TOP',
    'card.roi_year': '/ שנה',
    'card.savings_from': 'הנחה ממחיר מקורי',
    'card.sqm_abbr': 'מ"ר',
    'card.rooms_abbr': "חד'",
    'card.floor_abbr': 'קומה',

    // ── תגיות ─────────────────────────────────────────────
    'badge.sale': 'למכירה',
    'badge.rent': 'להשכרה',
    'badge.invest': 'השקעה',
    'badge.ready': 'מוכן למגורים',
    'badge.build': 'בשלבי בנייה',
    'badge.exclusive': 'בלעדי',
    'badge.rent_long': 'שכירות ארוכת טווח',
    'badge.rent_short': 'שכירות קצרת טווח',

    // ── דף נכס ────────────────────────────────────────────
    'detail.invest_title': 'פוטנציאל השקעה',
    'detail.invest_growth': 'צמיחת מחיר צפויה:',
    'detail.invest_roi': 'הכנסה משכירות:',
    'detail.invest_payback': 'תקופת החזר:',
    'detail.spec_location': 'מיקום',
    'detail.spec_area': 'שטח',
    'detail.spec_rooms': 'חדרי שינה',
    'detail.spec_floor': 'קומה',
    'detail.spec_type': 'סוג',
    'detail.spec_year': 'שנת בנייה',
    'detail.video_label': 'סרטון הצגת הפרויקט',
    'detail.nearby_title': 'בסביבה',
    'detail.all_photos': 'כל התמונות',
    'detail.related_title': 'עוד נכסים ב{city}',
    'detail.related_see_all': 'ראה הכל',
    'detail.back': '← חזרה לקטלוג',
    'detail.rent_title': 'על ההשכרה',
    'detail.rent_deposit': 'פיקדון:',
    'detail.rent_term': 'שהייה מינימלית:',
    'detail.rent_utilities': 'חשבונות:',
    'detail.rent_utilities_val': 'כלול',

    // ── מחשבון ────────────────────────────────────────────
    'calc.title': 'מחשבון משכנתא',
    'calc.down': 'מקדמה',
    'calc.term': 'תקופת הלוואה',
    'calc.rate': 'ריבית',
    'calc.installment': 'תשלומים',
    'calc.term_from': 'שנה 1',
    'calc.term_to': '30 שנים',
    'calc.payment_label': 'תשלום חודשי',
    'calc.disclaimer': 'אומדן בלבד. תנאים מדויקים — אצל הבנק השותף.',
    'calc.installment_sub': 'תשלומים ללא ריבית ל-{term} שנים',
    'calc.mortgage_sub': 'מקדמה {down} · הלוואה {loan}',

    // ── פופאפ ─────────────────────────────────────────────
    'popup.eyebrow': 'השאר פנייה',
    'popup.title': 'קבל ייעוץ',
    'popup.sub': 'המומחה שלנו יצור איתך קשר בזמן נוח',
    'popup.name_label': 'שמך',
    'popup.name_placeholder': 'ישראל ישראלי',
    'popup.phone_label': 'טלפון / WhatsApp',
    'popup.phone_placeholder': '+972 50 000 0000',
    'popup.time_label': 'זמן מועדף',
    'popup.time_morning': 'בוקר (9–12)',
    'popup.time_day': 'צהריים (12–17)',
    'popup.time_evening': 'ערב (17–21)',
    'popup.whatsapp': 'WhatsApp',
    'popup.telegram': 'Telegram',
    'popup.call': 'שיחה',
    'popup.submit': 'שלח פנייה',
    'popup.success_title': 'הפנייה התקבלה!',
    'popup.success_sub': 'המנהל שלנו ייצור איתך קשר בזמן שסוכם.',
    'popup.close': 'סגור',

    // ── המלצות ────────────────────────────────────────────
    'testi.eyebrow': 'המלצות',
    'testi.title': 'סומכים עלינו<br><span>שותפים ומשקיעים</span>',
    'testi.tag_investor': 'משקיע',
    'testi.tag_partner': 'שותף',
    'testi.tag_client': 'לקוח',
    'testi.q1': 'צוות Georgia Real Estate ליווה אותנו לאורך כל תהליך רכישת הדירה בבאטומי — מהשיחה הראשונה ועד קבלת המפתחות. מקצועיות ושקיפות בכל שלב.',
    'testi.q1_name': 'אלכסיי מורוזוב',
    'testi.q1_role': 'משקיע פרטי, מוסקבה',
    'testi.q2': 'אנחנו עובדים עם החברה כבר שלוש שנים. שותף אמין להשקעות גדולות בנדל"ן הגאורגי. אנחנו מעריכים במיוחד את הניקיון המשפטי של העסקאות.',
    'testi.q2_name': 'David Kvaratskhelia',
    'testi.q2_role': 'CEO, KvGroup Invest',
    'testi.q3': 'חיפשתי דירות עם נוף לים לנופש משפחתי והשכרה. המנהל מצא את הנכס המושלם בגוניו — כבר מקבלת 12% לשנה.',
    'testi.q3_name': 'אולגה סטפנובה',
    'testi.q3_role': 'יזמת, קייב',
    'testi.q4': 'רכשנו שטח מסחרי בטביליסי לפתיחת מסעדה. Georgia Real Estate ליוו לא רק את העסקה אלא גם עזרו ברישום העסק.',
    'testi.q4_name': 'מיכאיל טטראדזה',
    'testi.q4_role': 'מסעדן, טביליסי',
    'testi.q5': 'אני מפנה את כל הלקוחות שלי לכאן. מסד הנתונים הטוב ביותר של נכסים בשוק הגאורגי, עמלות הוגנות ותגובה מהירה של הצוות.',
    'testi.q5_name': 'Nino Bakradze',
    'testi.q5_role': 'מנהלת, Prime Realty GE',
    'testi.q6': 'אנחנו מגוונים את תיק ההשקעות עם נדל"ן בינלאומי. גאורגיה הוכחה כבחירה הטובה ביותר — צמיחה יציבה, כניסה נגישה.',
    'testi.q6_name': 'רומן שבצ\'נקו',
    'testi.q6_role': 'מנהל נכסים, דובאי',

    // ── פוטר ──────────────────────────────────────────────
    'footer.brand_desc': 'השותף האמין שלך בנדל"ן הגאורגי.',
    'footer.menu_title': 'תפריט',
    'footer.menu_about': 'אודות',
    'footer.menu_catalog': 'נכסים',
    'footer.menu_services': 'שירותים',
    'footer.menu_blog': 'בלוג',
    'footer.menu_contact': 'צור קשר',
    'footer.menu_legal': 'עסקה, מיסים ורישיון שהייה',
    'footer.services_title': 'שירותים',
    'footer.services_1': 'בחירת נכס',
    'footer.services_2': 'ליווי משפטי',
    'footer.services_3': 'ניהול נכס',
    'footer.services_4': 'ייעוץ השקעות',
    'footer.contacts_title': 'יצירת קשר',
    'footer.address': 'טביליסי,<br>רחוב צ\'אוקאידזה 37',
    'footer.copyright': '© 2026 Georgia Real Estate',
    'footer.privacy': 'מדיניות פרטיות',

    // ── דף צוות ───────────────────────────────────────────
    'team.hero_title': 'הצוות שלנו',
    'team.role_ceo': 'מנכ"ל',
    'team.role_sales': 'ראש מחלקת מכירות',
    'team.role_lawyer': 'יועץ משפטי',
    'team.role_agent': 'סוכן נדל"ן',
    'team.role_marketing': 'מנהל שיווק',
    'team.agent_ask': 'שאל שאלה',

    // ── דף בלוג ───────────────────────────────────────────
    'blog.hero_title': 'בלוג',
    'blog.hero_sub': 'מאמרים על נדל"ן, השקעות וחיים בגאורגיה',
    'blog.read_more': 'קרא עוד',
    'blog.tag_all': 'הכל',
    'blog.tag_invest': 'השקעות',
    'blog.tag_market': 'שוק',
    'blog.tag_life': 'חיים בגאורגיה',
    'blog.tag_legal': 'משפטי',

    // ── דף צור קשר ────────────────────────────────────────
    'contact.hero_title': 'צור קשר',
    'contact.hero_sub': 'אנחנו מוכנים לענות על כל שאלה',
    'contact.form_name': 'שמך',
    'contact.form_email': 'אימייל',
    'contact.form_phone': 'טלפון',
    'contact.form_message': 'הודעה',
    'contact.form_submit': 'שלח',
    'contact.office_title': 'המשרד שלנו',
    'contact.work_hours': 'ב-ו: 9:00–19:00',

    // ── מועדפים ───────────────────────────────────────────
    'favorites.title': 'נכסים שמורים',
    'favorites.empty': 'עדיין לא שמרת נכסים',
    'favorites.empty_sub': 'לחץ על ♡ בכרטיס נכס כלשהו כדי לשמור אותו כאן',

    // ── היסטוריה ──────────────────────────────────────────
    'history.title': 'היסטוריית צפייה',
    'history.empty': 'עדיין לא צפית בנכסים',
    'history.clear': 'נקה היסטוריה',

    // ── כפתורים צפים ──────────────────────────────────────
    'floating.consult': 'ייעוץ מקוון',
    'floating.top': 'חזרה למעלה',

    // ── מדינות וערים ──────────────────────────────────────
    'country.all': '🌍 כל המדינות',
    'country.georgia': '🇬🇪 גאורגיה',
    'country.usa': '🇺🇸 ארה"ב',
    'country.uae': '🇦🇪 איחוד האמירויות',
    'country.cyprus': '🇨🇾 קפריסין',
    'country.greece': '🇬🇷 יוון',
    'city.all': 'כל עיר',
    'city.tbilisi': 'טביליסי',
    'city.batumi': 'באטומי',
    'city.gonio': 'גוניו',
    'city.kakheti': 'קאחתי',
    'city.bakuriani': 'בקוריאני',
    'city.new-york': 'ניו יורק',
    'city.miami': 'מיאמי',
    'city.dubai': 'דובאי',
    'city.limassol': 'לימסול',
    'city.paphos': 'פאפוס',
    'city.athens': 'אתונה',
    'city.mykonos': 'מיקונוס',

    // ── נצפו לאחרונה ──────────────────────────────────────
    'recent.title': 'נצפו לאחרונה',
    'recent.clear': 'נקה',
  }
};

/**
 * GRE_T — функция перевода
 * WP-аналог: <?php _e('key', 'gre') ?>
 *
 * @param {string} key    — ключ перевода
 * @param {object} params — {placeholder: value} для подстановки
 * @returns {string}
 */
window.GRE_T = function(key, params) {
  var lang = localStorage.getItem('gre_lang') || 'ru';
  var dict = window.GRE_TRANSLATIONS[lang] || window.GRE_TRANSLATIONS['ru'];
  var val  = dict[key] !== undefined ? dict[key] : (window.GRE_TRANSLATIONS['ru'][key] || key);
  if (params) {
    val = val.replace(/\{(\w+[-\w]*)\}/g, function(_, k) {
      return params[k] !== undefined ? params[k] : '{' + k + '}';
    });
  }
  return val;
};
