import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomePage/HomePage.vue')
      // component: () => import('../views/LoginPage/LoginPage.vue')
    },
    {
      path: '/login',
      component: () => import('../views/LoginPage/LoginPage.vue')
    }
  ]
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve:', to, from)
  if (to.path === '/login') {
    next()
    return
  }
  if (store.state.token === null || store.state.token === '') {
    next('/login')
    window.$message.info('请先登录')
    // next()
  } else {
    next()
  }
})

export default router
