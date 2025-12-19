<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import IconTranslate from '@/icons/IconTranslate.vue'
import IconPalette from '@/icons/IconPalette.vue'
import IconNavToggleIcon from '@/icons/IconNavToggleIcon.vue'
import IconClose from '@/icons/IconClose.vue'
import IconGithub from '@/icons/IconGithub.vue'
import IconLinkedin from '@/icons/IconLinkedin.vue'


const { t, locale } = useI18n()
const themeStore = useThemeStore()
const isMenuOpen = ref(false)

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

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

// Watch menu state to lock body scroll
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="header" :class="{ 'menu-open': isMenuOpen }">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="header-grid align-items-center">

        <span class="navbar-text d-none d-lg-flex">©{{ new Date().getFullYear() }}</span>

        <RouterLink class="navbar-brand" to="/">
          <BrandLogo />
        </RouterLink>

        <!-- Mobile Toggle Button (Visible on mobile only, aligned right) -->
        <!-- Added ms-auto to push it to the right if in a grid/flex container context, or rely on grid placement -->
        <!-- In header-grid (3 cols), brand is center. To put toggle right, it needs to be in 3rd col or similar behavior. -->
        <!-- original grid: 1fr auto 1fr. navbar-nav is in 3rd col. -->
        <!-- We can place this button in the 3rd column area for mobile. -->
        <div class="d-lg-none ms-auto">
          <button class="btn border-0 p-0 text-light" @click="toggleMenu" aria-label="Toggle navigation">
            <IconNavToggleIcon />
          </button>
        </div>


        <ul class="navbar-nav flex-row justify-content-end d-none d-lg-flex">
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" aria-current="page" href="#section-projects">{{ t('PRJ') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#section-about">{{ t('WHO') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#contact">{{ t('MSG') }}</a>
          </li>
          <li class="nav-item">
            <button class="nav-link px-2 px-md-4" style="text-decoration: none" @click="themeStore.toggleTheme">
              <IconPalette />
            </button>
          </li>
          <li class="nav-item">
            <button id="lang-toggle-btn" class="nav-link px-2 px-md-4" style="text-decoration: none"
              @click="toggleLanguage">
              <IconTranslate />
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Full Screen Overlay Menu -->
    <div v-if="isMenuOpen" class="mobile-menu-overlay d-flex flex-column">

      <!-- Top Bar for Mobile Menu: Close & Toggles -->
      <div class="d-flex justify-content-between align-items-center p-4">
        <!-- Close Button -->
        <button class="btn border-0 p-0 text-light" @click="closeMenu">
          <IconClose />
        </button>

        <!-- Toggles (visible in menu) -->
        <div class="d-flex gap-3">
          <button class="btn p-0 text-light" @click="themeStore.toggleTheme">
            <IconPalette />
          </button>
          <button class="btn p-0 text-light" @click="toggleLanguage">
            <IconTranslate />
          </button>
        </div>
      </div>


      <div class="container d-flex flex-column justify-content-center flex-grow-1 position-relative"
        style="z-index: 2000;">
        <div class="row h-100 align-items-end">
          <div class="col-12 col-md-8 offset-md-2">
            <ul class="list-unstyled mb-5 d-flex flex-column gap-6">
              <li><a href="#section-projects" @click="closeMenu" class="menu-link">{{ t('PRJ') }}</a></li>
              <li><a href="#section-about" @click="closeMenu" class="menu-link">{{ t('WHO') }}</a></li>
              <li><a href="#contact" @click="closeMenu" class="menu-link">{{ t('MSG') }}</a></li>
            </ul>

            <div class="menu-footer text-white">
              <div class="social-icons d-flex flex-wrap gap-4 mb-5">
                <a href="https://github.com/vvayHuang" target="_blank" class="text-white">
                  <IconGithub width="24" height="24" />
                </a>
                <a href="https://www.linkedin.com/in/vvayhuang/" target="_blank" class="text-white">
                  <IconLinkedin width="24" height="24" />
                </a>
                <a href="https://music.apple.com/tw/playlist/mixtape1/pl.u-yZyVE33F9EX87X" target="_blank"
                  class="text-white text-decoration-none small align-self-center">Mixtape1</a>
                <a href="https://music.apple.com/tw/playlist/mixtape2/pl.u-EdAVz64u5r14P1" target="_blank"
                  class="text-white text-decoration-none small align-self-center">Mixtape2</a>
              </div>

              <div class="contact-info">
                <div class="d-flex gap-4 small text-white-50">
                  <a href="mailto:jyunwayhuang@gmail.com"
                    class="text-white-50 text-decoration-none">jyunwayhuang@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
