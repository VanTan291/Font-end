window.Vue = require("vue");

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// use
Vue.use(VueRouter);

Vue.config.productionTip = false

function loggedIn() {
  return localStorage.getItem('_token');
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!loggedIn()) {
          next({
              path: '/login',
              //query: { redirect: to.fullPath }
          })
      } else {
          next()
      }
  } else if (to.matched.some(record => record.meta.guest)) {
      if (loggedIn()) {
          next({
              path: '/dashboard',
              // query: { redirect: to.fullPath }
          })
      } else {
          next()
      }
  } else {
    next()
  }
});

let vm = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

export default vm;
