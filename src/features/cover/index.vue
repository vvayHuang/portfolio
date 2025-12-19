<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue'
import lax from 'lax.js'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import Clouds from '@/components/ui/Clouds.vue'

const { locale } = useI18n()
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
          ['-100', '100'],
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
        <img class="display-title-scroll hero-image" :class="{ 'dark-mode-filter': isDarkMode }"
          src="@/assets/img/asset-cover-main-2.svg" alt="首頁視覺名字大圖" />
      </div>
      <Clouds :cloud-style1="cloudStyle1" :cloud-style2="cloudStyle2" :cloud-style3="cloudStyle3"
        :cloud-style4="cloudStyle4" :cloud-style5="cloudStyle5" :cloud-style6="cloudStyle6"
        :cloud-style7="cloudStyle7" />

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
