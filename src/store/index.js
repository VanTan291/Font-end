import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Auth from './modules/Auth/Auth';
import Dashboard from './modules/Dashboard/Dashboard';
export default new Vuex.Store({
    modules: {
        auth: Auth,
		dashboard: Dashboard,
    }
});
// const storeData = {
// 	modules: {
// 		auth: Auth
// 	},
// }

// const store = new Vuex.Store(storeData)
// export default store
