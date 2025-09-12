<script setup>
import IconArrow90degDown from '@/icons/IconArrow90degDown.vue'

defineProps({
  textColorClass: {
    type: String,
    default: 'text-dark'
  }
})
</script>

<template>
  <h2 class="fs-2" :class="textColorClass">
    <slot name="heading"></slot>
    <div class="section-title-icon">
      <IconArrow90degDown />
    </div>
  </h2>
</template>

<style scoped>
.section-title-icon {
  transform: rotateY(180deg);
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
}
.section-title-icon :deep(svg) {
  width: 12px;
  height: 12px;
}
</style>
