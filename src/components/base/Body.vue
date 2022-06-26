<template>
  <div class="wrapper standard-font">
    <Header />
    <div class="container">
        <div class="row">
        <LeftBar />
        <router-view />
        <RightBar />
    </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import LeftBar from './LeftBar.vue';
import RightBar from './RightBar.vue';

export default {
  name: 'App',
  components: {
    Header,
    LeftBar,
    RightBar,
  },
};
</script>