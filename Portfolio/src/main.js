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
import HelloWorld from './components/HelloWorld.vue'
import AcademicProjects from './Pages/AcademicProjects.vue'
import Contact from './Pages/Contact.vue'
const routes = [
  {path: '/', component: HelloWorld},
  {path:'/AcademicProjects', component: AcademicProjects},
  {path:'/ContactMe', component: Contact},
  { path: '/projects/:id', component: ProjectTemplate },
  
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')
//#endregion


