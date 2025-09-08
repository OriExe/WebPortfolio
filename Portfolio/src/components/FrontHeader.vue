<template>
    <header>
        <nav>
        <a  href="#1">Home</a>
        <a  href="/">Academic Projects</a>
        <a href="#Home/slide1">Personal Projects</a>
        <a href="#2">Contact Me</a>
        </nav>
</header>
    </template>
    
<style scoped>
    nav {
        display: flex;
        border: 7px aquamarine;
        border-radius: 2px;
    }
    .router-link-active {
        margin-left: 2px;
        margin-right: 2px;
        padding-top: 2px;
    }
    header {
        width: 100%;
    background: rgba(127, 255, 212,0.8);
    
    position: fixed;
     height: 5%;
     top: 0;
     z-index: 1; 
    }
</style>