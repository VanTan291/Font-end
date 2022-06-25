import axios from 'axios';
// import router from '../router';

const initialState = {
    isAuthenticated: false,
    token: ''
};

const api = axios.create({
    'baseURL': 'http://localhost:3000/',
    headers: {
        Accept: 'application/json',
    }
});

api.interceptors.request.use(function (config) {
    initialState.token = localStorage.getItem('_token');
    config.headers.Authorization = initialState.token ? `Bearer ${initialState.token}` : '';
    console.log(config)
    return config;
});

api.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    switch (error.response.status) {
        case 401:
            //router.push({ path: '/admin/login' })
            break;
    }
    return Promise.reject(error);
});

export default api;