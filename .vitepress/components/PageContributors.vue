<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

interface Contributor {
    name: string
    avatar: string
    url: string
    contributions: number
}

const { page, lang } = useData()
const contributors = ref<Contributor[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const filePath = computed(() => {
    const path = page.value.filePath?.replace(/^\//, '') || ''
    return path
})

const isRussianLocale = computed(() => {
    return lang.value === 'ru' || (typeof window !== 'undefined' && window.location.pathname.startsWith('/ru/'))
})

const uiText = computed(() => {
    return {
        contributors: isRussianLocale.value ? 'Авторы' : 'Contributors',
        loading: isRussianLocale.value ? 'Загрузка авторов...' : 'Loading contributors...',
        error: isRussianLocale.value ? 'Ошибка' : 'Error',
        noContributors: isRussianLocale.value ? 'Авторы для этой страницы не найдены' : 'No contributors found for this page',
        noFilePath: isRussianLocale.value ? 'Путь к файлу недоступен' : 'No file path available'
    }
})

const fetchContributors = async () => {
    if (!filePath.value) {
        loading.value = false
        error.value = uiText.value.noFilePath
        return
    }

    try {
        loading.value = true

        const owner = 'senko-digital'
        const repo = 'wiki'
        const path = filePath.value

        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`

        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Failed to fetch contributors: ${response.status} ${response.statusText}`)
        }

        const commits = await response.json()

        const contributorsMap = new Map<string, Contributor>()

        for (const commit of commits) {
            const author = commit.author || {}
            const username = author.login || commit.commit?.author?.name || 'Unknown'

            if (!contributorsMap.has(username)) {
                contributorsMap.set(username, {
                    name: username,
                    avatar: author.avatar_url || 'https://github.com/identicons/' + username,
                    url: author.html_url || `https://github.com/${username}`,
                    contributions: 1
                })
            } else {
                const existing = contributorsMap.get(username)!
                existing.contributions += 1
            }
        }

        contributors.value = Array.from(contributorsMap.values())
        loading.value = false
    } catch (err) {
        console.error('Error fetching contributors:', err)
        error.value = err instanceof Error ? err.message : 'Unknown error'
        loading.value = false
    }
}

onMounted(() => {
    fetchContributors()
})
</script>

<template>
    <div v-if="filePath" class="page-contributors">
        <h3 class="contributors-title">{{ uiText.contributors }}</h3>

        <div v-if="loading" class="contributors-loading">
            {{ uiText.loading }}
        </div>

        <div v-else-if="error" class="contributors-error">
            <p>{{ error }}</p>
        </div>

        <div v-else-if="contributors.length === 0" class="contributors-empty">
            <p>{{ uiText.noContributors }}</p>
        </div>

        <div v-else class="contributors-list">
            <a v-for="contributor in contributors" :key="contributor.name" :href="contributor.url" target="_blank"
                rel="noopener noreferrer" class="contributor"
                :title="`${contributor.name} (${contributor.contributions} commit${contributor.contributions > 1 ? 's' : ''})`">
                <img :src="contributor.avatar" :alt="contributor.name" class="contributor-avatar" loading="lazy" />
                <span class="contributor-name">{{ contributor.name }}</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.page-contributors {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--vp-c-divider);
}

.contributors-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--vp-c-text-1);
}

.contributors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.contributor {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--vp-c-text-2);
    transition: color 0.2s ease;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--vp-c-bg-soft);
}

.contributor:hover {
    color: var(--vp-c-brand);
    background-color: var(--vp-c-bg-soft-mute);
}

.contributor-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
}

.contributor-name {
    font-size: 0.9rem;
}

.contributors-loading,
.contributors-error,
.contributors-empty {
    color: var(--vp-c-text-3);
    font-size: 0.9rem;
    font-style: italic;
}
</style>