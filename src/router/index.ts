import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
=======
import protectedRoute from '../middlewares/protected'
import Home from '../views/Home.vue'
import PageTwo from '../views/pageTwo.vue'
>>>>>>> main

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
<<<<<<< HEAD
=======
  {
    path: '/pagetwo',
    name: 'PageTwo',
    component: PageTwo,
    beforeEnter: protectedRoute,
  },
>>>>>>> main
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
