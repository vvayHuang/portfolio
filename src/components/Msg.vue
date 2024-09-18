<script setup>
import MsgContact from './MsgContact.vue';
import IconArrow90degDown from './icons/IconArrow90degDown.vue';
</script>
<template>
  <section id="MSG">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <MsgContact>
            <template #heading>我的聯絡方式</template>
            <template #icon>
              <IconArrow90degDown />
            </template>
            <template #textContent></template>
            <template #link></template>
          </MsgContact>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
  margin-top: 24px;
  margin-bottom: 80px;
}
</style>