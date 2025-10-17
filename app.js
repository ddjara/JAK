// ===== LANGUAGE SUPPORT =====
const translations = {
  en: {
    home: "Home",
    about: "About",
    legacy: "Legacy",
    foundation: "Foundation",
    speeches: "Speeches",
    media: "Media",
    blog: "Blog",
    honors: "Honors",
    contact: "Contact",
    heroTitle: "His Excellency John Agyekum Kufuor",
    heroSubtitle: "President of Ghana (2001–2009)",
    tagline: "Legacy of Leadership, Service, and Global Statesmanship",
    quote: "“Leadership is about service, not power.”",
    // Add more as needed
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    legacy: "Héritage",
    foundation: "Fondation",
    speeches: "Discours",
    media: "Médias",
    blog: "Blog",
    honors: "Distinctions",
    contact: "Contact",
    heroTitle: "Son Excellence John Agyekum Kufuor",
    heroSubtitle: "Président du Ghana (2001–2009)",
    tagline: "Héritage de leadership, de service et d’engagement mondial",
    quote: "« Le leadership, c’est le service, non le pouvoir. »",
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  
  // Update language switcher
  document.getElementById('lang-switch').value = currentLang;
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  translatePage();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  translatePage();
  
  // Mobile menu & active link (existing code)
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});