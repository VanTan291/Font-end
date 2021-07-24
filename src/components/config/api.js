const axios = require("axios");
const apiUrl = "http://localhost:8088/api/";

export default {
    getHeaders() {
        let token = window.localStorage.getItem("Token");
        if (token == null) {
            return {};
        }
        return { Authorization: "Bearer " + token };
    },
    get(url) {
        return axios.get(apiUrl + url, { headers: this.getHeaders()  });
    },
    post(url, data) {
        return axios.post(apiUrl +  url, data, { headers: this.getHeaders() });
    },
};

// import axios from 'axios';
// const api = axios.create({
// //   'baseURL': PageUrl + '/api/v1',
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     'Access-Control-Allow-Origin': "*",
//     'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE'

//   }
// });

// export default api;