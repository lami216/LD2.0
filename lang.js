const translationsMap = {
  'nav-home': { ar: 'الرئيسية', fr: 'Accueil', en: 'Home' },
  'nav-pubg': { ar: 'PUBG', fr: 'PUBG', en: 'PUBG' },
  'nav-freefire': { ar: 'Free Fire', fr: 'Free Fire', en: 'Free Fire' },
  'nav-googleplay': { ar: 'Google Play', fr: 'Google Play', en: 'Google Play' },
  'nav-itunes': { ar: 'iTunes', fr: 'iTunes', en: 'iTunes' },
  'hero-index': {
    ar: 'شحن فوري وآمن لجميع الألعاب والبطاقات',
    fr: 'Recharge instantanée et sécurisée pour tous les jeux et cartes',
    en: 'Instant and secure top-up for all games and cards'
  },
  'freefire-title': { ar: 'Free Fire - ألماس', fr: 'Free Fire - Diamants', en: 'Free Fire - Diamonds' },
  'pubg-title': { ar: 'PUBG Mobile - شدات', fr: 'PUBG Mobile - UC', en: 'PUBG Mobile - UC' },
  'googleplay-hero': { ar: 'عروض بطاقات Google Play', fr: 'Offres de cartes Google Play', en: 'Google Play Card Offers' },
  'itunes-hero': { ar: 'بطاقات iTunes / App Store', fr: 'Cartes iTunes / App Store', en: 'iTunes / App Store Cards' },
  'price': { ar: 'السعر:', fr: 'Prix :', en: 'Price:' },
  'order': { ar: 'اطلب الآن', fr: 'Commander', en: 'Order Now' },
  'player-id': { ar: 'رقم اللاعب', fr: 'ID du joueur', en: 'Player ID' },
  'whats': { ar: 'رقم واتسابك', fr: 'Votre numéro WhatsApp', en: 'Your WhatsApp number' },
  'send': { ar: 'إرسال الطلب', fr: 'Envoyer la commande', en: 'Send Order' },
  'warn': {
    ar: '⚠️ أدخل رقم واتساب وارفع صورة المعاملة',
    fr: '⚠️ Entrez votre numéro WhatsApp et téléchargez la preuve de paiement',
    en: '⚠️ Enter WhatsApp number and upload payment proof'
  },
  'success': {
    ar: '✅ تم إرسال الطلب بنجاح',
    fr: '✅ Commande envoyée avec succès',
    en: '✅ Order sent successfully'
  },
  'error': {
    ar: '❌ حصل خطأ في الإرسال',
    fr: "❌ Échec de l'envoi",
    en: '❌ Failed to send'
  },
  'footer': {
    ar: '© 2025 LD Top-Up | واتساب الدعم: +22241380130',
    fr: '© 2025 LD Top-Up | Support WhatsApp : +22241380130',
    en: '© 2025 LD Top-Up | Support WhatsApp: +22241380130'
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translationsMap[key] && translationsMap[key][lang]) {
      el.textContent = translationsMap[key][lang];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translationsMap[key] && translationsMap[key][lang]) {
      el.placeholder = translationsMap[key][lang];
    }
  });
}

function initTranslation() {
  const toggle = document.getElementById('lang-toggle');
  const menu = document.querySelector('.lang-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTranslations(btn.dataset.lang);
        menu.style.display = 'none';
      });
    });
  }

  applyTranslations(currentLang);
}

document.addEventListener('DOMContentLoaded', initTranslation);
