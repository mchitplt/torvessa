const products = [
  {
    id: 1,
    title: "TORVESSA Oyun Kol Destek Standı",
    category: "stand",
    desc: "Masaüstü ergonomisini artıran, dayanıklı ve şık 3D üretim destek standı.",
    tag: "Ergonomi",
    image: "images/kol-destek.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 2,
    title: "TORVESSA Meyve Yıkama Kabı (PLA)",
    category: "dekor",
    desc: "3D baskı, gıdaya uygun çevre dostu PLA bio-plastik süzgeçli tasarım kase.",
    tag: "Ev Gereçleri",
    image: "images/meyve-kabi.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 3,
    title: "Fiyonk Detaylı Makyaj Düzenleyici",
    category: "organizer",
    desc: "Makyaj fırçaları ve aksesuarlar için modern, pembe fiyonk tasarımlı düzenleyici.",
    tag: "Makyaj",
    image: "images/fiyonk-organizer.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 4,
    title: "TORVESSA Döner Makyaj Fırçalık Organizer",
    category: "organizer",
    desc: "Kozmetik fırçaları düzenli tutan, minimalist dikey saklama kutusu.",
    tag: "Makyaj",
    image: "images/fircalik.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 5,
    title: "Duvar Tipi Çok Amaçlı Dekoratif Raf",
    category: "dekor",
    desc: "Banyo, mutfak veya çalışma odası için şık, sağlam modüler duvar rafı.",
    tag: "Dekorasyon",
    image: "images/duvar-rafi.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 6,
    title: "Kuğu Tasarımlı Kaşıklık & Banyo Organizeri",
    category: "dekor",
    desc: "Zarif kuğu siluetiyle tasarlanmış, estetik mutfak ve makyaj düzenleyici.",
    tag: "Dekorasyon",
    image: "images/kugu-organizer.jpg",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  }
];

const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(filter = 'all') {
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
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Görsel+Yüklenemedi'">
      </div>
      <div class="product-info">
        <span class="product-category">3D BASKI SERİSİ</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.url}" target="_blank" class="btn-trendyol-card">
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