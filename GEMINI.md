# Gemini 專案分析報告 (Nuxt 3 遷移版)

## 專案概述

本專案已成功從原本的 Vue 3 + Vite 架構遷移至 **Nuxt 3**。這是一個個人作品集網站，核心目標是展示高品質的設計與前端開發技能。遷移至 Nuxt 3 帶來了更強大的開發體驗、自動化的組件管理，以及對 GitHub Pages 部署更友好的 SSG 支持。

### 核心技術

- **框架**: Nuxt 3 (Composition API)
- **狀態管理**: Pinia (整合 `@pinia/nuxt`)
- **國際化**: `@nuxtjs/i18n` (支援中英雙語)
- **樣式**: SCSS, Bootstrap 5
- **圖示系統**: `@nuxt/icon`
- **動畫**: GSAP, Lax.js
- **分析**: Microsoft Clarity, Hotjar, Google Analytics

## 建置與執行

### 開發環境

```bash
npm install
npm run dev
```
開發伺服器預設運行於 `http://localhost:3000`。

### 生產建置 (SSG)

由於專案部署於靜態空間，我們使用 `nuxt generate`：

```bash
npm run build
```
輸出檔案將位於 `.output/public` 目錄。

### 部署

```bash
npm run deploy
```
此指令會先執行建置，再使用 `gh-pages` 將內容推送到 GitHub。

## 專案結構與慣例

專案採用 Nuxt 3 標準目錄結構：

- `assets/`: 存放 SCSS 全域樣式與組件引用的圖片。
- `components/`: 所有 Vue 組件。Nuxt 會自動掃描此目錄，無需手動 `import`。
- `data/`: 存放靜態專案資料，方便管理內容。
- `i18n/`: 存放語系 JSON 檔案。
- `pages/`: 路由入口。`index.vue` 對應首頁。
- `plugins/`: 存放僅限客戶端執行的插件 (如 Bootstrap JS, Analytics)。
- `stores/`: Pinia 狀態管理模組，自動引入。

## 開發慣例

- **自動引入 (Auto-imports)**：Vue 核心 API (ref, computed)、Store 與 Components 皆為自動引入，請避免在組件中撰寫冗餘的 import 陳述式。
- **SSR 安全性**：所有涉及 DOM 操作 (如 window, document, GSAP) 的邏輯必須封裝在 `onMounted` 內，或使用 `if (process.client)` 檢查。
- **樣式管理**：全域樣式由 `assets/scss/main.scss` 統一控管，遵循自定義變數覆蓋 Bootstrap 的模式。
