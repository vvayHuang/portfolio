import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue(),
    liveReload(['./src/*html']),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 用哪個頻道
    port: 8080,
    // 啟動server開啟的頁面 
    open : 8080,
  }
})
