<template> 
<div class="content">
    <h2>{{ projectData.title }}</h2>
    <h3>{{projectData.date}}</h3>
    <p>{{projectData.description}} </p>
    <a :href="projectData.website">Play Now</a>
    <img :src="projectData.main_image"></img>
</div>
</template>

<script setup>
import { onMounted, watch, ref} from 'vue'
import {onBeforeRouteUpdate, useRoute, useRouter} from 'vue-router'
const projectData = ref({})
const route = useRoute()

onMounted(async () => 
{
    console.log("Mounted")
    LoadData(route.params.id)
 })

 onBeforeRouteUpdate(async (to, from, next) => {
  console.log("Route changed", to.params.id);
  LoadData(to.params.id)
  next();
 })

 async function LoadData(newRoute) {

    console.log("Ready");
    projectData.value = await fetch("/WebPortfolio/pages/" + newRoute + ".md")
    .then(phrase => phrase.json()) 
    .then(data => { console.log(data.description)
    return data;
    }
   );
//    fullpage_api.moveTo('projects'); I need to move this to app.vue
 }

// function onAfterLoad(origin, destination) {
//   // This makes the URL path reflect the current section
//   useRouter().push({path: `projects/${route.params.id}`});
// }

// onMounted(() => {
   
// });


 
</script>