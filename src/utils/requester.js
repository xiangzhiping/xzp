import axios from 'axios'
import router from "@/router";
import {ElMessage} from 'element-plus'

const service = axios.create({
    baseURL: 'http://localhost:8976', timeout: 5000
});

service.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('Authorization')}`
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

service.interceptors.response.use(function (response) {
    if (response.status === 200) {
        if (response.headers['content-type'] === 'application/json') {
            const res = response.data
            if (res.code === 200) {
                ElMessage.success(res.msg)
                return res
            } else if (res.code === 401 || res.code === 403) {
                ElMessage.warning(res.msg)
                router.push('/login').then(r => null)
            } else if (200 < res.code < 500) {
                ElMessage.warning(res.msg)
                return res
            } else {
                ElMessage.error(res.msg)
            }
        } else {
            return response.data;
        }
    } else {
        ElMessage.error(error)
        return Promise.reject(error)
    }
}, function (error) {
    ElMessage.error(error)
    return Promise.reject(error);
});

const get = (url, params, options) => {
    return service.get(url, {params, ...options});
};

const post = (url, data) => {
    return service.post(url, data);
};

const patch = (url, data) => {
    return service.patch(url, data);
};

const put = (url, data) => {
    return service.put(url, data);
};

const del = (url, data) => {
    return service.delete(url, {data});
};


export default {get, post, patch, put, del}
