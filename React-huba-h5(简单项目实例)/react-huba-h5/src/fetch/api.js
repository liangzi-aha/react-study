import axios from 'axios';
import qs from 'qs';

const apiBaseUrl = process.env.NODE_ENV === 'production' ? '' : '/api';

// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

// POST传参序列化
axios.interceptors.request.use((config) => {
    // config.headers['Content-Type'] != "multipart/form-data" 上传文件不用使用stringify格式化参数
    // console.log(config)
    if (config.method === 'post' && config.headers['Content-Type'] !== "multipart/form-data") {
        config.data = qs.stringify(config.data);
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
    if (res.headers['content-type'] === 'images/jpeg') {
        return res
    }
    return res
}, (error) => {
    return Promise.reject(error)
})

export function HttpPost(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + url, params, headers)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function HttpGet(url, params) {
    return new Promise((resolve, reject) => {
        console.log(apiBaseUrl + url + "?" + params);
        axios.get(apiBaseUrl + url + "?" + params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}