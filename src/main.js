import './assets/main.scss'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './pages/HomePage.vue'
import CatalogPage from './pages/CatalogPage.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/catalog', name: 'Catalog', component: CatalogPage },
]

const router = createRouter({
  history: createWebHistory('/CSG_test/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

app.use(router)

app.mount('#app')
