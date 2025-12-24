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
      <Icon name="bi:arrow-90deg-down" size="16" />
    </div>
  </h2>
</template>