<template>
    <header>
        <h1 >Azam Farooqui</h1>
        <nav>
        <a  href="#1">Home</a>
        <a href="#Home/slide2">Academic Projects</a>
        <a href="#Home/slide1">Personal Projects</a>
        <a href="#2">Contact Me</a>
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