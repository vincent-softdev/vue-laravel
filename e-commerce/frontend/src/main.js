import './assets/stylists/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Vincent Shop'
  // setup title for each document
  // Setup the title of the meta tag
  document.title = to.meta.title || defaultTitle
  // Proceed to the next route
  next()
  /*
  next(false) will cancel the navigation
  next('/login') Redirect to another route
  next({path: '/something'}) Redirect using route object
  */
})

createApp(App)
  .use(router)
  .mount('#app')
