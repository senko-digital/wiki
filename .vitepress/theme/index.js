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

    // Apply zoom effect to images
    const initZoom = () => {
      mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
        margin: 20,
        scrollOffset: 40,
      });
    };

    onMounted(() => {
      initZoom();

      // Fix potential history state issues that could cause 404s
      if (typeof window !== 'undefined') {
        // Ensure we have a proper history state
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

    // Re-init zoom when route changes
    watch(() => route.path, async () => {
      await nextTick();
      initZoom();
    });

    return {
      // Expose page data to the theme
      page
    };
  },
};
