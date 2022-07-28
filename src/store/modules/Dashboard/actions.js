import api from '../../../config/api'
export default {
    async getProfileUser({ commit }) {
        return await api.get('api/home').then(response => {
            if (response && response != undefined) {
                commit('GET_PROFILE_USER', response);
            }
        })
    },
    async getListPostByUser({ commit }) {
        return await api.get('api/post')
            .then(response => {
                if (response && response != undefined) {
                    commit('LIST_POST_BY_USER', response);
                }
            })
            .catch((error) => {
                commit('LIST_POST_BY_USER_EMPTY', error.response.data);
            })
    },
}
