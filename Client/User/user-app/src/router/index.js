import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../views/enter/enter.vue'),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import('../views/enter/children/login.vue')
      },
      {
        path: "/check",
        name: "check",
        component: () => import('../views/enter/children/check.vue')
      }
    ]
  },
  {
    path: '/main',
    redirect: '/main/beautify',
    component: () => import('../views/main/main.vue'),
    children: [
      {
        path: 'beautify',
        name: 'beautify',
        component: () => import('../views/main/children/beautify.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/main/children/order.vue')
      },
      {
        path: 'find',
        name: 'find',
        component: () => import('../views/main/children/find.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/main/children/mine'),
      },
    ]
  },
  {
    path: '/storeExperience',
    name: 'storeExperience',
    component: () => import('../views/detailPage/storeExperience/storeExperience.vue')
  },
  {
    path: '/doorService',
    name: 'doorService',
    component: () => import('../views/detailPage/doorService/doorService.vue')
  },
  {
    path: '/serveItem',
    name: 'serveItem',
    component: () => import('../views/detailPage/serveItem/serveItem.vue')
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('../views/detailPage/appointment/index.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('../views/detailPage/apply/index.vue')
  },
  {
    path: '/applyFinish',
    name: 'applyFinish',
    component: () => import('../views/detailPage/applyFinish/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/user',
  routes
})

export default router
