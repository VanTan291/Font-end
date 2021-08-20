import axios from '../../config/api';
import vm from '../../main.js';
const state = {
    state: {
        listPost: [],
        postEdit: []
    },
}

const getters = {
    listPost: state => state.state.listPost,
    postEdit: state => state.state.postEdit,
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
    },

    async getPostEditById({commit}, id) {
        try {
            const response = await axios.get(`post/${id}/edit`);
            commit('GET_POST_BY_ID', response.data);
            vm.$router.push({name: 'edit'});
        } catch (error) {
            console.log(error)
        }
    },

    async updatePostById({commit}, post) {
        try {
            console.log(post);
            await axios.post(`post/${post.id}/update`, post);
            vm.$router.push({path: '/post'});
        } catch (error) {
            commit('GET_POST_BY_ID');
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
    },
    GET_POST_BY_ID(state, postEdit) {
        state.state.postEdit = postEdit;
        console.log(postEdit);
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
