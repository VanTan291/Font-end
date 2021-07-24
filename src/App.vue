<template>
  <div id="app" class="mt-0">
    <div class="container bg-light p-5">
       <router-view>
      <Header/>
      <div class="row">
        <Sidebar/>
        <Content/>
      </div>
      <Footter/>
      </router-view>
    </div>
   
  </div>
</template>

<script>

import Header from './components/layouts/Header.vue'
import Sidebar from './components/layouts/Sidebar.vue'
import Content from './components/layouts/Content.vue'
import Footter from './components/layouts/Footter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Content,
    Footter
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/vendors/bootstrap-vue/index';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
