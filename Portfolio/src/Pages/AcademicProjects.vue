

<script setup>
import { ref, onMounted } from "vue";
import {extractProjectData} from "@/mdExtract.js"
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
   // must be in /public
    //const markdown = await res.text(); //Outputs as plain text
    //projectData.value.push(extractProjectData(markdown)); //Saves as directory
    console.log(projectData.value); //Log
    projectData.value.push(jsonArray);
  }

})

</script>

<template>
    <div class="content">
      <div class="Item" v-for="Project in projectData">
        <h2>{{ Project.title }}</h2>
        <img src="/media/Fork kebab.png"></img>
      </div>
    </div>
</template>