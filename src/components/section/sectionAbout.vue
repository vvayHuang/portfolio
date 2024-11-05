<script setup>
import sectionSkill from "./sectionSkill.vue";
import sectionAboutMe from "./sectionAboutMe.vue";
import sectionAdvantage from "./sectionAdvantage.vue";
</script>
<template>
  <section id="WHO">
    <div class="container">
      <div class="row justify-content-between gy-5 flex-column-reverse  flex-lg-row ">
        <div class="col-lg-4">
          <ul class="list-unstyled">
            <li class="mb-5">
              <sectionSkill />
            </li>
            <li>
              <sectionAdvantage/>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <sectionAboutMe/>
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
