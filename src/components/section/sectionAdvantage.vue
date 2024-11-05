<script setup>
import IconArrowUpRight from '../icons/IconArrowUpRight.vue';
import { useI18n } from 'vue-i18n';
import SectionText from './sectionText.vue';
const { t, locale } = useI18n();
</script>

<template>
<SectionText>
  <template #heading>{{t('my advantage')}}</template>
</SectionText>
  <slot name="list">
    <ul class="list-unstyled">
      <li class=" py-2">
        <div class=" d-flex align-items-center">
          <IconArrowUpRight class=" d-block"/>
          <span class="fw-medium ms-3">{{ t('my advantage 1') }}</span>
        </div>
      </li>
      <li class=" py-2">
        <IconArrowUpRight />
        <span class="fw-medium ms-3">{{ t('my advantage 2') }}</span>
      </li>
    </ul>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
