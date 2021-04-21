import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateProduct from '../components/UpdateProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products/update',
    name: 'UpdateProduct',
    component: UpdateProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem('access_token')
  if((to.name === 'Home' || to.name === 'AddProduct') && !access_token) next('/login')
  else if(access_token && to.name === 'Login') next('/')
  else next()
})

export default router
