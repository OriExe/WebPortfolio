<template>
  <FrontHeader></FrontHeader>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">
          Next
        </button>
        <HelloWorld></HelloWorld>
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        <Contact></Contact>
      </div>
    </full-page>
  </div>
</template>

<script>
import FrontHeader from './components/FrontHeader.vue';
import HelloWorld from './components/HelloWorld.vue';
import Contact from './Pages/Contact.vue';

export default {
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#1f1f1f', '#ff5f45', '#0798ec'],
      },
    }
  },
  components:
  {
     FrontHeader,
      HelloWorld,
      Contact
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