<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
})
defineEmits(['click'])
</script>

<template>
  <component :is="tag" class="icon-button" :class="{ 'icon-button--disabled': disabled }" :disabled="disabled"
    :href="href" :target="target" @click="$emit('click', $event)">
    <slot></slot>
  </component>
</template>
