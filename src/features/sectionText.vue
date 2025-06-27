<script setup>
import IconArrow90degDown from "../icons/IconArrow90degDown.vue";
</script>

<template>
  <div class="d-flex py-lg-2 align-items-end mb-3 mb-md-0">
    <h2 class="fs-6 text-secondary">
      <slot name="heading"></slot>
    </h2>
    <i>
      <IconArrow90degDown />
    </i>
  </div>
</template>

<style scoped>
i {
  transform: rotateY(180deg);
}
</style>
