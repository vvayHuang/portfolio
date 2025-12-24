<script setup>
defineProps({
  cloudStyle1: Object,
  cloudStyle2: Object,
  cloudStyle3: Object,
  cloudStyle4: Object,
  cloudStyle5: Object,
  cloudStyle6: Object,
  cloudStyle7: Object,
})

onMounted(() => {
  // --- Start Cloud Animation Randomization ---
  document.querySelectorAll('.cloud-container').forEach((cloudEl) => {
    const style = window.getComputedStyle(cloudEl)
    const currentDuration = parseFloat(style.animationDuration)
    const currentDelay = parseFloat(style.animationDelay)

    // Add a random variance of +/- 20%
    const durationVariance = currentDuration * (Math.random() * 0.4 - 0.2)
    const delayVariance = currentDelay * (Math.random() * 0.4 - 0.2)

    cloudEl.style.animationDuration = `${currentDuration + durationVariance}s`
    cloudEl.style.animationDelay = `${currentDelay + delayVariance}s`
  })
  // --- End Cloud Animation Randomization ---
})
</script>

<template>
  <div>
    <!-- Clouds -->
    <div
      class="cloud-container cloud-1 position-absolute start-0 z-n1"
      :style="cloudStyle1"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-01.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-2 position-absolute start-0 z-1"
      :style="cloudStyle2"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-02.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-3 position-absolute start-0 z-1"
      :style="cloudStyle3"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-02.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-4 position-absolute start-0 z-n1"
      :style="cloudStyle4"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-01.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-5 position-absolute start-0 z-n1"
      :style="cloudStyle5"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-01.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-6 position-absolute start-0 z-1"
      :style="cloudStyle6"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-02.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <div
      class="cloud-container cloud-7 position-absolute start-0 z-n1"
      :style="cloudStyle7"
    >
      <NuxtImg
        class="img-fluid cloud-bright"
        src="/img/ui-cloud-background-02.webp"
        alt="cloud on hero section"
        format="webp"
      />
    </div>
    <!-- End Clouds -->
  </div>
</template>
