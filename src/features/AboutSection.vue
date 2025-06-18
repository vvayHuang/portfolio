<script setup>
import AboutSectionSkill from '@/features/AboutSectionSkill.vue'
import AboutSectionInfo from '@/features/AboutSectionInfo.vue'
import AboutSectionAdvantage from '@/features/AboutSectionAdvantage.vue'
</script>
<template>
  <section id="WHO">
    <div class="container">
      <div class="row justify-content-between gy-5 flex-column-reverse flex-lg-row">
        <div class="col-lg-4">
          <AboutSectionSkill />
          <AboutSectionAdvantage />
        </div>
        <div class="col-lg-6">
          <AboutSectionInfo />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#WHO {
  margin-bottom: 160px;
}
</style>
