import Vue from 'vue'
import VueRouter from 'vue-router'


import enter from '../views/enter/pane.vue';

import main from './main';

Vue.use(VueRouter)

const routes = [
  main,
  // 登录
  {
    path: "/",
    name: "enter",
    component: enter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/platform',
  routes
})

export default router
