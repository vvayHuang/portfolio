<script setup>
import { ref, watch, nextTick } from 'vue';
import gsap from 'gsap';
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
// Animation Hooks
const onEnter = (el, done) => {
  document.body.style.overflow = 'hidden'

  const tl = gsap.timeline({ onComplete: done })
  const topBar = el.querySelector('.mobile-menu-top-bar')
  const menuItems = el.querySelectorAll('.mobile-menu-list li')
  const socialIcons = el.querySelector('.social-icons')
  const contactInfo = el.querySelector('.contact-info')

  // Initial state (Clipped completely from the right)
  gsap.set([topBar, menuItems, socialIcons, contactInfo], {
    clipPath: 'inset(0 100% 0 0)',
    webkitClipPath: 'inset(0 100% 0 0)'
  })

  // Animation sequence (Reveal from left to right)
  tl.to(topBar, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' })
    .to(menuItems, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', stagger: 0.1, ease: 'power3.inOut' }, "-=0.4")
    .to(socialIcons, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' }, "-=0.4")
    .to(contactInfo, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' }, "-=0.5")
}

const onLeave = (el, done) => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = ''
      done()
    }
  })

  const topBar = el.querySelector('.mobile-menu-top-bar')
  const menuItems = el.querySelectorAll('.mobile-menu-list li')
  const socialIcons = el.querySelector('.social-icons')
  const contactInfo = el.querySelector('.contact-info')

  // Reverse sequence (Clip back to right)
  // We want to disappear "right to left"? User said "reverse back".
  // If we revealed 0->100% (left to right), reverse is shrinking back to the left?
  // "反著回去" usually means reversing the playback.
  // The reveal was `inset(0 100% 0 0)` (hidden) -> `inset(0 0% 0 0)` (visible).
  // The reverse is `inset(0 0% 0 0)` -> `inset(0 100% 0 0)`.
  // This looks like the content is being wiped away properly.

  tl.to(contactInfo, { duration: 0.2, clipPath: 'inset(0 100% 0 0)', webkitClipPath: 'inset(0 100% 0 0)', ease: 'power3.inOut' })
    .to(socialIcons, { duration: 0.2, clipPath: 'inset(0 100% 0 0)', webkitClipPath: 'inset(0 100% 0 0)', ease: 'power3.inOut' }, "-=0.3")
    .to(menuItems, { duration: 0.2, clipPath: 'inset(0 100% 0 0)', webkitClipPath: 'inset(0 100% 0 0)', stagger: 0.05, ease: 'power3.inOut' }, "-=0.3")
    .to(topBar, { duration: 0.2, clipPath: 'inset(0 100% 0 0)', webkitClipPath: 'inset(0 100% 0 0)', ease: 'power3.inOut' }, "-=0.3")
}
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
    <Transition :css="false" @enter="onEnter" @leave="onLeave">
      <div v-if="isMenuOpen" class="mobile-menu-overlay d-flex flex-column">

        <!-- Top Bar for Mobile Menu: Close & Toggles -->
        <div class="mobile-menu-top-bar d-flex justify-content-between align-items-center p-4 bg-body">
          <!-- Close Button -->
          <button class="btn border-0 p-0" @click="closeMenu">
            <IconClose />
          </button>

          <!-- Toggles (visible in menu) -->
          <div class="d-flex gap-5">
            <button class="btn p-0" @click="themeStore.toggleTheme">
              <IconPalette />
            </button>
            <button class="btn p-0" @click="toggleLanguage">
              <IconTranslate />
            </button>
          </div>
        </div>


        <div class="container justify-content-center flex-grow-1 position-relative p-0" style="z-index: 2000;">
          <div class="row h-100 align-items-end">
            <div class="col-12 col-md-8 offset-md-2">
              <ul class="mobile-menu-list list-unstyled d-flex flex-column mb-0">
                <li><a href="#section-projects" @click="closeMenu" class="menu-link">{{ t('PRJ') }}</a></li>
                <li><a href="#section-about" @click="closeMenu" class="menu-link">{{ t('WHO') }}</a></li>
                <li><a href="#contact" @click="closeMenu" class="menu-link">{{ t('MSG') }}</a></li>
              </ul>

              <div class="menu-footer ">
                <div class="social-icons d-inline-flex flex-wrap gap-4 p-4 bg-body">
                  <a href="https://github.com/vvayHuang" target="_blank">
                    <IconGithub width="24" height="24" />
                  </a>
                  <a href="https://www.linkedin.com/in/vvayhuang/" target="_blank">
                    <IconLinkedin width="24" height="24" />
                  </a>
                  <a href="https://music.apple.com/tw/playlist/mixtape1/pl.u-yZyVE33F9EX87X" target="_blank"
                    class=" text-decoration-none small align-self-center">Mixtape1</a>
                  <a href="https://music.apple.com/tw/playlist/mixtape2/pl.u-EdAVz64u5r14P1" target="_blank"
                    class=" text-decoration-none small align-self-center">Mixtape2</a>
                </div>

                <div class="contact-info">
                  <div class="d-inline-block gap-4 small p-4 bg-body">
                    <a href="mailto:jyunwayhuang@gmail.com"
                      class="text-decoration-none text-muted">jyunwayhuang@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
