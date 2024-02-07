import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/v-home-page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/photos',
    name: 'photos',
    component: () => import('../views/v-photos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
