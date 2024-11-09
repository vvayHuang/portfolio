import lrpreview1 from '@/assets/img/lr-preview-1.png';
import lrpreview2 from '@/assets/img/lr-preview-2.png';
import gb1preview1 from '@/assets/img/gbv1-preview-1.png';
import gb1preview2 from '@/assets/img/gbv1-preview-2.png';
import gb2preview1 from '@/assets/img/gbv2-preview-1.png';
import gb2preview2 from '@/assets/img/gbv2-preview-2.png';
import gb2preview3 from '@/assets/img/gbv2-preview-3.png';
const projectsModal = [
  {
    id: "LifeRecordModal",
    title: "生活唱片",
    type: "唱片線上購物官網",
    module: "#GbModal",
    github: "https://github.com/vvayHuang/lifeRecord",
    webkitURL: "https://vvayhuang.github.io/lifeRecord/",
    textContent:
      "生活唱片 Life Record 是我設計的一個虛構的唱片網站，專為音樂愛好者量身打造。在這個作品中，結合了音樂元素與現代化的設計風格，創造了一個既充滿活力又專業的音樂平台。網站中展示了專輯資訊、音樂人介紹，以及購買和收聽音樂的功能，旨在為用戶提供一個流暢的互動體驗。這個作品想展現了我在網頁設計和UI/UX上的實力，也體現了我對音樂文化的熱情與理解。",
    tag: ["vite", "bootstrap"], // 以陣列格式且每個項目用引號包裹
    language: [
      { label: "html", value: 54.7 },
      { label: "css", value: 34.2 },
      { label: "scss", value: 11.0 },
      { label: "JavaScript", value: 0.1 },
    ],
    images: [
      { src: lrpreview1, alt: "lr-preview-1" },
      { src: lrpreview2, alt: "lr-preview-2" },
      { src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjlib21kY244d3VoczkxdmQ3OTEzOGVlNXV2MXM1a3pzNjF0cndrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MI5xlX5LSP0CD2Br1C/giphy.gif", alt: "lr-preview-3.png" },
      { src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTcycW5lczI3eHo4cHQ4ZGRqYmRraTRtZ3pqYnpiZ2F0NHlwbjE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RnC0JSwimbgvI3ocTD/giphy.gif", alt: "lr-preview-4.png" },
    ],
  },
  {
    id: "GbModal1",
    title: "GalaxyBoyz 1.0",
    type: "樂團形象官網",
    module: "#GbModal1",
    
    github: "https://github.com/vvayHuang/galaxyboyz",
    webkitURL: "https://vvayhuang.github.io/galaxyboyz/",
    textContent:
    "  GalaxyBoyz是虛擬樂團，為它建立一個官方網站。這裡是所有樂迷和新朋友了解我們的首選平台，透過這個網站，你可以探索樂團最新動態、音樂作品、即將到來的巡演、官方商店，並加入我們的粉絲社群。",
    tag: ["vite", "bootstrap", "ejs", "recraft"],
    language: [
      { label: "scss", value: 43.7 },
      { label: "html", value: 41.8 },
      { label: "ejs", value: 12.7 },
      { label: "JavaScripts", value: 1.8 },
    ],
    images: [
      { src: gb1preview1, alt: "gb-preview-1" },
      { src: gb1preview2, alt: "gb-preview-2" },
      { src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3FhbXoyMWF0dmZ0emtuNGsweGNiM2I1bTFtZGM0a3U3dThvZDZ5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WP49WTehm64Lc4mHDc/giphy.gif", alt: "gb-preview-3" },
      { src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWM2dmZieWNnMG83eDR2eHY1NnBwZnA3YnlueWE1MjJ1YWN0eGp5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8RA4cP6wDLZybQNgdW/giphy.gif", alt: "gb-preview-4" },
    ],
  },
  {
    id: "GbModal2",
    title: "GalaxyBoyz 2.0",
    type: "樂團形象官網",
    module: "#GbModal2",
    figma:
    "https://www.figma.com/design/RX78vjYDu0Wtd3591akmX9/GalaxyBoyz?m=auto&t=1tlrYtTjsZWEFB0q-6",
    github: "https://github.com/vvayHuang/galaxyBoyzV3",
    webkitURL: "https://vvayhuang.github.io/galaxyBoyzV3/",
    textContent:
    "進修完 figma 課程之後，了解設計稿要如何用分子系統的概念去畫，會更有效對於元件的管理，也方便後續的維護，這個概念也同時可運用在程式撰寫上。把設計稿重新整理一番，使用 vue 及 tailwind 完成這個作品",
    tag: ["vite", "vue", "tailwind","GASP", "recraft"],
    language: [
      { label: "vue", value: 74.1 },
      { label: "JavaScripts", value: 21.8 },
      { label: "css", value: 3.7 },
      { label: "html", value: 0.4 },
    ],
    images: [
      { src: gb2preview1, alt: "gb2-preview-1" },
      { src: gb2preview2, alt: "gb2-preview-2" },
      { src: gb2preview3, alt: "gb2-preview-3" },
      { src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG84Y2MxY2o1am4wY2V1bXk1OWFoanJ3dGdkZHhlZGc2bG1vcWJncCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mXG3de6F4xUgptp1C7/giphy.gif", alt: "gb2-preview-4" },
    ],
  },
];
export default projectsModal;
