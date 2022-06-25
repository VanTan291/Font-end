import api from '../../../config/api';

export default {
    async login({ commit }, data) {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);
        api.post('login', formData)
            .then(responseLogin => {
                if (responseLogin.status == 200) {
                    console.log(responseLogin.token);
                    localStorage.setItem('_token', responseLogin.token); 
                    window.location.href='/admin';
                } 
                else if (responseLogin.existEmail == false) {
                    commit('ERROR_EMAIL', responseLogin);
                } 
                else {
                    commit('LOGIN_FAIL', responseLogin);
                }
            })
            .catch((error) => {
                commit('RESQUEST_FAIL', error.response.data);
            })
    },
}