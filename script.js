const products = [
  {
    id: 1,
    title: "TORVESSA Oyun Kol Destek Standı",
    category: "stand",
    desc: "Masaüstü düzeni ve konforlu kullanım sağlayan dayanıklı 3D baskı konsol tutucu.",
    tag: "Ergonomi",
    image: "images/kol-destek.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 2,
    title: "TORVESSA 4 Bölmeli Ayaklı Çerezlik",
    category: "mutfak",
    desc: "Ortası kürdanlıklı, bölmeli geometrik ve şık siyah-karamel sunumluk.",
    tag: "Sunum",
    image: "images/cerezlik.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 3,
    title: "TORVESSA Meyve Yıkama & Süzgeç Kabı",
    category: "mutfak",
    desc: "Vortex akış sistemli, gıdaya uygun çevre dostu PLA bio-plastik yıkama kasesi.",
    tag: "Mutfak",
    image: "images/meyve-kabi.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 4,
    title: "Mat Siyah Fiyonk Makyaj Düzenleyici",
    category: "organizer",
    desc: "Kozmetik fırçaları ve aksesuarlar için modern fiyonk tasarımlı masaüstü kutusu.",
    tag: "Makyaj",
    image: "images/fiyonk.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 5,
    title: "TORVESSA Duvar Tipi Modüler Raf",
    category: "dekor",
    desc: "Banyo, mutfak ve çalışma alanları için estetik ve sağlam duvar rafı.",
    tag: "Dekorasyon",
    image: "images/duvar-rafi.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 6,
    title: "TORVESSA Kuğu Tasarımlı Organizer",
    category: "mutfak",
    desc: "Kaşıklık ve banyo aksesuarları için zarif kuğu figürlü çok amaçlı hazne.",
    tag: "Mutfak / Banyo",
    image: "images/kugu.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 7,
    title: "Sakura Samuray Figürlü Kitap Ayracı",
    category: "dekor",
    desc: "Detaylı kabartma 3D samuray ve sakura ağacı figürlü püsküllü kitap ayracı.",
    tag: "Aksesuar",
    image: "images/ayrac.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
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