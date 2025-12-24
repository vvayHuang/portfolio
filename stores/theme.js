export const useThemeStore = defineStore('theme', () => {
  const themes = ['light', 'dark']
  
  // 安全地獲取 localStorage 中的主題設置
  const getStoredTheme = () => {
    if (process.server) return 'light'
    try {
      const stored = localStorage.getItem('theme')
      return themes.includes(stored) ? stored : 'light'
    } catch (error) {
      console.warn('無法讀取 localStorage 中的主題設置:', error)
      return 'light'
    }
  }

  const theme = ref(getStoredTheme())

  // This effect will run once immediately, and then again
  // anytime the `theme` ref changes.
  watchEffect(() => {
    if (process.client) {
      try {
        localStorage.setItem('theme', theme.value)
        document.documentElement.setAttribute('data-bs-theme', theme.value)
      } catch (error) {
        console.warn('無法保存主題設置到 localStorage:', error)
      }
    }
  })

  function toggleTheme() {
    const currentIndex = themes.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    theme.value = themes[nextIndex]
  }

  return { theme, toggleTheme, themes }
})
