/* ── Compare stub — replaced by compare.js when loaded ── */
if (typeof window.toggleCompare === 'undefined') {
  window.toggleCompare = function(id) {
    console.warn('[GRE] compare.js not loaded yet, queuing:', id);
  };
}

//  ЕДИНАЯ БАЗА ОБЪЕКТОВ
// ═══════════════════════════════════
const MAP_PROPERTIES = [
  {
    id: 'batumi-grand', type: 'apartment', top: true, agentId: 'chase',
    city: 'batumi', cityLabel: 'Батуми', country: 'georgia',
    lat: 41.6418, lng: 41.6340,
    name: 'ЖК «Гранд Панорама Батуми»',
    price: '$125,000', area: '45', rooms: '1', floor: '12',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'],
    desc: 'Современный жилой комплекс с панорамными видами на Чёрное море. Полная чистовая отделка, подземный паркинг, бассейн. Идеально для постоянного проживания и сдачи в аренду.',
    roi: '10–12%', growth: '12–15%', payback: '8–10 лет',
    specs: '45 м² · 1 спальня · 12 этаж', year: '2022', oldPrice: '$149,000', year: '2022',
  },
  {
    id: 'batumi-rustaveli', type: 'apartment', top: true, agentId: 'janelidze',
    city: 'batumi', cityLabel: 'Батуми', country: 'georgia',
    lat: 41.6440, lng: 41.6370,
    name: 'Апартаменты на Руставели, Батуми',
    price: '$89,000', area: '38', rooms: '1', floor: '7',
    deal: 'buy',
        badge: 'badge-build', badgeText: 'На стадии строительства',
    status: 'construction',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Апартаменты в строящемся комплексе на центральном бульваре Батуми. Сдача в 2025 году. Отличная инвестиционная возможность на стадии котлована.',
    roi: '12–14%', growth: '18–22%', payback: '7–9 лет',
    specs: '38 м² · 1 спальня · 7 этаж', year: '2026',
  },
  {
    id: 'tbilisi-elite', type: 'apartment', top: true, agentId: 'janelidze',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'georgia',
    lat: 41.6938, lng: 44.8015,
    name: 'Элитная квартира в центре Тбилиси',
    price: '$210,000', area: '210', rooms: '2', floor: '6',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'],
    desc: 'Просторная квартира в историческом центре Тбилиси. Высокие потолки, панорамные окна, вид на старый город. Премиальная отделка под заказ.',
    roi: '8–10%', growth: '15–20%', payback: '9–11 лет',
    specs: '210 м² · 2 спальни · 6 этаж', year: '2024', oldPrice: '$245,000',
  },
  {
    id: 'tbilisi-penthouse', type: 'apartment', top: true, agentId: 'verin',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'georgia',
    lat: 41.7000, lng: 44.8130,
    name: 'Пентхаус «Царская Высота», Тбилиси',
    price: '$650,000', area: '310', rooms: '4', floor: '22',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Эксклюзивный пентхаус на последнем этаже с террасой 80 м² и 360° видом на Тбилиси и горы Кавказа. Умный дом, лифт прямо в квартиру, консьерж-сервис.',
    roi: '6–8%', growth: '10–14%', payback: '12–14 лет',
    specs: '310 м² · 4 спальни · 22 этаж', year: '2021',
  },
  {
    id: 'gonio-coast', type: 'apart', top: true, agentId: 'chase',
    city: 'gonio', cityLabel: 'Гонио', country: 'georgia',
    lat: 41.5300, lng: 41.6000,
    name: 'Апартаменты у моря, Gonio Coast',
    price: '$98,000', area: '52', rooms: '1', floor: '5',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop'],
    desc: 'Апарт-отель в 50 метрах от моря в Гонио. Управляющая компания берёт на себя сдачу в аренду — пассивный доход без участия владельца.',
    roi: '12–15%', growth: '14–18%', payback: '7–8 лет',
    specs: '52 м² · 1 спальня · 5 этаж', year: '2023', oldPrice: '$115,000',
  },
  {
    id: 'bakuriani-hills', type: 'villa', top: true, agentId: 'chase',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'georgia',
    lat: 41.7500, lng: 43.5200,
    name: 'Коттеджный комплекс «Бакуриани Хиллс»',
    price: '$195,000', area: '150', rooms: '3', floor: '2',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop'],
    desc: 'Горнолыжный курорт, коттеджи у подъёмника. Высокий сезон обеспечивает загрузку 80%+. Развитая инфраструктура: рестораны, СПА, прокат снаряжения.',
    roi: '14–16%', growth: '20–25%', payback: '6–8 лет',
    specs: '150 м² · 3 спальни · 2 этажа', year: '2025', oldPrice: '$225,000',
  },
  {
    id: 'kakheti-alazani', type: 'apart', agentId: 'janelidze',
    city: 'kakheti', cityLabel: 'Кахетия', country: 'georgia',
    lat: 41.9000, lng: 45.3500,
    name: 'Резиденция в Алазанской Долине',
    price: '$110,000', area: '110', rooms: '2', floor: '1',
    deal: 'buy',
        badge: 'badge-build', badgeText: 'На стадии строительства',
    status: 'construction',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop'],
    desc: 'Эко-резиденция в винном регионе Грузии. Виноградники вокруг, собственный погреб, терраса с видом на горы. Идеально для загородного отдыха и агротуризма.',
    roi: '9–11%', growth: '12–16%', payback: '9–11 лет',
    specs: '110 м² · 2 спальни · 1 этаж', year: '2025',
  },
  {
    id: 'tbilisi-commercial', type: 'commercial', agentId: 'verin',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'georgia',
    lat: 41.6950, lng: 44.8010,
    name: 'Коммерческое помещение, Руставели',
    price: '$320,000', area: '180', rooms: '1', floor: '1',
    deal: 'buy',
    badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=600&fit=crop'],
    desc: 'Торговое помещение на главном бульваре Тбилиси. Высокий пешеходный трафик, витринные окна, отдельный вход. Подходит для ресторана, шоурума или офиса.',
    roi: '10–13%', growth: '14–18%', payback: '8–10 лет',
    specs: '180 м² · 1 этаж', year: '2019',
    oldPrice: '$370,000',
  },
  {
    id: 'gonio-seaview', type: 'apart', agentId: 'chase',
    city: 'gonio', cityLabel: 'Гонио', country: 'georgia',
    lat: 41.5200, lng: 41.6500,
    name: 'Вилла с видом на море, Гонио',
    price: '$185,000', area: '120', rooms: '3', floor: '2',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&h=600&fit=crop'],
    desc: 'Двухэтажная вилла в тихом пригороде Батуми. Открытая терраса, панорамный вид на Чёрное море, 3 спальни, собственный сад.',
    roi: '8–10%', growth: '10–14%', payback: '10–12 лет',
    specs: '120 м² · 3 спальни · 2 этажа', year: '2022',
  },
  {
    id: 'bakuriani-chalet', type: 'villa', agentId: 'chase',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'georgia',
    lat: 41.7500, lng: 43.5300,
    name: 'Шале «Альпийский стиль», Бакуриани',
    price: '$145,000', area: '95', rooms: '2', floor: '2',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Уютное шале в горнолыжном курорте Бакуриани. Высокий арендный доход в сезон, панорамный вид на горы, камин, терраса.',
    roi: '10–13%', growth: '11–15%', payback: '8–10 лет',
    specs: '95 м² · 2 спальни · 2 этажа', year: '2021',
  },
  {
    id: 'limassol-apart', type: 'apartment', agentId: 'solovieva',
    city: 'limassol', cityLabel: 'Лимасол', country: 'cyprus',
    lat: 34.6851, lng: 33.0332,
    name: 'Апартаменты в центре Лимасола',
    price: '$320,000', area: '85', rooms: '2', floor: '5',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Современные апартаменты в деловом центре Лимасола. Пешая доступность до набережной, развитая инфраструктура, вид на море.',
    roi: '6–8%', growth: '8–12%', payback: '12–14 лет',
    specs: '85 м² · 2 спальни · 5 этаж', year: '2020', oldPrice: '$369,000',
  },
  {
    id: 'ny-brooklyn', type: 'apartment', agentId: 'solovieva',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.6501, lng: -73.9496,
    name: 'Таунхаус в Бруклине',
    price: '$890,000', area: '160', rooms: '3', floor: '3',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторный таунхаус в модном районе Бруклина. Три этажа, терраса на крыше, собственный гараж.',
    roi: '4–6%', growth: '5–8%', payback: '16–18 лет',
    specs: '160 м² · 3 спальни · 3 этажа', year: '2019', oldPrice: '$990,000',
  },
  {
    id: 'ny-manhattan', type: 'apartment', top: true, agentId: 'cohen',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.7128, lng: -74.0060,
    name: 'Апартаменты на Манхэттене',
    price: '$1,800,000', area: '120', rooms: '2', floor: '18',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop'],
    desc: 'Люкс-апартаменты в центре Манхэттена с видом на Центральный парк. Консьерж, тренажёрный зал, выход на террасу.',
    roi: '5–7%', growth: '8–10%', payback: '14–16 лет',
    specs: '120 м² · 2 спальни · 18 этаж', year: '2018',
  },
  {
    id: 'miami-beach', type: 'apart', top: true, agentId: 'verin',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7617, lng: -80.1918,
    name: 'Вилла в Майами Бич',
    price: '$3,200,000', area: '420', rooms: '5', floor: '1',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop'],
    desc: 'Роскошная вилла с прямым выходом на пляж. Бассейн, джакузи, гараж на 3 авто. Элитный закрытый посёлок.',
    roi: '4–6%', growth: '7–9%', payback: '16–20 лет',
    specs: '420 м² · 5 спален · 1 этаж', year: '2020',
  },
  {
    id: 'dubai-marina', type: 'apart', top: true, agentId: 'levi',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.2048, lng: 55.2708,
    name: 'Апартаменты в Dubai Marina',
    price: '$450,000', area: '85', rooms: '1', floor: '24',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop'],
    desc: 'Апартаменты с видом на залив в престижном районе Dubai Marina. Полностью меблированы, управляющая компания.',
    roi: '7–9%', growth: '10–13%', payback: '11–13 лет',
    specs: '85 м² · 1 спальня · 24 этаж', year: '2023', oldPrice: '$520,000',
  },
  {
    id: 'dubai-palm', type: 'villa', agentId: 'verin',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.1972, lng: 55.2744,
    name: 'Пентхаус Palm Jumeirah',
    price: '$2,100,000', area: '280', rooms: '3', floor: '15',
    deal: 'buy',
        badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop'],
    desc: 'Пентхаус на пальмовом острове с частным бассейном и причалом для яхты. Один из самых знаковых адресов Дубая.',
    roi: '6–8%', growth: '9–12%', payback: '12–15 лет',
    specs: '280 м² · 3 спальни · 15 этаж', year: '2022',
  },
  {
    id: 'limassol-villa', type: 'villa', top: true, agentId: 'levi',
    city: 'limassol', cityLabel: 'Лимасол', country: 'cyprus',
    lat: 34.6841, lng: 33.0440,
    name: 'Вилла у моря, Лимасол',
    price: '$780,000', area: '220', rooms: '4', floor: '1',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Вилла с прямым выходом к морю в Лимасоле. Частный бассейн, ландшафтный сад, гараж. Возможность получения ВНЖ.',
    roi: '5–7%', growth: '8–11%', payback: '13–15 лет',
    specs: '220 м² · 4 спальни · 1 этаж', year: '2021',
  },
  {
    id: 'paphos-apart', type: 'apartment', agentId: 'levi',
    city: 'paphos', cityLabel: 'Пафос', country: 'cyprus',
    lat: 34.7753, lng: 32.4241,
    name: 'Апартаменты у моря, Пафос',
    price: '$280,000', area: '75', rooms: '2', floor: '3',
    deal: 'buy',
    badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Светлые апартаменты в 300 м от пляжа в историческом Пафосе. Закрытый комплекс с бассейном, охраной. Популярный туристический район — высокая заполняемость.',
    roi: '6–8%', growth: '8–11%', payback: '12–14 лет',
    specs: '75 м² · 2 спальни · 3 этаж', year: '2022', oldPrice: '$325,000',
  },
  {
    id: 'paphos-villa', type: 'villa', top: true, agentId: 'verin',
    city: 'paphos', cityLabel: 'Пафос', country: 'cyprus',
    lat: 34.7701, lng: 32.4165,
    name: 'Вилла с видом на море, Пафос',
    price: '$620,000', area: '185', rooms: '3', floor: '1',
    deal: 'buy',
    badge: 'badge-invest', badgeText: 'Инвестиция',
    status: 'investment',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop'],
    desc: 'Вилла с панорамным видом на Средиземное море в тихом районе Пафоса. Частный бассейн, сад, гараж. ВНЖ Кипра при покупке от €300 000.',
    roi: '5–7%', growth: '9–12%', payback: '13–16 лет',
    specs: '185 м² · 3 спальни · 1 этаж', year: '2021',
  },
  {
    id: 'athens-apart', type: 'apartment', agentId: 'levi',
    city: 'athens', cityLabel: 'Афины', country: 'greece',
    lat: 37.9838, lng: 23.7275,
    name: 'Апартаменты в Афинах',
    price: '$320,000', area: '95', rooms: '2', floor: '4',
    deal: 'buy',
        badge: 'badge-ready', badgeText: 'Сдан в эксплуатацию',
    status: 'ready',
    img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Апартаменты в историческом центре Афин рядом с Акрополем. Высокий туристический поток обеспечивает стабильный доход от краткосрочной аренды.',
    roi: '7–9%', growth: '9–12%', payback: '11–13 лет',
    specs: '95 м² · 2 спальни · 4 этаж', year: '2019', oldPrice: '$375,000',
  },
  {
    id: 'mykonos-villa', type: 'villa', top: true, agentId: 'verin',
    city: 'mykonos', cityLabel: 'Миконос', country: 'greece',
    lat: 37.4467, lng: 25.3289,
    name: 'Вилла на Миконосе',
    price: '$1,500,000', area: '300', rooms: '4', floor: '1',
    deal: 'buy',
        badge: 'badge-sale', badgeText: 'Эксклюзив',
    status: 'sale',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'],
    desc: 'Вилла в традиционном кикладском стиле с видом на Эгейское море. Бассейн с инфинити, терраса, летняя кухня. Пик сезона — июнь–сентябрь.',
    roi: '8–10%', growth: '11–14%', payback: '10–12 лет',
    specs: '300 м² · 4 спальни · 1 этаж', year: '2018',
  },
  // ── АРЕНДА ──
  {
    id: 'rent-tbilisi-vera', type: 'apartment', top: true, agentId: 'solovieva',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'georgia',
    lat: 41.6990, lng: 44.7980,
    name: 'Апартаменты в районе Вера, Тбилиси',
    price: '$1,200/мес', area: '65', rooms: '2', floor: '4',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Уютные апартаменты в престижном районе Вера. Полностью меблированы, современная техника, интернет включён. Тихий двор, 5 минут пешком до Руставели.',
    roi: '—', growth: '—', payback: '—',
    specs: '65 м² · 2 спальни · 4 этаж', year: '2020',
  },
  {
    id: 'rent-batumi-sea', type: 'apart', top: true, agentId: 'solovieva',
    city: 'batumi', cityLabel: 'Батуми', country: 'georgia',
    lat: 41.6450, lng: 41.6380,
    name: 'Студия с видом на море, Батуми',
    price: '$800/мес', area: '35', rooms: '1', floor: '9',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'],
    desc: 'Светлая студия с панорамным видом на Чёрное море. Новый ремонт, полностью оснащена. Идеально для краткосрочного и долгосрочного проживания.',
    roi: '—', growth: '—', payback: '—',
    specs: '35 м² · 1 спальня · 9 этаж', year: '2023',
  },
  {
    id: 'rent-tbilisi-saburtalo', type: 'apartment', top: true, agentId: 'solovieva',
    city: 'tbilisi', cityLabel: 'Тбилиси', country: 'georgia',
    lat: 41.7200, lng: 44.7650,
    name: 'Квартира в Сабуртало, Тбилиси',
    price: '$950/мес', area: '80', rooms: '3', floor: '6',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторная 3-комнатная квартира в Сабуртало. Развитая инфраструктура, рядом метро, школы и торговые центры. Долгосрочная аренда.',
    roi: '—', growth: '—', payback: '—',
    specs: '80 м² · 3 спальни · 6 этаж', year: '2018',
  },
  {
    id: 'rent-bakuriani-chalet', type: 'villa', top: true, agentId: 'chase',
    city: 'bakuriani', cityLabel: 'Бакуриани', country: 'georgia',
    lat: 41.7500, lng: 43.5300,
    name: 'Шале в Бакуриани, посуточно',
    price: '$120/сутки', area: '90', rooms: '3', floor: '2',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'daily',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Горное шале в Бакуриани. Камин, сауна, терраса с видом на горы. Посуточная и понедельная аренда в горнолыжный сезон.',
    roi: '—', growth: '—', payback: '—',
    specs: '90 м² · 3 спальни · 2 этажа', year: '2021',
  },
  {
    id: 'rent-dubai', type: 'apart', top: true, agentId: 'cohen',
    city: 'dubai', cityLabel: 'Дубай', country: 'uae',
    lat: 25.2048, lng: 55.2708,
    name: 'Апартаменты в Дубай Марина',
    price: '$3,500/мес', area: '95', rooms: '2', floor: '18',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Меблированные апартаменты в Дубай Марина с видом на яхтенную гавань. Бассейн, фитнес, консьерж-сервис в доме.',
    roi: '—', growth: '—', payback: '—',
    specs: '95 м² · 2 спальни · 18 этаж', year: '2022',
  },
  {
    id: 'rent-ny-manhattan', type: 'apartment', top: true, agentId: 'levi',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.7549, lng: -73.9840,
    name: 'Апартаменты на Манхэттене, Мидтаун',
    price: '$5,800/мес', area: '75', rooms: '2', floor: '22',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Меблированные апартаменты в центре Манхэттена с видом на Central Park. Консьерж 24/7, фитнес, терраса на крыше. Краткосрочная и долгосрочная аренда.',
    roi: '—', growth: '—', payback: '—',
    specs: '75 м² · 2 спальни · 22 этаж', year: '2017',
  },
  {
    id: 'rent-ny-brooklyn', type: 'apartment', top: true, agentId: 'solovieva',
    city: 'new-york', cityLabel: 'Нью-Йорк', country: 'usa',
    lat: 40.6782, lng: -73.9442,
    name: 'Лофт в Бруклине, DUMBO',
    price: '$4,200/мес', area: '110', rooms: '2', floor: '3',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop'],
    desc: 'Просторный лофт в модном районе DUMBO с кирпичными стенами и высокими потолками. Вид на Бруклинский мост, 2 спальни, паркинг включён.',
    roi: '—', growth: '—', payback: '—',
    specs: '110 м² · 2 спальни · 3 этаж', year: '2016',
  },
  {
    id: 'rent-miami-beach', type: 'apart', top: true, agentId: 'cohen',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7617, lng: -80.1918,
    name: 'Вилла у океана, Майами Бич',
    price: '$8,500/мес', area: '220', rooms: '4', floor: '1',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Роскошная вилла на первой линии океана в Майами Бич. Частный пляж, бассейн с подогревом, 4 спальни, летняя кухня. Идеально для отдыха и представительских целей.',
    roi: '—', growth: '—', payback: '—',
    specs: '220 м² · 4 спальни · 1 этаж', year: '2019',
  },
  {
    id: 'rent-miami-downtown', type: 'apartment', agentId: 'cohen',
    city: 'miami', cityLabel: 'Майами', country: 'usa',
    lat: 25.7743, lng: -80.1937,
    name: 'Апартаменты в Бrickell, Майами',
    price: '$3,800/мес', area: '85', rooms: '2', floor: '15',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Современные апартаменты в финансовом квартале Brickell с видом на залив Бискейн. Фитнес, бассейн, консьерж, паркинг. Рядом лучшие рестораны и бизнес-центры.',
    roi: '—', growth: '—', payback: '—',
    specs: '85 м² · 2 спальни · 15 этаж', year: '2021',
  },
  {
    id: 'rent-gonio', type: 'apart', top: true, agentId: 'chase',
    city: 'gonio', cityLabel: 'Гонио', country: 'georgia',
    lat: 41.5210, lng: 41.6480,
    name: 'Апартаменты у моря, Гонио',
    price: '$700/мес', area: '45', rooms: '1', floor: '3',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'],
    desc: 'Уютные апартаменты в 100 метрах от пляжа в Гонио. Полностью меблированы, кондиционер, балкон с видом на море.',
    roi: '—', growth: '—', payback: '—',
    specs: '45 м² · 1 спальня · 3 этаж', year: '2023',
  },
  {
    id: 'rent-kakheti', type: 'villa', agentId: 'janelidze',
    city: 'kakheti', cityLabel: 'Кахетия', country: 'georgia',
    lat: 41.9100, lng: 45.3600,
    name: 'Гостевой дом в Сигнахи',
    price: '$600/мес', area: '80', rooms: '2', floor: '1',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'daily',
    img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Традиционный грузинский дом в Сигнахи с видом на Алазанскую долину, сад с виноградником и собственной террасой.',
    roi: '—', growth: '—', payback: '—',
    specs: '80 м² · 2 спальни · 1 этаж', year: '2015',
  },
  {
    id: 'rent-limassol', type: 'apartment', top: true, agentId: 'solovieva',
    city: 'limassol', cityLabel: 'Лимасол', country: 'cyprus',
    lat: 34.6780, lng: 33.0440,
    name: 'Вилла с бассейном, Лимасол',
    price: '$4,500/мес', area: '180', rooms: '3', floor: '1',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop'],
    desc: 'Роскошная вилла с частным бассейном в тихом районе Лимасола. 3 спальни, сад, барбекю, 10 минут до Marina.',
    roi: '—', growth: '—', payback: '—',
    specs: '180 м² · 3 спальни · 1 этаж', year: '2020',
  },
  {
    id: 'rent-athens', type: 'apartment', top: true, agentId: 'janelidze',
    city: 'athens', cityLabel: 'Афины', country: 'greece',
    lat: 37.9755, lng: 23.7348,
    name: 'Апартаменты в Колонаки, Афины',
    price: '$2,200/мес', area: '90', rooms: '2', floor: '4',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'longterm',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'],
    desc: 'Элегантные апартаменты в престижном районе Колонаки с видом на Акрополь. Меблированы, кондиционер, рядом лучшие рестораны.',
    roi: '—', growth: '—', payback: '—',
    specs: '90 м² · 2 спальни · 4 этаж', year: '2018',
  },
  {
    id: 'rent-mykonos', type: 'villa', top: true, agentId: 'levi',
    city: 'mykonos', cityLabel: 'Миконос', country: 'greece',
    lat: 37.4467, lng: 25.3289,
    name: 'Вилла с видом на море, Миконос',
    price: '$6,000/мес', area: '150', rooms: '3', floor: '1',
    badge: 'badge-ready', badgeText: 'Доступно',
    deal: 'rent', status: 'shortterm',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=375&fit=crop',
    imgs: ['https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&h=600&fit=crop', 'https://raw.githubusercontent.com/skillunit/estate-site/main/floorplan.svg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop'],
    desc: 'Кикладская вилла с бесконечным бассейном и видом на Эгейское море. 3 спальни, частный пляжный клуб, сезонная аренда.',
    roi: '—', growth: '—', payback: '—',
    specs: '150 м² · 3 спальни · 1 этаж', year: '2017',
  },
];


// ── NEARBY INFRASTRUCTURE ──
const NEARBY = {
  'batumi-grand': [
    { cat:'transport', icon:'🚌', label:'Маршрутка до центра', val:'3 мин' },
    { cat:'transport', icon:'🚕', label:'Такси до аэропорта', val:'15 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Carrefour', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны на набережной', val:'7 мин' },
    { cat:'beach',     icon:'🏖️', label:'Пляж Батуми', val:'10 мин' },
    { cat:'school',    icon:'🏫', label:'Международная школа QSI', val:'12 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника MediClub', val:'8 мин' },
  ],
  'batumi-rustaveli': [
    { cat:'transport', icon:'🚌', label:'Остановка на бульваре', val:'1 мин' },
    { cat:'shop',      icon:'🛒', label:'Магазин Goodwill', val:'3 мин' },
    { cat:'food',      icon:'🍽️', label:'Кафе и рестораны', val:'2 мин' },
    { cat:'beach',     icon:'🏖️', label:'Городской пляж', val:'12 мин' },
    { cat:'health',    icon:'🏥', label:'Поликлиника', val:'6 мин' },
    { cat:'school',    icon:'🏫', label:'Школа №5', val:'8 мин' },
  ],
  'tbilisi-elite': [
    { cat:'transport', icon:'🚇', label:'Метро Руставели', val:'5 мин' },
    { cat:'transport', icon:'🚌', label:'Автобусная остановка', val:'2 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Spar', val:'4 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны пр. Руставели', val:'5 мин' },
    { cat:'school',    icon:'🏫', label:'Школа Европейской гимназии', val:'10 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Аверси', val:'7 мин' },
    { cat:'park',      icon:'🌳', label:'Парк Мтацминда', val:'8 мин' },
  ],
  'tbilisi-penthouse': [
    { cat:'transport', icon:'🚇', label:'Метро Варкетили', val:'7 мин' },
    { cat:'transport', icon:'🚕', label:'Такси до центра', val:'10 мин' },
    { cat:'shop',      icon:'🛒', label:'ТЦ Eastpoint Mall', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны с видом на город', val:'3 мин' },
    { cat:'school',    icon:'🏫', label:'Международная школа IST', val:'15 мин' },
    { cat:'health',    icon:'🏥', label:'Больница GHG', val:'10 мин' },
    { cat:'park',      icon:'🌳', label:'Ботанический сад', val:'12 мин' },
  ],
  'gonio-coast': [
    { cat:'transport', icon:'🚌', label:'Маршрутка Батуми–Гонио', val:'5 мин' },
    { cat:'beach',     icon:'🏖️', label:'Пляж Гонио', val:'1 мин' },
    { cat:'shop',      icon:'🛒', label:'Местный рынок', val:'3 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны у моря', val:'4 мин' },
    { cat:'health',    icon:'🏥', label:'Медпункт Гонио', val:'6 мин' },
    { cat:'park',      icon:'🏰', label:'Крепость Гонио-Апсарос', val:'5 мин' },
  ],
  'gonio-seaview': [
    { cat:'beach',     icon:'🏖️', label:'Пляж', val:'3 мин' },
    { cat:'transport', icon:'🚌', label:'Маршрутка в Батуми', val:'6 мин' },
    { cat:'food',      icon:'🍽️', label:'Кафе у моря', val:'5 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет', val:'7 мин' },
    { cat:'park',      icon:'🏰', label:'Крепость Гонио', val:'8 мин' },
  ],
  'bakuriani-hills': [
    { cat:'transport', icon:'🚡', label:'Канатная дорога', val:'2 мин' },
    { cat:'transport', icon:'⛷️', label:'Подъёмник Kokhta', val:'3 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны горнолыжного курорта', val:'4 мин' },
    { cat:'health',    icon:'🏥', label:'Медпункт курорта', val:'5 мин' },
    { cat:'shop',      icon:'🛒', label:'Магазин снаряжения', val:'3 мин' },
    { cat:'park',      icon:'🌲', label:'Сосновый лес', val:'1 мин' },
  ],
  'bakuriani-chalet': [
    { cat:'transport', icon:'⛷️', label:'Подъёмник', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Ресторан шале', val:'2 мин' },
    { cat:'shop',      icon:'🛒', label:'Магазин', val:'6 мин' },
    { cat:'park',      icon:'🌲', label:'Лыжные трассы', val:'3 мин' },
  ],
  'kakheti-alazani': [
    { cat:'park',      icon:'🍷', label:'Винный тур по виноградникам', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Ресторан грузинской кухни', val:'3 мин' },
    { cat:'transport', icon:'🚌', label:'Маршрутка в Телави', val:'20 мин' },
    { cat:'health',    icon:'🏥', label:'Больница Телави', val:'25 мин' },
    { cat:'park',      icon:'🏰', label:'Монастырь Алаверди', val:'15 мин' },
  ],
  'tbilisi-commercial': [
    { cat:'transport', icon:'🚇', label:'Метро Руставели', val:'2 мин' },
    { cat:'transport', icon:'🚌', label:'Автобусная остановка', val:'1 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны бульвара', val:'1 мин' },
    { cat:'shop',      icon:'🛒', label:'Торговые центры', val:'5 мин' },
    { cat:'park',      icon:'🌳', label:'Парк Мтацминда', val:'10 мин' },
  ],
  'limassol-apart': [
    { cat:'transport', icon:'🚌', label:'Автобус до Marina', val:'5 мин' },
    { cat:'beach',     icon:'🏖️', label:'Пляж Limassol', val:'10 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны делового центра', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'ТЦ My Mall', val:'8 мин' },
    { cat:'school',    icon:'🏫', label:'Международная школа ГАМК', val:'12 мин' },
    { cat:'health',    icon:'🏥', label:'Больница YGEIA', val:'10 мин' },
  ],
  'limassol-villa': [
    { cat:'beach',     icon:'🏖️', label:'Частный пляж', val:'2 мин' },
    { cat:'transport', icon:'🚌', label:'Автобус в центр', val:'8 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Marina', val:'10 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Alpha Mega', val:'7 мин' },
    { cat:'health',    icon:'🏥', label:'Американский медцентр', val:'12 мин' },
  ],
  'paphos-apart': [
    { cat:'beach',     icon:'🏖️', label:'Пляж Coral Bay', val:'5 мин' },
    { cat:'transport', icon:'🚌', label:'Автобус в центр Пафоса', val:'7 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны набережной', val:'10 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Alphamega', val:'6 мин' },
    { cat:'health',    icon:'🏥', label:'Больница Пафоса', val:'15 мин' },
  ],
  'paphos-villa': [
    { cat:'beach',     icon:'🏖️', label:'Пляж St. George', val:'4 мин' },
    { cat:'transport', icon:'🚗', label:'Аэропорт Пафоса', val:'15 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Kings Avenue', val:'8 мин' },
    { cat:'shop',      icon:'🛒', label:'Kings Avenue Mall', val:'9 мин' },
    { cat:'health',    icon:'🏥', label:'Euromedica Пафос', val:'12 мин' },
  ],
  'dubai-marina': [
    { cat:'transport', icon:'🚇', label:'Метро Dubai Marina', val:'3 мин' },
    { cat:'transport', icon:'⛵', label:'Water Bus до JBR', val:'5 мин' },
    { cat:'beach',     icon:'🏖️', label:'JBR Beach', val:'8 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Marina Walk', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Marina Mall', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Mediclinic', val:'10 мин' },
  ],
  'dubai-palm': [
    { cat:'beach',     icon:'🏖️', label:'Частный пляж Palm', val:'2 мин' },
    { cat:'transport', icon:'🚝', label:'Palm Monorail', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Ресторан Nobu', val:'7 мин' },
    { cat:'shop',      icon:'🛒', label:'Nakheel Mall', val:'10 мин' },
    { cat:'health',    icon:'🏥', label:'Госпиталь', val:'15 мин' },
  ],
  'ny-brooklyn': [
    { cat:'transport', icon:'🚇', label:'Метро F/G до Манхэттена', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны DUMBO', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Whole Foods Market', val:'7 мин' },
    { cat:'park',      icon:'🌳', label:'Brooklyn Bridge Park', val:'5 мин' },
    { cat:'school',    icon:'🏫', label:'PS 58 школа', val:'6 мин' },
  ],
  'ny-manhattan': [
    { cat:'transport', icon:'🚇', label:'Метро N/Q/R до Times Sq', val:'3 мин' },
    { cat:'park',      icon:'🌳', label:'Central Park', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Midtown', val:'1 мин' },
    { cat:'shop',      icon:'🛒', label:'Whole Foods / Dean & Deluca', val:'4 мин' },
    { cat:'health',    icon:'🏥', label:'NYP Hospital', val:'10 мин' },
    { cat:'school',    icon:'🏫', label:'Dalton School', val:'8 мин' },
  ],
  'miami-beach': [
    { cat:'beach',     icon:'🏖️', label:'Океанский пляж', val:'1 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Ocean Drive', val:'5 мин' },
    { cat:'transport', icon:'🚌', label:'Miami Beach Bus', val:'4 мин' },
    { cat:'shop',      icon:'🛒', label:'Lincoln Road Mall', val:'8 мин' },
    { cat:'health',    icon:'🏥', label:'Mt Sinai Medical', val:'10 мин' },
  ],
  'athens-apart': [
    { cat:'transport', icon:'🚇', label:'Метро Акрополь', val:'4 мин' },
    { cat:'park',      icon:'🏛️', label:'Акрополь', val:'6 мин' },
    { cat:'food',      icon:'🍽️', label:'Таверны Plaka', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет AB', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Hygeia', val:'15 мин' },
  ],
  'mykonos-villa': [
    { cat:'beach',     icon:'🏖️', label:'Пляж Paradise', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Mykonos Town', val:'10 мин' },
    { cat:'transport', icon:'⛵', label:'Паром в Афины', val:'20 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет', val:'8 мин' },
    { cat:'health',    icon:'🏥', label:'Мед. центр Mykonos', val:'12 мин' },
  ],

  'rent-tbilisi-vera': [
    { cat:'transport', icon:'🚇', label:'Метро Руставели', val:'7 мин' },
    { cat:'transport', icon:'🚌', label:'Автобус до центра', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Spar', val:'4 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны района Вера', val:'3 мин' },
    { cat:'park',      icon:'🌳', label:'Сад имени Ваке', val:'6 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Аверси', val:'8 мин' },
    { cat:'school',    icon:'🏫', label:'Международная школа', val:'10 мин' },
  ],
  'rent-batumi-sea': [
    { cat:'beach',     icon:'🏖️', label:'Пляж Батуми', val:'3 мин' },
    { cat:'transport', icon:'🚌', label:'Маршрутка до центра', val:'5 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет Carrefour', val:'6 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны набережной', val:'4 мин' },
    { cat:'park',      icon:'🌳', label:'Батумский бульвар', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника MediClub', val:'10 мин' },
  ],
  'rent-tbilisi-saburtalo': [
    { cat:'transport', icon:'🚇', label:'Метро Дидубе', val:'5 мин' },
    { cat:'transport', icon:'🚌', label:'Автобусная остановка', val:'2 мин' },
    { cat:'shop',      icon:'🛒', label:'ТЦ Galleria', val:'7 мин' },
    { cat:'food',      icon:'🍽️', label:'Кафе и рестораны', val:'4 мин' },
    { cat:'school',    icon:'🏫', label:'Грузинско-американская школа', val:'8 мин' },
    { cat:'health',    icon:'🏥', label:'Больница Пирогова', val:'6 мин' },
    { cat:'park',      icon:'🌳', label:'Парк Сабуртало', val:'10 мин' },
  ],
  'rent-bakuriani-chalet': [
    { cat:'transport', icon:'⛷️', label:'Подъёмник Kokhta', val:'3 мин' },
    { cat:'transport', icon:'🚡', label:'Канатная дорога', val:'4 мин' },
    { cat:'food',      icon:'🍽️', label:'Ресторан шале', val:'2 мин' },
    { cat:'shop',      icon:'🛒', label:'Магазин снаряжения', val:'5 мин' },
    { cat:'park',      icon:'🌲', label:'Лыжные трассы', val:'1 мин' },
    { cat:'health',    icon:'🏥', label:'Медпункт курорта', val:'6 мин' },
  ],
  'rent-dubai': [
    { cat:'transport', icon:'🚇', label:'Метро Dubai Marina', val:'4 мин' },
    { cat:'transport', icon:'⛵', label:'Water Bus до JBR', val:'6 мин' },
    { cat:'beach',     icon:'🏖️', label:'JBR Beach', val:'8 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Marina Walk', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Marina Mall', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Mediclinic', val:'10 мин' },
  ],
  'rent-ny-manhattan': [
    { cat:'transport', icon:'🚇', label:'Метро N/Q/R', val:'2 мин' },
    { cat:'park',      icon:'🌳', label:'Central Park', val:'6 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Midtown', val:'2 мин' },
    { cat:'shop',      icon:'🛒', label:'Whole Foods', val:'4 мин' },
    { cat:'health',    icon:'🏥', label:'NYP Hospital', val:'10 мин' },
    { cat:'school',    icon:'🏫', label:'Dalton School', val:'8 мин' },
  ],
  'rent-ny-brooklyn': [
    { cat:'transport', icon:'🚇', label:'Метро F/G до Манхэттена', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны DUMBO', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Whole Foods Market', val:'7 мин' },
    { cat:'park',      icon:'🌳', label:'Brooklyn Bridge Park', val:'5 мин' },
    { cat:'school',    icon:'🏫', label:'PS 58 школа', val:'6 мин' },
  ],
  'rent-miami-beach': [
    { cat:'beach',     icon:'🏖️', label:'Океанский пляж', val:'1 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Ocean Drive', val:'4 мин' },
    { cat:'transport', icon:'🚌', label:'Miami Beach Bus', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Lincoln Road Mall', val:'8 мин' },
    { cat:'health',    icon:'🏥', label:'Mt Sinai Medical', val:'10 мин' },
  ],
  'rent-miami-downtown': [
    { cat:'transport', icon:'🚇', label:'Метро Brickell', val:'3 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Brickell City', val:'4 мин' },
    { cat:'shop',      icon:'🛒', label:'Brickell City Centre', val:'5 мин' },
    { cat:'beach',     icon:'🏖️', label:'Пляж South Beach', val:'15 мин' },
    { cat:'health',    icon:'🏥', label:'Jackson Memorial Hospital', val:'8 мин' },
  ],
  'rent-gonio': [
    { cat:'beach',     icon:'🏖️', label:'Пляж Гонио', val:'2 мин' },
    { cat:'transport', icon:'🚌', label:'Маршрутка Батуми–Гонио', val:'4 мин' },
    { cat:'shop',      icon:'🛒', label:'Местный рынок', val:'3 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны у моря', val:'4 мин' },
    { cat:'park',      icon:'🏰', label:'Крепость Гонио-Апсарос', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Медпункт Гонио', val:'6 мин' },
  ],
  'rent-kakheti': [
    { cat:'park',      icon:'🍷', label:'Винный тур по виноградникам', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Ресторан грузинской кухни', val:'3 мин' },
    { cat:'transport', icon:'🚌', label:'Маршрутка в Телави', val:'20 мин' },
    { cat:'park',      icon:'🏰', label:'Монастырь Алаверди', val:'15 мин' },
    { cat:'health',    icon:'🏥', label:'Больница Телави', val:'25 мин' },
  ],
  'rent-limassol': [
    { cat:'transport', icon:'🚌', label:'Автобус до Marina', val:'5 мин' },
    { cat:'beach',     icon:'🏖️', label:'Пляж Limassol', val:'10 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны делового центра', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'ТЦ My Mall', val:'8 мин' },
    { cat:'health',    icon:'🏥', label:'Больница YGEIA', val:'10 мин' },
    { cat:'school',    icon:'🏫', label:'Международная школа', val:'12 мин' },
  ],
  'rent-athens': [
    { cat:'transport', icon:'🚇', label:'Метро Акрополь', val:'4 мин' },
    { cat:'park',      icon:'🏛️', label:'Акрополь', val:'6 мин' },
    { cat:'food',      icon:'🍽️', label:'Таверны Plaka', val:'3 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет AB', val:'5 мин' },
    { cat:'health',    icon:'🏥', label:'Клиника Hygeia', val:'15 мин' },
  ],
  'rent-mykonos': [
    { cat:'beach',     icon:'🏖️', label:'Пляж Paradise', val:'5 мин' },
    { cat:'food',      icon:'🍽️', label:'Рестораны Mykonos Town', val:'8 мин' },
    { cat:'transport', icon:'⛵', label:'Паром в Афины', val:'20 мин' },
    { cat:'shop',      icon:'🛒', label:'Супермаркет', val:'7 мин' },
    { cat:'health',    icon:'🏥', label:'Мед. центр Mykonos', val:'12 мин' },
  ],
};

// ── AGENTS ──
const AGENTS = [
  {
    id: 'verin',
    name: 'Александр Верин',
    role: 'Генеральный директор',
    spec: 'Международные сделки',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:verin@georgia-re.com',
  },
  {
    id: 'solovieva',
    name: 'Наталья Соловьёва',
    role: 'Ведущий агент',
    spec: 'Жильё Тбилиси, иностранные инвесторы',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:solovieva@georgia-re.com',
  },
  {
    id: 'janelidze',
    name: 'Мариам Джанелидзе',
    role: 'Директор грузинского направления',
    spec: 'Тбилиси, Кахетия, ключевые сделки',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:janelidze@georgia-re.com',
  },
  {
    id: 'cohen',
    name: 'Дэвид Коэн',
    role: 'Финансовый директор',
    spec: 'ОАЭ, США, инвестиционные сделки',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:cohen@georgia-re.com',
  },
  {
    id: 'chase',
    name: 'Роберт Чейз',
    role: 'Ведущий агент',
    spec: 'Батуми, Гонио, курортная недвижимость',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:chase@georgia-re.com',
  },
  {
    id: 'levi',
    name: 'Яков Леви',
    role: 'Юридический директор',
    spec: 'Кипр, Греция, юридическое сопровождение',
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
    phone: 'tel:+995322123456',
    wa: 'https://wa.me/995322123456',
    email: 'mailto:levi@georgia-re.com',
  },
];

// ── CURRENCY ──
const CURRENCY_RATES   = { USD: 1, GEL: 2.70, EUR: 0.92 };
const CURRENCY_SYMBOLS = { USD: '$', GEL: '₾', EUR: '€' };
let currentCurrency = localStorage.getItem('grre_currency') || 'USD';

// ── BADGE HELPER ──
const RENT_BADGE_KEYS = {
  longterm:  { cls: 'badge-ready',  key: 'badge.rent_long',  fallback: 'Долгосрочная аренда' },
  shortterm: { cls: 'badge-invest', key: 'badge.rent_short', fallback: 'Краткосрочная аренда' },
  daily:     { cls: 'badge-build',  key: 'badge.daily',      fallback: 'Посуточно' },
};
// Сопоставление сырого RU-текста badgeText (из MAP_PROPERTIES) с ключом перевода.
// Используется только для отображения — сами данные в MAP_PROPERTIES не меняются.
const BADGE_TEXT_KEYS = {
  'Сдан в эксплуатацию':       'badge.ready',
  'На стадии строительства':   'badge.build',
  'Эксклюзив':                 'badge.exclusive',
  'Инвестиция':                'badge.invest',
  'Доступно':                  'badge.available',
};
/* ── Fav button helper — inline in card body ── */
function compareCardBtn(id) {
  const active = (typeof isInCompare === 'function') ? isInCompare(id) : false;
  const color = active ? '#C0392B' : 'currentColor';
  const fill  = active ? '#C0392B' : 'none';
  const svg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
  return `<button class="card-compare-inline${active ? ' compare-active' : ''}" data-compare-id="${id}" onclick="event.stopPropagation();toggleCompare('${id}')" aria-label="Сравнить">${svg}</button>`;
}

function favCardBtn(id) {
  // isFavById is defined in favorites.js; safe to call after DOMContentLoaded
  const filled = (typeof isFavById === 'function') ? isFavById(id) : false;
  const icon = filled
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="#C0392B" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  return `<button class="card-fav-inline${filled ? ' fav-active' : ''}" data-fav-id="${id}" onclick="handleFavClick(event,'${id}')" aria-label="В избранное">${icon}</button>`;
}

function shareCardBtn(id) {
  return `<button class="card-share-inline" onclick="event.stopPropagation();openSharePopup('${id}')" aria-label="Поделиться"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>`;
}

function getPropBadge(p) {
  const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
  if (p.deal === 'rent' && RENT_BADGE_KEYS[p.status]) {
    const rb = RENT_BADGE_KEYS[p.status];
    return { cls: rb.cls, text: T(rb.key, rb.fallback) };
  }
  const key = BADGE_TEXT_KEYS[p.badgeText];
  return { cls: p.badge, text: key ? T(key, p.badgeText) : p.badgeText };
}

// ── Переводы названий/описаний объектов (lang/properties.js) ──
// p.name / p.desc остаются на русском в данных (используются для
// сортировки и поиска) — эти хелперы только подменяют отображаемый текст.
function _currentLang() {
  return localStorage.getItem('gre_lang') || 'ru';
}
function getPropName(p) {
  const lang = _currentLang();
  const dict = lang === 'en' ? window.GRE_PROP_EN : lang === 'he' ? window.GRE_PROP_HE : null;
  const override = dict && p.id && dict[p.id];
  return (override && override.name) || p.name;
}
function getPropDesc(p) {
  const lang = _currentLang();
  const dict = lang === 'en' ? window.GRE_PROP_EN : lang === 'he' ? window.GRE_PROP_HE : null;
  const override = dict && p.id && dict[p.id];
  return (override && override.desc) || p.desc;
}
function getCityLabel(p) {
  if (!p.city) return p.cityLabel;
  const lang = _currentLang();
  const dict = window['GRE_LANG_' + lang.toUpperCase()] || window.GRE_LANG_RU || {};
  const key = 'city.' + p.city;
  return dict[key] !== undefined ? dict[key] : p.cityLabel;
}

function convertUsd(num) {
  return Math.round(num * CURRENCY_RATES[currentCurrency]);
}

// '$125,000' → '₾337,500' / '$1,200/мес' → '₾3,240/мес'
function formatPrice(usdPriceStr) {
  if (!usdPriceStr) return '';
  const isRent = usdPriceStr.includes('/мес');
  const num = parseFloat(usdPriceStr.replace(/[^0-9.]/g, ''));
  if (isNaN(num)) return usdPriceStr;
  const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
  return CURRENCY_SYMBOLS[currentCurrency] + convertUsd(num).toLocaleString('en-US') + (isRent ? T('card.per_month', '/мес') : '');
}

// Цена за м² в текущей валюте
function formatSqm(p) {
  const usd = parseFloat(p.price.replace(/[^0-9.]/g, '')) / parseFloat(p.area);
  const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
  return convertUsd(usd).toLocaleString('ru-RU') + ' ' + CURRENCY_SYMBOLS[currentCurrency] + '/' + T('card.sqm_abbr', 'м²');
}

function setCurrency(cur) {
  if (!CURRENCY_RATES[cur]) return;
  const prevCurrency = currentCurrency;
  const prevRate = CURRENCY_RATES[prevCurrency];
  currentCurrency = cur;
  localStorage.setItem('grre_currency', cur);
  document.querySelectorAll('.currency-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cur === cur);
  });

  // Обновляем подпись фильтра цены
  const priceLabel = document.getElementById('priceCurrencyLabel');
  if (priceLabel) {
    const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
    priceLabel.textContent = T('filter.price_currency', 'Цена,') + ' ' + CURRENCY_SYMBOLS[cur];
  }

  // Пересчитываем значения в полях прайс-фильтра
  ['priceMin','priceMax'].forEach(function(id) {
    const el = document.getElementById(id);
    if (!el || !el.value) return;
    const valInPrev = parseFloat(el.value.replace(/[^0-9.]/g, ''));
    if (isNaN(valInPrev)) return;
    const usd = valInPrev / prevRate;
    el.value = Math.round(usd * CURRENCY_RATES[cur]);
  });

  // Перерисовать каталог с текущими фильтрами
  if (typeof filterCatalog === 'function') filterCatalog();
  renderRecentlyViewed();
  // Перерисовать карусель на главной
  if (typeof renderFeatured === 'function') renderFeatured();
  // Пересчитать калькулятор
  if (typeof updateMortgageCalc === 'function') updateMortgageCalc();
}

// ── RECENTLY VIEWED ──
function trackRecentlyViewed(id) {
  let list = [];
  try { list = JSON.parse(localStorage.getItem('grre_recent') || '[]'); } catch (e) {}
  list = list.filter(x => x !== id);
  list.unshift(id);
  list = list.slice(0, 4);
  localStorage.setItem('grre_recent', JSON.stringify(list));
}

function renderRecentlyViewed() {
  const wrap = document.getElementById('recentlyViewedSection');
  const track = document.getElementById('recentlyViewedGrid');
  if (!wrap || !track) return;

  let list = [];
  try { list = JSON.parse(localStorage.getItem('grre_recent') || '[]'); } catch (e) {}
  const props = list.map(id => MAP_PROPERTIES.find(p => p.id === id)).filter(Boolean);

  if (!props.length) { wrap.style.display = 'none'; return; }
  wrap.style.display = '';

  track.innerHTML = props.map(p => {
    const imgs = p.imgs || [p.img];
    const dots = imgs.map((_, i) => `<span class="card-slider-dot${i === 0 ? ' active' : ''}"></span>`).join('');
    const badge = getPropBadge(p);
    const pName = getPropName(p);
    const roiHtml = (p.deal === 'buy' && p.roi)
      ? `<div class="catalog-roi-pill"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>${typeof I18n!=="undefined"?I18n.t("card.roi_label"):"ROI"} ${p.roi} ${typeof I18n!=="undefined"?I18n.t("card.roi_year"):"/год"}</div>`
      : '';
    return `
    <div class="catalog-card" style="flex-shrink:0;" onclick="showDetail('${p.id}')" spellcheck="false">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${imgs[0]}" alt="${pName}">
          <button class="card-slider-btn card-slider-prev" onclick="cardSlide(event,this,-1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_prev','Назад'):'Назад'}">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="cardSlide(event,this,1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_next','Вперёд'):'Вперёд'}">&#8250;</button>
          <div class="card-slider-dots">${dots}</div>
        </div>
        <span class="prop-badge ${badge.cls}">${badge.text}</span>
        ${p.top ? `<span class="top-label">${typeof I18n!=="undefined"?I18n.t("card.top"):"★ ТОП"}</span>` : ''}
        ${shareCardBtn(p.id)}
        ${compareCardBtn(p.id)}
        ${favCardBtn(p.id)}
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city-row"><span class="catalog-city">${getCityLabel(p)}</span>${typeof Reviews !== 'undefined' ? Reviews.getMiniRatingHtml(p.id) : ''}</div>
        <div class="catalog-name">${pName}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${formatPrice(p.price)}</span>
            ${p.deal === 'buy' && p.area ? `<span class="catalog-price-sqm">${formatSqm(p)}</span>` : ''}
          </div>
          ${p.deal !== "rent" ? `<div class="catalog-price-old">${p.oldPrice ? formatPrice(p.oldPrice) : ''}</div>` : (p.oldPrice ? `<div class="catalog-price-old">${formatPrice(p.oldPrice)}</div>` : "")}
        </div>
        ${roiHtml ? `<div class="catalog-pills-row">${roiHtml}</div>` : (p.deal !== "rent" ? `<div class="catalog-pills-row"></div>` : "")}
        <div class="catalog-specs">
          <span class="spec-item"><strong>${p.area}</strong> ${typeof GRE_T==="function"?GRE_T("card.sqm_abbr"):"м²"}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.rooms}</strong> ${typeof GRE_T==="function"?GRE_T("card.rooms_abbr"):"спал."}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.floor}</strong> ${typeof GRE_T==="function"?GRE_T("card.floor_abbr"):"эт."}</span>
          ${p.year ? `<span class="spec-sep">·</span><span class="spec-item"><strong>${p.year}</strong> ${typeof GRE_T==="function"?GRE_T("card.year_abbr","г."):"г."}</span>` : ''}
        </div>
      </div>
      <div class="catalog-card-footer">
        <button class="catalog-cta-btn" onclick="event.stopPropagation();showDetail('${p.id}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.details"):"Подробнее"}
        </button>
        <button class="catalog-contact-btn" onclick="event.stopPropagation();openContactPopup('${pName.replace(/'/g, "\\'")}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.ask"):"Спросить"}
        </button>
      </div>
    </div>`;
  }).join('');

  initRecentlyViewedSlider();
}

function clearRecentlyViewed() {
  localStorage.removeItem('grre_recent');
  renderRecentlyViewed();
}

function initRecentlyViewedSlider() {
  const track = document.getElementById('recentlyViewedGrid');
  const dotsWrap = document.getElementById('recentlyViewedDots');
  const nav = document.getElementById('recentlyViewedNav');
  if (!track) return;
  const cards = track.querySelectorAll('.catalog-card');
  const total = cards.length;
  if (!total) return;
  const gap = 24;
  let cur = 0;
  const perView = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  const pages = () => Math.max(1, total - perView() + 1);

  function buildDots() {
    if (!dotsWrap) return;
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
    const w = (track.parentElement.offsetWidth - gap * (perView() - 1)) / perView();
    cards.forEach(c => c.style.width = w + 'px');
    track.style.transform = `translateX(-${cur * (w + gap)}px)`;
    if (dotsWrap) dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }
  window.recentlyViewedNavFn = dir => goTo(cur + dir);

  function init() {
    cur = 0;
    const w = (track.parentElement.offsetWidth - gap * (perView() - 1)) / perView();
    cards.forEach(c => c.style.width = w + 'px');
    buildDots();
    goTo(0);
    if (nav) nav.style.display = total <= perView() ? 'none' : 'flex';
  }
  init();
  window.removeEventListener('resize', window._recentResizeHandler);
  window._recentResizeHandler = init;
  window.addEventListener('resize', init);
}

const COUNTRY_VIEW = {
  all:    { lat: 42.0, lng: 43.5, zoom: 6 },
  usa:    { lat: 37.0, lng: -95.0, zoom: 3 },
  uae:    { lat: 24.5, lng: 54.5, zoom: 7 },
  cyprus: { lat: 34.9, lng: 33.1, zoom: 8 },
  greece: { lat: 38.0, lng: 24.5, zoom: 6 },
};

// ── Рендер карточек каталога из базы ──
function renderCatalogGrid(countryVal, cityVal, statusVal, typeVal, extra) {
  const grid  = document.getElementById('catalogGrid');
  const empty = document.getElementById('catalogEmpty');
  if (!grid) return;
  const dealType = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';
  const { priceMin = 0, priceMax = Infinity, areaMin = 0, areaMax = Infinity, rooms = 'all' } = extra || {};

  const filtered = MAP_PROPERTIES.filter(p => {
    const md  = p.deal === dealType;
    const mc  = countryVal === 'all' || countryVal === '' || p.country === countryVal;
    const mci = cityVal === 'all' || p.city === cityVal;
    const ms  = statusVal === 'all' || p.status === statusVal;
    const mt  = !typeVal || typeVal === 'all' || p.type === typeVal;
    const price = parseFloat(p.price.replace(/[^0-9.]/g, ''));
    const area  = parseFloat(p.area) || 0;
    const rm    = parseInt(p.rooms) || 0;
    const mp  = price >= priceMin && price <= priceMax;
    const ma  = area  >= areaMin  && area  <= areaMax;
    const mr  = rooms === 'all' || (rooms === '4+' ? rm >= 4 : rm === parseInt(rooms));
    const mag = !window._activeAgentId || p.agentId === window._activeAgentId;
    return md && mc && mci && ms && mt && mp && ma && mr && mag;
  });

  // Empty state
  const countEl = document.getElementById('catalogCount');
  if (countEl) countEl.textContent = filtered.length;

  if (empty) {
    grid.style.display    = filtered.length ? '' : 'none';
    empty.style.display   = filtered.length ? 'none' : '';
  }
  // ── Sort ──
  const sortEl = document.getElementById('catalogSort');
  const sortVal = (sortEl ? sortEl.value : '') || 'top';
  const priceNum = p => parseFloat((p.price || '0').replace(/[^0-9.]/g, '')) || 0;
  if (sortVal === 'top') {
    filtered.sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0));
  } else if (sortVal === 'price-asc') {
    filtered.sort((a, b) => priceNum(a) - priceNum(b));
  } else if (sortVal === 'price-desc') {
    filtered.sort((a, b) => priceNum(b) - priceNum(a));
  } else if (sortVal === 'area-asc') {
    filtered.sort((a, b) => (parseFloat(a.area) || 0) - (parseFloat(b.area) || 0));
  } else if (sortVal === 'area-desc') {
    filtered.sort((a, b) => (parseFloat(b.area) || 0) - (parseFloat(a.area) || 0));
  } else if (sortVal === 'name-asc') {
    filtered.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ru'));
  } else if (sortVal === 'name-desc') {
    filtered.sort((a, b) => (b.name || '').localeCompare(a.name || '', 'ru'));
  }

  if (!filtered.length) return;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--gray-500);font-size:0.875rem;">По выбранным фильтрам объектов не найдено</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const badge = getPropBadge(p);
    const imgs = p.imgs || [p.img];
    const dots = imgs.map((_,i) => `<span class="card-slider-dot${i===0?' active':''}"></span>`).join('');
    const priceDisplay = formatPrice(p.price);
    const sqmDisplay = p.deal === 'buy' && p.area ? formatSqm(p) : '';
    const pName = getPropName(p);
    const pDesc = getPropDesc(p);

    // Savings badge
    let savingsHtml = '';
    if (p.oldPrice) {
      const oldNum = parseFloat(p.oldPrice.replace(/[^0-9.]/g, ''));
      const curNum = parseFloat(p.price.replace(/[^0-9.]/g, ''));
      if (oldNum > curNum) {
        const pct = Math.round((1 - curNum/oldNum)*100);
        savingsHtml = `<div class="catalog-price-save">−${pct}% ${typeof I18n!=="undefined"?I18n.t("card.savings_from"):"от начальной цены"}</div>`;
      }
    }

    // ROI pill — only for buy with roi data
    const roiHtml = (p.deal === 'buy' && p.roi)
      ? `<div class="catalog-roi-pill"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>${typeof I18n!=="undefined"?I18n.t("card.roi_label"):"ROI"} ${p.roi} ${typeof I18n!=="undefined"?I18n.t("card.roi_year"):"/год"}</div>`
      : '';

    return `
    <div class="catalog-card" data-city="${p.city}" data-status="${p.status}" data-id="${p.id}" onclick="showDetail('${p.id}')" spellcheck="false">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${p.img}" alt="${pName}" loading="lazy">
          <button class="card-slider-btn card-slider-prev" onclick="cardSlide(event,this,-1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_prev','Назад'):'Назад'}">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="cardSlide(event,this,1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_next','Вперёд'):'Вперёд'}">&#8250;</button>
          <div class="card-slider-dots">${dots}</div>
        </div>
        <span class="prop-badge ${badge.cls}">${badge.text}</span>
        ${p.top ? `<span class="top-label">${typeof I18n!=="undefined"?I18n.t("card.top"):"★ ТОП"}</span>` : ''}
        ${shareCardBtn(p.id)}
        ${compareCardBtn(p.id)}
        ${favCardBtn(p.id)}
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city-row">
          <span class="catalog-city">${getCityLabel(p)}</span>
          ${typeof Reviews !== 'undefined' ? Reviews.getMiniRatingHtml(p.id) : ''}
        </div>
        <div class="catalog-name">${pName}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${priceDisplay}</span>
            ${sqmDisplay ? `<span class="catalog-price-sqm">${sqmDisplay}</span>` : ''}
          </div>
          ${p.deal !== "rent" ? `<div class="catalog-price-old">${p.oldPrice ? formatPrice(p.oldPrice) : ''}</div>` : (p.oldPrice ? `<div class="catalog-price-old">${formatPrice(p.oldPrice)}</div>` : "")}
        </div>
        ${(savingsHtml || roiHtml) ? `<div class="catalog-pills-row">${savingsHtml}${roiHtml}</div>` : (p.deal !== "rent" ? `<div class="catalog-pills-row"></div>` : "")}
        ${pDesc ? `<p class="catalog-card-desc">${pDesc}</p>` : ''}
        <div class="catalog-specs">
          <span class="spec-item"><strong>${p.area}</strong> ${typeof GRE_T==="function"?GRE_T("card.sqm_abbr"):"м²"}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.rooms}</strong> ${typeof GRE_T==="function"?GRE_T("card.rooms_abbr"):"спал."}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.floor}</strong> ${typeof GRE_T==="function"?GRE_T("card.floor_abbr"):"эт."}</span>
          ${p.year ? `<span class="spec-sep">·</span><span class="spec-item"><strong>${p.year}</strong> ${typeof GRE_T==="function"?GRE_T("card.year_abbr","г."):"г."}</span>` : ''}
        </div>
      </div>
      <div class="catalog-card-footer">
        <button class="catalog-cta-btn" onclick="event.stopPropagation();showDetail('${p.id}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.details"):"Подробнее"}
        </button>
        <button class="catalog-contact-btn" onclick="event.stopPropagation();openContactPopup('${pName.replace(/'/g, "\\'")}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.ask"):"Спросить"}
        </button>
      </div>
    </div>`}).join('');

  // Восстанавливаем сохранённый вид после перерендера грида
  if (typeof initViewMode === 'function') initViewMode();
  // Attach hover-to-highlight after rendering
  setTimeout(attachCardMapHover, 60);
}


// ── RENDER NEARBY INFRASTRUCTURE ──
function renderNearby(propId) {
  const card = document.getElementById('nearbyCard');
  const list = document.getElementById('nearbyList');
  if (!card || !list) return;

  const items = NEARBY[propId];
  if (!items || !items.length) {
    card.style.display = 'none';
    return;
  }
  card.style.display = '';

  const catOrder = ['transport','beach','shop','food','school','health','park'];
  const sorted = [...items].sort((a,b) => catOrder.indexOf(a.cat) - catOrder.indexOf(b.cat));

  list.innerHTML = sorted.map(item => `
    <div class="nearby-item">
      <span class="prop-amenity-dot"></span>
      <span class="nearby-label">${item.label}</span>
      <span class="nearby-val">${item.val} пешком</span>
    </div>`).join('');
}

// ── Открыть страницу детали для конкретного объекта ──
function showDetail(id) {
  const prop = MAP_PROPERTIES.find(p => p.id === id);
  if (!prop) { showPage('detail'); return; }
  _currentPdfProp = prop;

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
  if (titleEl) titleEl.textContent = getPropName(prop);

  const specVals = page.querySelectorAll('.detail-spec-val');
  if (specVals[0]) specVals[0].textContent = getCityLabel(prop);
  if (specVals[1]) specVals[1].textContent = prop.area + ' м²';
  if (specVals[2]) specVals[2].textContent = prop.rooms;
  if (specVals[3]) specVals[3].textContent = prop.floor;
  if (specVals[5]) specVals[5].textContent = prop.year || '—';

  const descEl = page.querySelector('.detail-desc');
  if (descEl) descEl.textContent = getPropDesc(prop);

  const investRows = page.querySelectorAll('.invest-row-val');
  if (investRows[0]) investRows[0].textContent = prop.growth;
  if (investRows[1]) investRows[1].textContent = prop.roi;
  if (investRows[2]) investRows[2].textContent = prop.payback;

  // Update status badge
  const detailBadge = document.getElementById('detailBadge');
  if (detailBadge && prop.badge && prop.badgeText) {
    const _b = getPropBadge(prop);
    detailBadge.className = 'invest-badge ' + _b.cls;
    detailBadge.textContent = _b.text;
  }
  // Update top label
  const detailTopLabel = document.getElementById('detailTopLabel');
  if (detailTopLabel) detailTopLabel.style.display = prop.top ? 'inline-flex' : 'none';

  // Update price
  const detailPrice = document.getElementById('detailPrice');
  if (detailPrice) detailPrice.textContent = formatPrice(prop.price);

  // ── Блок агента ──
  const agentBlock = document.getElementById('detailAgentBlock');
  if (agentBlock) {
    const agent = AGENTS.find(a => a.id === prop.agentId);
    if (agent) {
      agentBlock.innerHTML = `
        <div class="detail-agent-inner">
          <img class="detail-agent-photo" src="${agent.photo}" alt="${agent.name}">
          <div class="detail-agent-info">
            <div class="detail-agent-name">${agent.name}</div>
            <div class="detail-agent-spec">${agent.spec}</div>
          </div>
          <div class="detail-agent-contacts">
            <a class="detail-agent-btn" href="${agent.wa}" target="_blank" title="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a class="detail-agent-btn" href="${agent.phone}" title="Позвонить">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            </a>
          </div>
        </div>`;
      agentBlock.style.display = '';
    } else {
      agentBlock.style.display = 'none';
    }
  }

  // Цена за м² (только для покупки)
  const detailPriceSqm = document.getElementById('detailPriceSqm');
  if (detailPriceSqm) {
    if (prop.deal === 'buy' && prop.area) {
      detailPriceSqm.textContent = formatSqm(prop);
      detailPriceSqm.style.display = '';
    } else {
      detailPriceSqm.style.display = 'none';
    }
  }

  // Старая цена (перечёркнутая)
  const detailPriceOld = document.getElementById('detailPriceOld');
  if (detailPriceOld) {
    if (prop.oldPrice) {
      detailPriceOld.textContent = formatPrice(prop.oldPrice);
      detailPriceOld.style.display = '';
    } else {
      detailPriceOld.style.display = 'none';
    }
  }

  // Запоминаем просмотр
  trackRecentlyViewed(id);

  // ── Карта объекта ──
  initDetailMap(prop);
  renderNearby(id);

  showPage('detail');

  // ── Ипотечный калькулятор ──
  initMortgageCalc(prop);

  renderRelated(id);
  // ── Reviews & Schema.org ──
  if (typeof Reviews !== 'undefined') {
    Reviews.renderReviewBlock(id);
    Reviews.injectSchema(prop);
  }

  // ── Mobile slider ──
  if (typeof mobGalleryInit === 'function') mobGalleryInit(imgs);

  // ── Переключение блоков: аренда vs покупка ──
  const isRent = prop.deal === 'rent';

  // 1. Инвест-карточка (querySelector ограничен первой invest-card, не калькулятором)
  const investCard = page.querySelector('.invest-card');
  const investTitle = investCard ? investCard.querySelector('.invest-title') : null;
  const investRowsAll = investCard ? investCard.querySelectorAll('.invest-row') : [];
  if (investTitle) {
    if (isRent) {
      investTitle.textContent = 'Об аренде';
      const labels = ['Депозит:', 'Минимальный срок:', 'Коммунальные:'];
      const vals   = ['1 месяц', 'от 1 месяца', 'включены'];
      investRowsAll.forEach((row, i) => {
        const lbl = row.querySelector('.invest-row-label');
        const val = row.querySelector('.invest-row-val');
        if (lbl) lbl.textContent = labels[i] ?? lbl.textContent;
        if (val) val.textContent = vals[i] ?? '—';
      });
    } else {
      investTitle.textContent = 'Потенциал для инвестиций';
      const labels = ['Ожидаемый рост цены:', 'Доход от аренды:', 'Окупаемость:'];
      investRowsAll.forEach((row, i) => {
        const lbl = row.querySelector('.invest-row-label');
        if (lbl) lbl.textContent = labels[i] ?? lbl.textContent;
      });
      if (investRows[0]) investRows[0].textContent = prop.growth;
      if (investRows[1]) investRows[1].textContent = prop.roi;
      if (investRows[2]) investRows[2].textContent = prop.payback;
    }
  }

  // 2. Блок описания (иконки с текстом)
  const featuresBlock = page.querySelector('.prop-desc-features');
  if (featuresBlock) {
    const icon = (path) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${path}</svg>`;
    if (isRent) {
      featuresBlock.innerHTML = `
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Что включено</div>
            <div class="prop-desc-feature-text">Мебель, бытовая техника, интернет, кабельное TV. Квартира готова к заселению — приезжайте с чемоданом.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Условия проживания</div>
            <div class="prop-desc-feature-text">Некурящие жильцы. Домашние животные — по согласованию. Тихий час с 23:00. Гости — без ограничений.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Заезд и выезд</div>
            <div class="prop-desc-feature-text">Заезд с 14:00, выезд до 12:00. Возможен ранний заезд или поздний выезд по согласованию с владельцем.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Локация</div>
            <div class="prop-desc-feature-text">Развитая инфраструктура района: продуктовые магазины, кафе, аптеки, банки и остановки транспорта в шаговой доступности.</div>
          </div>
        </div>`;
    } else {
      featuresBlock.innerHTML = `
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Чистовая отделка</div>
            <div class="prop-desc-feature-text">Все апартаменты сдаются с полной отделкой под ключ — кухонный гарнитур, сантехника, напольное покрытие включены.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Управляющая компания</div>
            <div class="prop-desc-feature-text">Собственная УК обеспечивает сдачу в аренду, обслуживание и гарантированный доход 8–12% годовых без участия владельца.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Срок сдачи</div>
            <div class="prop-desc-feature-text">IV квартал 2025 года. Строительная готовность — 85%. Возможна покупка на стадии котлована с фиксацией цены.</div>
          </div>
        </div>
        <div class="prop-desc-feature">
          <div class="prop-desc-feature-icon">${icon('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>')}</div>
          <div>
            <div class="prop-desc-feature-title">Локация</div>
            <div class="prop-desc-feature-text">5 минут до проспекта Руставели, 10 минут до Старого города. Рядом рестораны, кафе, банки, международные школы.</div>
          </div>
        </div>`;
    }
  }

  // 3. Блок условий (правая колонка внизу)
  const legalCard = page.querySelector('.prop-legal-card');
  if (legalCard) {
    const legalTitle = legalCard.querySelector('.prop-legal-title');
    if (legalTitle) legalTitle.textContent = isRent ? 'Условия аренды' : 'Условия покупки';
    const rows = legalCard.querySelectorAll('.prop-legal-row');
    if (isRent) {
      const rentData = [
        ['Депозит', '1 месяц'],
        ['Минимальный срок', 'от 1 месяца'],
        ['Коммунальные платежи', 'по счётчику'],
        ['Оформление договора', '1 день'],
        ['Иностранным гражданам', 'без ограничений'],
      ];
      rows.forEach((row, i) => {
        if (rentData[i]) {
          const spans = row.querySelectorAll('span');
          if (spans[0]) spans[0].textContent = rentData[i][0];
          if (spans[1]) spans[1].textContent = rentData[i][1];
        }
      });
    } else {
      const buyData = [
        ['Первоначальный взнос', 'от 30%'],
        ['Рассрочка от застройщика', 'до 36 мес.'],
        ['Ипотека', 'TBC, Bank of Georgia'],
        ['Оформление', 'от 7 дней'],
        ['Иностранным гражданам', 'без ограничений'],
      ];
      rows.forEach((row, i) => {
        if (buyData[i]) {
          const spans = row.querySelectorAll('span');
          if (spans[0]) spans[0].textContent = buyData[i][0];
          if (spans[1]) spans[1].textContent = buyData[i][1];
        }
      });
    }
  }

  // ── Условия покупки/аренды ──
}

// ── MORTGAGE CALCULATOR ──
let _calcPropPrice = 0;

function initMortgageCalc(prop) {
  const block = document.getElementById('mortgageCalcBlock');
  if (!block) return;

  const isRent = prop.deal === 'rent';
  block.style.display = isRent ? 'none' : 'block';

  if (isRent) return;

  const priceUsd = parseFloat((prop.price || '').replace(/[^0-9.]/g, '')) || 0;
  _calcPropPrice = priceUsd;

  // Сброс hidden input значений
  const downEl = document.getElementById('calcDown');
  const termEl = document.getElementById('calcTerm');
  const rateEl = document.getElementById('calcRate');
  if (downEl) downEl.value = 30;
  if (termEl) termEl.value = 15;
  if (rateEl) rateEl.value = 7;

  // Инициализация кастомных слайдеров
  initCustomSliders(block);
  updateMortgageCalc();
}

function initCustomSliders(container) {
  const wraps = container.querySelectorAll('.calc-range-wrap[data-min]');
  wraps.forEach(wrap => {
    const min   = parseFloat(wrap.dataset.min);
    const max   = parseFloat(wrap.dataset.max);
    const step  = parseFloat(wrap.querySelector('input').step) || 1;
    const input = wrap.querySelector('input');
    const thumb = wrap.querySelector('.calc-thumb');
    const fill  = wrap.querySelector('.calc-track-fill');

    function getPct(val) { return (val - min) / (max - min); }

    function setVal(val) {
      // snap to step
      val = Math.round(val / step) * step;
      val = Math.min(max, Math.max(min, val));
      input.value = val;
      const pct = getPct(val) * 100;
      thumb.style.left = pct + '%';
      fill.style.width = pct + '%';
      if (typeof updateMortgageCalc === 'function') updateMortgageCalc();
    }

    // Init position
    setVal(parseFloat(input.value) || parseFloat(wrap.dataset.val) || min);

    function onMove(clientX) {
      const rect = wrap.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      setVal(min + ratio * (max - min));
    }

    // Mouse
    wrap.addEventListener('mousedown', e => {
      onMove(e.clientX);
      const onMM = e2 => onMove(e2.clientX);
      const onMU = () => { document.removeEventListener('mousemove', onMM); document.removeEventListener('mouseup', onMU); };
      document.addEventListener('mousemove', onMM);
      document.addEventListener('mouseup', onMU);
      e.preventDefault();
    });

    // Touch
    wrap.addEventListener('touchstart', e => {
      onMove(e.touches[0].clientX);
      const onTM = e2 => onMove(e2.touches[0].clientX);
      const onTE = () => { document.removeEventListener('touchmove', onTM); document.removeEventListener('touchend', onTE); };
      document.addEventListener('touchmove', onTM, { passive:true });
      document.addEventListener('touchend', onTE);
    }, { passive:true });
  });
}

function updateMortgageCalc() {
  const downEl  = document.getElementById('calcDown');
  const termEl  = document.getElementById('calcTerm');
  const rateEl  = document.getElementById('calcRate');
  if (!downEl || !termEl || !rateEl) return;

  const downPct  = parseInt(downEl.value);
  const termYrs  = parseInt(termEl.value);
  const rateAnn  = parseFloat(rateEl.value);
  const isZeroRate = rateAnn === 0;

  // Бейджи
  const downBadge  = document.getElementById('calcDownPct');
  const termBadge  = document.getElementById('calcTermBadge');
  const rateBadge  = document.getElementById('calcRateBadge');
  const rateLabel  = document.getElementById('calcRateLabel');

  if (downBadge) downBadge.textContent = downPct + '%';

  // Склонение лет
  const termWord = termYrs === 1 ? 'год' : termYrs >= 2 && termYrs <= 4 ? 'года' : 'лет';
  if (termBadge) termBadge.textContent = termYrs + ' ' + termWord;

  // Ставка: 0% = рассрочка
  const T = (typeof GRE_T === 'function') ? GRE_T : (k) => k;

  if (rateBadge) rateBadge.textContent = isZeroRate ? '0%' : rateAnn + '%';
  if (rateLabel) rateLabel.textContent = isZeroRate ? T('calc.installment') : T('calc.rate');

  const priceUsd = _calcPropPrice;
  if (!priceUsd) return;

  const downUsd  = priceUsd * downPct / 100;
  const loanUsd  = priceUsd - downUsd;
  const r        = rateAnn / 100 / 12;
  const n        = termYrs * 12;
  // При r=0 — равные платежи без процентов
  const payment  = r === 0 ? loanUsd / n : (loanUsd * r) / (1 - Math.pow(1 + r, -n));

  // Конвертируем в текущую валюту
  const payConverted  = Math.round(payment * CURRENCY_RATES[currentCurrency]);
  const sym           = CURRENCY_SYMBOLS[currentCurrency];
  const downConverted = Math.round(downUsd * CURRENCY_RATES[currentCurrency]);
  const loanConverted = Math.round(loanUsd * CURRENCY_RATES[currentCurrency]);

  const payEl     = document.getElementById('calcPayment');
  const subEl     = document.getElementById('calcSub');
  const downValEl = document.getElementById('calcDownVal');

  if (payEl) payEl.textContent = sym + payConverted.toLocaleString('ru-RU') + ' / мес';

  // Подпись под платежом
  const subText = isZeroRate
    ? T('calc.installment_sub', { term: termYrs, word: termWord })
    : T('calc.mortgage_sub', { down: sym + downConverted.toLocaleString('ru-RU'), loan: sym + loanConverted.toLocaleString('ru-RU') });
  if (subEl)  subEl.textContent  = subText;
  if (downValEl) downValEl.textContent = sym + downConverted.toLocaleString('ru-RU');
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

function renderMapMarkers(countryVal, cityVal, statusVal, typeVal, extra) {
  if (!catalogMap) return;

  mapMarkers.forEach(m => catalogMap.removeLayer(m));
  mapMarkers = [];
  const { priceMin = 0, priceMax = Infinity, areaMin = 0, areaMax = Infinity, rooms = 'all' } = extra || {};

  let filtered = MAP_PROPERTIES.filter(p => {
    const dealType = typeof currentDealType !== 'undefined' ? currentDealType : 'buy';
    const matchDeal    = p.deal === dealType;
    const matchCountry = countryVal === 'all' || p.country === countryVal;
    const matchCity    = cityVal === 'all' || p.city === cityVal;
    const matchStatus  = statusVal === 'all' || p.status === statusVal;
    const matchType    = !typeVal || typeVal === 'all' || p.type === typeVal;
    const price = parseFloat(p.price.replace(/[^0-9.]/g, ''));
    const area  = parseFloat(p.area) || 0;
    const rm    = parseInt(p.rooms) || 0;
    const matchPrice = price >= priceMin && price <= priceMax;
    const matchArea  = area  >= areaMin  && area  <= areaMax;
    const matchRooms = rooms === 'all' || (rooms === '4+' ? rm >= 4 : rm === parseInt(rooms));
    const matchAgent = !window._activeAgentId || p.agentId === window._activeAgentId;
    return matchDeal && matchCountry && matchCity && matchStatus && matchType && matchPrice && matchArea && matchRooms && matchAgent;
  });

  const clusters = clusterByProximity(filtered);

  clusters.forEach(cluster => {
    const count = cluster.items.length;
    const isCluster = count > 1;
    const size = count >= 5 ? 44 : 36;
    const fontSize = count >= 5 ? '12px' : '11px';

    const icon = L.divIcon({
      className: '',
      html: `<div class="map-cluster-icon" style="width:${size}px;height:${size}px;font-size:${fontSize};">${count}</div>`,
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
            <div style="font-size:0.7rem;color:#C0392B;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;">${getCityLabel(item)}</div>
            <div style="font-size:0.75rem;font-weight:600;color:#1A1A1A;line-height:1.3;">${getPropName(item)}</div>
            <div style="font-size:0.82rem;font-weight:800;color:#C0392B;">${item.price}</div>
          </div>
        </div>`
      ).join('');
      popupHtml = `
        <div style="padding:14px 16px 6px;max-height:280px;overflow-y:auto;">
          <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7A7A7A;margin-bottom:10px;">${count} объекта · ${getCityLabel(mainProp)}</div>
          ${listItems}
        </div>`;
    } else {
      popupHtml = `
        <img class="map-popup-img" src="${mainProp.img.replace('/600/375','/480/240')}" alt="">
        <div class="map-popup-body">
          <div class="map-popup-city">${getCityLabel(mainProp)}</div>
          <div class="map-popup-name">${getPropName(mainProp)}</div>
          <div class="map-popup-price">${mainProp.price}</div>
          <span class="map-popup-link map-popup-go" data-id="${mainProp.id}">${typeof I18n!=="undefined"?I18n.t("card.details"):"Подробнее"} →</span>
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

    marker._propertyIds = cluster.items.map(x => x.id);
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

// ── Highlight map marker on card hover ──
function highlightMapMarker(propId) {
  mapMarkers.forEach(function(marker) {
    if (!marker._propertyIds) return;
    const el = marker.getElement && marker.getElement();
    if (!el) return;
    const icon = el.querySelector('.map-cluster-icon');
    if (!icon) return;
    if (marker._propertyIds.indexOf(propId) !== -1) {
      icon.classList.add('map-marker-highlighted');
      el.style.zIndex = 9999;
    }
  });
}

function unhighlightMapMarkers() {
  mapMarkers.forEach(function(marker) {
    const el = marker.getElement && marker.getElement();
    if (!el) return;
    const icon = el.querySelector('.map-cluster-icon');
    if (!icon) return;
    icon.classList.remove('map-marker-highlighted');
    el.style.zIndex = '';
  });
}

// ── Attach hover listeners to catalog cards ──
function attachCardMapHover() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  grid.querySelectorAll('.catalog-card[data-id]').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      highlightMapMarker(card.dataset.id);
      // Smooth map pan to marker
      if (catalogMap && mapVisible) {
        const prop = MAP_PROPERTIES.find(function(p) { return p.id === card.dataset.id; });
        if (prop) {
          const currentCenter = catalogMap.getCenter();
          const dist = Math.sqrt(
            Math.pow((currentCenter.lat - prop.lat) * 111, 2) +
            Math.pow((currentCenter.lng - prop.lng) * 111, 2)
          );
          if (dist > 50) return; // don't fly to another country
          catalogMap.panTo([prop.lat, prop.lng], { animate: true, duration: 0.4 });
        }
      }
    });
    card.addEventListener('mouseleave', function() {
      unhighlightMapMarkers();
    });
  });
}

// ── Фильтр каталога по агенту ──
function filterByAgent(agentId) {
  // Переходим на страницу каталога
  if (typeof showPage === 'function') showPage('catalog');
  // Задержка больше чем таймаут инициализации карты (80ms)
  setTimeout(function() {
    // Сбрасываем обычные фильтры НЕ трогая _activeAgentId
    document.querySelectorAll('#page-catalog .filter-select').forEach(s => s.selectedIndex = 0);
    if (typeof updateCityOptions === 'function') updateCityOptions('all');
    ['priceMin','priceMax','areaMin','areaMax'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    const roomsVal = document.getElementById('roomsVal');
    if (roomsVal) roomsVal.value = 'all';
    document.querySelectorAll('.rooms-btn').forEach(b => b.classList.toggle('active', b.dataset.val === 'all'));
    // Скрываем карту — при фильтре по агенту объекты могут быть
    // разбросаны по разным странам, карта выглядит некорректно
    if (mapVisible) toggleCatalogMap();
    // Применяем фильтр агента
    window._activeAgentId = agentId;
    if (typeof filterCatalog === 'function') filterCatalog();
    // Показываем баннер с именем агента
    const agent = AGENTS.find(a => a.id === agentId);
    if (agent) {
      const banner = document.getElementById('agentFilterBanner');
      if (banner) {
        document.getElementById('agentFilterName').textContent = agent.name;
        document.getElementById('agentFilterPhoto').src = agent.photo;
        banner.style.display = 'flex';
      }
    }
  }, 200);
}

function clearAgentFilter() {
  window._activeAgentId = null;
  const banner = document.getElementById('agentFilterBanner');
  if (banner) banner.style.display = 'none';
  // Убираем agent из URL
  if (typeof window.syncFilterToUrl === 'function') window.syncFilterToUrl();
  if (typeof filterCatalog === 'function') filterCatalog();
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
    // Читаем текущее состояние фильтров — не сбрасываем то, что установил goToCountry
    const countryEl = document.querySelector('#page-catalog .filter-field--country .filter-select');
    const cityEl    = document.getElementById('citySelect');
    const statusEl  = document.getElementById('statusSelect');
    const typeEl    = document.getElementById('typeSelect');
    const country = countryEl ? countryEl.value : 'all';
    const city    = cityEl    ? cityEl.value    : 'all';
    const status  = statusEl  ? statusEl.value  : 'all';
    const type    = typeEl    ? typeEl.value    : 'all';

    renderCatalogGrid(country, city, status, type, {});
    updateCatalogHeadline(country);
    renderRecentlyViewed();
    initViewMode();
    // Синхронизируем активную кнопку валюты (могла быть сохранена в localStorage)
    document.querySelectorAll('.currency-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cur === currentCurrency);
    });
    // Инициализируем карту с небольшой задержкой чтобы контейнер
    // успел отрисоваться в DOM, затем повторно вызываем invalidateSize
    setTimeout(() => {
      initCatalogMap();
      if (catalogMap) {
        catalogMap.invalidateSize();
        renderMapMarkers(country, city, status, type, {});
        // Повторный invalidateSize — страховка на случай медленного рендера
        setTimeout(() => {
          if (catalogMap) {
            catalogMap.invalidateSize();
            // Если маркеры не были добавлены — рендерим снова
            if (mapMarkers.length === 0) {
              renderMapMarkers(country, city, status, type, {});
            }
          }
        }, 400);
      }
    }, 80);
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
  // После сброса страны — обновляем список городов под Грузию
  updateCityOptions('all');
  ['priceMin','priceMax','areaMin','areaMax'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const roomsVal = document.getElementById('roomsVal');
  if (roomsVal) roomsVal.value = 'all';
  document.querySelectorAll('.rooms-btn').forEach(b => b.classList.toggle('active', b.dataset.val === 'all'));
  // Сбрасываем фильтр агента
  window._activeAgentId = null;
  const banner = document.getElementById('agentFilterBanner');
  if (banner) banner.style.display = 'none';
  filterCatalog();
}

function setRooms(btn) {
  document.querySelectorAll('.rooms-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const roomsVal = document.getElementById('roomsVal');
  if (roomsVal) roomsVal.value = btn.dataset.val;
}

function formatPriceInput(el) {
  // Убираем всё кроме цифр при вводе — показываем как есть
  el.value = el.value.replace(/[^0-9]/g, '');
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
  const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
  const countryNames = {
    'all': T('catalog.in_georgia', 'в Грузии'),
    'usa': T('catalog.in_usa', 'в США'),
    'uae': T('catalog.in_uae', 'в ОАЭ'),
    'cyprus': T('catalog.in_cyprus', 'на Кипре'),
    'greece': T('catalog.in_greece', 'в Греции'),
  };
  document.getElementById('relatedTitle').textContent = T('detail.related_other_country', 'Другие объекты') + ' ' + (countryNames[prop.country] || getCityLabel(prop));

  track.innerHTML = same.map(p => {
    const badge = getPropBadge(p);
    const pName = getPropName(p);
    const roiHtml = (p.deal === 'buy' && p.roi)
      ? `<div class="catalog-roi-pill"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>${typeof I18n!=="undefined"?I18n.t("card.roi_label"):"ROI"} ${p.roi} ${typeof I18n!=="undefined"?I18n.t("card.roi_year"):"/год"}</div>`
      : '';
    return `
    <div class="catalog-card" style="flex-shrink:0;" onclick="showDetail('${p.id}')" spellcheck="false">
      <div style="position:relative;overflow:hidden;">
        <img class="catalog-img" src="${p.img}" alt="${pName}">
        <span class="prop-badge ${badge.cls}">${badge.text}</span>
        ${p.top ? `<span class="top-label">${typeof I18n!=="undefined"?I18n.t("card.top"):"★ ТОП"}</span>` : ''}
        ${shareCardBtn(p.id)}
        ${compareCardBtn(p.id)}
        ${favCardBtn(p.id)}
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city-row"><span class="catalog-city">${getCityLabel(p)}</span>${typeof Reviews !== 'undefined' ? Reviews.getMiniRatingHtml(p.id) : ''}</div>
        <div class="catalog-name">${pName}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${formatPrice(p.price)}</span>
            ${p.deal === 'buy' && p.area ? `<span class="catalog-price-sqm">${formatSqm(p)}</span>` : ''}
          </div>
          ${p.deal !== "rent" ? `<div class="catalog-price-old">${p.oldPrice ? formatPrice(p.oldPrice) : ''}</div>` : (p.oldPrice ? `<div class="catalog-price-old">${formatPrice(p.oldPrice)}</div>` : "")}
        </div>
        ${roiHtml ? `<div class="catalog-pills-row">${roiHtml}</div>` : (p.deal !== "rent" ? `<div class="catalog-pills-row"></div>` : "")}
        <div class="catalog-specs">
          <span class="spec-item"><strong>${p.area}</strong> ${T('card.sqm_abbr','м²')}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.rooms}</strong> ${T('card.rooms_abbr','спал.')}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.floor}</strong> ${T('card.floor_abbr','эт.')}</span>
        </div>
      </div>
      <div class="catalog-card-footer">
        <button class="catalog-cta-btn" onclick="event.stopPropagation();showDetail('${p.id}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.details"):"Подробнее"}
        </button>
        <button class="catalog-contact-btn" onclick="event.stopPropagation();openContactPopup('${pName.replace(/'/g, "\\'")}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.ask"):"Спросить"}
        </button>
      </div>
    </div>
  `}).join('');

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


// ── RENDER FEATURED TRACK (главная страница) ──
function getFeaturedCountryLabel(country) {
  const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
  const map = {
    all:    T('catalog.in_georgia', 'в Грузии'),
    usa:    T('catalog.in_usa', 'в США'),
    uae:    T('catalog.in_uae', 'в ОАЭ'),
    cyprus: T('catalog.in_cyprus', 'на Кипре'),
    greece: T('catalog.in_greece', 'в Греции'),
  };
  return map[country] || '';
}

let featuredCountry = 'all';
let featuredRentCountry = 'all';

function setFeaturedCountry(btn, deal) {
  if (deal === 'rent') {
    featuredRentCountry = btn.dataset.country;
    document.querySelectorAll('#featuredRentCountryTabs .featured-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.country === featuredRentCountry);
    });
    renderFeaturedDeal('rent');
  } else {
    featuredCountry = btn.dataset.country;
    document.querySelectorAll('#featuredCountryTabs .featured-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.country === featuredCountry);
    });
    renderFeaturedDeal('buy');
  }
}

function buildFeaturedCards(props) {
  return props.map(p => {
    const imgs = p.imgs || [p.img];
    const dots = imgs.map((_, i) => `<span class="card-slider-dot${i === 0 ? ' active' : ''}"></span>`).join('');
    const badge = getPropBadge(p);
    const pName = getPropName(p);
    let savingsHtml = '';
    if (p.oldPrice) {
      const oldNum = parseFloat(p.oldPrice.replace(/[^0-9.]/g, ''));
      const curNum = parseFloat(p.price.replace(/[^0-9.]/g, ''));
      if (oldNum > curNum) {
        const pct = Math.round((1 - curNum/oldNum)*100);
        savingsHtml = `<div class="catalog-price-save">−${pct}% ${typeof I18n!=="undefined"?I18n.t("card.savings_from"):"от начальной цены"}</div>`;
      }
    }
    const roiHtml = (p.deal === 'buy' && p.roi)
      ? `<div class="catalog-roi-pill"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>${typeof I18n!=="undefined"?I18n.t("card.roi_label"):"ROI"} ${p.roi} ${typeof I18n!=="undefined"?I18n.t("card.roi_year"):"/год"}</div>`
      : '';
    return `
    <div class="catalog-card" style="flex-shrink:0;" onclick="showDetail('${p.id}')" spellcheck="false">
      <div class="catalog-card-img-wrap" style="position:relative;overflow:hidden;">
        <div class="card-slider" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          <img class="catalog-img card-slider-img" src="${imgs[0]}" alt="${pName}">
          <button class="card-slider-btn card-slider-prev" onclick="cardSlide(event,this,-1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_prev','Назад'):'Назад'}">&#8249;</button>
          <button class="card-slider-btn card-slider-next" onclick="cardSlide(event,this,1)" aria-label="${typeof GRE_T==='function'?GRE_T('card.slider_next','Вперёд'):'Вперёд'}">&#8250;</button>
          <div class="card-slider-dots">${dots}</div>
        </div>
        <span class="prop-badge ${badge.cls}">${badge.text}</span>
        <span class="top-label">${typeof I18n!=="undefined"?I18n.t("card.top"):"★ ТОП"}</span>
        ${shareCardBtn(p.id)}
        ${compareCardBtn(p.id)}
        ${favCardBtn(p.id)}
      </div>
      <div class="catalog-card-body">
        <div class="catalog-city-row"><span class="catalog-city">${getCityLabel(p)}</span>${typeof Reviews !== 'undefined' ? Reviews.getMiniRatingHtml(p.id) : ''}</div>
        <div class="catalog-name">${pName}</div>
        <div class="catalog-price-block">
          <div class="catalog-price-row">
            <span class="catalog-price">${formatPrice(p.price)}</span>
            ${p.area ? `<span class="catalog-price-sqm">${formatSqm(p)}</span>` : ''}
          </div>
          ${p.deal !== "rent" ? `<div class="catalog-price-old">${p.oldPrice ? formatPrice(p.oldPrice) : ''}</div>` : (p.oldPrice ? `<div class="catalog-price-old">${formatPrice(p.oldPrice)}</div>` : "")}
        </div>
        ${(savingsHtml || roiHtml) ? `<div class="catalog-pills-row">${savingsHtml}${roiHtml}</div>` : (p.deal !== "rent" ? `<div class="catalog-pills-row"></div>` : "")}
        <div class="catalog-specs">
          <span class="spec-item"><strong>${p.area}</strong> ${typeof GRE_T==="function"?GRE_T("card.sqm_abbr"):"м²"}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.rooms}</strong> ${typeof GRE_T==="function"?GRE_T("card.rooms_abbr"):"спал."}</span>
          <span class="spec-sep">·</span>
          <span class="spec-item"><strong>${p.floor}</strong> ${typeof GRE_T==="function"?GRE_T("card.floor_abbr"):"эт."}</span>
          ${p.year ? `<span class="spec-sep">·</span><span class="spec-item"><strong>${p.year}</strong> ${typeof GRE_T==="function"?GRE_T("card.year_abbr","г."):"г."}</span>` : ''}
        </div>
      </div>
      <div class="catalog-card-footer">
        <button class="catalog-cta-btn" onclick="event.stopPropagation();showDetail('${p.id}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.details"):"Подробнее"}
        </button>
        <button class="catalog-contact-btn" onclick="event.stopPropagation();openContactPopup('${pName.replace(/'/g, "\\'")}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          ${typeof I18n!=="undefined"?I18n.t("card.ask"):"Спросить"}
        </button>
      </div>
    </div>`;
  }).join('');
}

function renderFeaturedDeal(deal) {
  const isBuy = deal === 'buy';
  const country = isBuy ? featuredCountry : featuredRentCountry;
  const trackId = isBuy ? 'featuredTrack' : 'featuredRentTrack';
  const titleId = isBuy ? 'featuredTitle' : 'featuredRentTitle';

  const track = document.getElementById(trackId);
  const titleEl = document.getElementById(titleId);
  if (!track) return;

  if (titleEl) {
    const T = (typeof GRE_T === 'function') ? GRE_T : (k, fb) => fb;
    const titlePrefix = isBuy ? T('catalog.buy_title_prefix', 'Топовые предложения покупки') : T('catalog.rent_title_prefix', 'Топовые предложения аренды');
    titleEl.textContent = titlePrefix + ' ' + getFeaturedCountryLabel(country);
  }

  const props = MAP_PROPERTIES.filter(p =>
    p.top &&
    p.deal === deal &&
    (country === 'all' || p.country === country)
  ).slice(0, 6);

  track.innerHTML = buildFeaturedCards(props);

  if (typeof initFeaturedSlider === 'function') initFeaturedSlider(isBuy ? 'buy' : 'rent');
}

function renderFeatured() {
  renderFeaturedDeal('buy');
  renderFeaturedDeal('rent');
}

// Вызов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
});

// ── DETAIL MAP ──
let detailMap = null;
let detailMarker = null;

function initDetailMap(prop) {
  const container = document.getElementById('detailMap');
  if (!container) return;

  const lat = parseFloat(prop.lat);
  const lng = parseFloat(prop.lng);
  if (isNaN(lat) || isNaN(lng)) return;

  // Уничтожаем старую карту — иначе Leaflet путается с контейнером
  if (detailMap) {
    detailMap.remove();
    detailMap = null;
    detailMarker = null;
  }

  // Создаём карту только после того как страница стала видимой
  // используем два requestAnimationFrame — DOM должен успеть отрисоваться
  requestAnimationFrame(() => requestAnimationFrame(() => {
    detailMap = L.map('detailMap', {
      center: [lat, lng],
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright" style="font-size:9px;opacity:0.5">OSM</a>',
      maxZoom: 19,
    }).addTo(detailMap);

    const icon = L.divIcon({
      className: '',
      html: `<div class="detail-map-marker"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22],
    });

    detailMarker = L.marker([lat, lng], { icon })
      .addTo(detailMap)
      .bindPopup(`<div style="font-size:13px;font-weight:600;color:#1A1A1A;">${getPropName(prop)}</div><div style="font-size:12px;color:#C0392B;font-weight:700;margin-top:4px;">${prop.price}</div>`, {
        maxWidth: 240,
        className: 'detail-map-popup',
      })
      .openPopup();

    // invalidateSize после полной отрисовки
    setTimeout(() => detailMap && detailMap.invalidateSize(), 100);
  }));
}


// ── Переключатель вид: сетка / список ──
let currentViewMode = localStorage.getItem('grre_viewmode') || 'grid';

function setViewMode(mode) {
  currentViewMode = mode;
  localStorage.setItem('grre_viewmode', mode);

  const grid    = document.getElementById('catalogGrid');
  const btnGrid = document.getElementById('viewBtnGrid');
  const btnList = document.getElementById('viewBtnList');
  const btnMap  = document.getElementById('viewBtnMap');
  const splitWrap = document.getElementById('catalogSplitWrap');
  const mapWrap   = document.getElementById('catalogMapWrap');
  const mainWrap  = document.getElementById('catalogMainWrap');
  if (!grid) return;

  // Reset all
  grid.classList.remove('catalog-list-view');
  btnGrid && btnGrid.classList.remove('active');
  btnList && btnList.classList.remove('active');
  btnMap  && btnMap.classList.remove('active');

  if (mode === 'list') {
    grid.classList.add('catalog-list-view');
    btnList && btnList.classList.add('active');
    // Exit split map mode
    if (splitWrap) splitWrap.classList.remove('split-active');
    if (mainWrap)  mainWrap.style.display = '';
    if (mapWrap)   mapWrap.classList.remove('split-map-panel');

  } else if (mode === 'map') {
    btnMap && btnMap.classList.add('active');
    // Enter split mode
    if (splitWrap) splitWrap.classList.add('split-active');
    if (mainWrap)  mainWrap.style.display = '';
    if (mapWrap)   mapWrap.classList.add('split-map-panel');
    // Show map if hidden
    if (mapWrap) mapWrap.style.display = '';
    if (!catalogMap) initCatalogMap();
    setTimeout(() => { if (catalogMap) catalogMap.invalidateSize(); }, 300);

  } else {
    // grid
    btnGrid && btnGrid.classList.add('active');
    if (splitWrap) splitWrap.classList.remove('split-active');
    if (mainWrap)  mainWrap.style.display = '';
    if (mapWrap)   mapWrap.classList.remove('split-map-panel');
  }
}

function initViewMode() {
  setViewMode(currentViewMode);
}

// ── PDF BROCHURE GENERATOR ──
let _currentPdfProp = null;

// Сохраняем текущий объект при открытии детальной страницы
const _origShowDetail = showDetail;

function downloadPropertyPdf() {
  const prop = _currentPdfProp;
  if (!prop) return;

  const btn = document.getElementById('btnDownloadPdf');
  if (btn) { btn.textContent = 'Генерация...'; btn.disabled = true; }

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const W = 210, H = 297;
    const red = [192, 57, 43];
    const dark = [26, 26, 26];
    const gray = [120, 120, 120];
    const lightgray = [240, 240, 240];
    const white = [255, 255, 255];

    // ── Шапка (красная полоса) ──
    doc.setFillColor(...red);
    doc.rect(0, 0, W, 28, 'F');

    doc.setTextColor(...white);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('GEORGIA REAL ESTATE', 14, 11);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Недвижимость в Грузии и за рубежом', 14, 17);
    doc.text('+995 32 2 123 456  |  georgia-re.com', 14, 22);

    // Бейдж статуса
    const badgeText = prop.badgeText || '';
    if (badgeText) {
      doc.setFillColor(255, 255, 255, 0.2);
      doc.setFillColor(255, 255, 255);
      doc.setTextColor(...red);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'bold');
      const bw = doc.getTextWidth(badgeText) + 8;
      doc.roundedRect(W - bw - 14, 10, bw, 9, 2, 2, 'F');
      doc.text(badgeText.toUpperCase(), W - bw - 10, 16.5);
    }

    // ── Фото (заглушка с градиентом) ──
    doc.setFillColor(...lightgray);
    doc.rect(0, 28, W, 72, 'F');

    // Загружаем фото через Image
    const imgUrl = prop.img || (prop.imgs && prop.imgs[0]);
    const loadImg = (url) => new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => resolve(null);
      img.src = url + (url.includes('?') ? '&' : '?') + 'cb=' + Date.now();
    });

    loadImg(imgUrl).then(dataUrl => {
      if (dataUrl) {
        doc.addImage(dataUrl, 'JPEG', 0, 28, W, 72);
      }

      // Тёмный оверлей снизу фото
      doc.setFillColor(0, 0, 0);
      doc.setGState(new doc.GState({ opacity: 0.45 }));
      doc.rect(0, 76, W, 24, 'F');
      doc.setGState(new doc.GState({ opacity: 1 }));

      // ── Название объекта поверх фото ──
      doc.setTextColor(...white);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      const name = getPropName(prop) || '';
      const nameLines = doc.splitTextToSize(name, W - 28);
      doc.text(nameLines, 14, 86);

      // ── Цена ──
      doc.setTextColor(...white);
      doc.setFontSize(11);
      doc.text(prop.price || '', W - 14, 86, { align: 'right' });

      let y = 112;

      // ── Ключевые параметры (плашки) ──
      const specs = [
        { label: 'Площадь', val: (prop.area || '—') + ' м²' },
        { label: 'Спальни', val: prop.rooms || '—' },
        { label: 'Этаж', val: prop.floor || '—' },
        { label: 'Год', val: prop.year || '—' },
        { label: 'Город', val: prop.cityLabel || '—' },
        { label: 'Тип', val: prop.type === 'villa' ? 'Вилла' : prop.type === 'apart' ? 'Апарт' : 'Квартира' },
      ];
      const colW = (W - 28) / 3;
      specs.forEach((s, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 14 + col * colW;
        const yy = y + row * 22;
        doc.setFillColor(...lightgray);
        doc.roundedRect(x, yy, colW - 4, 18, 2, 2, 'F');
        doc.setTextColor(...gray);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.text(s.label.toUpperCase(), x + 5, yy + 6);
        doc.setTextColor(...dark);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(s.val, x + 5, yy + 13);
      });

      y += 50;

      // ── Описание ──
      doc.setDrawColor(...lightgray);
      doc.setLineWidth(0.3);
      doc.line(14, y, W - 14, y);
      y += 7;

      doc.setTextColor(...dark);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('Об объекте', 14, y);
      y += 7;

      doc.setTextColor(...gray);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      const descLines = doc.splitTextToSize(getPropDesc(prop) || '', W - 28);
      doc.text(descLines, 14, y);
      y += descLines.length * 5 + 8;

      // ── Инвест-потенциал ──
      if (prop.deal === 'buy' && prop.roi) {
        doc.line(14, y, W - 14, y);
        y += 7;
        doc.setTextColor(...dark);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('Инвестиционный потенциал', 14, y);
        y += 8;

        const invest = [
          { label: 'Доход от аренды', val: prop.roi },
          { label: 'Ожидаемый рост цены', val: prop.growth },
          { label: 'Окупаемость', val: prop.payback },
        ];
        invest.forEach(item => {
          doc.setFontSize(9);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(...gray);
          doc.text(item.label, 14, y);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(...red);
          doc.text(item.val, W - 14, y, { align: 'right' });
          doc.setDrawColor(...lightgray);
          doc.line(14, y + 2, W - 14, y + 2);
          y += 9;
        });
        y += 4;
      }

      // ── Контакты / CTA ──
      doc.setFillColor(...red);
      doc.roundedRect(14, y, W - 28, 28, 3, 3, 'F');
      doc.setTextColor(...white);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Получить консультацию', W / 2, y + 10, { align: 'center' });
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('+995 32 2 123 456  |  WhatsApp  |  Telegram', W / 2, y + 19, { align: 'center' });

      // ── Подвал ──
      doc.setFillColor(...dark);
      doc.rect(0, H - 14, W, 14, 'F');
      doc.setTextColor(...white);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.text('Georgia Real Estate  ·  Все права защищены  ·  Цены носят ориентировочный характер', W / 2, H - 5, { align: 'center' });

      // Сохраняем
      const filename = 'GRE_' + (prop.id || 'property').replace(/[^a-z0-9]/gi, '_') + '.pdf';
      doc.save(filename);

      if (btn) { btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Скачать PDF'; btn.disabled = false; }
    }).catch(() => {
      if (btn) { btn.innerHTML = 'Скачать PDF'; btn.disabled = false; }
    });

  } catch(e) {
    console.error('PDF error:', e);
    if (btn) { btn.innerHTML = 'Скачать PDF'; btn.disabled = false; }
  }
}








