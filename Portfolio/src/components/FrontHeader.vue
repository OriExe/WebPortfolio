<template>
    <nav>
        <RouterLink  to="/">Home</RouterLink>
        <RouterLink  to="/">Academic Projects</RouterLink>
        <RouterLink to="/">Personal Projects</RouterLink>
        <RouterLink to="/Contact">Contact Me</RouterLink>
    </nav>
    </template>
<style scoped>
    nav {
        display: flex;
        background-color: rgba(127, 255, 212,0.8);
        border: 7px aquamarine;
        border-radius: 2px;
    }
    .router-link-active {
        margin-left: 2px;
        margin-right: 2px;
    }
</style>