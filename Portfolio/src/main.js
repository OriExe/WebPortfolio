import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from "@/components/HelloWorld.vue"
import Contact from '@/Pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



createApp(App).use(router).mount('#app')
