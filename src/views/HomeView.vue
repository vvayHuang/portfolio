<script setup>
import CoverSection from '@/features/cover/index.vue'
import ProjectsSection from '@/features/projects/index.vue'
import AboutSection from '@/features/about/index.vue'
</script>

<template>
  <main>
    <CoverSection />
    <ProjectsSection />
    <AboutSection />
  </main>
</template>
<style scoped>
section {
  margin-bottom: 160px;
  @media (max-width:425px) {
    margin-bottom: 40px;
  }
}
</style>
