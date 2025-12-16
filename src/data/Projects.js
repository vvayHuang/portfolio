import lrpreview1 from '@/assets/img/project-life-record-preview-01.png'
import lrpreview2 from '@/assets/img/project-life-record-preview-02.png'
import gb2preview1 from '@/assets/img/project-galaxy-boyz-v2-preview-01.png'
import gb2preview2 from '@/assets/img/project-galaxy-boyz-v2-preview-02.png'
import gb2preview3 from '@/assets/img/project-galaxy-boyz-v2-preview-03.png'
import bhpreview1 from '@/assets/img/project-buddy-house-preview-01.png'
import bhpreview2 from '@/assets/img/project-buddy-house-preview-02.png'
import bhpreview3 from '@/assets/img/project-buddy-house-preview-03.gif'
import bhpreview4 from '@/assets/img/project-buddy-house-preview-04.gif'
// import stratumDemo from '@/assets/img/project-stratum-demo.gif' // TODO: Add your demo GIF here
import stratumPreview1 from '@/assets/img/project-stratum-preview-01.png'
import stratumPreview2 from '@/assets/img/project-stratum-preview-02.png'
import stratumPreview3 from '@/assets/img/project-stratum-preview-03.png'
import stratumPreview4 from '@/assets/img/project-stratum-preview-04.png'
const projectsModal = [
  {
    id: 'StratumModal',
    title: { en: 'Stratum - AI Career Advisor', zh: 'Stratum - AI 職涯顧問' },
    type: { en: 'AI Career Application', zh: 'AI 職涯應用程式' },
    year: 2025,
    module: 'StratumModal',
    github: 'https://github.com/vvayHuang/sidebling',
    websiteURL: 'https://sidebling-kq76.onrender.com/',
    websiteURL: 'https://sidebling-kq76.onrender.com/',
    summary: {
      en: 'AI-powered career advisor generating creative paths.',
      zh: 'AI 驅動的職涯顧問，為您生成創意職涯路徑。',
    },
    projectOverview: { en: 'Project Overview', zh: '專案簡介' },
    description: {
      en: 'Stratum is an AI-powered career advisor built with Nuxt 3. It leverages the Google Gemini API to generate creative career ideas based on user interests. The project uses Tailwind CSS for styling, GSAP for animations, and is integrated with Supabase for user authentication and database storage. It features community sharing, personal idea management, and detailed career guides. (Guest access available for testing)',
      zh: 'Stratum 是一個基於 Nuxt 3 構建的 AI 職涯顧問應用程式。它利用 Google Gemini API 根據使用者的興趣生成創意的職涯點子。專案使用 Tailwind CSS 進行樣式設計，GSAP 製作動畫，並整合 Supabase 處理使用者認證與資料儲存。功能包含社群分享、個人點子管理以及詳細的職涯指南生成。(提供訪客測試帳號)',
    },
    technologiesUsed: { en: 'Technologies Used', zh: '開發技術' },
    technologiesUsedItem: [
      {
        en: 'Framework: Nuxt 3, Vue 3, Tailwind CSS',
        zh: '框架：Nuxt 3, Vue 3, Tailwind CSS',
      },
      {
        en: 'Backend & Database: Supabase (PostgreSQL, Auth, RLS policies)',
        zh: '後端與資料庫：Supabase (PostgreSQL, 身份驗證, RLS 策略)',
      },
      {
        en: 'AI Integration: Google Gemini API (Server-side)',
        zh: 'AI 整合：Google Gemini API (伺服器端處理)',
      },
      { en: 'Animations: GSAP', zh: '動畫特效：GSAP' },
    ],
    responsibilities: { en: 'Responsibilities', zh: '負責項目' },
    responsibilitiesItem: [
      {
        en: 'Designed a scalable System Architecture: Nuxt 3 Client ↔ Server API Proxy ↔ External Services (Gemini/Supabase), ensuring strict separation of concerns',
        zh: '設計可擴展的系統架構：Nuxt 3 客戶端 ↔ 伺服器端 API 代理 ↔ 外部服務 (Gemini/Supabase)，確保職責分離',
      },
      {
        en: 'Configured Supabase Auth & RLS policies to secure user data and managed session states across the full stack',
        zh: '設定 Supabase Auth 與 RLS 策略保護資料，並管理全端應用程式的 Session 狀態',
      },
      {
        en: 'Optimized Performance: Achieved high Lighthouse scores by leveraging Nuxt SSR, asset compression, and efficient GSAP animations',
        zh: '效能優化：利用 Nuxt SSR、資源壓縮與高效的 GSAP 動畫，達成優異的 Lighthouse 評分',
      },
      {
        en: 'Developed a custom Material Design 3 theme with Tailwind CSS, ensuring accessibility and responsive layouts',
        zh: '使用 Tailwind CSS 開發 Material Design 3 主題，確保無障礙設計與響應式排版',
      },
    ],
    keyFeatures: { en: 'Key Features', zh: '主要功能' },
    keyFeaturesItem: [
      {
        en: 'AI-Powered Suggestions: Generates personalized career paths based on user interests',
        zh: 'AI 智能建議：根據使用者興趣生成個人化的職涯路徑',
      },
      {
        en: 'Detailed Guides via Server-Side Streaming: Provides step-by-step career guides with real-time feedback',
        zh: '伺服器端串流指南：即時生成包含步驟的詳細職涯指南',
      },
      {
        en: 'Community & Personal Management: Share creative ideas and manage private prompt history',
        zh: '社群與個人管理：分享創意並管理個人的提示詞紀錄',
      },
    ],
    challengesOutcomes: { en: 'Challenges & Outcomes', zh: '挑戰與成果' },
    challengesOutcomesItem: [
      {
        en: 'Seamlessly integrated AI responses with frontend UI using stream handling for a responsive UX',
        zh: '利用串流處理技術整合 AI 回應，提供即時且流暢的使用者體驗',
      },
      {
        en: 'Ensured robust security by processing all sensitive API requests on the server side, preventing key leakage',
        zh: '透過伺服器端處理所有敏感 API 請求，確保金鑰安全不外洩',
      },
    ],
    lessonsLearned: { en: 'Lessons Learned', zh: '學習收穫' },
    lessonsLearnedItem: [
      {
        en: 'Deepened understanding of Nuxt 3 server engine (Nitro) and secure API architecture',
        zh: '深入理解 Nuxt 3 伺服器引擎 (Nitro) 與安全 API 架構設計',
      },
      {
        en: 'Mastered the integration of Generative AI streams with Vue 3 reactive state',
        zh: '掌握生成式 AI 串流與 Vue 3 響應式狀態的整合技巧',
      },
    ],
    tag: ['nuxt', 'vue', 'tailwind', 'supabase', 'gemini'],
    language: [
      { label: 'vue', value: 80 },
      { label: 'typescript', value: 15 },
      { label: 'css', value: 5 },
    ],
    images: [
      { src: stratumPreview1, alt: 'Stratum project preview 1' },
      { src: stratumPreview2, alt: 'Stratum project preview 2' },
      { src: stratumPreview3, alt: 'Stratum project preview 3' },
      { src: stratumPreview4, alt: 'Stratum project preview 4' },
      // { src: stratumDemo, alt: 'Stratum AI Generation Demo' }, // Uncomment when GIF is added
    ],
  },
  {
    id: 'BuddyHouseModal',
    title: { en: 'Buddy House', zh: 'Buddy House' },
    type: { en: 'official image website', zh: '形象官網' },
    year: 2025,
    module: 'BuddyHouseModal',
    figma:
      'https://www.figma.com/design/lgKC4901ViopAmKbNRokKc/Buddy-House?node-id=1742-44934&t=YCzVZdwqg6PAbMny-1',
    github: 'https://github.com/vvayHuang/buddyhouseV2',
    websiteURL: 'https://buddy-house.vercel.app/',
    websiteURL: 'https://buddy-house.vercel.app/',
    summary: {
      en: 'Concept website for a cozy restaurant experience.',
      zh: '傳遞溫馨餐飲體驗的餐廳形象官網。',
    },
    projectOverview: { en: 'Project Overview', zh: '專案簡介' },
    description: {
      en: 'Buddy House is a conceptual restaurant website designed to convey the warmth of “dining and drinking at home,” creating a cozy and welcoming atmosphere. The design was crafted in Figma, using Material Theme Builder to quickly establish a color scheme inspired by the metro green line and a consistent typography system, reinforcing brand recognition. Figma’s Variables feature was employed to efficiently adjust design elements for flexibility and scalability. Illustrations were generated using the AI tool Recraft, producing unique visuals aligned with the brand’s friendly image. This project integrates design and technology, showcasing my skills in brand identity design, tool utilization, and creating a heartfelt dining experience.',
      zh: 'Buddy House 是一個模擬餐廳形象設計的官網，傳遞「來到家裡吃飯喝酒」的溫馨理念，營造輕鬆友善的用餐氛圍。設計稿以 Figma 製作，透過 Material Theme Builder 快速建立綠色（靈感來自捷運綠線）的配色方案和字體系統，確保整體視覺的一致性與品牌辨識度。此外，善用 Figma 的 Variables 功能，靈活調整設計元素，提升設計效率與彈性。網站中的插畫採用 AI 工具 Recraft 生成，打造獨特且符合品牌形象的視覺效果。此專案結合了設計與技術應用，展現了我在品牌形象設計、工具運用以及氛圍營造上的專業能力。',
    },
    technologiesUsed: { en: 'Technologies Used', zh: '開發技術' },
    technologiesUsedItem: [
      {
        en: 'Framework： Vue.js, Vite, Tailwind CSS, Headlessui',
        zh: '前端技術： Vue.js, Vite, Tailwind CSS, Headlessui',
      },
      {
        en: 'Design： Figma, Material Design Builder',
        zh: '設計工具： Figma, Material Design Builder',
      },
      { en: 'Illustrations & Images: Recraft AI', zh: '插畫或圖片: Recraft AI' },
    ],
    responsibilities: { en: 'Responsibilities', zh: '負責項目' },
    responsibilitiesItem: [
      {
        en: 'Designed website wireframes using Figma and established a design system with Material Design Builder to ensure visual consistency',
        zh: '使用 Figma 設計網站 Wireframe，並透過 Material Design Builder 建立設計系統，確保整體視覺風格一致',
      },
      {
        en: 'Utilized Material Design Builder to quickly set up typography and color variables',
        zh: '透過 Material Design Builder 快速建立字型與顏色變數',
      },
      {
        en: 'Developed the restaurant website with Vue.js, implementing dynamic menus and online reservations',
        zh: '開發餐廳網站，實作動態菜單與線上訂位功能',
      },
      {
        en: 'Styled the layout using Tailwind CSS and Headlessui for consistency',
        zh: '使用 Tailwind CSS 和 Headlessui 進行版面調整與樣式統一',
      },
      {
        en: 'Used Recraft AI to generate illustrations and images, enhancing the website’s visual appeal',
        zh: '採用 Recraft AI 生成插畫與圖片，提升網站視覺吸引力',
      },
    ],
    keyFeatures: { en: 'Key Features', zh: '主要功能' },
    keyFeaturesItem: [
      {
        en: 'Clear menu display for easy browsing of food options',
        zh: '清楚的菜單內容展示，方便使用者瀏覽餐點資訊',
      },
      {
        en: 'Online reservation system for quick booking',
        zh: '線上訂位功能，讓使用者能夠快速預約',
      },
      {
        en: 'Responsive design ensuring a seamless experience across devices',
        zh: '響應式設計，確保桌機與行動裝置皆有良好瀏覽體驗',
      },
    ],
    challengesOutcomes: { en: 'Challenges & Outcomes', zh: '挑戰與成果' },
    challengesOutcomesItem: [
      {
        en: 'Optimizing UI/UX for better user experience while ensuring GSAP animations do not affect performance',
        zh: '優化 UI/UX 以提升使用者體驗，並確保 GSAP 動畫不影響網站效能',
      },
      {
        en: 'Successfully created a cohesive brand-aligned band website with enhanced visual interactions using GSAP, increasing user engagement',
        zh: '成功打造具品牌一致性的樂團官網，並透過 GSAP 增強視覺互動，提高用戶黏著度',
      },
    ],
    lessonsLearned: { en: 'Lessons Learned', zh: '學習收穫' },
    lessonsLearnedItem: [
      {
        en: 'Gained experience in integrating GSAP animations with Vue.js to improve web interactions',
        zh: '熟悉 GSAP 動畫與 Vue.js 的整合，提升網頁互動效果',
      },
      {
        en: 'Learned how to utilize Recraft AI for web design, enhancing visual creativity',
        zh: '熟悉 Recraft AI 在網頁設計中的應用，提高視覺創意表現',
      },
    ],
    tag: ['figma', 'material', 'design', 'branding', 'recraft', 'headlessui'],
    language: [
      { label: 'vue', value: 70.8 },
      { label: 'JavaScript', value: 20.6 },
      { label: 'css', value: 5.7 },
      { label: 'html', value: 2.9 },
    ],
    images: [
      { src: bhpreview1, alt: 'Buddy House project preview 1' },
      { src: bhpreview2, alt: 'Buddy House project preview 2' },
      { src: bhpreview3, alt: 'Buddy House project preview 3' },
      { src: bhpreview4, alt: 'Buddy House project preview 4' },
    ],
  },
  {
    id: 'GalaxyBoyzModal',
    title: { en: 'GalaxyBoyz', zh: 'GalaxyBoyz' },
    type: { en: 'official image website', zh: '形象官網' },
    year: 2024,
    module: 'GalaxyBoyzModal',
    figma:
      'https://www.figma.com/design/RX78vjYDu0Wtd3591akmX9/GalaxyBoyz?m=auto&t=1tlrYtTjsZWEFB0q-6',
    github: 'https://github.com/vvayHuang/galaxyBoyzV3',
    websiteURL: 'https://vvayhuang.github.io/galaxyBoyzV3/',
    websiteURL: 'https://vvayhuang.github.io/galaxyBoyzV3/',
    summary: {
      en: 'Official website simulation for a modern music band.',
      zh: '模擬當代樂團形象的官方網站。',
    },
    projectOverview: { en: 'Project Overview', zh: '專案簡介' },
    description: {
      en: 'GalaxyBoyz is a project that simulates the official website of a modern music band. Starting with design drafts created in Figma, the second version update focuses on improving layout and user experience to better reflect a professional artist image. The website is developed using Vue 3 and Vite for efficiency, combined with Tailwind CSS to create a responsive and modern design. This project demonstrates my ability to integrate frontend development with design, using detailed layouts and interactive features to emulate the feel of a real band website, delivering a professional and creative brand image.',
      zh: 'GalaxyBoyz 是一個模擬當代藝人樂團官網的設計與開發作品。我先以 Figma 製作設計稿，並在第二版更新中優化版面設計與用戶體驗，確保網站風格與內容更符合專業藝人形象。網站開發採用 Vue 3 搭配 Vite，提高開發效率，同時結合 Tailwind CSS，打造快速且具現代感的響應式設計。此作品展示了我在前端開發與設計上的整合能力，並透過細緻的排版與互動細節模擬真實樂團官網，傳遞專業且富有創意的品牌形象。',
    },
    technologiesUsed: { en: 'Technologies Used', zh: '開發技術' },
    technologiesUsedItem: [
      { en: 'Framwork： Vue.js, Vite, Tailwind CSS', zh: '前端技術： Vue.js, Vite, Tailwind CSS' },
      {
        en: 'Design： Figma, Material Design Builder',
        zh: '設計工具：Figma, Material Design Builder',
      },
      {
        en: 'Animations：GSAP (GreenSock Animation Platform)',
        zh: '動畫特效：GSAP (GreenSock Animation Platform)',
      },
      { en: 'Illustrations & Images: Recraft AI', zh: '插畫或圖片：Recraft AI' },
    ],
    responsibilities: { en: 'Responsibilities', zh: '負責項目' },
    responsibilitiesItem: [
      {
        en: 'Designed website wireframes using Figma and established a design system with Material Design Builder to ensure visual consistency',
        zh: '使用 Figma 設計網站 Wireframe，並透過 Material Design Builder 建立設計系統，確保整體視覺風格一致',
      },
      {
        en: 'Utilized Material Design Builder to quickly set up typography and color variables',
        zh: '透過 Material Design Builder 快速建立字型與顏色變數',
      },
      {
        en: 'Implemented responsive design for optimal display across devices',
        zh: '實現響應式設計，確保各裝置的良好顯示',
      },
      {
        en: 'Developed the band website with Vue.js, including band introduction, latest news, event schedules, music releases, and merchandise section',
        zh: '使用 Vue.js 開發樂團官網，包含樂團介紹、最新消息、演出訊息、音樂作品與周邊商品',
      },
      {
        en: 'Styled the layout using Tailwind CSS for consistency',
        zh: '使用 Tailwind CSS 進行版面調整與樣式統一',
      },
      {
        en: 'Used Recraft AI to generate illustrations and images, enhancing the website’s visual appeal',
        zh: '採用 Recraft AI 生成插畫與圖片，提升網站視覺吸引力',
      },
    ],
    keyFeatures: { en: 'Key Features', zh: '主要功能' },
    keyFeaturesItem: [
      {
        en: "Clear band introduction to help fans understand the band's background",
        zh: '清楚的樂團介紹，提供樂迷深入了解樂團背景',
      },
      {
        en: "Latest news updates to keep users informed about the band's activities",
        zh: '最新消息公告，隨時掌握樂團動態',
      },
      {
        en: 'Detailed event schedules including date, venue, and ticket information',
        zh: '詳細的演出訊息，包含日期、場地與購票資訊',
      },
      {
        en: 'Music releases section with streaming support and album details',
        zh: '音樂作品展示，支援串流播放與專輯介紹',
      },
      {
        en: 'Merchandise shop for fans to purchase band-related items',
        zh: '周邊商品購物區，方便粉絲選購相關商品',
      },
    ],
    challengesOutcomes: { en: 'Challenges & Outcomes', zh: '挑戰與成果' },
    challengesOutcomesItem: [
      {
        en: 'Optimizing UI/UX for better user experience while ensuring GSAP animations do not affect performance',
        zh: '優化 UI/UX 以提升使用者體驗，並確保 GSAP 動畫不影響網站效能',
      },
      {
        en: 'Successfully created a cohesive brand-aligned band website with enhanced visual interactions using GSAP, increasing user engagement',
        zh: '成功打造具品牌一致性的樂團官網，並透過 GSAP 增強視覺互動，提高用戶黏著度',
      },
    ],
    lessonsLearned: { en: 'Lessons Learned', zh: '學習收穫' },
    lessonsLearnedItem: [
      {
        en: 'Gained experience in integrating GSAP animations with Vue.js to improve web interactions',
        zh: '熟悉 GSAP 動畫與 Vue.js 的整合，提升網頁互動效果',
      },
      {
        en: 'Learned how to utilize Recraft AI for web design, enhancing visual creativity',
        zh: '熟悉 Recraft AI 在網頁設計中的應用，提高視覺創意表現',
      },
      {
        en: 'Developed a deeper understanding of optimizing Vue.js, Tailwind CSS, and GSAP integration',
        zh: '深入了解 Vue.js、Tailwind CSS 與 GSAP 的最佳整合方式',
      },
    ],
    tag: ['vite', 'vue', 'tailwind', 'GSAP', 'recraft'],
    language: [
      { label: 'vue', value: 74.1 },
      { label: 'JavaScript', value: 21.8 },
      { label: 'css', value: 3.7 },
      { label: 'html', value: 0.4 },
    ],
    images: [
      { src: gb2preview1, alt: 'GalaxyBoyz project preview 1' },
      { src: gb2preview2, alt: 'GalaxyBoyz project preview 2' },
      { src: gb2preview3, alt: 'GalaxyBoyz project preview 3' },
      {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG84Y2MxY2o1am4wY2V1bXk1OWFoanJ3dGdkZHhlZGc2bG1vcWJncCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mXG3de6F4xUgptp1C7/giphy.gif',
        alt: 'GalaxyBoyz project preview 4',
      },
    ],
  },
  {
    id: 'LifeRecordModal',
    title: { en: 'Life Record', zh: '生活唱片' },
    type: { en: 'official image website', zh: '形象官網' },
    year: 2022,
    module: 'LifeRecordModal',
    github: 'https://github.com/vvayHuang/lifeRecord',
    websiteURL: 'https://vvayhuang.github.io/lifeRecord/',
    websiteURL: 'https://vvayhuang.github.io/lifeRecord/',
    summary: {
      en: 'Mock online record store for music enthusiasts.',
      zh: '專為音樂愛好者打造的模擬線上唱片行。',
    },
    projectOverview: { en: 'Project Overview', zh: '專案簡介' },
    description: {
      en: 'Life Record is a mock online record store website designed for music enthusiasts. The platform offers a variety of record genres, allowing users to browse album covers, descriptions, and tracks with ease. Users can fill out a notification form for records they are interested in, ensuring a seamless connection for inquiries or reservations. Additionally, the website features a music news section to keep users informed about the latest updates in the industry. Developed with Bootstrap, the site achieves a clean design and responsive layout, ensuring an excellent user experience across devices. This project highlights my planning skills for music-themed websites and my hands-on experience with frontend development.',
      zh: '生活唱片是一個模擬線上唱片行的網站，專為音樂愛好者打造。網站提供多樣化的唱片類型，使用者可以輕鬆瀏覽專輯封面、介紹與歌曲內容，深入了解每張專輯的特色。此外，若有興趣的唱片，使用者可透過填寫表單通知功能，進一步進行聯繫或預訂。網站也設有音樂新聞區，提供最新的音樂相關資訊，增強用戶的互動與參與感。開發過程中採用 Bootstrap 框架，實現了整潔的版面設計與響應式布局，確保網站在不同裝置上的良好體驗。這項作品展現了我對音樂主題網站的規劃能力與前端開發的實踐經驗。',
    },
    technologiesUsed: { en: 'Technologies Used', zh: '開發技術' },
    technologiesUsedItem: [{ en: 'Framework： Bootstrap', zh: '前端技術： Bootstrap' }],
    responsibilities: { en: 'Responsibilities', zh: '負責項目' },
    responsibilitiesItem: [
      {
        en: 'Designed website wireframes using Figma to ensure visual hierarchy and user experience',
        zh: '使用 Bootstrap 開發響應式網站，並應用多種 Bootstrap 元件',
      },
      {
        en: 'Customized SCSS to optimize CSS file size and improve loading speed',
        zh: '客製化 SCSS 來優化 CSS 檔案大小，提升載入速度',
      },
      {
        en: 'Designed and developed sections for music news, distributed records, latest releases, and record introductions',
        zh: '設計與開發音樂新聞區、代理唱片區、最新發行與唱片介紹頁面',
      },
      {
        en: 'Provided clear ordering methods and contact information to enhance user purchase experience',
        zh: '提供清楚的訂購方式與聯絡資訊，提升用戶購買體驗',
      },
    ],
    keyFeatures: { en: 'Key Features', zh: '主要功能' },
    keyFeaturesItem: [
      {
        en: 'Clear record store introduction to help users understand the brand and services',
        zh: '清楚的唱片行介紹，幫助使用者快速了解品牌與服務',
      },
      {
        en: 'Real-time updated music news to keep users informed of the latest trends',
        zh: '即時更新的音樂新聞，讓使用者掌握最新音樂動態',
      },
      {
        en: 'Distributed records section showcasing music works in collaboration with partner brands',
        zh: '代理唱片區，展示與代理品牌合作的音樂作品',
      },
      {
        en: 'Latest releases section providing information on upcoming and recently launched records',
        zh: '最新發行專區，提供即將發行或近期上架的唱片資訊',
      },
      {
        en: 'Detailed record introduction and information to enhance user purchasing decisions',
        zh: '唱片介紹與詳細資訊，提升使用者購買決策體驗',
      },
      {
        en: 'Ordering guide page with a complete buying process and customer service contact',
        zh: '訂購說明頁面，提供完整的購買流程與客服聯絡方式',
      },
    ],
    challengesOutcomes: { en: 'Challenges & Outcomes', zh: '挑戰與成果' },
    challengesOutcomesItem: [
      {
        en: 'First-time use of Bootstrap, requiring familiarity with its components and customization using SCSS to optimize website styles and performance',
        zh: '第一次使用 Bootstrap，需熟悉其元件與客製化 SCSS 來優化網站樣式與效能',
      },
      {
        en: 'Successfully built a responsive website using Bootstrap and optimized CSS file size with SCSS for faster loading speeds',
        zh: '成功利用 Bootstrap 建立響應式網站，並透過 SCSS 優化 CSS 大小，使網站載入更快',
      },
    ],
    lessonsLearned: { en: 'Lessons Learned', zh: '學習收穫' },
    lessonsLearnedItem: [
      {
        en: 'Gained experience in utilizing various Bootstrap components and responsive development',
        zh: '熟悉 Bootstrap 各類元件的應用與響應式開發',
      },
      {
        en: 'Mastered SCSS customization techniques to optimize CSS file size and performance',
        zh: '掌握 SCSS 的客製化技巧，優化 CSS 檔案大小與效能',
      },
      {
        en: 'Improved skills in designing and structuring music-related websites',
        zh: '提升對於音樂相關網站資訊架構的設計與規劃能力',
      },
    ],
    tag: ['vite', 'bootstrap'], // Use array format and wrap each item in quotes
    language: [
      { label: 'html', value: 54.7 },
      { label: 'css', value: 34.2 },
      { label: 'scss', value: 11.0 },
      { label: 'javascript', value: 0.1 },
    ],
    images: [
      { src: lrpreview1, alt: 'Life Record project preview 1' },
      { src: lrpreview2, alt: 'Life Record project preview 2' },
      {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjlib21kY244d3VoczkxdmQ3OTEzOGVlNXV2MXM1a3pzNjF0cndrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MI5xlX5LSP0CD2Br1C/giphy.gif',
        alt: 'Life Record project preview 3',
      },
      {
        src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTcycW5lczI3eHo4cHQ4ZGRqYmRraTRtZ3pqYnpiZ2F0NHlwbjE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RnC0JSwimbgvI3ocTD/giphy.gif',
        alt: 'Life Record project preview 4',
      },
    ],
  },
]
export default projectsModal
