import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


// https://vitejs.dev/config/
export default defineConfig({
  // 上傳 godaddy 之後的路徑 base必須是/，不然會出錯
  base: '/',
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      gif: {}, // 啟用 GIF 壓縮但不指定質量
      encodeImagesTo: 'webp', // Add this line to convert to WebP
    }),
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

