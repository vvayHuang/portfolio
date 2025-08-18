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

<style scoped>
.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-size: inherit;
}

.icon-button:hover:not(.icon-button--disabled) {
  opacity: 0.8;
}

.icon-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
