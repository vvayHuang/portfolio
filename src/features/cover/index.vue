<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue'
import lax from 'lax.js'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import Cloud from './Cloud.vue'
import cloudImg1 from '@/assets/img/ui-cloud-background-01.webp'
import cloudImg2 from '@/assets/img/ui-cloud-background-02.webp'

const { t, locale } = useI18n()
const themeStore = useThemeStore()

const isDarkMode = computed(() => themeStore.theme === 'dark')

// --- Mouse Parallax ---
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

// --- Cloud Configuration ---
const clouds = ref([
  {
    id: 1,
    zIndex: -1,
    top: '10%',
    animationName: 'drift-ltr',
    duration: 220,
    delay: -60,
    opacity: 0.9,
    imageSrc: cloudImg1,
    parallaxIntensity: -0.008,
  },
  {
    id: 2,
    zIndex: 1,
    bottom: '10%',
    animationName: 'drift-rtl',
    duration: 150,
    delay: -100,
    scale: 1.1,
    imageSrc: cloudImg2,
    parallaxIntensity: 0.025,
  },
  {
    id: 3,
    zIndex: 1,
    top: '20%',
    animationName: 'drift-ltr',
    duration: 280,
    delay: -20,
    scale: 0.7,
    scaleX: -1,
    imageSrc: cloudImg2,
    parallaxIntensity: 0.02,
  },
  {
    id: 4,
    zIndex: -1,
    bottom: '25%',
    animationName: 'drift-rtl',
    duration: 250,
    delay: -160,
    scale: 1.3,
    scaleX: -1,
    opacity: 0.7,
    blur: 1,
    imageSrc: cloudImg1,
    parallaxIntensity: -0.012,
  },
  {
    id: 5,
    zIndex: -1,
    top: '18%',
    animationName: 'drift-ltr',
    duration: 350,
    delay: -150,
    scale: 0.8,
    opacity: 0.6,
    blur: 1.5,
    imageSrc: cloudImg1,
    parallaxIntensity: -0.005,
  },
  {
    id: 6,
    zIndex: 1,
    bottom: '35%',
    animationName: 'drift-rtl',
    duration: 130,
    delay: -20,
    scale: 1.2,
    imageSrc: cloudImg2,
    parallaxIntensity: 0.03,
  },
  {
    id: 7,
    zIndex: -1,
    top: '12%',
    animationName: 'drift-ltr',
    duration: 240,
    delay: -70,
    opacity: 0.85,
    imageSrc: cloudImg2,
    parallaxIntensity: -0.01,
  },
])

// --- Lifecycle Hooks ---
onMounted(() => {
  // Setup lax
  lax.init()
  lax.addDriver('scrollY', () => window.scrollY)
  lax.addElements(
    '.display-title-scroll',
    {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [-200, 200],
        ],
        opacity: [
          [400, 968],
          [1, 0],
        ],
      },
    },
    [],
  )

  window.addEventListener('mousemove', handleMouseMove)

  // Cloud Animation Randomization
  clouds.value = clouds.value.map((cloud) => {
    const durationVariance = cloud.duration * (Math.random() * 0.4 - 0.2)
    const delayVariance = cloud.delay * (Math.random() * 0.4 - 0.2)
    return {
      ...cloud,
      duration: `${cloud.duration + durationVariance}s`,
      delay: `${cloud.delay + delayVariance}s`,
    }
  })
})

onUnmounted(() => {
  lax.removeDriver('scrollY')
  lax.removeElements('.display-title-scroll')
  window.removeEventListener('mousemove', handleMouseMove)
})

// --- Text Content & Animation ---
const description = {
  en: 'My name is Huang Jyun Wei. I am a job seeker who loves design. I am currently actively seeking job opportunities as a web designer/UI designer',
  zh: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會',
}
const descriptionWords = computed(() => {
  const desc = description[locale.value] || ''
  return desc.split(/\s+/).filter((word) => word.length > 0)
})
</script>

<template>
  <section id="section-hero">
    <div class="d-flex flex-column h-100 justify-content-center overflow-hidden">
      <div :style="mainImageStyle">
        <img
          class="display-title-scroll mb-3 img-fluid"
          :class="{ 'dark-mode-filter': isDarkMode }"
          src="@/assets/img/asset-cover-main.png"
          alt=""
        />
      </div>

      <!-- Clouds -->
      <Cloud
        v-for="cloud in clouds"
        :key="cloud.id"
        :config="cloud"
        :parallaxStyle="parallaxWrapperStyle(cloud.parallaxIntensity)"
      />
      <!-- End Clouds -->

      <div class="container-fluid">
        <div class="row">
          <div class="col-auto">
            <div class="overflow-hidden">
              <p class="mb-0 fs-md-5 fs-6">
                <span
                  v-for="(word, index) in descriptionWords"
                  :key="index"
                  class="anim-word"
                  :style="{ 'animation-delay': `${index * 0.2}s` }"
                >
                  {{ word + ' ' }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#section-hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

#section-hero img {
  transition: filter 1.5s ease;
}

@media (max-width: 768px) {
  #section-hero {
    height: 100vh;
  }
}

.dark-mode-filter {
  filter: invert(1);
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

.anim-word {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  animation-name: animate-word-in;
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
}
/* --- End Text Animation Styles --- */
</style>
