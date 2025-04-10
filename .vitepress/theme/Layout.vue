<script setup>
import DefaultTheme from 'vitepress/theme'
import ProgressBar from './components/ProgressBar.vue'
import { useData } from 'vitepress'
import { ref, onMounted, computed, watch } from 'vue'

const { Layout } = DefaultTheme
const { isDark, page, frontmatter, theme, lang, localeIndex, site } = useData()

const isLanguageSelectorWrapped = ref(false)

onMounted(() => {
  setTimeout(() => {
    checkFeedbackState()
    
    const wrappedState = getCookie('wiki_lang_wrapped')
    isLanguageSelectorWrapped.value = wrappedState === 'true'
  }, 200)
})

function toggleLanguageSelectorWrap() {
  isLanguageSelectorWrapped.value = !isLanguageSelectorWrapped.value
  document.cookie = `wiki_lang_wrapped=${isLanguageSelectorWrapped.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
}

watch(() => lang.value, (newLang) => {
  if (typeof document !== 'undefined') {
    document.cookie = `wiki_lang=${newLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})

const availableLocales = computed(() => {
  const locales = site.value.locales || {}
  return Object.entries(locales).map(([key, locale]) => {
    return {
      key: key === 'root' ? '' : key,
      label: locale.label,
      lang: locale.lang
    }
  })
})

function switchLanguage(localeKey) {
  if (typeof window === 'undefined') return
  
  const path = window.location.pathname
  const currentLang = lang.value
  
  const newLang = localeKey ? 'ru' : 'en'
  document.cookie = `wiki_lang=${newLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  console.log(`Set wiki_lang cookie to ${newLang} before navigation`)
  
  let targetPath = '/'
  
  if (localeKey) {
    if (currentLang === 'en') {
      targetPath = `/${localeKey}${path}`
    } else if (path.startsWith(`/${currentLang}/`)) {
      const pathWithoutLang = path.replace(`/${currentLang}/`, '/')
      targetPath = `/${localeKey}${pathWithoutLang}`
    }
  } else {
    if (path.startsWith(`/${currentLang}/`)) {
      targetPath = path.replace(`/${currentLang}/`, '/')
    }
  }
  
  window.location.pathname = targetPath
}

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
  
  // Save to localStorage with the normalized path
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
      <div class="language-selector" :class="{ 'wrapped': isLanguageSelectorWrapped }">
        <div class="language-selector-container">
          <div class="language-selector-buttons" v-if="!isLanguageSelectorWrapped || window?.innerWidth > 480">
            <button 
              v-for="locale in availableLocales" 
              :key="locale.key" 
              :class="['language-button', locale.lang === lang ? 'active' : '']"
              @click="switchLanguage(locale.key)"
            >
              <span v-if="locale.lang === 'en'">🇬🇧</span>
              <span v-else-if="locale.lang === 'ru'">🇷🇺</span>
              <span class="language-name">{{ locale.label }}</span>
            </button>
          </div>
          <button class="wrap-toggle" @click="toggleLanguageSelectorWrap" title="Toggle language selector">
            <span v-if="isLanguageSelectorWrapped">📖</span>
            <span v-else>📘</span>
          </button>
        </div>
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

/* Background decorations */
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

/* Page feedback section */
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

.language-selector {
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 100;
}

.language-selector-container {
  background: var(--vp-c-bg-soft);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 8px 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
}

.language-selector-buttons {
  display: flex;
  gap: 8px;
}

.language-button {
  background: transparent;
  border: none;
  padding: 10px 18px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;
}

.language-button:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  transform: translateY(-2px);
}

.language-button.active {
  background: var(--vp-c-brand-1);
  color: white;
}

.language-button span:first-child {
  font-size: 1.4rem;
}

.language-name {
  display: inline-block;
}

.wrap-toggle {
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  margin-left: 5px;
}

.wrap-toggle:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  transform: translateY(-2px);
}

.language-selector.wrapped .language-selector-container {
  padding: 5px;
}

.language-selector.wrapped .wrap-toggle {
  margin-left: 0;
}

@media (max-width: 768px) {
  .language-selector {
    top: 15px;
    right: 15px;
  }
  
  .language-button {
    padding: 8px 14px;
    font-size: 0.95rem;
  }
  
  .language-button span:first-child {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .language-selector {
    top: auto;
    bottom: 20px;
    right: 20px;
  }
  
  .language-selector-container {
    border-radius: 100px;
    padding: 5px;
  }
  
  .language-selector-buttons {
    gap: 3px;
  }
  
  .language-name {
    display: none;
  }
  
  .language-button {
    padding: 10px;
    border-radius: 100px;
  }
  
  .language-button span:first-child {
    font-size: 1.5rem;
  }
  
  .wrap-toggle {
    padding: 10px;
  }
  
  .language-selector.wrapped .wrap-toggle {
    font-size: 1.5rem;
  }
}

@media (max-width: 350px) {
  .language-selector {
    bottom: 15px;
    right: 15px;
  }
  
  .language-button {
    padding: 8px;
  }
  
  .language-button span:first-child {
    font-size: 1.3rem;
  }
  
  .wrap-toggle {
    padding: 8px;
  }
}
</style> 