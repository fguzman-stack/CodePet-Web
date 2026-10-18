const translations = {
  es: {
    navHow: 'Cómo funciona',
    navFeatures: 'Funciones',
    navStats: 'Estadísticas',
    navScreens: 'Capturas',
    navInstall: 'Instalar',
    eyebrow: 'ANDROID · APRENDE OFFLINE',
    heroTitle: 'Aprende a programar.<br><em>Cuida a Codey.</em>',
    heroLead: 'Una mascota virtual que convierte cada reto de código, sesión de foco y pequeño progreso en una aventura que quieres continuar.',
    download: 'Descargar APK',
    discover: 'Descubrir CodePet →',
    loopEyebrow: 'EL CICLO CODEPET',
    loopTitle: 'Cada línea de código<br><em>alimenta algo.</em>',
    loopLead: 'Estudia con Pomodoro, resuelve retos, gana XP y Bytes, y usa tus recompensas para mantener a Codey sano, descansado y evolucionando.',
    featuresEyebrow: 'HECHO PARA SEGUIR AVANZANDO',
    featuresTitle: 'Más que una app de retos.',
    statsEyebrow: 'TU PROGRESO, EN TUS MANOS',
    statsTitle: 'Sin cuentas.<br><em>Sin servidores.</em>',
    statsLead: 'Tus datos viven en tu dispositivo. CodePet está construida con Kotlin, Jetpack Compose, Room y DataStore para que aprender sea también sentir que el progreso es tuyo.',
    screensEyebrow: 'DENTRO DE CODEPET',
    screensTitle: 'Tu pequeño laboratorio<br><em>de aprendizaje.</em>',
    screensLead: 'Explora las pantallas reales de la aplicación funcionando en Android con Jetpack Compose y diseño interactivo.',
    shot1: 'Inicio y cuidados',
    shot2: 'Retos de código',
    shot3: 'Modo foco Pomodoro',
    shot4: 'Tienda y vestuario',
    shot5: 'Revisión de código',
    shot6: 'Catálogo de lenguajes',
    shot7: 'Logros y evolución',
    downloadEyebrow: 'CONECTA CON CODEPET',
    downloadTitle: 'Tu próximo commit<br><em>le dará de comer.</em>',
    downloadLead: 'CodePet convierte tus sesiones de código en una rutina que se siente viva. Si tienes dudas, sugerencias o consultas, ponte en contacto con nosotros.',
    footerTag: 'Aprende código. Cuida a Codey.',
    privacy: 'Privacidad',
    contact: 'Contacto',
    backToTop: 'Volver arriba'
  },
  en: {
    navHow: 'How it works',
    navFeatures: 'Features',
    navStats: 'Statistics',
    navScreens: 'Screenshots',
    eyebrow: 'ANDROID · LEARN OFFLINE',
    heroTitle: 'Learn to code.<br><em>Raise Codey.</em>',
    heroLead: 'A virtual pet that turns every coding challenge, focus session and small win into an adventure you want to continue.',
    discover: 'Discover CodePet →',
    loopEyebrow: 'THE CODEPET LOOP',
    loopTitle: 'Every line of code<br><em>feeds something.</em>',
    loopLead: 'Study with Pomodoro, solve challenges, earn XP and Bytes, then use your rewards to keep Codey healthy, rested and evolving.',
    featuresEyebrow: 'BUILT TO KEEP YOU MOVING',
    featuresTitle: 'More than a challenge app.',
    statsEyebrow: 'YOUR PROGRESS, YOURS',
    statsTitle: 'No accounts.<br><em>No servers.</em>',
    statsLead: 'Your data stays on your device. CodePet is built with Kotlin, Jetpack Compose, Room and DataStore so learning also feels like progress you own.',
    screensEyebrow: 'INSIDE CODEPET',
    screensTitle: 'Your little learning<br><em>laboratory.</em>',
    screensLead: 'Explore real app screens running on Android with Jetpack Compose and interactive UI.',
    shot1: 'Home and care',
    shot2: 'Coding challenges',
    shot3: 'Focus Pomodoro mode',
    shot4: 'Shop and wardrobe',
    shot5: 'Code review',
    shot6: 'Language catalog',
    shot7: 'Achievements & evolution',
    downloadEyebrow: 'CONNECT WITH CODEPET',
    downloadTitle: 'Your next commit<br><em>will feed him.</em>',
    downloadLead: 'CodePet turns your coding sessions into a routine that feels alive. For questions, suggestions, or inquiries, feel free to reach out.',
    footerTag: 'Learn code. Raise Codey.',
    privacy: 'Privacy',
    contact: 'Contact',
    backToTop: 'Back to top'
  }
};

let currentLang = localStorage.getItem('codepet-lang') || 'es';

function setLanguage(next) {
  currentLang = next;
  localStorage.setItem('codepet-lang', currentLang);
  document.documentElement.lang = currentLang;
  
  const langBtn = document.getElementById('languageToggle');
  if (langBtn) {
    langBtn.textContent = currentLang.toUpperCase();
  }
  
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[currentLang]?.[key];
    if (value) {
      el.innerHTML = value;
    }
  });
}

// Language toggle
const langToggle = document.getElementById('languageToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', (e) => {
    const open = nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Dark/Light theme toggle
const savedTheme = localStorage.getItem('codepet-theme');
if (savedTheme === 'light') {
  document.documentElement.dataset.theme = 'light';
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.dataset.theme === 'light';
    const nextTheme = isLight ? '' : 'light';
    if (nextTheme) {
      document.documentElement.dataset.theme = nextTheme;
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem('codepet-theme', isLight ? 'dark' : 'light');
    themeToggle.textContent = isLight ? '☼' : '☾';
  });
  
  // Set initial icon
  themeToggle.textContent = (document.documentElement.dataset.theme === 'light') ? '☾' : '☼';
}

// Scroll progress bar indicator linked with decorated scrollbar
function updateScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);

// Intersection Observer for smooth reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Initialize
setLanguage(currentLang);
updateScrollProgress();
