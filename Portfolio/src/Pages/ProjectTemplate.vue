<template> 
<div class="content">
    <img :src="projectData.main_image"></img>
    <h2>{{ projectData.title }}</h2>
    <h3>{{projectData.date}}</h3>
    <p id="description">{{projectData.description}} </p>
    <div class="buttons">
        <button><a :href="projectData.website">Play Now</a></button>
        <button><a :href="projectData.source_code">Source Code</a></button>
    </div>
    <div class ="gallery"> 
        <img v-for="imagePath in projectData.gallery_image" :src="imagePath"></img>
        <video v-for="videoPath in projectData.gallery_video" :src="videoPath"></video>
    </div>
    
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
   console.log(projectData.value.gallery_image)
//    fullpage_api.moveTo('projects'); I need to move this to app.vue
 }

// function onAfterLoad(origin, destination) {
//   // This makes the URL path reflect the current section
//   useRouter().push({path: `projects/${route.params.id}`});
// }

// onMounted(() => {
   
// });


 
</script>

<style scoped>
button {
    border-radius: 6px;
    border-color: #2982b6;
    box-shadow: 2px 2px 2px 1px #1b99e2;
    background-color: #0798ec;
    font-size: 1.3vw;
    padding: 8px 20px;
    transition: 600ms;
    
}
button a{
    text-decoration: none;
    color: rgb(245, 243, 243);
    font-size: clamp(5px,1.2vw,18px)
}
button:hover{
    background-color: #3ea8e6;
    box-shadow: 0px 0px 4px 18px #0798ec36;
}
.buttons {
    display: flex;
    justify-content: center;
    gap:7px;
}
#description{
    text-align: justify;
}
</style>