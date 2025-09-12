<script setup>
import { ref, onMounted } from "vue";
import {extractProjectData} from "@/mdExtract.js"
// state
const projectData = ref([]);

//Get all files from the CMS (pages folder)

for (const path in files) {
  console.log(path);
}

// const res = await fetch(); // must be in /public
// const markdown = await res.text(); //Outputs as plain text
// projectData.value.push(extractProjectData(markdown)); //Saves as directory
// console.log(projectData.value); //Log

</script>

<template>
    <div class="content">
        <h2>Academic Projects</h2>
    </div>
</template>