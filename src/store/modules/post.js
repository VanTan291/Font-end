import axios from '../../config/api';
import vm from '../../main.js';
const state = {
    state: {
        listPost: []
    },
}

const getters = {
    listPost: state => state.state.listPost,
    
}

const actions = {
    async postAdd({commit}, post) {
        try {
            const response = await axios.post('post', post);
            console.log(response);
            vm.$router.push({path: '/post'});
        } catch (error) {
            
            commit('MESSAGE_ERRORS');
        }
    },

    async getPost({commit}) {
        try {
            const response = await axios.get('post');
            commit('GET_POST', response.data);
        } catch (error) {
            console.log(error)
        }
    }
}

const mutations = {
    MESSAGE_ERRORS() {

    },
    GET_POST(state, post) {
        state.state.listPost = post.data;
        //console.log(state.listPost);
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
