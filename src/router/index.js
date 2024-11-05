import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeViewCh.vue')
    },
    {
      path: '/en',
      name: 'homeEn',
      component: () => import('../views/HomeViewEn.vue')
    },
  ]
})

export default router
