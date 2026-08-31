/**
 * URBAN CLOSET - Contact & FAQ Page JavaScript (contact.js)
 * お問い合わせフォーム送信シミュレーション、FAQアコーディオン開閉
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactPage();
  initFaqAccordion();
});

// お問い合わせフォーム制御
function initContactPage() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('formSuccessMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const resetBtn = document.getElementById('resetFormBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 必須入力チェック
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const type = document.getElementById('contactType')?.value;
    const message = document.getElementById('contactMessage')?.value.trim();
    const privacy = document.getElementById('contactPrivacy')?.checked;

    if (!name || !email || !type || !message || !privacy) {
      alert('すべての必須項目にご入力いただき、プライバシーポリシーへの同意をお願いいたします。');
      return;
    }

    // 送信中演出
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING...';
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (successBox) successBox.classList.add('is-visible');
      if (typeof showToast === 'function') {
        showToast('お問い合わせを受け付けました。');
      }
    }, 800);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'flex';
      if (successBox) successBox.classList.remove('is-visible');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
      }
    });
  }
}

// FAQアコーディオン開閉
function initFaqAccordion() {
  const faqContainer = document.getElementById('faqAccordionList');
  if (!faqContainer || typeof FAQ_DATA === 'undefined') return;

  // FAQリストを動的生成
  faqContainer.innerHTML = FAQ_DATA.map((item, index) => `
    <div class="faq-item ${index === 0 ? 'is-active' : ''}">
      <button type="button" class="faq-question" aria-expanded="${index === 0}">
        <span>Q. ${item.question}</span>
        <span class="faq-icon"></span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  const faqItems = faqContainer.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      // 他の項目を閉じる
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-active');
          otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // クリックした項目の開閉
      if (isActive) {
        item.classList.remove('is-active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
