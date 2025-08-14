<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import BrandLogo from '@/components/common/BrandLogo.vue'
import IconTranslate from '@/icons/IconTranslate.vue'
import IconMoon from '@/icons/IconMoon.vue'
import IconSun from '@/icons/IconSun.vue'

const { t, locale } = useI18n()
const themeStore = useThemeStore()

// 切換語言的方法
const supportedLanguages = ['en', 'zh'] // 可擴充語言陣列

function toggleLanguage() {
  const currentIndex = supportedLanguages.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % supportedLanguages.length
  locale.value = supportedLanguages[nextIndex]
  setTimeout(() => {
    const tooltipTrigger = document.getElementById('lang-toggle-btn')
    if (tooltipTrigger && window.bootstrap) {
      // 先 dispose 再 create，確保內容更新
      const oldInstance = window.bootstrap.Tooltip.getInstance(tooltipTrigger)
      if (oldInstance) oldInstance.dispose()
      window.bootstrap.Tooltip.getOrCreateInstance(tooltipTrigger)
    }
  })
}
</script>

<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid d-flex align-items-center">
        <span class="flex-grow-1 d-none d-lg-flex text-dark text-lg-light"
          >©{{ new Date().getFullYear() }}</span
        >
        <RouterLink class="navbar-brand" to="/"><BrandLogo /></RouterLink>
        <ul class="navbar-nav flex-row flex-grow-1 justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link text-light px-2 px-md-4"
              aria-current="page"
              href="#section-projects"
              >{{ t('PRJ') }}</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light px-2 px-md-4" href="#section-about">{{ t('WHO') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light px-2 px-md-4" href="#section-contact">{{ t('MSG') }}</a>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-light px-2 px-md-4 btn btn-link"
              style="text-decoration: none"
              @click="themeStore.toggleTheme"
            >
              <IconMoon v-if="themeStore.theme === 'light'" />
              <IconSun v-else />
            </button>
          </li>
          <li class="nav-item">
            <button
              id="lang-toggle-btn"
              class="nav-link text-light px-2 px-md-4 btn btn-link"
              style="text-decoration: none"
              @click="toggleLanguage"
            >
              <IconTranslate />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  mix-blend-mode: difference;
}
</style>
