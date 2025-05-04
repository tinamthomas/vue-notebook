import { createRouter, createWebHistory } from 'vue-router'
import TicTacToeView from '../views/TicTacToeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TicTacToeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/tic-tac-toe',
      name: 'Tic Tac Toe',
      component: TicTacToeView,
    },
  ],
})

export default router
