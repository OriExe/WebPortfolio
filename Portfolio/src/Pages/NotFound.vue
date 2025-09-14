<script>
import { RouterLink } from 'vue-router';
</script>
<template>
    <h1>404Error</h1>
    <h2>This page doesn't exist</h2>
    <RouterLink  to="projects/fork-kebab">Fork-Kebab</RouterLink>
</template>

<style scoped>
h1 {
    color: red;
}
</style>