<script setup>
import { computed } from 'vue'

const props = defineProps({
  // The computed style object for mouse parallax effect
  parallaxStyle: {
    type: Object,
    required: true,
  },
  // Cloud-specific visual properties
  config: {
    type: Object,
    required: true,
  },
})

const containerStyle = computed(() => ({
  top: props.config.top,
  bottom: props.config.bottom,
  zIndex: props.config.zIndex,
  animationName: props.config.animationName,
  animationDuration: props.config.duration,
  animationDelay: props.config.delay,
  opacity: props.config.opacity,
  transform: `scale(${props.config.scale || 1}) ${props.config.scaleX === -1 ? 'scaleX(-1)' : ''}`,
  filter: props.config.blur ? `blur(${props.config.blur}px)` : 'none',
}))
</script>

<template>
  <div class="cloud-container position-absolute start-0" :style="[containerStyle, parallaxStyle]">
    <img class="img-fluid cloud-bright" :src="config.imageSrc" alt="cloud on hero section" />
  </div>
</template>

<style scoped>
.cloud-container {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.cloud-bright {
  filter: brightness(0.5);
}

/* Base cloud animations */
@keyframes drift-ltr {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100vw);
  }
}

@keyframes drift-rtl {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
