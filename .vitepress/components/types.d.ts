declare module 'vitepress/theme' {
  import { DefineComponent } from 'vue'
  const Layout: DefineComponent<{}, {}, any>
  export default {
    Layout: Layout
  }
}

declare module 'vue' {
  export function ref<T>(value: T): { value: T }
  export function onMounted(cb: () => void): void
  export function computed<T>(getter: () => T): { value: T }
  export function watch(source: any, cb: Function, options?: object): void
}

declare module 'vitepress' {
  export function useData(): {
    page: { value: { relativePath?: string, filePath?: string } },
    frontmatter: { value: any },
    theme: { value: any },
    site: { value: any },
    isDark: { value: boolean },
    lang: { value: string },
    localeIndex: { value: string }
  }
  export function useRoute(): { path: string }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
} 