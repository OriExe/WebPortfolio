<template>
  <FrontHeader></FrontHeader>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <div class="slide">
          <button class="next" @click="$refs.fullpage.api.moveSectionDown()">
            Next
          </button>
          <HelloWorld></HelloWorld>
        </div>
            <div class="slide" data-anchor="slide1">
          <h2 class="content">Personal Projects</h2>
        </div>
        <div class="slide" data-anchor="slide2">
          <AcademicProjects></AcademicProjects>
        </div>
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        <Contact></Contact>
      </div>
      <div class="section">
        <RouterView>
        </RouterView>
      </div>
    </full-page>
  </div>
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
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
}
</style>