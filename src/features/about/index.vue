<script setup>
import Skill from './Skill.vue'
import Info from './Info.vue'
import Advantage from './Advantage.vue'
</script>
<template>
  <section id="section-about">
    <div class="container-fluid">
      <div class="row justify-content-between gy-5 flex-column-reverse flex-lg-row">
        <div class="col-lg-4">
          <Skill />
          <Advantage />
        </div>
        <div class="col-lg-6">
          <Info />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#section-about {
  margin-bottom: 160px;
  @media screen and (max-width: 425px) {
    margin-bottom: 40px;
  }
}
</style>
