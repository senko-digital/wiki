<script setup>
import DefaultTheme from 'vitepress/theme'
import ProgressBar from './components/ProgressBar.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <ProgressBar />
    </template>
  </Layout>
</template> 