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
    name: 'home',
    path: '/home',
    component: () => import('./../pages/Home.vue')
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