<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  tooltipTriggerList.forEach(el => {
    if (window.bootstrap) {
      window.bootstrap.Tooltip.getOrCreateInstance(el)
    }
  })
})
</script>

<template>
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-custom-class="custom-tooltip"
    data-bs-title="This top tooltip is themed via CSS variables."
  >
    Custom tooltip
  </button>
</template>
<style>
.custom-tooltip {
  --bs-tooltip-bg: var(--bd-violet-bg);
  --bs-tooltip-color: var(--bs-white);
}
</style>
