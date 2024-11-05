<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Logo from "./Logo.vue";
import navToggleIcon from "./icons/IconNavToggleIcon.vue";
import IconTranslate from "./icons/IconTranslate.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
// 切換語言的方法
function switchLanguage(lang) {
  locale.value = lang;
}
// 控制 dropdown 顯示狀態
const isDropdownOpen = ref(false);
function openDropdown() {
  isDropdownOpen.value = true;
}
function closeDropdown() {
  isDropdownOpen.value = false;
}
</script>
<template>
  <header class="fixed-top">
    <nav class="navbar navbar-expand-lg fixed-bottom">
      <div class="container">
        <span class="flex-grow-1 d-none d-lg-block text-dark text-lg-light"
          >©2024</span
        >
        <RouterLink class="navbar-brand" to="/"><Logo /></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <navToggleIcon class="text-light" />
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              way huang portfolio
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item">
                <a
                  class="nav-link text-dark text-lg-light px-2 px-md-4"
                  aria-current="page"
                  href="#PRJ"
                  >{{ t("PRJ") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark text-lg-light px-2 px-md-4"
                  href="#MSG"
                  >{{ t("MSG") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark text-lg-light px-2 px-md-4"
                  href="#WHO"
                  >{{ t("WHO") }}</a
                >
              </li>
              <li
                class="nav-item dropdown"
                @mouseover="openDropdown"
                @mouseleave="closeDropdown"
                :class="{ show: isDropdownOpen }"
              >
                <a
                  class="nav-link text-dark text-lg-light px-2 px-md-4 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconTranslate />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                  :class="{ show: isDropdownOpen }"
                >
                  <li>
                    <button class="dropdown-item" @click="switchLanguage('en')">
                      英文
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" @click="switchLanguage('zh')">
                      中文
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
header {
  mix-blend-mode: difference;
  @media (max-width: 768px) {
    .offcanvas-title {
      font-size: 48px;
    }
    .nav-link {
      font-size: 48px;
    }
  }
}
</style>
