# vvay | Portfolio

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://vvayhuang.github.io/portfolio/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.8-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

這是一個基於 **Vue 3** + **Vite** 的個人作品集網站，展示設計與前端開發能力，並結合多語系（中/英）切換、響應式設計、互動動畫等現代網頁技術。

🌐 **線上預覽**: [https://vvayhuang.github.io/portfolio/](https://vvayhuang.github.io/portfolio/)

---

## ✨ 功能特色

- 📱 響應式設計，支援桌機與行動裝置
- 🌍 多語系切換（中文/英文）
- 🎨 作品集動態展示與詳細介紹
- ✨ GSAP 動畫增強互動體驗
- 🔗 Figma 設計稿連結、專案原始碼、Demo 連結
- 🎯 多種樣式技術應用（SCSS/Bootstrap）
- 🌙 深色/淺色主題切換
- ⚡ 高性能優化與圖片壓縮
- 🔍 SEO 優化與結構化數據

---

## 🛠️ 使用技術

### 前端核心
- **框架**: Vue 3 + Composition API
- **建置工具**: Vite
- **狀態管理**: Pinia
- **路由**: Vue Router
- **國際化**: vue-i18n

### 樣式與動畫
- **CSS 框架**: SCSS + Bootstrap 5
- **動畫庫**: GSAP (GreenSock Animation Platform)
- **圖示**: Bootstrap Icons

### 設計工具
- **設計軟體**: Figma
- **設計系統**: Material Design Builder
- **AI 圖片**: Recraft AI

### 開發工具
- **代碼檢查**: ESLint + Prettier
- **圖片優化**: Sharp (vite-plugin-sharp)
- **部署**: GitHub Pages
- **分析**: Google Analytics

---

## 🚀 快速開始

### 環境要求
- Node.js 16+ 
- npm 或 yarn

### 安裝與運行

1. **克隆專案**
   ```bash
   git clone https://github.com/vvayHuang/portfolio.git
   cd portfolio
   ```

2. **安裝依賴套件**
   ```bash
   npm install
   ```

3. **啟動開發模式**
   ```bash
   npm run dev
   ```

4. **代碼檢查與格式化**
   ```bash
   npm run lint      # ESLint 檢查
   npm run format    # Prettier 格式化
   ```

5. **生產環境建置**
   ```bash
   npm run build
   ```

6. **預覽建置結果**
   ```bash
   npm run preview
   ```

7. **部署到 GitHub Pages**
   ```bash
   npm run deploy
   ```

### 環境變數設定
複製 `.env.example` 為 `.env.production` 並設定：
```bash
# Google Analytics GTAG ID
VITE_GTAG_ID=YOUR_GTAG_ID_HERE
```

---

## 📂 專案結構

```
portfolio/
├── 📁 public/              # 靜態資源
│   ├── favicon.ico         # 網站圖標
│   ├── manifest.json       # PWA 設定檔
│   └── apple-touch-icon.png
├── 📁 src/                 # 主要原始碼
│   ├── 📁 assets/          # 資源文件
│   │   ├── img/           # 圖片資源
│   │   └── scss/          # SCSS 樣式
│   ├── 📁 components/      # Vue 組件
│   │   ├── layout/        # 佈局組件
│   │   ├── modules/       # 模組組件
│   │   └── ui/            # UI 組件
│   ├── 📁 data/           # 靜態數據
│   ├── 📁 features/       # 功能組件
│   ├── 📁 icons/          # SVG 圖標
│   ├── 📁 locales/        # 多語系文件
│   ├── 📁 router/         # 路由配置
│   ├── 📁 stores/         # Pinia 狀態管理
│   ├── 📁 views/          # 頁面組件
│   ├── App.vue            # 根組件
│   ├── main.js            # 入口文件
│   └── i18n.js            # 國際化配置
├── 📄 index.html           # HTML 模板
├── 📄 vite.config.js       # Vite 配置
├── 📄 package.json         # 依賴配置
└── 📄 README.md           # 專案說明
```

---

## 🔧 開發指南

### 新增作品項目
編輯 `src/data/Projects.js` 文件來添加新的作品：

```javascript
{
  id: 'YourProjectModal',
  title: { en: 'Project Title', zh: '專案標題' },
  type: { en: 'Project Type', zh: '專案類型' },
  year: 2025,
  // ... 更多配置
}
```

### 自定義主題
在 `src/assets/scss/` 目錄下修改 SCSS 變數來自定義主題色彩和樣式。

### 多語系支援
在 `src/locales/` 目錄下的 JSON 文件中添加新的翻譯內容。

---

## 🛠️ 技術細節

### 性能優化
- ✅ 圖片自動優化 (Sharp)
- ✅ 代碼分割與懶加載
- ✅ CSS/JS 最小化
- ✅ 資源預加載
- ✅ Bundle 分析與優化

### SEO 優化
- ✅ 結構化數據（JSON-LD）
- ✅ Open Graph 標籤
- ✅ Twitter Cards
- ✅ 語義化 HTML
- ✅ 響應式圖片

### 安全性
- ✅ 內容安全策略 (CSP) Headers
- ✅ XSS 防護
- ✅ 依賴包安全檢查

---

## 相關資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Vite 官方文件](https://vitejs.dev/)
- [GSAP 官方網站](https://greensock.com/gsap/)
- [Bootstrap](https://getbootstrap.com/)
- [Figma](https://www.figma.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/)

---

如需自訂內容或新增作品，請參考 [`src/data/Projects.js`](src/data/Projects.js) 及相關元件檔案。
