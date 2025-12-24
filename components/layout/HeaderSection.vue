<script setup>
const { t, locale, setLocale } = useI18n()
const themeStore = useThemeStore()
const isMenuOpen = ref(false)

// 切換語言的方法
const supportedLanguages = ['en', 'zh']

function toggleLanguage() {
  const currentIndex = supportedLanguages.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % supportedLanguages.length
  const newLocale = supportedLanguages[nextIndex]

  // 使用 setLocale 確保 Nuxt i18n 正確更新全域狀態與 Cookie
  setLocale(newLocale)

  setTimeout(() => {
    const tooltipTrigger = document.getElementById('lang-toggle-btn')
    if (tooltipTrigger && window.bootstrap) {
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

// Animation Hooks
const onEnter = async (el, done) => {
  const { default: gsap } = await import('gsap')
  document.body.style.overflow = 'hidden'
  const tl = gsap.timeline({ onComplete: done })
  const topBar = el.querySelector('.mobile-menu-top-bar')
  const menuItems = el.querySelectorAll('.mobile-menu-list li')
  const socialIcons = el.querySelector('.social-icons')
  const contactInfo = el.querySelector('.contact-info')

  gsap.set([topBar, menuItems, socialIcons, contactInfo], {
    clipPath: 'inset(0 100% 0 0)',
    webkitClipPath: 'inset(0 100% 0 0)'
  })

  tl.to(topBar, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' })
    .to(menuItems, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', stagger: 0.1, ease: 'power3.inOut' }, "-=0.4")
    .to(socialIcons, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' }, "-=0.4")
    .to(contactInfo, { duration: 0.6, clipPath: 'inset(0 0% 0 0)', webkitClipPath: 'inset(0 0% 0 0)', ease: 'power3.inOut' }, "-=0.5")
}

const onLeave = async (el, done) => {
  const { default: gsap } = await import('gsap')
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
        <NuxtLink class="navbar-brand" to="/">
          <BrandLogo />
        </NuxtLink>
        <div class="d-lg-none ms-auto">
          <button class="btn border-0 p-0 text-light" @click="toggleMenu" aria-label="Toggle navigation">
            <Icon name="bi:list" />
          </button>
        </div>
        <ul class="navbar-nav flex-row justify-content-end d-none d-lg-flex">
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" aria-current="page" href="#section-projects">{{ $t('PRJ') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#section-about">{{ $t('WHO') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2 px-md-4" href="#contact">{{ $t('MSG') }}</a>
          </li>
          <li class="nav-item">
            <button class="nav-link px-2 px-md-4" style="text-decoration: none" @click="themeStore.toggleTheme">
              <Icon name="bi:palette" />
            </button>
          </li>
          <li class="nav-item">
            <button id="lang-toggle-btn" class="nav-link px-2 px-md-4" style="text-decoration: none"
              @click="toggleLanguage">
              <Icon name="bi:translate" />
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <Transition :css="false" @enter="onEnter" @leave="onLeave">
      <div v-if="isMenuOpen" class="mobile-menu-overlay d-flex flex-column">
        <div class="mobile-menu-top-bar d-flex justify-content-between align-items-center p-4 bg-body">
          <button class="btn border-0 p-0" @click="closeMenu">
            <Icon name="bi:x" size="32" />
          </button>
          <div class="d-flex gap-5">
            <button class="btn p-0" @click="themeStore.toggleTheme">
              <Icon name="bi:palette" />
            </button>
            <button class="btn p-0" @click="toggleLanguage">
              <Icon name="bi:translate" />
            </button>
          </div>
        </div>
        <div class="container justify-content-center flex-grow-1 position-relative p-0" style="z-index: 2000;">
          <div class="row h-100 align-items-end">
            <div class="col-12 col-md-8 offset-md-2">
              <ul class="mobile-menu-list list-unstyled d-flex flex-column mb-0">
                <li><a href="#section-projects" @click="closeMenu" class="menu-link">{{ $t('PRJ') }}</a></li>
                <li><a href="#section-about" @click="closeMenu" class="menu-link">{{ $t('WHO') }}</a></li>
                <li><a href="#contact" @click="closeMenu" class="menu-link">{{ $t('MSG') }}</a></li>
              </ul>
              <div class="menu-footer ">
                <div class="social-icons d-inline-flex flex-wrap gap-4 p-4 bg-body">
                  <a href="https://github.com/vvayHuang" target="_blank">
                    <Icon name="bi:github" size="24" />
                  </a>
                  <a href="https://www.linkedin.com/in/vvayhuang/" target="_blank">
                    <Icon name="bi:linkedin" size="24" />
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