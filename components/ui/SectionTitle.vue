<script setup>
defineProps({
  textColorClass: {
    type: String,
    default: 'text-body'
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