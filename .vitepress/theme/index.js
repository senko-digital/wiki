import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';
import Layout from './Layout.vue';
import './index.css';

export default {
  extends: DefaultTheme,
  Layout,
  setup() {
    onMounted(() => {
      mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
        margin: 20,
        scrollOffset: 40,
      });

      setTimeout(() => {
        handleLanguageRedirect();
      }, 50);
    });
  },
};

function handleLanguageRedirect() {
  if (typeof window === 'undefined') return;

  const lang = getCookie('wiki_lang');
  const path = window.location.pathname;

  if (lang === 'ru' && !path.startsWith('/ru/')) {
    const pathAfterLang = path.replace(/^\/en\//, '') || '';
    console.log('Redirecting to Russian:', `/ru/${pathAfterLang}`);
    window.location.pathname = `/ru/${pathAfterLang}`;
    return;
  }

  if (lang === 'ru' && path.startsWith('/en/')) {
    const pathAfterLang = path.replace(/^\/en\//, '') || '';
    console.log('Redirecting from /en/ to /ru/:', `/ru/${pathAfterLang}`);
    window.location.pathname = `/ru/${pathAfterLang}`;
    return;
  }

  if (lang === 'en' && path.startsWith('/ru/')) {
    const pathAfterLang = path.replace(/^\/ru\//, '') || '';
    const destination = pathAfterLang ? `/${pathAfterLang}` : '/';
    console.log('Redirecting from /ru/ to root:', destination);
    window.location.pathname = destination;
    return;
  }

  if (!lang) {
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const languages = navigator.languages || [userLang];

    console.log('No language cookie, checking browser language');

    const hasRussian = languages.some(lang =>
      lang.startsWith('ru') || lang.startsWith('ru-')
    );

    if (hasRussian) {
      setLanguageCookie('ru');
      console.log('Detected Russian language in browser settings, redirecting to /ru/');

      if (!path.startsWith('/ru/')) {
        const pathToUse = path === '/' ? '/ru/' : `/ru${path}`;
        window.location.pathname = pathToUse;
        return;
      }
    } else {
      setLanguageCookie('en');
    }
  }
}

function setLanguageCookie(lang) {
  if (typeof document === 'undefined') return;

  document.cookie = `wiki_lang=${lang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
  console.log(`Set wiki_lang cookie to ${lang}`);
}

function getCookie(name) {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
