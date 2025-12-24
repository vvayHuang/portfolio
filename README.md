# vvay | 個人作品集

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://vvayhuang.online/)
[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.11.2-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

這是一個基於 **Nuxt 3** (Vue 3) 的個人作品集網站，展示設計與前端開發能力。透過 Nuxt 的 **SSG (靜態網站生成)** 技術，實現了極速的載入體驗與優異的 SEO 表現。

## ✨ 功能特色

- ⚡ **Nuxt 3 驅動** - 利用 SSR/SSG 技術提升效能與 SEO
- 📱 **響應式設計** - 完美支援桌機與行動裝置
- 🌍 **多語系支援** - 使用 `@nuxtjs/i18n` 實現中/英無縫切換
- 🎨 **作品集展示** - 動態展示與詳細專案介紹
- ✨ **互動動畫** - 整合 GSAP 與 Lax.js 增強視覺體驗
- 🌙 **主題切換** - 深色/淺色模式自由切換
- 🔍 **SEO 優化** - 內建結構化數據 (JSON-LD) 與完整的 Meta 標籤

---

## 🛠️ 技術棧

### 前端核心
- **框架**: Nuxt 3 (Vue 3 Composition API)
- **狀態管理**: Pinia (使用 `@pinia/nuxt`)
- **國際化**: `@nuxtjs/i18n`
- **建置工具**: Vite (Nuxt 內建)

### 樣式與動畫
- **CSS 框架**: SCSS + Bootstrap 5
- **動畫庫**: GSAP (GreenSock Animation Platform)
- **圖示**: `@nuxt/icon` (整合 Bootstrap Icons & Simple Icons)
- **視差效果**: Lax.js

### 設計與開發
- **設計工具**: Figma, Material Design Builder
- **程式碼規範**: ESLint + Prettier
- **部署平台**: GitHub Pages
- **分析工具**: Hotjar, Microsoft Clarity

---

## 📂 專案結構

```
portfolio/
├── 📁 assets/              # SCSS 樣式與圖片資源
├── 📁 components/          # 自動引入的 Vue 元件
│   ├── 📁 features/       # 頁面主要功能區塊
│   ├── 📁 layout/         # 全域佈局元件 (Header, Footer)
│   ├── 📁 modules/        # 模組化組件 (如 Modal)
│   └── 📁 ui/             # 通用 UI 元件
├── 📁 data/                # 靜態資料 (專案內容)
├── 📁 i18n/                # 國際化語系檔 (locales)
├── 📁 pages/               # 基於檔案的路由 (index.vue)
├── 📁 plugins/             # Nuxt 插件 (Bootstrap, Analytics)
├── 📁 public/              # 不經編譯的靜態資源 (Favicon, Manifest)
├── 📁 stores/              # 自動引入的 Pinia Stores
├── 📄 app.vue              # 應用程式入口
├── 📄 nuxt.config.ts       # Nuxt 設定檔
└── 📄 README.md            # 專案說明
```

---

## 🔧 開發與部署

### 啟動開發伺服器
```bash
npm install
npm run dev
```

### 靜態生成 (SSG)
```bash
npm run build # 執行 nuxt generate
```

### 部署至 GitHub Pages
```bash
npm run deploy
```
---
