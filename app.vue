<script setup>
// Theme store is auto-imported by Nuxt from stores/theme.js
const themeStore = useThemeStore()
</script>

<template>
  <HeaderSection />
  <main>
    <NuxtPage />
  </main>
  <FooterSection />
</template>