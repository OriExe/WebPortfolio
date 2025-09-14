<template> 
<h2>This is a project{{ route.params.id }}</h2>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute, useRouter} from 'vue-router'

const route = useRoute()

// function onAfterLoad(origin, destination) {
//   // This makes the URL path reflect the current section
//   useRouter().push({path: `projects/${route.params.id}`});
// }
onMounted(() => {
  watch(
    () => route.fullPath,
    (newPath) => {
      fullpage_api.moveTo("#projects");
    },
    { immediate: true }
  );
});

// onMounted(async () => 
// {
//     const index = await fetch("/WebPortfolio/pages/" + route.params.id)
//     .then(phrase => phrase.json()) 
//     .then(data => { console.log(data.data)
//     .catch(Error => console.log("Didn't find file" + route.params.id));
//     return data;
//   });
// })
// watch(
//   () => route.params.id,
//   (newId, oldId) => {
    
//     console.log(newId);
//     console.log(oldId);
//   }
// )
</script>