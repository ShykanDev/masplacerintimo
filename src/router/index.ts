import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'spaOne',
      component: () => import('../views/SpaOneView.vue'),
    },
    {
      path: '/ingredientes',
      name: 'spaTwo',
      component: () => import('../views/SpaTwoView.vue'),
    },
    {
      path: '/preguntas',
      name: 'spaThree',
      component: () => import('../views/SpaThreeView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
