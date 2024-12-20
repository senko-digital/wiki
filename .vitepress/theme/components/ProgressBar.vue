<template>
  <div class="progress-bar" :style="{ transform: `scaleX(${progress})` }"></div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      this.progress = scrolled / windowHeight
    }
  }
}
</script> 