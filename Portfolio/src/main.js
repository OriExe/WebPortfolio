//Fullpage JS
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'
//Main Css
import './assets/main.css'
//App vue  
import { createApp } from 'vue'
import App from './App.vue'
//Vue router
import { createMemoryHistory, createRouter } from 'vue-router'
//Pages 
import ProjectTemplate from './Pages/ProjectTemplate.vue'
import NotFound from './Pages/NotFound.vue'
const routes = [
  {path: '/', component: NotFound},
  { path: '/projects/:id', component: ProjectTemplate },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


//#region Fullpage Js config
const app = createApp(App)
app.use(VueFullPage)
app.use(router)
app.mount('#app')
//#endregion


