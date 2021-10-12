import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Analysis from '../views/Analysis.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Analysis,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
