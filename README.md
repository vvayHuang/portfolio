# vvay | 個人作品集

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://vvayhuang.github.io/portfolio/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.8-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

這是一個基於 **Vue 3** + **Vite** 的個人作品集網站，展示設計與前端開發能力，並結合多語系（中/英）切換、響應式設計、互動動畫等現代網頁技術。

## ✨ 功能特色

- 📱 **響應式設計** - 完美支援桌機與行動裝置
- 🌍 **多語系切換** - 中文/英文無縫切換
- 🎨 **作品集展示** - 動態展示與詳細介紹
- ✨ **互動動畫** - GSAP 動畫增強使用者體驗
- 🔗 **完整連結** - Figma 設計稿、原始碼、Demo 連結
- 🎯 **現代技術** - SCSS/Bootstrap 樣式技術
- 🌙 **主題切換** - 深色/淺色主題自由切換
- ⚡ **效能優化** - 高性能優化與圖片壓縮
- 🔍 **SEO 優化** - 搜尋引擎優化與結構化數據

---

## 🛠️ 技術棧

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
- **視差效果**: Lax.js

### 設計工具
- **設計軟體**: Figma
- **設計系統**: Material Design Builder
- **AI 圖片**: Recraft AI

### 開發工具
- **程式碼檢查**: ESLint + Prettier
- **圖片優化**: Sharp (vite-plugin-sharp)
- **部署**: GitHub Pages
- **分析工具**: Google Analytics + Hotjar + Microsoft Clarity

---

## 📂 專案結構

```
portfolio/
├── 📁 public/              # 靜態資源
│   ├── favicon.ico         # 網站圖示
│   ├── manifest.json       # PWA 設定檔
│   └── apple-touch-icon.png
├── 📁 src/                 # 主要原始碼
│   ├── 📁 assets/          # 資源檔案
│   │   ├── img/           # 圖片資源
│   │   └── scss/          # SCSS 樣式
│   ├── 📁 components/      # Vue 元件
│   │   ├── layout/        # 佈局元件
│   │   ├── modules/       # 模組元件
│   │   └── ui/            # UI 元件
│   ├── 📁 data/           # 靜態資料
│   ├── 📁 features/       # 功能元件
│   ├── 📁 icons/          # SVG 圖示
│   ├── 📁 locales/        # 多語系檔案
│   ├── 📁 router/         # 路由設定
│   ├── 📁 stores/         # Pinia 狀態管理
│   ├── 📁 views/          # 頁面元件
│   ├── App.vue            # 根元件
│   ├── main.js            # 入口檔案
│   └── i18n.js            # 國際化設定
├── 📄 index.html           # HTML 模板
├── 📄 vite.config.js       # Vite 設定
├── 📄 package.json         # 相依套件設定
└── 📄 README.md           # 專案說明
```

---

## 🔧 專案說明

### 作品集內容
本專案展示個人設計與前端開發作品，包含：
- 網頁設計專案
- 前端開發作品
- UI/UX 設計案例
- 技術實作展示

### 技術實作
- 使用 Vue 3 + Vite 建構現代化前端應用
- 整合 GSAP 動畫庫提升使用者體驗
- 採用 SCSS + Bootstrap 5 進行樣式設計
- 實作多語系切換功能
- 整合多種分析工具追蹤使用者行為

---

## 🛠️ 技術細節

### 效能優化
- ✅ **圖片自動優化** - 使用 Sharp 進行圖片壓縮
- ✅ **程式碼分割** - 按需載入與懶加載
- ✅ **資源最小化** - CSS/JS 壓縮與最佳化
- ✅ **資源預載** - 關鍵資源預載入
- ✅ **Bundle 分析** - 建置檔案大小分析與優化

### SEO 優化
- ✅ **結構化資料** - JSON-LD 格式
- ✅ **社群媒體標籤** - Open Graph 與 Twitter Cards
- ✅ **語義化 HTML** - 符合 SEO 標準的標籤結構
- ✅ **響應式圖片** - 適配不同裝置的圖片載入
- ✅ **多語系支援** - 完整的國際化 SEO 設定

### 安全性
- ✅ **內容安全策略** - CSP Headers 設定
- ✅ **XSS 防護** - 跨站腳本攻擊防護
- ✅ **相依套件檢查** - 定期檢查套件安全性

---

## 📝 聯絡資訊

如有任何問題或建議，歡迎透過以下方式聯絡：

- **GitHub**: [vvayHuang](https://github.com/vvayHuang)
- **作品集**: [線上預覽](https://vvayhuang.github.io/portfolio/)

---

## 📚 技術學習資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Vite 官方文件](https://vitejs.dev/)
- [GSAP 官方網站](https://greensock.com/gsap/)
- [Bootstrap 5 文件](https://getbootstrap.com/)
- [Figma 設計工具](https://www.figma.com/)
- [vue-i18n 國際化](https://vue-i18n.intlify.dev/)
- [Pinia 狀態管理](https://pinia.vuejs.org/)
- [Vue Router 路由](https://router.vuejs.org/)

---
<br>

# vvay | Personal Portfolio (English)

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://vvayhuang.github.io/portfolio/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.8-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a personal portfolio website built with **Vue 3** + **Vite**, showcasing design and front-end development capabilities, and incorporating modern web technologies such as multi-language (Chinese/English) switching, responsive design, and interactive animations.

## ✨ Features

- 📱 **Responsive Design** - Perfect support for desktop and mobile devices
- 🌍 **Multi-language Switching** - Seamless switching between Chinese and English
- 🎨 **Portfolio Showcase** - Dynamic display and detailed introductions
- ✨ **Interactive Animations** - GSAP animations to enhance user experience
- 🔗 **Complete Links** - Figma design files, source code, and demo links
- 🎯 **Modern Technologies** - SCSS/Bootstrap for styling
- 🌙 **Theme Switching** - Freely switch between dark and light themes
- ⚡ **Performance Optimization** - High-performance optimization and image compression
- 🔍 **SEO Optimization** - Search engine optimization and structured data

---

## 🛠️ Tech Stack

### Core Frontend
- **Framework**: Vue 3 + Composition API
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router
- **Internationalization**: vue-i18n

### Styling and Animation
- **CSS Framework**: SCSS + Bootstrap 5
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **Icons**: Bootstrap Icons
- **Parallax Effects**: Lax.js

### Design Tools
- **Design Software**: Figma
- **Design System**: Material Design Builder
- **AI Images**: Recraft AI

### Development Tools
- **Code Linting**: ESLint + Prettier
- **Image Optimization**: Sharp (vite-plugin-sharp)
- **Deployment**: GitHub Pages
- **Analytics Tools**: Google Analytics + Hotjar + Microsoft Clarity

---

## 📂 Project Structure

```
portfolio/
├── 📁 public/              # Static assets
│   ├── favicon.ico         # Website icon
│   ├── manifest.json       # PWA configuration file
│   └── apple-touch-icon.png
├── 📁 src/                 # Main source code
│   ├── 📁 assets/          # Asset files
│   │   ├── img/           # Image assets
│   │   └── scss/          # SCSS styles
│   ├── 📁 components/      # Vue components
│   │   ├── layout/        # Layout components
│   │   ├── modules/       # Module components
│   │   └── ui/            # UI components
│   ├── 📁 data/           # Static data
│   ├── 📁 features/       # Feature components
│   ├── 📁 icons/          # SVG icons
│   ├── 📁 locales/        # Multi-language files
│   ├── 📁 router/         # Routing configuration
│   ├── 📁 stores/         # Pinia state management
│   ├── 📁 views/          # Page components
│   ├── App.vue            # Root component
│   ├── main.js            # Entry file
│   └── i18n.js            # Internationalization setup
├── 📄 index.html           # HTML template
├── 📄 vite.config.js       # Vite configuration
├── 📄 package.json         # Dependency configuration
└── 📄 README.md           # Project description
```

---

## 🔧 Project Description

### Portfolio Content
This project showcases personal design and front-end development work, including:
- Web design projects
- Front-end development works
- UI/UX design cases
- Technical implementation demonstrations

### Technical Implementation
- Building a modern front-end application with Vue 3 + Vite
- Integrating the GSAP animation library to enhance user experience
- Using SCSS + Bootstrap 5 for styling
- Implementing multi-language switching functionality
- Integrating various analytics tools to track user behavior

---

## 🛠️ Technical Details

### Performance Optimization
- ✅ **Automatic Image Optimization** - Image compression using Sharp
- ✅ **Code Splitting** - On-demand and lazy loading
- ✅ **Resource Minimization** - CSS/JS compression and optimization
- ✅ **Resource Preloading** - Preloading of critical resources
- ✅ **Bundle Analysis** - Build file size analysis and optimization

### SEO Optimization
- ✅ **Structured Data** - JSON-LD format
- ✅ **Social Media Tags** - Open Graph and Twitter Cards
- ✅ **Semantic HTML** - Tag structure that meets SEO standards
- ✅ **Responsive Images** - Loading images adapted to different devices
- ✅ **Multi-language Support** - Complete internationalization SEO settings

### Security
- ✅ **Content Security Policy** - CSP Headers configuration
- ✅ **XSS Protection** - Cross-site scripting attack prevention
- ✅ **Dependency Check** - Regular check of package security

---

## 📝 Contact Information

If you have any questions or suggestions, please feel free to contact me through the following channels:

- **GitHub**: [vvayHuang](https://github.com/vvayHuang)
- **Portfolio**: [Live Preview](https://vvayhuang.github.io/portfolio/)

---

## 📚 Technical Learning Resources

- [Vue 3 Official Documentation](https://vuejs.org/)
- [Vite Official Documentation](https://vitejs.dev/)
- [GSAP Official Website](https://greensock.com/gsap/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/)
- [Figma Design Tool](https://www.figma.com/)
- [vue-i18n Internationalization](https://vue-i18n.intlify.dev/)
- [Pinia State Management](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

