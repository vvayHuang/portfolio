# vvay | Portfolio

這是一個基於 **Vue 3** + **Vite** 的個人作品集網站，展示設計與前端開發能力，並結合多語系（中/英）切換、響應式設計、互動動畫等現代網頁技術。

---

## 使用技術

- **前端框架**：Vue 3、Vite
- **樣式**：SCSS、Tailwind CSS、Bootstrap
- **動畫**：GSAP (GreenSock Animation Platform)
- **設計工具**：Figma、Material Design Builder、Recraft AI
- **國際化**：vue-i18n
- **路由**：Vue Router

---

## 功能特色

- 響應式設計，支援桌機與行動裝置
- 多語系切換（中文/英文）
- 作品集動態展示與詳細介紹
- GSAP 動畫增強互動體驗
- Figma 設計稿連結、專案原始碼、Demo 連結
- 多種樣式技術應用（SCSS/Tailwind/Bootstrap）

---

## 專案結構

```
src/                # 主要原始碼（元件、資料、樣式、路由等）
  assets/           # 靜態資源（圖片、SCSS）
  components/       # 共用元件
  data/             # 作品集資料
  features/         # 各區段功能元件
  icons/            # SVG/Icon 元件
  locales/          # 多語系檔案
  router/           # 路由設定
  views/            # 頁面元件
public/             # 靜態資源
index.html          # 入口 HTML
vite.config.js      # Vite 設定
```

---

## 使用說明

1. **安裝依賴套件**
   ```sh
   npm install
   ```

2. **啟動開發模式**
   ```sh
   npm run dev
   ```

3. **生產環境建置**
   ```sh
   npm run build
   ```

---

## 相關資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Vite 官方文件](https://vitejs.dev/)
- [GSAP 官方網站](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Figma](https://www.figma.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/)

---

如需自訂內容或新增作品，請參考 [`src/data/Projects.js`](src/data/Projects.js) 及相關元件檔案。
