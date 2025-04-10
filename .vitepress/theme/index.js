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
    });
  },
};
