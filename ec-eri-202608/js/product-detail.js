/**
 * URBAN CLOSET - Product Detail Page JavaScript (product-detail.js)
 * 商品データ読み込み、画像サムネイル切替、カラー/サイズ選択、カート追加、関連商品表示
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductDetailPage();
});

function initProductDetailPage() {
  if (typeof PRODUCTS_DATA === 'undefined') return;

  // 1. URLパラメータから商品IDを取得
  const urlParams = new URLSearchParams(window.location.search);
  let productId = parseInt(urlParams.get('id'), 10);
  let product = PRODUCTS_DATA.find(p => p.id === productId);

  // 指定IDが存在しない場合はデフォルトで第1商品を表示
  if (!product) {
    product = PRODUCTS_DATA[0];
    productId = product.id;
  }

  // 2. DOM要素の取得
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  const mainImage = document.getElementById('productMainImage');
  const thumbnailsContainer = document.getElementById('productThumbnails');
  const productTitle = document.getElementById('productTitle');
  const productPrice = document.getElementById('productPrice');
  const productDesc = document.getElementById('productDescription');
  const colorSwatchesContainer = document.getElementById('colorSwatches');
  const selectedColorLabel = document.getElementById('selectedColorLabel');
  const sizeButtonsContainer = document.getElementById('sizeButtons');
  const selectedSizeLabel = document.getElementById('selectedSizeLabel');
  const sizeGuideTable = document.getElementById('sizeGuideTable');
  const productSpecsContainer = document.getElementById('productSpecs');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const relatedGrid = document.getElementById('relatedProductsGrid');

  // 3. ページタイトルの更新
  document.title = `${product.name} | URBAN CLOSET`;

  // 4. パンくずリスト更新
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = `products.html?category=${product.category}`;
  }
  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = product.name;
  }

  // 5. 基本情報更新
  if (productTitle) productTitle.textContent = product.name;
  if (productPrice) productPrice.innerHTML = `¥${product.price.toLocaleString()} <span>(税込)</span>`;
  if (productDesc) productDesc.textContent = product.description;

  // 6. 画像ギャラリー描画
  if (mainImage && product.images && product.images.length > 0) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }

  if (thumbnailsContainer && product.images) {
    thumbnailsContainer.innerHTML = product.images.map((imgUrl, index) => `
      <div class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${imgUrl}" alt="${product.name} thumbnail ${index + 1}" loading="lazy">
      </div>
    `).join('');

    const thumbs = thumbnailsContainer.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const index = parseInt(thumb.dataset.index, 10);
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImage) {
          mainImage.style.opacity = '0.5';
          setTimeout(() => {
            mainImage.src = product.images[index];
            mainImage.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // 7. カラーバリエーション描画
  let selectedColor = product.colors[0]?.name || 'Standard';
  if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;

  if (colorSwatchesContainer && product.colors) {
    colorSwatchesContainer.innerHTML = product.colors.map((color, index) => `
      <button type="button" 
              class="color-swatch-btn ${index === 0 ? 'active' : ''}" 
              data-color="${color.name}" 
              style="background-color: ${color.hex}; border: 1px solid ${color.border};" 
              title="${color.name}">
      </button>
    `).join('');

    const swatchBtns = colorSwatchesContainer.querySelectorAll('.color-swatch-btn');
    swatchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        swatchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.dataset.color;
        if (selectedColorLabel) selectedColorLabel.textContent = selectedColor;
      });
    });
  }

  // 8. サイズバリエーション描画
  let selectedSize = product.sizes[0] || 'FREE';
  if (selectedSizeLabel) selectedSizeLabel.textContent = selectedSize;

  if (sizeButtonsContainer && product.sizes) {
    sizeButtonsContainer.innerHTML = product.sizes.map((size, index) => `
      <button type="button" class="size-btn ${index === 0 ? 'active' : ''}" data-size="${size}">
        ${size}
      </button>
    `).join('');

    const sizeBtns = sizeButtonsContainer.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.dataset.size;
        if (selectedSizeLabel) selectedSizeLabel.textContent = selectedSize;
      });
    });
  }

  // 9. サイズガイド表の描画
  if (sizeGuideTable && product.sizeGuide) {
    const keys = Object.keys(product.sizeGuide[0]);
    const headerLabels = {
      size: "SIZE",
      length: "着丈 (LENGTH)",
      width: "身幅 (CHEST)",
      shoulder: "肩幅 (SHOULDER)",
      sleeve: "袖丈 (SLEEVE)",
      waist: "ウエスト (WAIST)",
      hip: "ヒップ (HIP)",
      rise: "股上 (RISE)",
      inseam: "股下 (INSEAM)",
      height: "高さ (HEIGHT)",
      depth: "マチ (DEPTH)",
      strap: "ストラップ (STRAP)",
      head: "頭周り (HEAD)",
      brim: "ツバ (BRIM)"
    };

    let tableHtml = `
      <thead>
        <tr>
          ${keys.map(k => `<th>${headerLabels[k] || k.toUpperCase()}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${product.sizeGuide.map(row => `
          <tr>
            ${keys.map(k => `<td>${row[k] || '—'}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    `;
    sizeGuideTable.innerHTML = tableHtml;
  }

  // 10. 商品詳細スペック（素材・原産国等）
  if (productSpecsContainer && product.details) {
    productSpecsContainer.innerHTML = product.details.map(detail => `
      <div>・${detail}</div>
    `).join('');
  }

  // 11. カート追加ボタンのクリック処理
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (typeof CartManager !== 'undefined') {
        CartManager.addItem(product, selectedColor, selectedSize, 1);
        if (window.openCartDrawer) {
          setTimeout(() => {
            window.openCartDrawer();
          }, 300);
        }
      }
    });
  }

  // 12. 関連商品（4件）の描画
  if (relatedGrid) {
    const related = PRODUCTS_DATA
      .filter(p => p.id !== product.id)
      .slice(0, 4);

    relatedGrid.innerHTML = related.map(item => `
      <article class="product-card">
        <a href="product-detail.html?id=${item.id}" class="product-card-thumb">
          <img src="${item.images[0]}" alt="${item.name}" class="product-img-main" loading="lazy">
          <img src="${item.images[1] || item.images[0]}" alt="${item.name}" class="product-img-hover" loading="lazy">
        </a>
        <div class="product-card-info">
          <span class="product-brand">URBAN CLOSET</span>
          <h3 class="product-title">
            <a href="product-detail.html?id=${item.id}">${item.name}</a>
          </h3>
          <div class="product-price">¥${item.price.toLocaleString()}</div>
        </div>
      </article>
    `).join('');
  }
}
