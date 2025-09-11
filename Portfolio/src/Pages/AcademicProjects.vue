<script setup>
import { ref, onMounted } from "vue";
import {extractProjectData} from "@/mdExtract.js"
// state
const projectData = ref([]);

onMounted(async () => {
  const res = await fetch("/pages/project.md"); // must be in /public
  const markdown = await res.text();
  projectData.value = extractProjectData(markdown);
  console.log(projectData.value);
});
</script>

<template>
    <div class="slide" data-anchor="slide2">
        <h2 class="content">Academic Projects</h2>
    </div>
</template>