import api from '../../../config/api';

export default {
    async login({ commit }, data) {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        api.post('login', formData)
            .then(responseLogin => {
                if (responseLogin.status == 200) {
                    localStorage.setItem('_token', responseLogin.token); 
                    window.location.href='/admin';
                } 
                else {
                    console.log('aaa',responseLogin)
                    commit('RESQUEST_FAIL', responseLogin);
                }
            })
            .catch((error) => {
                commit('LOGIN_FAIL', error.response.data);
            })
    },
}