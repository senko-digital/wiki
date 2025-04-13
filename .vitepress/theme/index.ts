import DefaultTheme from 'vitepress/theme';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute, useData } from 'vitepress';
import mediumZoom from 'medium-zoom';
import Layout from './Layout.vue';
import './index.css';

export default {
  extends: DefaultTheme,
  Layout,
  setup() {
    const route = useRoute();
    const { page } = useData();

    const initZoom = (): void => {
      mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
        margin: 20,
        scrollOffset: 40,
      });
    };

    onMounted(() => {
      initZoom();

      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const currentState = window.history.state;
        
        if (!currentState || !currentState.path) {
          window.history.replaceState(
            { path: currentPath },
            '',
            currentPath
          );
        }
      }
    });

    watch(() => route.path, async () => {
      await nextTick();
      initZoom();
    });

    return {
      page
    };
  },
};
