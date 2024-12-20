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

      const main = document.querySelector('main');
      if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 0.5s ease';
        requestAnimationFrame(() => {
          main.style.opacity = '1';
        });
      }
    });
  },
};
