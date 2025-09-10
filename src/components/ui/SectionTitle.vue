<script setup>
import IconArrow90degDown from '@/icons/IconArrow90degDown.vue'
</script>

<template>
  <div class="d-flex py-2 mb-3 align-items-center">
    <h2 class="fs-7 mb-0 text-dark">
      <slot name="heading"></slot>
    </h2>
    <div class="section-title-icon">
      <IconArrow90degDown />
    </div>
  </div>
</template>

<style scoped>
.section-title-icon {
  transform: rotateY(180deg);
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
}
.section-title-icon :deep(svg) {
  width: 8px;
  height: 8px;
}
</style>
