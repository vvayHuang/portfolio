<script setup>
import { useI18n } from 'vue-i18n'
import Projects from '../data/Projects.js'
const { t, locale } = useI18n()
</script>
<template>
  <div v-for="item in Projects" :key="item.id" class="card text-bg-light position-relative">
    <img :src="item.images[0].src" :alt="item.images[0].alt" class="card-img img-fluid" />
    <div class="card-img-overlay p-3">
      <h3 class="card-title fs-4">{{ item.title[locale] }}</h3>
      <p class="card-text text-truncate">
        {{ item.description[locale] }}
      </p>
      <p class="card-text fs-4">
        {{ item.year }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--wh-card-img-overlay-padding);
  border-radius: var(--wh-card-inner-border-radius);
  background: rgba(0, 0, 0, 0.5);
  color: var(--wh-light);
}
</style>
