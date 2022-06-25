
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  store
}).$mount('#app')

export default vm;
