<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['click'])
</script>

<template>
  <button
    class="icon-button"
    :class="{ 'icon-button--disabled': disabled }"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
