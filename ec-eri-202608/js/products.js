/**
 * URBAN CLOSET - Products Catalog Page JavaScript (products.js)
 * カテゴリフィルター、ソート機能、商品グリッド描画
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductCatalog();
});

function initProductCatalog() {
  const gridContainer = document.getElementById('productsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sortSelect');

  if (!gridContainer || typeof PRODUCTS_DATA === 'undefined') return;

  let currentCategory = 'ALL';
  let currentSort = 'default';

  // URLクエリパラメータからカテゴリを取得（例: products.html?category=TOPS）
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  if (initialCategory) {
    const validBtn = Array.from(filterBtns).find(btn => btn.dataset.category === initialCategory.toUpperCase());
    if (validBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      validBtn.classList.add('active');
      currentCategory = initialCategory.toUpperCase();
    }
  }

  // 商品を描画する関数
  function renderProducts() {
    let filtered = [...PRODUCTS_DATA];

    // 1. カテゴリフィルタ
    if (currentCategory !== 'ALL') {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    // 2. ソート
    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'new') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    // 3. HTML生成
    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="no-products-found">
          <p>該当する商品が見つかりませんでした。</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => createProductCardHTML(item)).join('');
  }

  // 商品カードHTML生成
  function createProductCardHTML(product) {
    const mainImg = product.images[0];
    const hoverImg = product.images[1] || product.images[0];

    return `
      <article class="product-card">
        <a href="product-detail.html?id=${product.id}" class="product-card-thumb">
          ${product.isNew ? '<span class="product-tag-new">NEW</span>' : ''}
          <img src="${mainImg}" alt="${product.name}" class="product-img-main" loading="lazy">
          <img src="${hoverImg}" alt="${product.name} alternate view" class="product-img-hover" loading="lazy">
        </a>
        <div class="product-card-info">
          <span class="product-brand">URBAN CLOSET</span>
          <h3 class="product-title">
            <a href="product-detail.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-price">¥${product.price.toLocaleString()}</div>
        </div>
      </article>
    `;
  }

  // フィルターボタンイベント
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // ソートセレクトイベント
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // 初回描画
  renderProducts();
}
