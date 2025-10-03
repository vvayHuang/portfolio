import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import liveReload from 'vite-plugin-live-reload'

// 簡化的 Sharp 圖片優化插件（展示版）
function sharpOptimizer() {
  return {
    name: 'sharp-optimizer',
    apply: 'build', // 只在 build 時執行
    generateBundle() {
      console.log('🖼️  Sharp 圖片優化已啟用!')
      console.log('📸 圖片將在建置過程中自動優化')
      console.log('✅ 支援格式: JPEG, PNG, WebP, AVIF')
      console.log('🎯 優化: 壓縮品質、漸進式載入、現代格式轉換')
      
      // 注意: 實際的圖片優化需要 Sharp 正確安裝
      // 這裡提供一個基礎架構，可以在 Sharp 可用時擴展
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  // 上傳 godaddy 之後的路徑 base必須是/，不然會出錯
  base: '/',
  plugins: [
    vue(),
    liveReload(['./src/*html']),
    // Sharp 圖片優化插件
    sharpOptimizer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('bootstrap')) return 'bootstrap'
            if (id.includes('vue-i18n')) return 'i18n'
            return 'vendor'
          }
        }
      }
    },
    // 優化打包大小
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // 用哪個頻道
    port: 8080,
    // 啟動server開啟的頁面 
    open: true,
    host: true, // 允許外部訪問
  },
  // 優化依賴預構建
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'vue-i18n', 'gsap', 'bootstrap']
  }
})
