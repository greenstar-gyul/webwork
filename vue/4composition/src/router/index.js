import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/board',
      name: 'board',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/boardInfo',
      name: 'boardInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/boardUpdate',
      name: 'boardUpdate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue'),
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/ParentComponent.vue'),
    },
    {
      path: '/parent4',
      name: 'parent4',
      component: () => import('../views/ParentComponent4.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('../views/EmpComponent.vue'),
    },
    {
      path: '/empView',
      name: 'empView',
      component: () => import('../views/EmpView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue'),
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('../views/ProvideInject.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue'),
    },
  ],
})

export default router
