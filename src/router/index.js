import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Counter from "../pages/Counter/Index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
