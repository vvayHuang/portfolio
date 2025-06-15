<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loader from './components/Loader.vue'
</script>

<template>
  <Loader />
  <router-view />
</template>

<style scoped></style>
