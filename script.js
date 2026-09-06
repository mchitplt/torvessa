// Trendyol Mağazasındaki Ürünler ve Listesi
const products = [
  {
    id: 1,
    title: "TORVESSA Oyun Kol Destek Standı",
    category: "stand",
    desc: "Masaüstü ergonomisini artıran, dayanıklı ve şık 3D üretim destek standı.",
    tag: "Ergonomi",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 2,
    title: "TORVESSA Meyve Yıkama Kabı (PLA)",
    category: "dekor",
    desc: "3D baskı, gıdaya uygun çevre dostu PLA bio-plastik süzgeçli tasarım kase.",
    tag: "Ev Gereçleri",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 3,
    title: "Fiyonk Detaylı Makyaj Düzenleyici",
    category: "organizer",
    desc: "Makyaj fırçaları ve aksesuarlar için modern, pembe fiyonk tasarımlı düzenleyici.",
    tag: "Makyaj",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 4,
    title: "TORVESSA Döner Makyaj Fırçalık Organizer",
    category: "organizer",
    desc: "Kozmetik fırçaları düzenli tutan, minimalist dikey saklama kutusu.",
    tag: "Makyaj",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 5,
    title: "Duvar Tipi Çok Amaçlı Dekoratif Raf",
    category: "dekor",
    desc: "Banyo, mutfak veya çalışma odası için şık, sağlam modüler duvar rafı.",
    tag: "Dekorasyon",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  },
  {
    id: 6,
    title: "Kuğu Tasarımlı Kaşıklık & Banyo Organizeri",
    category: "dekor",
    desc: "Zarif kuğu siluetiyle tasarlanmış, estetik mutfak ve makyaj düzenleyici.",
    tag: "Dekorasyon",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    url: "https://www.trendyol.com/magaza/torvessa-m-1206887"
  }
];

// Grid'e ürünleri bas
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
        <img src="${p.image}" alt="${p.title}" loading="lazy">
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

// Filtre butonları
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.getAttribute('data-filter'));
  });
});

renderProducts();