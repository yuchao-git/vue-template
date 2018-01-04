import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Banner from '@/components/template/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      children:[
        {
          path: '/index/banner',
          name: 'banner',
          component: Banner
        }
      ]
    }
  ]
})
