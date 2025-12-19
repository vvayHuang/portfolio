import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
// Vite 配置定義
export default defineConfig({
  // base: 部署時的基礎路徑，當應用程式不是部署在伺服器根目錄時設定。
  // 上傳 godaddy 之後的路徑 base必須是/，不然會出錯
  base: '/',
  // plugins: 設置 Vite 插件，用於擴展 Vite 的功能。
  plugins: [
    vue(), // 啟用 Vue 3 支持
    // ViteImageOptimizer 插件用於優化圖片，減小圖片文件大小。
    ViteImageOptimizer({
      jpg: {
        quality: 80, // JPEG 圖片質量設定
      },
      png: {
        quality: 80, // PNG 圖片質量設定
      },
      webp: {
        quality: 80, // WebP 圖片質量設定
      },
      gif: {}, // 啟用 GIF 壓縮但不指定質量
      encodeImagesTo: 'webp', // 將圖片編碼為 WebP 格式以提升性能
    }),
  ],
  // resolve: 配置模塊解析規則。
  resolve: {
    // alias: 設置路徑別名，簡化模塊導入。
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 將 '@' 別名指向 'src' 目錄
    }
  },
  // build: 配置生產環境打包選項。
  build: {
    target: 'esnext', // 設置打包目標為 esnext，以支持最新的 JavaScript 特性。
    minify: 'terser', // 使用 Terser 進行代碼壓縮，減小打包文件體積。
    rollupOptions: {
      output: {
        // manualChunks: 手動分塊，將特定的模塊打包到獨立的 chunk 中，優化加載性能。
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap' // 將 GSAP 相關模塊打包為 'gsap'
            if (id.includes('bootstrap')) return 'bootstrap' // 將 Bootstrap 相關模塊打包為 'bootstrap'
            if (id.includes('vue-i18n')) return 'i18n' // 將 vue-i18n 相關模塊打包為 'i18n'
            return 'vendor' // 其他 node_modules 模塊打包為 'vendor'
          }
        }
      }
    },
    // 優化打包大小
    chunkSizeWarningLimit: 1000, // 設置 chunk 大小警告限制 (KB)。
  },
  server: {
    // 啟動server開啟的頁面 
    open: true, // 伺服器啟動時自動打開瀏覽器
    host: true, // 允許外部訪問
  },
  // optimizeDeps: 依賴預構建選項，Vite 會將這些依賴預先構建，提高開發伺服器啟動速度。
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'vue-i18n', 'gsap', 'bootstrap'] // 預構建的依賴列表
  }
})

