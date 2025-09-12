<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue'
import lax from 'lax.js'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t, locale } = useI18n()
const themeStore = useThemeStore()

const isDarkMode = computed(() => themeStore.theme === 'dark')

// --- Start Mouse Parallax ---
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event) => {
  mouseX.value = event.clientX - window.innerWidth / 2
  mouseY.value = event.clientY - window.innerHeight / 2
}

const parallaxWrapperStyle = (intensity) =>
  computed(() => ({
    transform: `translate(${mouseX.value * intensity}px, ${mouseY.value * intensity}px)`,
    transition: 'transform 0.2s ease-out',
  }))

const mainImageStyle = parallaxWrapperStyle(0.015)
const cloudStyle1 = parallaxWrapperStyle(-0.008) // Background
const cloudStyle2 = parallaxWrapperStyle(0.025) // Foreground
const cloudStyle3 = parallaxWrapperStyle(0.02) // Foreground
const cloudStyle4 = parallaxWrapperStyle(-0.012) // Background
const cloudStyle5 = parallaxWrapperStyle(-0.005) // Farthest Background
const cloudStyle6 = parallaxWrapperStyle(0.03) // Foreground
const cloudStyle7 = parallaxWrapperStyle(-0.01) // Background
// --- End Mouse Parallax ---

onMounted(() => {
  // Setup lax
  lax.init()

  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Add your elements
  lax.addElements(
    '.display-title-scroll',
    {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [-100, 100],
        ],
        opacity: [
          [100, 968],
          [1, 0],
        ],
      },
    },
    [],
  )
  window.addEventListener('mousemove', handleMouseMove)

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

onUnmounted(() => {
  // Remove the scrollY driver and registered elements to prevent stacking
  lax.removeDriver('scrollY')
  lax.removeElements('.display-title-scroll')
  window.removeEventListener('mousemove', handleMouseMove)
})
// description 物件用於根據當前語言顯示自我介紹文字，key 為語言代碼（如 'en', 'zh'），value 為對應語言的介紹內容
const description = {
  en: 'My name is Huang Jyun Wei. I am a job seeker who loves design. I am currently actively seeking job opportunities as a web designer/UI designer',
  zh: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會',
}
</script>

<template>
  <section id="section-hero" class=" position-relative overflow-hidden">
    <div class="d-flex flex-column h-100 justify-content-center overflow-hidden">
      <div :style="mainImageStyle">
        <img
          class="display-title-scroll hero-image"
          :class="{ 'dark-mode-filter': isDarkMode }"
          src="@/assets/img/asset-cover-main-2.svg"
          alt="首頁視覺名字大圖"
        />
      </div>
      <!-- Clouds -->
      <div
        class="cloud-container cloud-1 position-absolute start-0 z-n1"
        :style="cloudStyle1"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-2 position-absolute start-0 z-1"
        :style="cloudStyle2"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-3 position-absolute start-0 z-1"
        :style="cloudStyle3"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-4 position-absolute start-0 z-n1"
        :style="cloudStyle4"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-5 position-absolute start-0 z-n1"
        :style="cloudStyle5"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-6 position-absolute start-0 z-1"
        :style="cloudStyle6"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="cloud-container cloud-7 position-absolute start-0 z-n1"
        :style="cloudStyle7"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <!-- End Clouds -->

      <div class="container-fluid main-grid">
        <div class="overflow-hidden hero-desc">
          <p class="anim-word">
            {{ locale === 'en' ? description.en : description.zh }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image{
  transition: filter 1.5s ease;
  width: 100vw;
  margin-top: 5rem;
  margin-bottom: 1rem;
}
.cloud-bright {
  filter: brightness(0.5);
}

.dark-mode-filter {
  filter: invert(1);
}

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

.cloud-container {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Cloud 1: LTR, Mid-ground */
.cloud-1 {
  top: 10%;
  animation-name: drift-ltr;
  animation-duration: 220s;
  animation-delay: -60s;
  opacity: 0.9;
}

/* Cloud 2: RTL, Front, Fast */
.cloud-2 {
  bottom: 10%;
  animation-name: drift-rtl;
  animation-duration: 150s;
  animation-delay: -100s;
  transform: scale(1.1);
}

/* Cloud 3: LTR, Front, Very Slow, Small */
.cloud-3 {
  top: 20%;
  animation-name: drift-ltr;
  animation-duration: 280s;
  animation-delay: -20s;
  transform: scale(0.7) scaleX(-1);
}

/* Cloud 4: RTL, Far-background, Large, Flipped */
.cloud-4 {
  bottom: 25%;
  animation-name: drift-rtl;
  animation-duration: 250s;
  animation-delay: -160s;
  transform: scale(1.3) scaleX(-1);
  opacity: 0.7;
  filter: blur(1px);
}

/* Cloud 5: LTR, Farthest-background, Slowest */
.cloud-5 {
  top: 18%;
  animation-name: drift-ltr;
  animation-duration: 350s;
  animation-delay: -150s;
  transform: scale(0.8);
  opacity: 0.6;
  filter: blur(1.5px);
}

/* Cloud 6: RTL, Front, Very Fast */
.cloud-6 {
  bottom: 35%;
  animation-name: drift-rtl;
  animation-duration: 130s;
  animation-delay: -20s;
  transform: scale(1.2);
}
/* Cloud 7: LTR, Mid-ground, Clustered */
.cloud-7 {
  top: 12%;
  animation-name: drift-ltr;
  animation-duration: 240s;
  animation-delay: -70s;
  transform: scale(1);
  opacity: 0.85;
}

@media (max-width: 768px) {
  .cloud-1 {
    top: 5%;
  }
  .cloud-2 {
    bottom: 5%;
  }
  .cloud-3 {
    top: 15%;
  }
  .cloud-4 {
    bottom: 20%;
  }
  .cloud-5 {
    top: 10%;
  }
  .cloud-6 {
    bottom: 30%;
  }
  .cloud-7 {
    top: 7%;
  }
}

/* --- Start Text Animation Styles --- */
@keyframes animate-word-in {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.main-grid{
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: 4.8rem;
}
.hero-desc{
  grid-column: 1 / span 6
}
.anim-word {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  animation-name: animate-word-in;
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
  font-size: 1.25rem;
}
/* --- End Text Animation Styles --- */
</style>
