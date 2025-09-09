import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const themes = ['light', 'dark', 'cyberpunk']

  const theme = ref(localStorage.getItem('theme') || 'light')

  // This effect will run once immediately, and then again
  // anytime the `theme` ref changes.
  watchEffect(() => {
    localStorage.setItem('theme', theme.value)
    document.documentElement.setAttribute('data-bs-theme', theme.value)
  })

  function toggleTheme() {
    const currentIndex = themes.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    theme.value = themes[nextIndex]
  }

  return { theme, toggleTheme }
})