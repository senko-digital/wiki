import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

import './index.css';

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    });
  },
};
