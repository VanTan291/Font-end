
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import router from "./router";

// use
Vue.use(VueRouter);

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

export default vm;
