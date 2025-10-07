<template>
  <FrontHeader></FrontHeader>
    <RouterView></RouterView>
</template>

<script>
import FrontHeader from './components/FrontHeader.vue';
import HelloWorld from './components/HelloWorld.vue';
import Contact from './Pages/Contact.vue';
import AcademicProjects from './Pages/AcademicProjects.vue';

export default {
  data() {
    return {
      options: {
        menu: '#Home',
        anchors: ['Home', 'Contact Me', 'Projects'],
        sectionsColor: ['#1f1f1f', '#ff5f45', '#0798ec'],
        navigation: true,
        autoscrolling: true,
        slidesNavigation: true,
      },
    }
  },
  components:
  {
     FrontHeader,
      HelloWorld,
      Contact,
      AcademicProjects
  },
  methods:
  {
      returnCurrentPage()
      {
        return window.location.hash;
      }
    }
}

</script>

<style>
template {
  position: relative;
}
.content {
  display: grid;
  place-items: center;
  margin-left: 20%;
  margin-right: 20%;
}
h1 {
  text-align: center;
}
</style>