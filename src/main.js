window.Vue = require("vue");

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

export default vm;
