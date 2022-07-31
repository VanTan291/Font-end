import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Auth from './modules/Auth/Auth';
import Dashboard from './modules/Dashboard/Dashboard';
import Post from './modules/Post/Post';
export default new Vuex.Store({
    modules: {
        auth: Auth,
		dashboard: Dashboard,
        post: Post
    }
});
