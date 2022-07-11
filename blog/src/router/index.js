import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/Login/template.vue'
// import Create from '@/pages/Create/template.vue'
// import Detail from '@/pages/Detail/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import Index from '@/pages/Index/template.vue'
// import My from '@/pages/My/template.vue'
// import Register from '@/pages/Register/template.vue'
// import User from '@/pages/User/template.vue'
import store from '../store/'
Vue.use(Router)
window.store = store
// const router = new Router({
//   routes: [
//     {
//       path: '/Login',
//       component: Login
//     },
//     {
//       path: '/Create',
//       component: Create,
//       // 只有经过身份验证的用户才能创建帖子
//       meta: { requiresAuth: true }
//     },
//     {
//       path: '/Detail/:blogId',
//       component: Detail
//     },
//     {
//       path: '/Edit/:blogId',
//       component: Edit,
//       // 只有经过身份验证的用户才能创建帖子
//       meta: { requiresAuth: true }
//     },
//     {
//       path: '/',
//       component: Index
//     },
//     {
//       path: '/My',
//       component: My,
//       // 只有经过身份验证的用户才能创建帖子
//       meta: { requiresAuth: true }
//     },
//     {
//       path: '/Register',
//       component: Register
//     },
//     {
//       path: '/User/:userId',
//       component: User
//     }
//   ]
// })
const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Index/template.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: () => import('@/pages/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/User/template.vue')
    },
    {
      path: '/my',
      component: () => import('@/pages/My/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      component: () => import('@/pages/Register/template.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!store.getters.isLogin) {
        next({
          path: '/Login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
