import api from '../../../config/api'
export default {
    async createPost({ commit }, data) {
        const formData = new FormData();
        formData.append('content', data.content);
        if (data.thumbnail) {
            formData.append('file', data.thumbnail);
        }

        return await api.post('api/post/create', formData)
            .then(response => {
                if (response && response != undefined) {
                    return response;
                }
            })
            .catch((error) => {
                commit('CREATE_POST_MESSAGE', error.response.data);
                
                return false;
            })
    },
}
