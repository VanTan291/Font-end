<template>
  <div id="app" class="mt-0" >
    <div class="">
      <router-view>
        <Home/>
      </router-view>
    </div>
  </div>
</template>

<script>

import Home from './components/user/Home.vue'
export default {
  name: 'App',
  components: {
    Home
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
