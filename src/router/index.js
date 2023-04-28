import { createRouter, createWebHistory } from 'vue-router'
import MainLine from '../views/MainLineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLine
    }
  ]
})

export default router
