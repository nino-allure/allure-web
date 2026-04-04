// Language data object
const translations = {
    en: {
        // Navigation
        'nav-resume': 'resume',
        'nav-music': 'music',
        'nav-web': 'web',
        'nav-design': 'design',
        
        // Home page
        'home-title': 'nino allure',
        'home-subtitle': 'design / music / web / ux',
        'home-music': 'Music',
        'home-web': 'Web',
        'home-design': 'Design',
        'home-resume': 'Resume',
        
        // Music page
        'music-title': 'Music',
        'music-play': 'play',
        'music-pause': 'pause',
        
        // Web/UIUX page
        'uiux-title': 'Web',
        'uiux-detailing': 'Detailing Landing',
        'uiux-detailing-desc': 'Premium landing page for a detailing studio. Focus on minimalism, visual clarity and conversion.',
        'uiux-fintech': 'Fintech Landing',
        'uiux-fintech-desc': 'Landing page for fintech. Building trust in a new financial product.',
        'uiux-insurance': 'Insurance Landing',
        'uiux-insurance-desc': 'Landing page for an insurance company. Travel insurance calculator and information.',
        'uiux-portfolio': 'Portfolio Landing',
        'uiux-portfolio-desc': 'Student portfolio landing page. Tracking event attendance and achievements.',
        'uiux-spotify': 'Spotify Player Redesign',
        'uiux-trip': 'Travel Insurance Calculator',
        'uiux-bootstrap': 'Bootstrap Layout',
        'uiux-figma': 'Figma UI Kit Layout',
        'uiux-open': 'open',
        
        // Design page
        'design-title': 'Design',
        
        // Resume page
        'resume-name': 'Anton Markov',
        'resume-bio': 'Designer, developer and musician. Working at the intersection of visual aesthetics and functionality. Vision: to create projects that not only look good but also bring real value to people.',
        'resume-experience': 'Experience',
        'resume-tbank': 'T-Bank',
        'resume-tbank-period': '2025-2026',
        'resume-tbank-desc': 'Data labeling, moderation of the Pulse platform, working with content and documentation.',
        'resume-yandex': 'Yandex Crowd',
        'resume-yandex-period': '2025',
        'resume-yandex-desc': 'Evaluation and filtering of websites, content research.',
        'resume-skills': 'Skills',
        'resume-contact': 'Contact',
        
        // Footer
        'footer-email': 'email',
        'footer-instagram': 'instagram',
        'footer-telegram': 'telegram',
        
        // Theme
        'theme-btn': 'theme',
        'lang-btn': 'RU'
    },
    ru: {
        // Navigation
        'nav-resume': 'резюме',
        'nav-music': 'музыка',
        'nav-web': 'веб',
        'nav-design': 'дизайн',
        
        // Home page
        'home-title': 'nino allure',
        'home-subtitle': 'дизайн / музыка / веб / ux',
        'home-music': 'Музыка',
        'home-web': 'Веб',
        'home-design': 'Дизайн',
        'home-resume': 'Резюме',
        
        // Music page
        'music-title': 'Музыка',
        'music-play': 'играть',
        'music-pause': 'пауза',
        
        // Web/UIUX page
        'uiux-title': 'Интерфейсы',
        'uiux-detailing': 'Лендинг детейлинга',
        'uiux-detailing-desc': 'Премиальный лендинг для детейлинг-студии. Фокус на минимализме, визуальной чистоте и конверсии.',
        'uiux-fintech': 'Лендинг финтеха',
        'uiux-fintech-desc': 'Лендинг для финтеха. Сайт для введения доверия пользователей в новый финансовый продукт.',
        'uiux-insurance': 'Лендинг страховой',
        'uiux-insurance-desc': 'Лендинг для страховой компании. Сайт для информирования и рассчета страховки на путешествия.',
        'uiux-portfolio': 'Портфолио студента',
        'uiux-portfolio-desc': 'Лендинг для портфолио студента. Сайт для отчетности посещаемости мероприятий и достижений.',
        'uiux-spotify': 'Редизайн Плеера в Spotify',
        'uiux-trip': 'Сайт для информирования и рассчета страховки на путешествия.',
        'uiux-bootstrap': 'Макет с использованием Bootstrap',
        'uiux-figma': 'Макет с Figma и UI kit',
        'uiux-open': 'открыть',
        
        // Design page
        'design-title': 'Дизайн',
        
        // Resume page
        'resume-name': 'Антон Марков',
        'resume-bio': 'Дизайнер, разработчик и музыкант. Работаю на стыке визуальной эстетики и функциональности. Моя миссия — создавать проекты, которые не только хорошо выглядят, но и приносят реальную пользу людям.',
        'resume-experience': 'Опыт работы',
        'resume-tbank': 'Т-Банк',
        'resume-tbank-period': '2025-2026',
        'resume-tbank-desc': 'Разметка данных, модерация платформы Пульс, работа с контентом и документацией.',
        'resume-yandex': 'Яндекс Крауд',
        'resume-yandex-period': '2025',
        'resume-yandex-desc': 'Оценка и фильтрация сайтов, исследование контента.',
        'resume-skills': 'Навыки',
        'resume-contact': 'Контакты',
        
        // Footer
        'footer-email': 'email',
        'footer-instagram': 'instagram',
        'footer-telegram': 'telegram',
        
        // Theme
        'theme-btn': 'тема',
        'lang-btn': 'EN'
    }
};

// Current language state
let currentLang = localStorage.getItem('lang') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    setupLanguageToggle();
});

// Apply language to all elements with data-i18n attribute
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update lang button text
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = translations[lang]['lang-btn'];
    }
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Save to localStorage
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

// Setup language toggle button
function setupLanguageToggle() {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'ru' : 'en';
            applyLanguage(newLang);
        });
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, currentLang, applyLanguage };
}
