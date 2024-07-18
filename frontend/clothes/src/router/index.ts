import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/pageHome.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/pageChat.vue')
    },
    {
      path: '/closet',
      name: 'closet',
      component: () => import('@/views/pageCloset.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/pageCommunity.vue')
    }
  ]
})

export default router
