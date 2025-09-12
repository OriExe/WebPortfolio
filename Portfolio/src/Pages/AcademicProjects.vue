

<script setup>
import { ref, onMounted } from "vue";
import { defineAsyncComponent } from "vue";
// state
const projectData = ref([]);

onMounted(async () => {
  const index = await fetch("/pages/index.json")
  .then(phrase => phrase.json()) 
  .then(data => { console.log(data.data);
  return data;
  });

  for (const item of index.data)
  {
    const jsonArray = await fetch("/pages/"+item)  
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
  <h2 style="text-align: center;">Academic Projects</h2>
    <div class="content">
      
      <div class="Item" v-for="Project in projectData">
        <h2>{{ Project.title }}</h2>
        <img :src="Project.main_image"></img>
      </div>
    </div>
</template>

<style>
img {
  width: 200px;
  height: 200px;

  border-radius: 4px;
}
.Item {
  margin-right: 2px;
  margin-left: 2px;
}
</style>