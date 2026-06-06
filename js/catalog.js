//  ЕДИНАЯ БАЗА ОБЪЕКТОВ
// ═══════════════════════════════════
const MAP_PROPERTIES = [
  {
    id: 'batumi-grand',
    city: 'batumi', cityLabel: 'Батуми', country: 'all',
    lat: 41.6418, lng: 41.6340,
    name: 'ЖК «Гранд Панорама Батуми»',
    price: '$125,000', area: '45', rooms: '1', floor: '12',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'],
    desc: 'Современный жилой комплекс с панорамными видами на Чёрное море. Полная чистовая отделка, подземный паркинг, бассейн. Идеально для постоянного проживания и сдачи в аренду.',
    roi: '10–12%', growth: '12–15%', payback: '8–10 лет',
    specs: '45 м² · 1 спальня · 12 этаж',
  },
  {
    id: 'batumi-rustaveli',
    city: 'batumi', cityLabel: 'Батуми', country: 'all',
    lat: 41.6440, lng: 41.6370,
    name: 'Апартаменты на Руставели, Батуми',
    price: '$89,000', area: '38', rooms: '1', floor: '7',
    deal: 'buy',
        badge: 'badge-build', badgeText: 'На стадии строительства',
    status: 'construction',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Апартаменты в строящемся комплексе на центральном бульваре Батуми. Сдача в 2025 году. Отличная инвестиционная возможность на стадии котлована.',
    roi: '12–14%', growth: '18–22%', payback: '7–9 лет',
    specs: '38 м² · 1 спальня · 7 этаж',
  },
  {
    id: 'tbilisi-elite',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'all',
    lat: 41.6938, lng: 44.8015,
    name: 'Элитная квартира в центре Тбилиси',
    price: '$210,000', area: '210', rooms: '2', floor: '6',
    deal: 'buy',
        badge: 'badge-build', badgeText: 'На стадии строительства',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'],
    desc: 'Просторная квартира в историческом центре Тбилиси. Высокие потолки, панорамные окна, вид на старый город. Премиальная отделка под заказ.',
    roi: '8–10%', growth: '15–20%', payback: '9–11 лет',
    specs: '210 м² · 2 спальни · 6 этаж',
  },
  {
    id: 'tbilisi-penthouse',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'all',
    lat: 41.7000, lng: 44.8130,
    name: 'Пентхаус «Царская Высота», Тбилиси',
    price: '$650,000', area: '310', rooms: '4', floor: '22',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Эксклюзивный пентхаус на последнем этаже с террасой 80 м² и 360° видом на Тбилиси и горы Кавказа. Умный дом, лифт прямо в квартиру, консьерж-сервис.',
    roi: '6–8%', growth: '10–14%', payback: '12–14 лет',
    specs: '310 м² · 4 спальни · 22 этаж',
  },
  {
    id: 'gonio-coast',
    city: 'gonio', cityLabel: 'Гонио', country: 'all',
    lat: 41.5300, lng: 41.6000,
    name: 'Апартаменты у моря, Gonio Coast',
    price: '$98,000', area: '52', rooms: '1', floor: '5',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop'],
    desc: 'Апарт-отель в 50 метрах от моря в Гонио. Управляющая компания берёт на себя сдачу в аренду — пассивный доход без участия владельца.',
    roi: '12–15%', growth: '14–18%', payback: '7–8 лет',
    specs: '52 м² · 1 спальня · 5 этаж',
  },
  {
    id: 'bakuriani-hills',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'all',
    lat: 41.7500, lng: 43.5200,
    name: 'Коттеджный комплекс «Бакуриани Хиллс»',
    price: '$195,000', area: '150', rooms: '3', floor: '2',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'construction',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop'],
    desc: 'Горнолыжный курорт, коттеджи у подъёмника. Высокий сезон обеспечивает загрузку 80%+. Развитая инфраструктура: рестораны, СПА, прокат снаряжения.',
    roi: '14–16%', growth: '20–25%', payback: '6–8 лет',
    specs: '150 м² · 3 спальни · 2 этажа',
  },
  {
    id: 'kakheti-alazani',
    city: 'kakheti', cityLabel: 'Кахетия', country: 'all',
    lat: 41.9000, lng: 45.3500,
    name: 'Резиденция в Алазанской Долине',
    price: '$110,000', area: '110', rooms: '2', floor: '1',
    deal: 'buy',
        badge: 'badge-build', badgeText: 'На стадии строительства',
    status: 'construction',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop'],
    desc: 'Эко-резиденция в винном регионе Грузии. Виноградники вокруг, собственный погреб, терраса с видом на горы. Идеально для загородного отдыха и агротуризма.',
    roi: '9–11%', growth: '12–16%', payback: '9–11 лет',
    specs: '110 м² · 2 спальни · 1 этаж',
  },
  {
    id: 'gonio-seaview',
    city: 'gonio', cityLabel: 'Гонио', country: 'all',
    lat: 41.5200, lng: 41.6500,
    name: 'Вилла с видом на море, Гонио',
    price: '$185,000', area: '120', rooms: '3', floor: '2',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&h=600&fit=crop'],
    desc: 'Двухэтажная вилла в тихом пригороде Батуми. Открытая терраса, панорамный вид на Чёрное море, 3 спальни, собственный сад.',
    roi: '8–10%', growth: '10–14%', payback: '10–12 лет',
    specs: '120 м² · 3 спальни · 2 этажа',
  },
  {
    id: 'bakuriani-chalet',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'all',
    lat: 41.7500, lng: 43.5300,
    name: 'Шале «Альпийский стиль», Бакуриани',
    price: '$145,000', area: '95', rooms: '2', floor: '2',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Уютное шале в горнолыжном курорте Бакуриани. Высокий арендный доход в сезон, панорамный вид на горы, камин, терраса.',
    roi: '10–13%', growth: '11–15%', payback: '8–10 лет',
    specs: '95 м² · 2 спальни · 2 этажа',
  },
  {
    id: 'limassol-apart',
    city: 'limassol', cityLabel: 'Лимасол', country: 'cyprus',
    lat: 34.6851, lng: 33.0332,
    name: 'Апартаменты в центре Лимасола',
    price: '$320,000', area: '85', rooms: '2', floor: '5',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Современные апартаменты в деловом центре Лимасола. Пешая доступность до набережной, развитая инфраструктура, вид на море.',
    roi: '6–8%', growth: '8–12%', payback: '12–14 лет',
    specs: '85 м² · 2 спальни · 5 этаж',
  },
  {
    id: 'ny-brooklyn',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.6501, lng: -73.9496,
    name: 'Таунхаус в Бруклине',
    price: '$890,000', area: '160', rooms: '3', floor: '3',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторный таунхаус в модном районе Бруклина. Три этажа, терраса на крыше, собственный гараж.',
    roi: '4–6%', growth: '5–8%', payback: '16–18 лет',
    specs: '160 м² · 3 спальни · 3 этажа',
  },
  {
    id: 'ny-manhattan',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.7128, lng: -74.0060,
    name: 'Апартаменты на Манхэттене',
    price: '$1,800,000', area: '120', rooms: '2', floor: '18',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop'],
    desc: 'Люкс-апартаменты в центре Манхэттена с видом на Центральный парк. Консьерж, тренажёрный зал, выход на террасу.',
    roi: '5–7%', growth: '8–10%', payback: '14–16 лет',
    specs: '120 м² · 2 спальни · 18 этаж',
  },
  {
    id: 'miami-beach',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7617, lng: -80.1918,
    name: 'Вилла в Майами Бич',
    price: '$3,200,000', area: '420', rooms: '5', floor: '1',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop'],
    desc: 'Роскошная вилла с прямым выходом на пляж. Бассейн, джакузи, гараж на 3 авто. Элитный закрытый посёлок.',
    roi: '4–6%', growth: '7–9%', payback: '16–20 лет',
    specs: '420 м² · 5 спален · 1 этаж',
  },
  {
    id: 'dubai-marina',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.2048, lng: 55.2708,
    name: 'Апартаменты в Dubai Marina',
    price: '$450,000', area: '85', rooms: '1', floor: '24',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop'],
    desc: 'Апартаменты с видом на залив в престижном районе Dubai Marina. Полностью меблированы, управляющая компания.',
    roi: '7–9%', growth: '10–13%', payback: '11–13 лет',
    specs: '85 м² · 1 спальня · 24 этаж',
  },
  {
    id: 'dubai-palm',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.1972, lng: 55.2744,
    name: 'Пентхаус Palm Jumeirah',
    price: '$2,100,000', area: '280', rooms: '3', floor: '15',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop'],
    desc: 'Пентхаус на пальмовом острове с частным бассейном и причалом для яхты. Один из самых знаковых адресов Дубая.',
    roi: '6–8%', growth: '9–12%', payback: '12–15 лет',
    specs: '280 м² · 3 спальни · 15 этаж',
  },
  {
    id: 'limassol-villa',
    city: 'limassol', cityLabel: 'Лимасол', country: 'cyprus',
    lat: 34.6841, lng: 33.0440,
    name: 'Вилла у моря, Лимасол',
    price: '$780,000', area: '220', rooms: '4', floor: '1',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Вилла с прямым выходом к морю в Лимасоле. Частный бассейн, ландшафтный сад, гараж. Возможность получения ВНЖ.',
    roi: '5–7%', growth: '8–11%', payback: '13–15 лет',
    specs: '220 м² · 4 спальни · 1 этаж',
  },
  {
    id: 'athens-apart',
    city: 'athens', cityLabel: 'Афины', country: 'greece',
    lat: 37.9838, lng: 23.7275,
    name: 'Апартаменты в Афинах',
    price: '$320,000', area: '95', rooms: '2', floor: '4',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Апартаменты в историческом центре Афин рядом с Акрополем. Высокий туристический поток обеспечивает стабильный доход от краткосрочной аренды.',
    roi: '7–9%', growth: '9–12%', payback: '11–13 лет',
    specs: '95 м² · 2 спальни · 4 этаж',
  },
  {
    id: 'mykonos-villa',
    city: 'mykonos', cityLabel: 'Миконос', country: 'greece',
    lat: 37.4467, lng: 25.3289,
    name: 'Вилла на Миконосе',
    price: '$1,500,000', area: '300', rooms: '4', floor: '1',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'],
    desc: 'Вилла в традиционном кикладском стиле с видом на Эгейское море. Бассейн с инфинити, терраса, летняя кухня. Пик сезона — июнь–сентябрь.',
    roi: '8–10%', growth: '11–14%', payback: '10–12 лет',
    specs: '300 м² · 4 спальни · 1 этаж',
  },
  // ── АРЕНДА ──
  {
    id: 'rent-tbilisi-vera',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'all',
    lat: 41.6990, lng: 44.7980,
    name: 'Апартаменты в районе Вера, Тбилиси',
    price: '$1,200/мес', area: '65', rooms: '2', floor: '4',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Уютные апартаменты в престижном районе Вера. Полностью меблированы, современная техника, интернет включён. Тихий двор, 5 минут пешком до Руставели.',
    roi: '—', growth: '—', payback: '—',
    specs: '65 м² · 2 спальни · 4 этаж',
  },
  {
    id: 'rent-batumi-sea',
    city: 'batumi', cityLabel: 'Батуми', country: 'all',
    lat: 41.6450, lng: 41.6380,
    name: 'Студия с видом на море, Батуми',
    price: '$800/мес', area: '35', rooms: '1', floor: '9',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'],
    desc: 'Светлая студия с панорамным видом на Чёрное море. Новый ремонт, полностью оснащена. Идеально для краткосрочного и долгосрочного проживания.',
    roi: '—', growth: '—', payback: '—',
    specs: '35 м² · 1 спальня · 9 этаж',
  },
  {
    id: 'rent-tbilisi-saburtalo',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'all',
    lat: 41.7200, lng: 44.7650,
    name: 'Квартира в Сабуртало, Тбилиси',
    price: '$950/мес', area: '80', rooms: '3', floor: '6',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторная 3-комнатная квартира в Сабуртало. Развитая инфраструктура, рядом метро, школы и торговые центры. Долгосрочная аренда.',
    roi: '—', growth: '—', payback: '—',
    specs: '80 м² · 3 спальни · 6 этаж',
  },
  {
    id: 'rent-bakuriani-chalet',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'all',
    lat: 41.7500, lng: 43.5300,
    name: 'Шале в Бакуриани, посуточно',
    price: '$120/сутки', area: '90', rooms: '3', floor: '2',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Горное шале в Бакуриани. Камин, сауна, терраса с видом на горы. Посуточная и понедельная аренда в горнолыжный сезон.',
    roi: '—', growth: '—', payback: '—',
    specs: '90 м² · 3 спальни · 2 этажа',
  },
  {
    id: 'rent-dubai',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.2048, lng: 55.2708,
    name: 'Апартаменты в Дубай Марина',
    price: '$3,500/мес', area: '95', rooms: '2', floor: '18',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Меблированные апартаменты в Дубай Марина с видом на яхтенную гавань. Бассейн, фитнес, консьерж-сервис в доме.',
    roi: '—', growth: '—', payback: '—',
    specs: '95 м² · 2 спальни · 18 этаж',
  },
  {
    id: 'rent-ny-manhattan',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.7549, lng: -73.9840,
    name: 'Апартаменты на Манхэттене, Мидтаун',
    price: '$5,800/мес', area: '75', rooms: '2', floor: '22',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Меблированные апартаменты в центре Манхэттена с видом на Central Park. Консьерж 24/7, фитнес, терраса на крыше. Краткосрочная и долгосрочная аренда.',
    roi: '—', growth: '—', payback: '—',
    specs: '75 м² · 2 спальни · 22 этаж',
  },
  {
    id: 'rent-ny-brooklyn',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.6782, lng: -73.9442,
    name: 'Лофт в Бруклине, DUMBO',
    price: '$4,200/мес', area: '110', rooms: '2', floor: '3',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторный лофт в модном районе DUMBO с кирпичными стенами и высокими потолками. Вид на Бруклинский мост, 2 спальни, паркинг включён.',
    roi: '—', growth: '—', payback: '—',
    specs: '110 м² · 2 спальни · 3 этаж',
  },
  {
    id: 'rent-miami-beach',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7617, lng: -80.1918,
    name: 'Вилла у океана, Майами Бич',
    price: '$8,500/мес', area: '220', rooms: '4', floor: '1',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Роскошная вилла на первой линии океана в Майами Бич. Частный пляж, бассейн с подогревом, 4 спальни, летняя кухня. Идеально для отдыха и представительских целей.',
    roi: '—', growth: '—', payback: '—',
    specs: '220 м² · 4 спальни · 1 этаж',
  },
  {
    id: 'rent-miami-downtown',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7743, lng: -80.1937,
    name: 'Апартаменты в Бrickell, Майами',
    price: '$3,800/мес', area: '85', rooms: '2', floor: '15',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'ready',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Современные апартаменты в финансовом квартале Brickell с видом на залив Бискейн. Фитнес, бассейн, консьерж, паркинг. Рядом лучшие рестораны и бизнес-центры.',
    roi: '—', growth: '—', payback: '—',
    specs: '85 м² · 2 спальни · 15 этаж',
  },
];

const COUNTRY_VIEW = {
  all:    { lat: 42.0, lng: 43.5, zoom: 7 },
  usa:    { lat: 37.0, lng: -95.0, zoom: 4 },
  uae:    { lat: 24.5, lng: 54.5, zoom: 8 },
  cyprus: { lat: 34.9, lng: 33.1, zoom: 9 },
  greece: { lat: 38.5, lng: 23.8, zoom: 6 },
};

// ── Рендер карточек каталога из базы ──
function renderCatalogGrid(countryVal, cityVal, statusVal) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  const dealType = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';

  const filtered = MAP_PROPERTIES.filter(p => {
    const md = p.deal === dealType;
    const mc = countryVal === 'all' || p.country === countryVal || (countryVal === 'all' && p.country === 'all');
    const mci = cityVal === 'all' || p.city === cityVal;
    const ms = statusVal === 'all' || p.status === statusVal;
    return md && mc && mci && ms;
  });

  // Update count
  const countEl = document.getElementById('catalogCount');
  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--gray-500);font-size:0.875rem;">По выбранным фильтрам объектов не найдено</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="catalog-card" data-city="${p.city}" data-status="${p.status}" data-id="${p.id}" onclick="showDetail('${p.id}')">
      <div style="position:relative;overflow:hidden;">
        <img class="catalog-img" src="${p.img}" alt="${p.name}">
        <span class="prop-badge ${p.badge}" style="position:absolute;top:12px;left:12px;">${p.badgeText}</span>
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city">${p.cityLabel}</div>
        <div class="catalog-name">${p.name}</div>
        <div class="catalog-price">${p.price}</div>
        <div class="catalog-specs">${p.specs}</div>
        <a class="catalog-detail-link" onclick="event.stopPropagation();showDetail('${p.id}')">Подробнее →</a>
      </div>
    </div>`).join('');
}

// ── Открыть страницу детали для конкретного объекта ──
function showDetail(id) {
  const prop = MAP_PROPERTIES.find(p => p.id === id);
  if (!prop) { showPage('detail'); return; }

  const page = document.getElementById('page-detail');

  // Build imgs array — 3 unique photos per project
  const imgs = prop.imgs || [prop.img.replace('w=600&h=375','w=900&h=600')];

  // ── Desktop gallery ──
  const mainImg = page.querySelector('.gallery-main img');
  if (mainImg) mainImg.src = imgs[0];
  const mainDiv = page.querySelector('.gallery-main');
  if (mainDiv) mainDiv.onclick = function() { openLightbox(imgs, 0); };

  const sides = page.querySelectorAll('.gallery-side');
  if (sides[0]) {
    const img1 = sides[0].querySelector('img');
    if (img1) img1.src = imgs[1] || imgs[0];
    sides[0].onclick = function() { openLightbox(imgs, 1); };
  }
  if (sides[1]) {
    const img2 = sides[1].querySelector('img');
    if (img2) img2.src = imgs[2] || imgs[0];
    sides[1].onclick = function() { openLightbox(imgs, 2); };
    const allBtn = sides[1].querySelector('.gallery-all-btn');
    if (allBtn) allBtn.onclick = function(e) { e.stopPropagation(); openLightbox(imgs, 0); };
  }

  // ── Text fields ──
  const titleEl = page.querySelector('.detail-title');
  if (titleEl) titleEl.textContent = prop.name;

  const specVals = page.querySelectorAll('.detail-spec-val');
  if (specVals[0]) specVals[0].textContent = prop.cityLabel;
  if (specVals[1]) specVals[1].textContent = prop.area + ' м²';
  if (specVals[2]) specVals[2].textContent = prop.rooms;
  if (specVals[3]) specVals[3].textContent = prop.floor;

  const descEl = page.querySelector('.detail-desc');
  if (descEl) descEl.textContent = prop.desc;

  const investRows = page.querySelectorAll('.invest-row-val');
  if (investRows[0]) investRows[0].textContent = prop.growth;
  if (investRows[1]) investRows[1].textContent = prop.roi;
  if (investRows[2]) investRows[2].textContent = prop.payback;

  // Update status badge
  const detailBadge = document.getElementById('detailBadge');
  if (detailBadge && prop.badge && prop.badgeText) {
    detailBadge.className = 'invest-badge ' + prop.badge;
    detailBadge.textContent = prop.badgeText;
  }

  showPage('detail');
  renderRelated(id);

  // ── Mobile slider ──
  if (typeof mobGalleryInit === 'function') mobGalleryInit(imgs);
}

let catalogMap = null;
let mapMarkers = [];
let mapVisible = true;

function initCatalogMap() {
  if (catalogMap) return;

  catalogMap = L.map('catalogMap', {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: false,
  }).setView([42.0, 43.5], 7);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap © CARTO'
  }).addTo(catalogMap);

  L.control.attribution({ prefix: false, position: 'bottomleft' })
    .addTo(catalogMap)
    .setPrefix('<a href="https://www.openstreetmap.org/copyright" style="font-size:9px;opacity:0.5">© OSM</a>');

  renderMapMarkers('all', 'all', 'all');
}

function clusterByProximity(props, thresholdKm = 5) {
  const clusters = [];
  const used = new Set();
  props.forEach((p, i) => {
    if (used.has(i)) return;
    const cluster = { items: [p], lat: p.lat, lng: p.lng };
    props.forEach((q, j) => {
      if (i === j || used.has(j)) return;
      const d = Math.sqrt(Math.pow((p.lat - q.lat) * 111, 2) + Math.pow((p.lng - q.lng) * 111 * Math.cos(p.lat * Math.PI / 180), 2));
      if (d < thresholdKm) { cluster.items.push(q); used.add(j); }
    });
    used.add(i);
    cluster.lat = cluster.items.reduce((s, x) => s + x.lat, 0) / cluster.items.length;
    cluster.lng = cluster.items.reduce((s, x) => s + x.lng, 0) / cluster.items.length;
    clusters.push(cluster);
  });
  return clusters;
}

function renderMapMarkers(countryVal, cityVal, statusVal) {
  if (!catalogMap) return;

  mapMarkers.forEach(m => catalogMap.removeLayer(m));
  mapMarkers = [];

  let filtered = MAP_PROPERTIES.filter(p => {
    const dealType = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';
    const matchDeal    = p.deal === dealType;
    const matchCountry = countryVal === 'all' || p.country === countryVal || (countryVal === 'all' && p.country === 'all');
    const matchCity    = cityVal === 'all' || p.city === cityVal;
    const matchStatus  = statusVal === 'all' || p.status === statusVal;
    return matchDeal && matchCountry && matchCity && matchStatus;
  });

  const clusters = clusterByProximity(filtered);

  clusters.forEach(cluster => {
    const count = cluster.items.length;
    const isCluster = count > 1;
    const size = isCluster ? (count >= 5 ? 52 : 44) : 36;
    const fontSize = isCluster ? (count >= 5 ? '14px' : '13px') : '11px';

    const icon = L.divIcon({
      className: '',
      html: `<div class="map-cluster-icon" style="width:${size}px;height:${size}px;font-size:${fontSize};">${isCluster ? count : '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'}</div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -(size / 2 + 6)],
    });

    const marker = L.marker([cluster.lat, cluster.lng], { icon });
    const mainProp = cluster.items[0];
    let popupHtml = '';

    if (isCluster) {
      const listItems = cluster.items.map(item =>
        `<div class="map-popup-row" data-id="${item.id}" style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;cursor:pointer;">
          <img src="${item.img.replace('/600/375','/120/90')}" style="width:48px;height:36px;object-fit:cover;border-radius:2px;flex-shrink:0;">
          <div>
            <div style="font-size:0.7rem;color:#C0392B;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">${item.cityLabel}</div>
            <div style="font-size:0.75rem;font-weight:600;color:#1A1A1A;line-height:1.3;">${item.name}</div>
            <div style="font-size:0.82rem;font-weight:800;color:#C0392B;">${item.price}</div>
          </div>
        </div>`
      ).join('');
      popupHtml = `
        <div style="padding:14px 16px 6px;max-height:280px;overflow-y:auto;">
          <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7A7A7A;margin-bottom:10px;">${count} объекта · ${mainProp.cityLabel}</div>
          ${listItems}
        </div>`;
    } else {
      popupHtml = `
        <img class="map-popup-img" src="${mainProp.img.replace('/600/375','/480/240')}" alt="">
        <div class="map-popup-body">
          <div class="map-popup-city">${mainProp.cityLabel}</div>
          <div class="map-popup-name">${mainProp.name}</div>
          <div class="map-popup-price">${mainProp.price}</div>
          <span class="map-popup-link map-popup-go" data-id="${mainProp.id}">Подробнее →</span>
        </div>`;
    }

    marker.bindPopup(popupHtml, { maxWidth: 260, minWidth: 240, closeButton: true });

    marker.on('popupopen', function() {
      const container = marker.getPopup().getElement();
      if (!container) return;
      container.querySelectorAll('.map-popup-go').forEach(el => {
        L.DomEvent.on(el, 'click', function(e) {
          L.DomEvent.stopPropagation(e);
          marker.closePopup();
          setTimeout(() => showDetail(el.getAttribute('data-id')), 80);
        });
      });
      container.querySelectorAll('.map-popup-row').forEach(el => {
        L.DomEvent.on(el, 'click', function(e) {
          L.DomEvent.stopPropagation(e);
          marker.closePopup();
          setTimeout(() => showDetail(el.getAttribute('data-id')), 80);
        });
      });
      const img = container.querySelector('.map-popup-img');
      if (img && mainProp.id) {
        img.style.cursor = 'pointer';
        L.DomEvent.on(img, 'click', function(e) {
          L.DomEvent.stopPropagation(e);
          marker.closePopup();
          setTimeout(() => showDetail(mainProp.id), 80);
        });
      }
    });

    marker.addTo(catalogMap);
    mapMarkers.push(marker);
  });

  if (filtered.length > 0) {
    const view = COUNTRY_VIEW[countryVal] || COUNTRY_VIEW['all'];
    if (cityVal !== 'all') {
      const bounds = L.latLngBounds(filtered.map(p => [p.lat, p.lng]));
      catalogMap.fitBounds(bounds.pad(0.8), { maxZoom: 13 });
    } else {
      catalogMap.setView([view.lat, view.lng], view.zoom, { animate: true });
    }
  }
}

function toggleCatalogMap() {
  const wrap = document.getElementById('catalogMapWrap');
  const btn  = document.getElementById('mapToggleBtn');
  const showRow = document.getElementById('mapShowRow');
  mapVisible = !mapVisible;
  if (mapVisible) {
    wrap.classList.remove('collapsed');
    showRow.classList.remove('visible');
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3V6z"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/></svg> Скрыть карту`;
    setTimeout(() => catalogMap && catalogMap.invalidateSize(), 420);
  } else {
    wrap.classList.add('collapsed');
    showRow.classList.add('visible');
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l7-3 8 3 7-3v15l-7 3-8-3-7 3V6z"/><line x1="8" y1="3" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="21"/></svg> Показать карту`;
  }
}

// Перехватываем showPage чтобы инициализировать карту при открытии каталога
const _origShowPage = showPage;
window.showPage = function(id) {
  _origShowPage(id);
  if (id === 'catalog') {
    renderCatalogGrid('all', 'all', 'all');
    setTimeout(() => {
      initCatalogMap();
      if (catalogMap) catalogMap.invalidateSize();
    }, 50);
  }
};

// ── Set actual properties count ──
(function() {
  const count = MAP_PROPERTIES.length;
  ['statObjectsCount','statObjectsCount2','catalogCount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = count;
  });
})();

// ── RESET FILTERS ──
function resetHomeFilter() {
  document.querySelectorAll('#page-home .filter-select').forEach(s => s.selectedIndex = 0);
}

function resetCatalogFilter() {
  document.querySelectorAll('#page-catalog .filter-select').forEach(s => s.selectedIndex = 0);
  filterCatalog();
}

// ── RELATED PROPERTIES SLIDER ──
let relatedCur = 0;

function renderRelated(currentId) {
  const prop = MAP_PROPERTIES.find(p => p.id === currentId);
  if (!prop) return;

  const same = MAP_PROPERTIES.filter(p => p.country === prop.country && p.id !== currentId);
  const section = document.getElementById('relatedSection');
  const track = document.getElementById('relatedTrack');
  const nav = document.getElementById('relatedNav');

  if (same.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  const countryNames = { 'all': 'Грузии', 'usa': 'США', 'uae': 'ОАЭ', 'cyprus': 'Кипре', 'greece': 'Греции' };
  document.getElementById('relatedTitle').textContent = `Другие объекты в ${countryNames[prop.country] || prop.cityLabel}`;

  track.innerHTML = same.map(p => `
    <div class="catalog-card" style="flex-shrink:0;" onclick="showDetail('${p.id}')">
      <div style="position:relative;overflow:hidden;">
        <img class="catalog-img" src="${p.img}" alt="${p.name}">
        <span class="prop-badge ${p.badge || 'badge-ready'}" style="position:absolute;top:12px;left:12px;">${p.badgeText || ''}</span>
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city">${p.cityLabel}</div>
        <div class="catalog-name">${p.name}</div>
        <div class="catalog-price">${p.price}</div>
        <div class="catalog-specs"><span>${p.area}</span> м² &nbsp;·&nbsp; <span>${p.rooms}</span> спальн${p.rooms === '1' ? 'я' : 'и'} &nbsp;·&nbsp; <span>${p.floor}</span> этаж</div>
        <a class="catalog-detail-link" onclick="event.stopPropagation();showDetail('${p.id}')">Подробнее →</a>
      </div>
    </div>
  `).join('');

  relatedCur = 0;
  setTimeout(initRelatedSlider, 300);
}

function initRelatedSlider() {
  const track = document.getElementById('relatedTrack');
  const dotsWrap = document.getElementById('relatedDots');
  const cards = track.querySelectorAll('.catalog-card');
  const total = cards.length;
  const gap = 24;
  const pv = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  const pages = () => Math.max(1, total - pv() + 1);

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pages(); i++) {
      const d = document.createElement('div');
      d.className = 'testi-dot' + (i === relatedCur ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    relatedCur = Math.max(0, Math.min(idx, pages() - 1));
    const w = (track.parentElement.offsetWidth - gap * (pv() - 1)) / pv();
    cards.forEach(c => c.style.width = w + 'px');
    track.style.transform = `translateX(-${relatedCur * (w + gap)}px)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === relatedCur));
  }

  window.relatedNav = dir => goTo(relatedCur + dir);

  const w = (track.parentElement.offsetWidth - gap * (pv() - 1)) / pv();
  cards.forEach(c => c.style.width = w + 'px');
  buildDots();
  goTo(0);

  // nav visibility
  document.getElementById('relatedNav').style.display = total <= pv() ? 'none' : 'flex';
}
