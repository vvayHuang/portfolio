<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/layout/HeaderSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>
