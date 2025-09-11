<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import IconTranslate from '@/icons/IconTranslate.vue'
import IconPalette from '@/icons/IconPalette.vue'


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
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="header-grid align-items-center">
        <span class="navbar-text"
          >©{{ new Date().getFullYear() }}</span
        >
        <RouterLink class="navbar-brand" to="/"><BrandLogo /></RouterLink>
        <ul class="navbar-nav flex-row justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link px-2 px-md-4"
              aria-current="page"
              href="#section-projects"
              >{{ t('PRJ') }}</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#section-about">{{ t('WHO') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#section-contact">{{ t('MSG') }}</a>
          </li>
          <li class="nav-item">
            <button
              class="nav-link px-2 px-md-4 btn btn-link"
              style="text-decoration: none"
              @click="themeStore.toggleTheme"
            >
              <IconPalette />
            </button>
          </li>
          <li class="nav-item">
            <button
              id="lang-toggle-btn"
              class="nav-link px-2 px-md-4 btn btn-link"
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
