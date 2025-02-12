<script setup>
import { RouterLink, RouterView } from "vue-router";
import Loader from './components/Loader.vue'
</script>

<template>
  <div id="app">
    <Loader />
    <router-view />
  </div>
</template>

<style scoped></style>
