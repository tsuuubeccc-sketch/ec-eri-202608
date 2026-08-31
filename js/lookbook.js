/**
 * URBAN CLOSET - Lookbook Page JavaScript (lookbook.js)
 * マソンリー風ギャラリー描画、拡大ライトボックスモーダル制御
 */

document.addEventListener('DOMContentLoaded', () => {
  initLookbookPage();
});

function initLookbookPage() {
  const galleryContainer = document.getElementById('lookbookGallery');
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalDesc = document.getElementById('lightboxDesc');
  const modalCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!galleryContainer || typeof LOOKBOOK_DATA === 'undefined') return;

  let currentIndex = 0;

  // 1. ギャラリーアイテムの描画
  galleryContainer.innerHTML = LOOKBOOK_DATA.map((item, index) => `
    <div class="look-card ${item.aspect}" data-index="${index}">
      <img src="${item.image}" alt="${item.title}" class="look-img" loading="lazy">
      <div class="look-zoom-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </div>
      <div class="look-overlay">
        <h3 class="look-title">${item.title}</h3>
        <p class="look-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');

  // 2. ライトボックスを開く関数
  const openLightbox = (index) => {
    currentIndex = index;
    updateLightboxContent();
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  // 3. ライトボックスを閉じる関数
  const closeLightbox = () => {
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  // 4. ライトボックスの表示内容更新
  const updateLightboxContent = () => {
    const item = LOOKBOOK_DATA[currentIndex];
    if (!item) return;

    if (modalImg) {
      modalImg.style.opacity = '0.3';
      modalImg.src = item.image;
      modalImg.onload = () => {
        modalImg.style.opacity = '1';
      };
    }
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalCounter) {
      const current = (currentIndex + 1).toString().padStart(2, '0');
      const total = LOOKBOOK_DATA.length.toString().padStart(2, '0');
      modalCounter.textContent = `${current} / ${total}`;
    }
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % LOOKBOOK_DATA.length;
    updateLightboxContent();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + LOOKBOOK_DATA.length) % LOOKBOOK_DATA.length;
    updateLightboxContent();
  };

  // 5. イベントリスナー設定
  const cards = galleryContainer.querySelectorAll('.look-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // 背景クリックで閉じる
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  // キーボードナビゲーション
  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });
}
