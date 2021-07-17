import Vue from 'vue'
import VueRouter from 'vue-router'

import LogIn from './../pages/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'root',
    path: '/',
    redirect: '/login'
  },
  {
    name: 'log-in',
    path: '/login',
    component: LogIn
  },
  {
    name: 'cats',
    path: '/cats',
    component: () => import('./../pages/Cats.vue')
  },
  {
    name: 'self-cats',
    path: '/cats/self',
    component: () => import('./../pages/SelfCats.vue')
  },
  {
    name: 'likes-cats',
    path: '/cats/likes',
    component: () => import('./../pages/LikesCats.vue')
  },
  {
    name: 'not-found',
    path: '*',
    component: () => import('./../pages/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router