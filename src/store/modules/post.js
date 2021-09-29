import axios from '../../config/api';
import vm from '../../main.js';
const state = {
    state: {
        listPost: [],
        postEdit: [],
        successful: '',
        postDetail: []
    },
}

const getters = {
    listPost: state => state.state.listPost,
    postEdit: state => state.state.postEdit,
    successful: state => state.state.successful,
    postDetail: state => state.state.postDetail
}

const actions = {
    async postAdd({commit}, post) {
        try {
            const response = await axios.post('post', post);
            commit('GET_POST_BY_ID', response.data);
            vm.$router.push({path: '/post'});
        } catch (error) {
            commit('MESSAGE_ERRORS');
        }
    },

    async getPostPublic({commit}) {
        try {
            const response = await axios.get('post-public/');
            commit('GET_POST', response.data);
        } catch (error) {
            console.log(error)
        }
    },
    async getPost({commit}) {
        try {
            const response = await axios.get('post/');
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
            const response = await axios.put(`post/${post.id}/update`, post);
            commit('GET_POST_BY_ID', response.data);
            vm.$router.push({path: '/post'});
        } catch (error) {
            console.log(error)
        }
    },

    async removePostById({commit}, id) {
        try {
            const response = await axios.post(`post-delete/${id}`);
            commit('GET_POST_BY_ID', response.data);
            alert(response.data.message);
            location.reload();
        } catch (error) {
            commit('MESSAGE_ERRORS');
        }
    },

    async getPostDetail({commit}, id) {
        try {
            const response = await axios.get(`post-detail/${id}`);
            commit('GET_POST_DETAIL_BY_ID', response.data);
            vm.$router.push({name: 'post-detail'});
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
    },
    GET_POST_BY_ID(state, postEdit) {
        state.state.postEdit = postEdit;
        state.state.successful = postEdit['message']
        console.log(state.state.successful);
    },
    GET_POST_DETAIL_BY_ID(state, postDetail) {
        state.state.postDetail = postDetail;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
