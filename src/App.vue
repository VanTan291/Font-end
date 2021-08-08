<template>
  <div id="app" class="mt-0">
    <div class="container bg-light pt-2">
      <router-view>
        <ListPost/>
      </router-view>
    </div>
  </div>
</template>

<script>

import ListPost from './components/ListPost.vue'
export default {
  name: 'App',
  components: {
    ListPost
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
