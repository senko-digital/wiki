import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import './index.css'

// Import all game logo components globally
import GmodLogo from '../../components/gmodLogo.vue'
import MinecraftLogo from '../../components/minecraftLogo.vue'
import IntelLogo from '../../components/intelLogo.vue'
import AMDLogo from '../../components/amdLogo.vue'

// Icons used on the home page (Lucide)
import {
  Rocket,
  CircleHelp,
  Lock,
  ShieldCheck,
  LayoutDashboard,
  Gamepad2,
  Server,
  ArrowRight,
} from '@lucide/vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Register components globally
    app.component('GmodLogo', GmodLogo)
    app.component('MinecraftLogo', MinecraftLogo)
    app.component('IntelLogo', IntelLogo)
    app.component('AMDLogo', AMDLogo)

    // Register home page icons globally
    app.component('IconRocket', Rocket)
    app.component('IconCircleHelp', CircleHelp)
    app.component('IconLock', Lock)
    app.component('IconShieldCheck', ShieldCheck)
    app.component('IconLayoutDashboard', LayoutDashboard)
    app.component('IconGamepad2', Gamepad2)
    app.component('IconServer', Server)
    app.component('IconArrowRight', ArrowRight)
  },
  setup() {
    const route = useRoute()
    const { page } = useData()

    const initZoom = (): void => {
      mediumZoom('[data-zoomable]', {
        background: 'var(--vp-c-bg)',
        margin: 20,
        scrollOffset: 40,
      })
    }

    onMounted(() => {
      initZoom()

      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        const currentState = window.history.state

        if (!currentState || !currentState.path) {
          window.history.replaceState({ path: currentPath }, '', currentPath)
        }
      }
    })

    watch(
      () => route.path,
      async () => {
        await nextTick()
        initZoom()
      }
    )

    return {
      page,
    }
  },
}
