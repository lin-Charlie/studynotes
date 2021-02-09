import axios from 'axios'
// import Vue from 'vue'
// Vue.prototype.$axios = axios;

// let baseURL = "/management"
const request = axios.create();

request.interceptors.request.use(
    (config)=>{
        config.crossDomain = true;
        config.async = true;
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)

request.interceptors.response.use(
    (res)=>{
        return res
    },
    (err)=>{
        return Promise.reject(err)
    }
)

export default request