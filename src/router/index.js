import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '黃俊維 (Way Huang) | Creative Developer & UI Designer',
        description: '我叫黃俊維，是一位熱愛設計的求職者，目前正在積極尋求網頁設計師/UI設計師的工作機會'
      }
    },
  ],
})

router.afterEach((to, from) => {
  const defaultTitle = '黃俊維 (Way Huang) | 作品集';
  const defaultDescription = '前端工程師 / UI 設計師作品集';

  document.title = to.meta.title || defaultTitle;
  
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', to.meta.description || defaultDescription);
});

export default router
