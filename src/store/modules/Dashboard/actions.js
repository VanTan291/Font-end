import api from '../../../config/api'
export default {
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

    async deletePost({commit}, id) {
        const formData = new FormData();
        formData.append('id', id);

        return await api.post('api/post/delete', formData)
            .then(response => {
                if (response && response != undefined) {
                    return response;
                }
            })
            .catch((error) => {
                commit('LIST_POST_BY_USER_EMPTY', error.response.data);
            })
    }
}
