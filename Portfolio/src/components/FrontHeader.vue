<template>
    <header>
        <h1 >Azam Farooqui</h1>
        <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/AcademicProjects">Academic Projects</router-link>
        <router-link href="#Home/slide1">Personal Projects</router-link>
        <router-link to="/ContactMe">Contact Me</router-link>
        </nav>
</header>
    </template>

<script setup>

</script>
<style scoped>
    nav {
        display: flex;
    }
    a {
        margin-left: 3px;
        margin-right: 3px;
        padding-top: 2px;
        font-size: 1vw;
        text-decoration: none;
    }
    header {
    background: rgba(127, 255, 212,0.75);
    position: fixed;
    height: auto;
    width: auto;
    z-index: 1;
    border-radius: 3px;
      position: absolute;
    left: 50%;
    transform: translate(-50%, 10px);
    transition: 1.2s;
    }
</style>