<script setup>
import MsgContact from './MsgContact.vue';
import IconArrow90degDown from '../icons/IconArrow90degDown.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>
<template>
  <section id="MSG">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <MsgContact>
            <template #heading>{{t('my contact')}}</template>
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
  margin-bottom: 160px;
}
</style>