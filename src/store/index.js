import Vue from 'vue'
import Vuex from 'vuex'

//import modules
import auth from './modules/auth'
import post from './modules/post'

Vue.use(Vuex)

const storeData = {
	modules: {
		auth,
		post
	},
}

const store = new Vuex.Store(storeData)

export default store
