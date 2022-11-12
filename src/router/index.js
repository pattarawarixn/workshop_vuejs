import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Me from '../views/Me.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Me',
    name: 'me',
    component: Me
  },
      {
        path: '/shop',
        name: 'shop',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
      },
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/toolbar.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import(/* webpackChunkName: "about" */ '../views/Simple.vue')
      },
      {
        path: '/apicon',
        name: 'apicon',
        component: () => import(/* webpackChunkName: "about" */ '../views/Apicon.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
