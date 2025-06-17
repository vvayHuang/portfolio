<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loader from '@/components/Loader.vue'
import HeaderSection from '@/features/HeaderSection.vue'
import FooterSection from '@/features/FooterSection.vue'
</script>

<template>
  <HeaderSection />
  <Loader />
  <router-view />
  <FooterSection />
</template>
