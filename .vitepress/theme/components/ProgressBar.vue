<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ transform: `scaleX(${progress})` }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const progress = ref(0)

const handleScroll = (): void => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = window.scrollY
  progress.value = scrolled / windowHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 1000;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--custom-gradient);
  transform-origin: 0 50%;
  transform: scaleX(0);
  transition: transform 0.2s ease;
  box-shadow: 0 0 10px rgba(255, 99, 71, 0.7);
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px rgba(255, 99, 71, 0.5);
  }
  to {
    box-shadow: 0 0 15px rgba(255, 99, 71, 0.8);
  }
}
</style> 