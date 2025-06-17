<script setup>
import AboutSectionSkill from '@/features/AboutSectionSkill.vue'
import AboutSectionDescription from '@/features/AboutSectionDescription.vue'
import AboutSectionAdvantage from '@/features/AboutSectionAdvantage.vue'
</script>
<template>
  <section id="WHO">
    <div class="container">
      <div class="row justify-content-between gy-5 flex-column-reverse flex-lg-row">
        <div class="col-lg-4">
          <ul class="list-unstyled">
            <li class="mb-5">
              <AboutSectionSkill />
            </li>
            <li>
              <AboutSectionAdvantage />
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <AboutSectionDescription />
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
