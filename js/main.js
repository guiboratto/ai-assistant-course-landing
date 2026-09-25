function buyNow() {
  // Одразу відкриваємо банку Monobank з анотацією
  // monobank jar API дозволяє додавати текст призначення через URL params
  const jarUrl = 'https://send.monobank.ua/jar/6oDz5R6Mmo?comment=' + encodeURIComponent('AI-асистент гайд');
  window.open(jarUrl, '_blank');

  // Показуємо інструкцію що робити далі
  setTimeout(() => {
    alert(
      '✅ Банку Monobank відкрито в новому вкладці.\n\n' +
      'Після оплати 777 грн:\n\n' +
      '📸 Зробіть скріншот чеку\n' +
      '✉️ Напишіть у Telegram: @підтримка\n' +
      '📧 Або на пошту support@example.com\n\n' +
      'Вкажіть email — протягом 1 години надішлю гайд і всі файли.'
    );
  }, 800);
}

function payLiqPay() {
  // TODO: коли LiqPay підключимо — замінити на redirect
  // https://www.liqpay.ua/documentation/api/aq_checkout
  alert('LiqPay буде підключено найближчим часом. Скористайтесь Monobank або Telegram.');
}

function payMono() {
  // Переходимо на банку Monobank з фіксованою сумою
  // https://send.monobank.ua/jar/6oDz5R6Mmo — твоя банка
  const jarUrl = 'https://send.monobank.ua/jar/6oDz5R6Mmo';
  window.open(jarUrl, '_blank');

  // Показуємо інструкцію
  setTimeout(() => {
    alert(
      'Після оплати:\n\n' +
      '1. Зробіть скріншот чеку про оплату\n' +
      '2. Напишіть у Telegram: @підтримка_бот\n' +
      '3. Або на пошту support@example.com\n\n' +
      'Вкажіть ваш email — я надішлю гайд протягом 1 години.'
    );
  }, 500);
}

function payTelegram() {
  // Пряме посилання на Telegram-бот для підтвердження оплати
  window.open('https://t.me/+ваш_канал', '_blank');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
