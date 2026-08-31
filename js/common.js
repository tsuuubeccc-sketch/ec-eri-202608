/**
 * URBAN CLOSET - Common JavaScript
 * ヘッダー、フルスクリーンメニュー、検索モーダル、カートドロワー、トースト通知の共通制御
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFullscreenNav();
  initSearchModal();
  initCartDrawer();
  initNewsletterForms();
});

// ==========================================
// 1. ヘッダーのスクロール制御
// ==========================================
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // 初期読み込み時の判定
}

// ==========================================
// 2. フルスクリーンナビゲーション
// ==========================================
function initFullscreenNav() {
  const openBtn = document.getElementById('openNavBtn');
  const closeBtn = document.getElementById('closeNavBtn');
  const nav = document.getElementById('fullscreenNav');

  if (!nav || !openBtn) return;

  const openNav = () => {
    nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
    }
  });

  // ナビ内リンクをクリックしたら閉じる
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// ==========================================
// 3. クイック検索モーダル
// ==========================================
function initSearchModal() {
  const openBtn = document.getElementById('openSearchBtn');
  const closeBtn = document.getElementById('closeSearchBtn');
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!modal || !openBtn) return;

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (input) {
      setTimeout(() => input.focus(), 100);
      renderSearchResults(input.value.trim());
    }
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (input) input.value = '';
  };

  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // モーダル背景クリックで閉じる
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // リアルタイム検索処理
  if (input && resultsContainer && typeof PRODUCTS_DATA !== 'undefined') {
    input.addEventListener('input', () => {
      renderSearchResults(input.value.trim());
    });
  }

  function renderSearchResults(query) {
    if (!resultsContainer) return;

    if (!query) {
      // 検索ワードが空の場合はおすすめ3件を表示
      const featured = PRODUCTS_DATA.slice(0, 3);
      resultsContainer.innerHTML = `
        <p style="font-size: 0.75rem; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">RECOMMENDED ITEMS</p>
        ${featured.map(item => createSearchItemHTML(item)).join('')}
      `;
      return;
    }

    const filtered = PRODUCTS_DATA.filter(item => {
      const q = query.toLowerCase();
      return item.name.toLowerCase().includes(q) ||
             item.enName.toLowerCase().includes(q) ||
             item.category.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem 0; text-align: center; color: #6B7280; font-size: 0.9rem;">
          「${query}」に一致する商品は見つかりませんでした。
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <p style="font-size: 0.75rem; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">${filtered.length} ITEMS FOUND</p>
      ${filtered.map(item => createSearchItemHTML(item)).join('')}
    `;
  }

  function createSearchItemHTML(item) {
    return `
      <a href="product-detail.html?id=${item.id}" class="search-item">
        <img src="${item.images[0]}" alt="${item.name}" class="search-item-img" loading="lazy">
        <div class="search-item-info">
          <div class="search-item-name">${item.name}</div>
          <div class="search-item-price">¥${item.price.toLocaleString()}</div>
        </div>
      </a>
    `;
  }
}

// ==========================================
// 4. カート管理 & ドロワー
// ==========================================
const CartManager = {
  getCart() {
    try {
      const cart = localStorage.getItem('urban_closet_cart');
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem('urban_closet_cart', JSON.stringify(cart));
      this.updateBadges();
      this.renderDrawer();
    } catch (e) {
      console.error(e);
    }
  },

  addItem(product, color, size, quantity = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(
      item => item.id === product.id && item.color === color && item.size === size
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: color,
        size: size,
        quantity: quantity
      });
    }

    this.saveCart(cart);
    showToast(`「${product.name}」をカートに追加しました`);
  },

  removeItem(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
  },

  updateBadges() {
    const cart = this.getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });
  },

  renderDrawer() {
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotalPrice');
    if (!container) return;

    const cart = this.getCart();

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-message">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>現在、カートに商品は入っていません</p>
          <a href="products.html" class="btn btn-outline btn-sm" style="margin-top: 1rem;">商品一覧を見る</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '¥0';
      return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-meta">${item.color} / ${item.size} × ${item.quantity}</div>
            </div>
            <div class="cart-item-price">¥${itemTotal.toLocaleString()}</div>
          </div>
          <button class="cart-item-remove" onclick="CartManager.removeItem(${index})">削除</button>
        </div>
      `;
    }).join('');

    if (subtotalEl) {
      subtotalEl.textContent = `¥${subtotal.toLocaleString()}`;
    }
  }
};

function initCartDrawer() {
  const openBtns = document.querySelectorAll('.open-cart-btn, #openCartBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const overlay = document.getElementById('cartDrawerOverlay');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  const openDrawer = () => {
    CartManager.renderDrawer();
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeDrawer();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const cart = CartManager.getCart();
      if (cart.length === 0) {
        alert('カートに商品が入っていません。');
        return;
      }
      alert('※デモサイトのため実際の決済は行われません。\nご注文いただき誠にありがとうございます！');
    });
  }

  // 初期バッジ表示
  CartManager.updateBadges();
}

// 外部からカートドロワーを開く関数
window.openCartDrawer = function() {
  const overlay = document.getElementById('cartDrawerOverlay');
  CartManager.renderDrawer();
  if (overlay) overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

// ==========================================
// 5. トースト通知
// ==========================================
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('is-visible');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3500);
}

// ==========================================
// 6. ニュースレター登録フォーム
// ==========================================
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form, .footer-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('ニュースレターの登録が完了しました');
        input.value = '';
      }
    });
  });
}
