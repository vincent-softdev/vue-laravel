import DefaultLayout from '@/components/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import MyImages from '@/pages/MyImages.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/Signup.vue'
import NotFound from '@/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Vincent Shop: Home'
        }
      },
      {
        path: '/my-images',
        name: 'MyImages',
        component: MyImages,
        meta: {
          title: 'Vincent Shop: My Images'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Vincent Shop: Login'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Vincent Shop: Signup'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
