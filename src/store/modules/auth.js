import axios from '../../config/api';
import vm from '../../main.js';
const state = {
    state: {
       userProfile: {},
       errors: {}
    },
}

const getters = {
    name: state => state.user,
    message: state => state.errors,
}

const actions = {
    async login({commit},user) {
        try {
            const response = await axios.post('login', user);
            window.localStorage.setItem('token', response.data.token);
            vm.$router.push({name: 'dashboard'});
        } catch (error) {
            if (error.response.data.errors) {
                this.errors = error.response.data.errors;
            } else {
                this.errors['fail'] = error.response.data.fail;
            }
            commit('MESSAGE_ERRORS',this.errors);
            console.log(this.errors);
        }
        

    },
    async checkLogin({commit}) {
        try {
            const response = await axios.get('user');
            commit('GET_USER', response.data);
        } catch (error) {
            console.log(error)
            vm.$router.push({name: 'login'});
        }
    },
    async logoutAdmin() {
        try {
            await axios.post('logout');
            window.localStorage.removeItem('token');
            vm.$router.push({name: 'login'});
        } catch (error) {
            console.log(error)
        }
    }
}

const mutations = {
    GET_USER(state, user) {
        state.userProfile = user;
    },
    MESSAGE_ERRORS(state, errors) {
        state.errors = errors
        console.log(state.errors);
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
