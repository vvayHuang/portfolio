<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import SectionText from '@/components/common/SectionTitle.vue'
</script>
<template>
  <SectionText>
    <template #heading>{{ t('my skill') }}</template>
  </SectionText>
  <slot name="list">
    <ul class="list-unstyled">
      <li class="py-2">
        <span class="">{{ t('my skill 1') }}</span>
      </li>
      <li class="py-2">
        <span class="">{{ t('my skill 2') }}</span>
      </li>
      <li class="py-2">
        <span class="">{{ t('my skill 3') }}</span>
      </li>
      <li class="py-2">
        <span class="">{{ t('my skill 4') }}</span>
      </li>
      <li class="py-2">
        <span class="">{{ t('my skill 5') }}</span>
      </li>
    </ul>
  </slot>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
