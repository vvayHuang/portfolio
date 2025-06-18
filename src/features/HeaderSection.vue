<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BrandLogo from '@/components/common/BrandLogo.vue'
import IconTranslate from '@/icons/IconTranslate.vue'
const { t, locale } = useI18n()
// 切換語言的方法
function switchLanguage(lang) {
  locale.value = lang
}
// 控制 dropdown 顯示狀態
const isDropdownOpen = ref(false)

function openDropdown() {
  isDropdownOpen.value = true
}

function closeDropdown() {
  isDropdownOpen.value = false
}

// 關閉下拉選單的函式
function handleClickOutside(event) {
  const dropdownMenu = document.querySelector('.dropdown-menu')
  if (dropdownMenu && !dropdownMenu.contains(event.target)) {
    closeDropdown()
  }
}

// 在元件掛載時添加事件監聽器
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

// 在元件卸載時移除事件監聽器
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg fixed-bottom">
      <div class="container">
        <span class="flex-grow-1 d-none d-lg-block text-dark text-lg-light">©2025</span>
        <RouterLink class="navbar-brand" to="/"><BrandLogo /></RouterLink>
        <ul class="navbar-nav justify-content-end flex-grow-1 flex-row">
          <li class="nav-item">
            <a class="nav-link text-light px-2 px-md-4" aria-current="page" href="#PRJ">{{
              t('PRJ')
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light px-2 px-md-4" href="#MSG">{{ t('MSG') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light px-2 px-md-4" href="#WHO">{{ t('WHO') }}</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link text-light px-2 px-md-4 dropdown-toggle"
              href="#"
              role="button"
              :aria-expanded="isDropdownOpen"
              @click.prevent="isDropdownOpen = !isDropdownOpen"
            >
              <IconTranslate />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-dark"
              :class="{ show: isDropdownOpen }"
              @click.stop
            >
              <li>
                <button class="dropdown-item" @click="(switchLanguage('en'), closeDropdown())">
                  {{ t('language-en') }}
                </button>
              </li>
              <li>
                <button class="dropdown-item" @click="(switchLanguage('zh'), closeDropdown())">
                  {{ t('language-zh') }}
                </button>
              </li>
            </ul>
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
.dropdown-menu {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  right: 0;
  z-index: 1050;
}

.dropdown-menu.show {
  visibility: visible;
  opacity: 1;
}
</style>
