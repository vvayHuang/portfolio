<script setup>
import { onMounted, onUnmounted } from 'vue'
import lax from 'lax.js'

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

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
  <section id="section-hero" class="overflow-hidden">
    <div class="d-flex flex-column h-100 justify-content-center">
      <img
        class="display-title-scroll mb-3 img-fluid"
        src="@/assets/img/vvayhuangCoverImage.png"
        alt=""
      />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="overflow-hidden">
              <p class="animate__animated animate__slideInUp animate__slow mb-0 fs-5">
                {{ description[locale] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="position-absolute top-0 start-0 z-n1 animate__animated animate__fadeInLeft animate__slow"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/CLOUD-1.webp"
          alt="cloud on hero section"
        />
      </div>
      <div
        class="position-absolute bottom-0 end-0 animate__animated animate__fadeInRight animate__slow"
      >
        <img
          class="img-fluid cloud-bright"
          src="@/assets/img/CLOUD-2.webp"
          alt="cloud on hero section"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#section-hero {
  height: calc(100vh - 56px);
  padding-bottom: 80px;
  margin-bottom: 56px;
}
.cloud-bright {
  filter: brightness(0.5);
}
</style>
