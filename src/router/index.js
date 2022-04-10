import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PageMain',
    props: route => ({ brandId: route.query.brand_id }),
    component: () => import('../views/PageMain.vue')
  },
  {
    path: '/cart',
    name: 'PageCart',
    component: () => import('../views/PageCart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
