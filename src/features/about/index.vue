<script setup>
import Skill from './Skill.vue'
import Info from './Info.vue'
</script>
<template>
  <section id="section-about">
    <div class="container">
      <div class="row justify-content-center gy-6 flex-column-reverse flex-lg-row">
        <div class="col-lg-4 project-anim-target">
          <Skill />
        </div>
        <div class="col-lg-6 offset-lg-1 project-anim-target">
          <Info />
        </div>
      </div>
    </div>
  </section>
</template>
