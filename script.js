const products = [
  {
    id: 1,
    title: "TORVESSA Oyun Kol Destek Standı",
    category: "stand",
    desc: "Masaüstü düzeni ve konforlu kullanım sağlayan dayanıklı 3D baskı konsol tutucu.",
    tag: "Ergonomi",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1480/product/media/images/prod/QC/20240808/17/740aa92c-567e-3990-b964-b52504815a5f/1_org_zoom.jpg",
    url: "https://www.trendyol.com/torvessa/oyun-kol-destegi-p-1176938888?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 2,
    title: "TORVESSA 4 Bölmeli Ayaklı Çerezlik",
    category: "mutfak",
    desc: "Ortası kürdanlıklı, bölmeli geometrik ve şık sunumluk.",
    tag: "Sunum",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1476/product/media/images/prod/QC/20240806/16/0998db4c-687f-38ae-b514-6447814db5a5/1_org_zoom.jpg",
    url: "https://www.trendyol.com/pd/torvessa/4-bolmeli-ayakli-cerezlik-ve-sunumluk-ortasi-kurdanlikli-siyah-karamel-p-1182018339?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 3,
    title: "TORVESSA Meyve Yıkama & Süzgeç Kabı",
    category: "mutfak",
    desc: "Vortex akış sistemli, gıdaya uygun PLA bio-plastik yıkama kasesi.",
    tag: "Mutfak",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1479/product/media/images/prod/QC/20240807/19/22d56a73-671c-3e6f-998e-4a67746cb927/1_org_zoom.jpg",
    url: "https://www.trendyol.com/pd/torvessa/meyve-yikama-kabi-fruit-washing-bowl-pla-bitki-bazli-malzeme-pratik-su-tahliyeli-yikama-kasesi-beyaz-p-1183448972?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 4,
    title: "Mat Siyah Fiyonk Makyaj Düzenleyici",
    category: "organizer",
    desc: "Kozmetik fırçaları ve aksesuarlar için modern fiyonk tasarımlı düzenleyici.",
    tag: "Makyaj",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1477/product/media/images/prod/QC/20240807/11/4f2b545f-7f55-3213-9aa6-01588c8eb2c7/1_org_zoom.jpg",
    url: "https://www.trendyol.com/genel-markalar/torvessa-premium-fiyonk-makyaj-fircalik-organizer-p-1176263955?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 5,
    title: "TORVESSA Duvar Tipi Modüler Raf",
    category: "dekor",
    desc: "Banyo, mutfak ve çalışma alanları için estetik ve sağlam raf.",
    tag: "Dekorasyon",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1478/product/media/images/prod/QC/20240807/18/8877395a-c5c2-3e28-9844-3d02b936d539/1_org_zoom.jpg",
    url: "https://www.trendyol.com/pd/torvessa/premium-duvar-tipi-cok-amacli-dekoratif-raf-p-1176940218?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 6,
    title: "TORVESSA Kuğu Tasarımlı Organizer",
    category: "mutfak",
    desc: "Mutfak kaşıklık ve banyo gereçleri için zarif kuğu figürlü çok amaçlı hazne.",
    tag: "Mutfak / Banyo",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1479/product/media/images/prod/QC/20240808/11/cb562211-536f-31ad-94ec-3323a7bb184e/1_org_zoom.jpg",
    url: "https://www.trendyol.com/pd/torvessa/dekoratif-kugu-tasarimli-kasiklik-ve-cok-amacli-mutfak-organizeri-p-1181530673?boutiqueId=61&merchantId=1296987"
  },
  {
    id: 7,
    title: "Sakura Samuray Figürlü Kitap Ayracı",
    category: "dekor",
    desc: "Detaylı kabartma 3D samuray ve sakura ağacı figürlü püsküllü kitap ayracı.",
    tag: "Aksesuar",
    image: "https://wsrv.nl/?url=cdn.dsmcdn.com/ty1476/product/media/images/prod/QC/20240806/17/373b5ce8-795a-3507-b3ea-156372ee0d20/1_org_zoom.jpg",
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