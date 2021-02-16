import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

// 多次请求控制台报错 解决方法第一种方法

// const originalPush = VueRouter.prototype.push;
//
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// 安装vue-router插件
Vue.use(VueRouter)

// 创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
