const products = [
  {
    id: 1,
    title: "TORVESSA Oyun Kol Destek Standı",
    category: "stand",
    desc: "Masaüstü düzeni ve konforlu kullanım sağlayan dayanıklı 3D baskı konsol tutucu.",
    tag: "Ergonomi",
    image: "https://i.ibb.co/6cK5ZVh/kol-destek.jpg",
    url: "https://www.trendyol.com/torvessa/oyun-kol-destegi-p-1176938888?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 2,
    title: "TORVESSA 4 Bölmeli Ayaklı Çerezlik",
    category: "mutfak",
    desc: "Ortası kürdanlıklı, bölmeli geometrik ve şık sunumluk.",
    tag: "Sunum",
    image: "https://i.ibb.co/3Wq80dZ/cerezlik.jpg",
    url: "https://www.trendyol.com/pd/torvessa/4-bolmeli-ayakli-cerezlik-ve-sunumluk-ortasi-kurdanlikli-siyah-karamel-p-1182018339?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 3,
    title: "TORVESSA Meyve Yıkama & Süzgeç Kabı",
    category: "mutfak",
    desc: "Vortex akış sistemli, gıdaya uygun PLA bio-plastik yıkama kasesi.",
    tag: "Mutfak",
    image: "https://i.ibb.co/v4J4pG6/meyve-kabi.jpg",
    url: "https://www.trendyol.com/pd/torvessa/meyve-yikama-kabi-fruit-washing-bowl-pla-bitki-bazli-malzeme-pratik-su-tahliyeli-yikama-kasesi-beyaz-p-1183448972?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 4,
    title: "Mat Siyah Fiyonk Makyaj Düzenleyici",
    category: "organizer",
    desc: "Kozmetik fırçaları ve aksesuarlar için modern fiyonk tasarımlı düzenleyici.",
    tag: "Makyaj",
    image: "https://i.ibb.co/k2hZpTf/fiyonk.jpg",
    url: "https://www.trendyol.com/genel-markalar/torvessa-premium-fiyonk-makyaj-fircalik-organizer-p-1176263955?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 5,
    title: "TORVESSA Duvar Tipi Modüler Raf",
    category: "dekor",
    desc: "Banyo, mutfak ve çalışma alanları için estetik ve sağlam raf.",
    tag: "Dekorasyon",
    image: "https://i.ibb.co/RcmZ2b5/duvar-rafi.jpg",
    url: "https://www.trendyol.com/pd/torvessa/premium-duvar-tipi-cok-amacli-dekoratif-raf-p-1176940218?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 6,
    title: "TORVESSA Kuğu Tasarımlı Organizer",
    category: "mutfak",
    desc: "Mutfak kaşıklık ve banyo gereçleri için zarif kuğu figürlü çok amaçlı hazne.",
    tag: "Mutfak / Banyo",
    image: "https://i.ibb.co/F8bV6Z4/kugu.jpg",
    url: "https://www.trendyol.com/pd/torvessa/dekoratif-kugu-tasarimli-kasiklik-ve-cok-amacli-mutfak-organizeri-p-1181530673?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 7,
    title: "Sakura Samuray Figürlü Kitap Ayracı",
    category: "dekor",
    desc: "Detaylı kabartma 3D samuray ve sakura ağacı figürlü püsküllü kitap ayracı.",
    tag: "Aksesuar",
    image: "https://i.ibb.co/M9B7k7t/ayrac.jpg",
    url: "https://www.trendyol.com/pd/torvessa/sakura-samuray-figurlu-puskullu-dekoratif-kitap-ayraci-p-1182026976?boutiqueId=61&merchantId=1296987"
  }
];

const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(filter = 'all') {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? products 
    : products.filter(item => item.category === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap">
        <span class="card-badge-top">${p.tag}</span>
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">3D ÜRETİM SERİSİ</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-trendyol-card">
          <span>Trendyol'da İncele</span>
          &rarr;
        </a>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.getAttribute('data-filter'));
  });
});

renderProducts();