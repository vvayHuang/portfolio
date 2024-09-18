<script setup>
import WhoSkill from "./WhoMySkillItem.vue";
import WhoAboutMe from "./WhoAboutMeItem.vue";
import WhoAdvantage from "./WhoAdvantageItem.vue";
import Arrow90degDownIcon from "./icons/IconArrow90degDown.vue";
</script>
<template>
  <section id="WHO">
    <div class="container">
      <div class="row justify-content-between gy-5 flex-column-reverse  flex-lg-row ">
        <div class="col-lg-6">
          <WhoAboutMe>
            <template #icon>
              <Arrow90degDownIcon />
            </template>
            <template #heading>關於我</template>
            <template #textContent></template>
          </WhoAboutMe>
        </div>
        <div class="col-lg-4">
          <ul class="list-unstyled">
            <li class="mb-5">
              <WhoSkill>
                <template #heading>我的技能</template>
                <template #icon>
                  <Arrow90degDownIcon />
                </template>
                <template #list></template>
              </WhoSkill>
            </li>
            <li>
              <WhoAdvantage>
                <template #heading>我的優勢</template>
                <template #icon>
                  <Arrow90degDownIcon />
                </template>
                <template #list></template>
              </WhoAdvantage>
            </li>
          </ul>
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
