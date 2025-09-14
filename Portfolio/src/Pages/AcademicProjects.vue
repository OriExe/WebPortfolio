<script setup>
import { ref, onMounted } from "vue";
// state
const projectData = ref([]);

onMounted(async () => 
{
  const index = await fetch("/WebPortfolio/pages/index.json")
  .then(phrase => phrase.json()) 
  .then(data => { console.log(data.data);
  return data;
  });

  for (const item of index.data)
  {
    const jsonArray = await fetch("/WebPortfolio/pages/"+item)  
    .then(phrase => phrase.json()) 
    .then(data => { console.log(data);
    return data;
  });
    console.log(projectData.value); //Log
    projectData.value.push(jsonArray);
  }

})

</script>

<template>
  <div class="content">
      <h2>Academic Projects</h2>
      <div class="ProjectList">
        <div class="Item" v-for="Project in projectData">
        <h2>{{ Project.title }}</h2>
        <img :src="Project.main_image"></img>
         <router-link :to="`/projects/${Project.title.split(' ').join('-').toLowerCase()}`"> Sea</router-link> 
        </div>
      </div>
    </div>
</template>

<style>
img {
  width: 200px;
  height: 200px;
  border-radius: 4px;
}
.ProjectList{
  display: flex;
  justify-content: center
}
.Item {
  margin-right: 2px;
  margin-left: 2px;

}
</style>