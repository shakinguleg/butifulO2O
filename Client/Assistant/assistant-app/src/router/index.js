import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/enter',
    redirect: '/enter/login',
    component: () => import('../views/enter/enter.vue'),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import('../views/enter/children/login.vue')
      },
      {
        path: "check",
        name: "check",
        component: () => import('../views/enter/children/check.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: '/receiving',
    component: () => import('../views/main/main.vue'),
    children: [
      {
        path: 'receiving',
        name: 'receiving',
        component: () => import('../views/main/children/receiving.vue')
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('../views/main/children/schedule.vue')
      },
      {
        path: 'free',
        name: 'free',
        component: () => import('../views/main/children/free.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/main/children/mine'),
      },
    ]
  },
  {
    path: '/serverItem',
    name: 'serverItem',
    component: () => import('../views/detailPages/serverItem.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/detailPages/order.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/assistance',
  routes
})

export default router
