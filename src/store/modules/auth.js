import axios from '../../config/api';
import vm from '../../main.js';
const state = {
    state: {
       userProfile: {},
       formValidate: {}
    },
}

const getters = {
    name: state => state.state.userProfile.name,
    formValidate: state => state.state.formValidate,
    
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
                this.errors= error.response.data;
            }
            commit('MESSAGE_ERRORS',this.errors);
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
    },
    async register({commit}, user) {
        try {
            const response = await axios.post('register', user);
            window.localStorage.setItem('token', response.data.token);
            vm.$router.push({name: 'dashboard'});
        } catch (error) {
            if (error.response.data.errors) {
                this.errors = error.response.data.errors;
            } else {
                this.errors= error.response.data;
            }
            commit('MESSAGE_ERRORS',this.errors);
        }
    }
}

const mutations = {
    GET_USER(state, user) {
        state.state.userProfile = user;
    },
    MESSAGE_ERRORS(state, errors) {
        state.state.formValidate = errors;
        
        console.log(state.state.formValidate);
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
