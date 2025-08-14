<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import lax from 'lax.js'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t, locale } = useI18n()
const themeStore = useThemeStore()

const isDarkMode = computed(() => themeStore.theme === 'dark')

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
          [-200, 100],
        ],
        opacity: [
          [400, 968],
          [1, 0],
        ],
      },
    },
    [],
  )
})

onUnmounted(() => {
  // Remove the scrollY driver and registered elements to prevent stacking
  lax.removeDriver('scrollY')
  lax.removeElements('.display-title-scroll')
})
// description 物件用於根據當前語言顯示自我介紹文字，key 為語言代碼（如 'en', 'zh'），value 為對應語言的介紹內容
const description = {
  en: 'My name is Huang Jyun Wei. I am a job seeker who loves design. I am currently actively seeking job opportunities as a web designer/UI designer',
  zh: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會',
}
</script>

<template>
  <section id="section-hero">
    <div class="d-flex flex-column h-100 justify-content-center overflow-hidden">
      <img
        class="display-title-scroll mb-3 img-fluid" :class="{'dark-mode-filter': isDarkMode}"
        src="@/assets/img/asset-cover-main.png"
        alt=""
      />
      <!-- Clouds -->
      <div class="cloud-container cloud-1 position-absolute start-0 z-n1" style="top: 10%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-2 position-absolute start-0 z-1" style="bottom: 10%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-3 position-absolute start-0 z-1" style="top: 20%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-4 position-absolute start-0 z-n1" style="bottom: 25%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-5 position-absolute start-0 z-n1" style="top: 18%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-01.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-6 position-absolute start-0 z-1" style="bottom: 35%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <div class="cloud-container cloud-7 position-absolute start-0 z-n1" style="top: 12%">
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/ui-cloud-background-02.webp"
          alt="cloud on hero section"
        />
      </div>
      <!-- End Clouds -->

      <div class="container-fluid">
        <div class="row">
          <div class="col-auto">
            <div class="overflow-hidden">
              <p class="animate__animated animate__slideInUp animate__slow mb-0 fs-5">
                {{ description[locale] }}
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
  height: calc(100vh - 56px);
  padding-bottom: 80px;
  margin-bottom: 56px;
  position: relative;
  overflow: hidden;
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
  animation-name: drift-ltr;
  animation-duration: 220s;
  animation-delay: -60s;
  opacity: 0.9;
}

/* Cloud 2: RTL, Front, Fast */
.cloud-2 {
  animation-name: drift-rtl;
  animation-duration: 150s;
  animation-delay: -100s;
  transform: scale(1.1);
}

/* Cloud 3: LTR, Front, Very Slow, Small */
.cloud-3 {
  animation-name: drift-ltr;
  animation-duration: 280s;
  animation-delay: -20s;
  transform: scale(0.7) scaleX(-1);
}

/* Cloud 4: RTL, Far-background, Large, Flipped */
.cloud-4 {
  animation-name: drift-rtl;
  animation-duration: 250s;
  animation-delay: -160s;
  transform: scale(1.3) scaleX(-1);
  opacity: 0.7;
  filter: blur(1px);
}

/* Cloud 5: LTR, Farthest-background, Slowest */
.cloud-5 {
  animation-name: drift-ltr;
  animation-duration: 350s;
  animation-delay: -150s;
  transform: scale(0.8);
  opacity: 0.6;
  filter: blur(1.5px);
}

/* Cloud 6: RTL, Front, Very Fast */
.cloud-6 {
  animation-name: drift-rtl;
  animation-duration: 130s;
  animation-delay: -20s;
  transform: scale(1.2);
}
/* Cloud 7: LTR, Mid-ground, Clustered */
.cloud-7 {
  animation-name: drift-ltr;
  animation-duration: 240s;
  animation-delay: -70s;
  transform: scale(1);
  opacity: 0.85;
}
</style>
