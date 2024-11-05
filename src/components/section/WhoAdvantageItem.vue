<script setup>
import IconArrowUpRight from '../icons/IconArrowUpRight.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0">
    <h4 class=" fs-6 text-secondary">
      <slot name="heading"></slot>
    </h4>
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <slot name="list">
    <ul class="list-unstyled">
      <li class=" py-2">
        <IconArrowUpRight />
        <span class="fw-medium ms-3">{{ t('my advantage 1') }}</span>
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
