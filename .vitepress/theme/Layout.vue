<script setup>
import DefaultTheme from 'vitepress/theme'
import ProgressBar from './components/ProgressBar.vue'
import { useData } from 'vitepress'
import { ref, onMounted, computed, watch } from 'vue'

const { Layout } = DefaultTheme
const { isDark, page, frontmatter, theme, lang, localeIndex, site } = useData()

const isSidebarCollapsed = ref(false)
const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

function getCookie(name) {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

onMounted(() => {
  setTimeout(() => {
    checkFeedbackState()

    const sidebarState = getCookie('wiki_sidebar_collapsed')
    if (window.innerWidth < 960) {
      isSidebarCollapsed.value = sidebarState !== null ? sidebarState === 'true' : true
    } else {
      isSidebarCollapsed.value = sidebarState === 'true'
    }

    screenWidth.value = window.innerWidth

    window.addEventListener('resize', () => {
      screenWidth.value = window.innerWidth

      if (screenWidth.value < 960 && !isSidebarCollapsed.value) {
        isSidebarCollapsed.value = true
        document.documentElement.setAttribute('data-sidebar-collapsed', 'true')
      }
    })

    document.documentElement.setAttribute('data-sidebar-collapsed', isSidebarCollapsed.value)
  }, 200)
})

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  document.cookie = `wiki_sidebar_collapsed=${isSidebarCollapsed.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
}

watch(() => isSidebarCollapsed.value, (isCollapsed) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-sidebar-collapsed', isCollapsed)
  }
}, { immediate: true })

const feedbackSubmitted = ref(false)
const feedbackValue = ref(null)

const currentPageId = computed(() => {
  if (typeof window === 'undefined') return ''

  let path = window.location.pathname || ''

  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1)
  }

  return path
})

watch(() => currentPageId.value, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    setTimeout(checkFeedbackState, 100)
  }
}, { immediate: false })

function checkFeedbackState() {
  if (typeof localStorage === 'undefined' || !currentPageId.value) return

  try {
    feedbackSubmitted.value = false
    feedbackValue.value = null

    const key = `page-feedback-${currentPageId.value}`
    const storedFeedback = localStorage.getItem(key)

    if (storedFeedback) {
      try {
        const parsed = JSON.parse(storedFeedback)
        feedbackSubmitted.value = true
        feedbackValue.value = parsed.value
        console.log(`Found feedback for: ${currentPageId.value}`, parsed)
      } catch (e) {
        console.warn('Invalid feedback data in localStorage')
      }
    }
  } catch (e) {
    console.error('Error reading feedback from localStorage:', e)
  }
}

function submitFeedback(isHelpful) {
  if (!currentPageId.value || feedbackSubmitted.value) return

  feedbackValue.value = isHelpful
  feedbackSubmitted.value = true

  if (typeof localStorage !== 'undefined') {
    try {
      const key = `page-feedback-${currentPageId.value}`
      localStorage.setItem(key, JSON.stringify({
        value: isHelpful,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        path: currentPageId.value
      }))

      console.log(`Saved feedback for: ${currentPageId.value}`, isHelpful)

      try {
        const allFeedback = JSON.parse(localStorage.getItem('all-page-feedback') || '[]')
        allFeedback.push({
          path: currentPageId.value,
          isHelpful: isHelpful,
          timestamp: new Date().toISOString(),
          url: window.location.href
        })

        if (allFeedback.length > 100) {
          allFeedback.splice(0, allFeedback.length - 100)
        }

        localStorage.setItem('all-page-feedback', JSON.stringify(allFeedback))
      } catch (err) {
        console.warn('Could not save to feedback registry:', err)
      }
    } catch (e) {
      console.error('Error saving feedback to localStorage:', e)
    }
  }
}
</script>

<template>
  <Layout>
    <template #layout-top>
      <ProgressBar />
      <div class="sidebar-toggle" v-if="screenWidth < 960">
        <button @click="toggleSidebar" :title="isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'"
          class="sidebar-toggle-button">
          <span class="toggle-icon" :class="{ 'collapsed': !isSidebarCollapsed }">
            <span class="toggle-bar bar1"></span>
            <span class="toggle-bar bar2"></span>
            <span class="toggle-bar bar3"></span>
          </span>
        </button>
      </div>

      <div class="background-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </template>
    <template #not-found>
      <div class="not-found-container">
        <h1 class="not-found-title">404</h1>
        <p class="not-found-desc">Page not found</p>
        <a href="/" class="not-found-link">Go to Home</a>
      </div>
    </template>
    <template #doc-footer-before>
      <div class="page-feedback" v-if="currentPageId && currentPageId !== '/'">
        <template v-if="!feedbackSubmitted">
          <p>Was this page helpful?</p>
          <div class="feedback-buttons">
            <button @click="submitFeedback(true)" class="feedback-button positive">
              <span class="feedback-icon">👍</span> Yes
            </button>
            <button @click="submitFeedback(false)" class="feedback-button negative">
              <span class="feedback-icon">👎</span> No
            </button>
          </div>
        </template>
        <template v-else>
          <p>Thank you for your feedback!</p>
          <div class="feedback-result">
            <div :class="['feedback-indicator', feedbackValue ? 'positive' : 'negative']">
              <span class="feedback-icon">{{ feedbackValue ? '👍' : '👎' }}</span>
              <span>{{ feedbackValue ? 'You found this page helpful' : 'You didn\'t find this page helpful' }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="page-divider"></div>
    </template>
  </Layout>
</template>

<style>
.not-found-container {
  padding: 100px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.not-found-title {
  font-size: 8rem;
  font-weight: 700;
  background: var(--custom-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  line-height: 1;
}

.not-found-desc {
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0 2rem;
}

.not-found-link {
  display: inline-block;
  background: var(--custom-gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(138, 43, 226, 0.5);
}

.not-found-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(138, 43, 226, 0.6);
}

.background-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(60px);
}

.circle-1 {
  background: var(--vp-c-brand-1);
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  background: var(--custom-accent);
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
}

.circle-3 {
  background: var(--vp-c-brand-2);
  width: 200px;
  height: 200px;
  top: 40%;
  right: -50px;
}

.dark .circle-1 {
  opacity: 0.15;
}

.dark .circle-2 {
  opacity: 0.15;
}

.dark .circle-3 {
  opacity: 0.15;
}

.page-feedback {
  margin: 3rem 0 1rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  text-align: center;
}

.page-feedback p {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.feedback-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.feedback-button {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.feedback-icon {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.feedback-button.positive:hover {
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
  transform: translateY(-2px);
}

.feedback-button.negative:hover {
  background: rgba(245, 101, 101, 0.1);
  color: #f56565;
  transform: translateY(-2px);
}

.feedback-result {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.feedback-indicator {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 500;
}

.feedback-indicator.positive {
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
}

.feedback-indicator.negative {
  background: rgba(245, 101, 101, 0.1);
  color: #f56565;
}

.page-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
}

.page-divider::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 2px;
  background: var(--custom-gradient);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.sidebar-toggle {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 999;
}

.sidebar-toggle-button {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  backdrop-filter: blur(10px);
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  border: 1px solid var(--vp-c-brand-1);
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  height: 44px;
  width: 44px;
}

.sidebar-toggle-button:hover {
  background: var(--vp-c-brand-2) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4) !important;
}

.toggle-icon {
  width: 18px;
  height: 14px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toggle-bar {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toggle-bar.bar1 {
  top: 0;
}

.toggle-bar.bar2 {
  top: 6px;
}

.toggle-bar.bar3 {
  top: 12px;
}

.toggle-icon.collapsed .bar1 {
  transform: translateY(6px) rotate(45deg);
}

.toggle-icon.collapsed .bar2 {
  opacity: 0;
  transform: translateX(-20px);
}

.toggle-icon.collapsed .bar3 {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 960px) {

  html[data-sidebar-collapsed="true"] .VPSidebar {
    transform: translateX(-100%) scale(0.9) !important;
    opacity: 0 !important;
    visibility: hidden !important;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.3s ease,
      visibility 0.3s ease !important;
    transform-origin: left center;
  }

  html:not([data-sidebar-collapsed="true"]) .VPSidebar {
    transform: translateX(0) scale(1) !important;
    opacity: 1 !important;
    visibility: visible !important;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.4s ease,
      visibility 0s !important;
    transform-origin: left center;
  }

  html[data-sidebar-collapsed="true"] .VPContent.has-sidebar {
    margin-left: 0 !important;
    padding-left: 24px !important;
    transition: margin-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      padding-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  html:not([data-sidebar-collapsed="true"]) .VPContent.has-sidebar {
    transition: margin-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      padding-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  html:not([data-sidebar-collapsed="true"]) .VPSidebar {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
  }

  .VPSidebar {
    z-index: 99 !important;
  }

  .VPContent.has-sidebar {
    transition: margin-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      padding-left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  .VPContent {
    padding-top: 3.5rem !important;
  }
}

@media (max-width: 768px) {
  .sidebar-toggle {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .sidebar-toggle-button {
    height: 40px;
    width: 40px;
    padding: 8px;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .sidebar-toggle {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .sidebar-toggle-button {
    padding: 10px;
    font-size: 1rem;
    height: 38px;
    width: 38px;
  }

  .toggle-icon {
    width: 16px;
    height: 12px;
  }

  .toggle-bar.bar2 {
    top: 5px;
  }

  .toggle-bar.bar3 {
    top: 10px;
  }
}
</style>