<script setup>
import { useThemeStore } from '@/stores/theme'
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/layout/HeaderSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

// By calling useThemeStore() here, we ensure the store is activated
// and its watchEffect runs on application startup.
useThemeStore()
</script>

<template>
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>
