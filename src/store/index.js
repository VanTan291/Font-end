import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Auth from './modules/Auth/Auth';
export default new Vuex.Store({
    modules: {
        auth: Auth,
    }
});
// const storeData = {
// 	modules: {
// 		auth: Auth
// 	},
// }

// const store = new Vuex.Store(storeData)
// export default store
