import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Details = () => import('views/details/Details.vue')


Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/details/:iid',
      component: Details
    }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
