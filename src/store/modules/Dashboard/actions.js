import api from '../../../config/api'
export default {
    async getProfileUser({ commit }) {
        return api.get('api/home').then(response => {
            if (response && response != undefined) {
                commit('GET_PROFILE_USER', response);
            }
        })
    },
    async getListPostByUser({ commit }) {
        return api.get('api/post').then(response => {
            console.log(response.data);
            if (response && response != undefined) {
                commit('LIST_POST_BY_USER', response);
            }
        })
    },
}
