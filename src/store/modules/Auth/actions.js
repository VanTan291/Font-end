import api from '../../../config/api';

export default {
    async login({ commit }, data) {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        await api.post('login', formData)
            .then(responseLogin => {
                if (responseLogin.code == 200) {
                    localStorage.setItem('_token', responseLogin.data.token);      
                    window.location.href='/admin';
                } 
                else {
                    commit('RESQUEST_FAIL', responseLogin);
                }
            })
            .catch((error) => {
                commit('LOGIN_FAIL', error.response.data);
            })
    },
}