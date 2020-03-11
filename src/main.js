import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import Redapple from './components/redapple'
import Yellowapple from './components/yellowapple'
import User from './components/user'
import helloWorld from './components/HelloWorld'

Vue.use(VueRouter)

Vue.config.productionTip = false
let router = new VueRouter({
  mode: 'history',
 routes: [
  // { path: '/apple', component: Apple },
  // { path: '/banana', component: Banana }
  {
    path: '/',//表示根目录
    redirect: '/banana'  //表示你要重定向的位置
  },
   {
      path: '/apple',//为页面设置路由参数
      component: Apple,
      //路由嵌套
      // children: [
      //     {
      //       path: '',
      //       component: helloWorld
      //     },
      //     {
      //       path: 'redapple',
      //       component: Redapple              
      //     },
      //     {
      //       path: 'yellowapple',
      //       component: Yellowapple  
      //     }
      // ]
      children: [
        {
          path: 'redapple',
          component: Redapple              
        },
        {
          path: 'yellowapple',
          components: {
            default: Yellowapple,
            helper: User
          }
        }
    ]
   },
   {
      path: '/banana',
      component: Banana
   },
   { path: '/user/:id', component: User }
 ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

