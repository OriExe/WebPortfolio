<script setup>
import HelloWorld from './components/HelloWorld.vue';
import FrontHeader from './components/FrontHeader.vue';
</script>

<template>
  <FrontHeader></FrontHeader>
  <main>
    <RouterView></RouterView>
  </main>
</template>

