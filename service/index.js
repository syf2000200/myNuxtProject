/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: axios处理函数封装
 *  @param:
 */

import axios from 'axios'
import qs from 'qs'
import config from './config'
const api = '/api'

const service = axios.create(config)

// 判断是路由跳转还是 axios 请求
if (process.server) {
    config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

//POST传参序列化
service.interceptors.request.use(
    config => {
        if (config.method === 'post') config.data = qs.stringify(config.data)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//返回结果处理
service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export function fetch(url, params, method = 'GET') {
    return new Promise((resolve, reject) => {
        if(method == 'GET') {
            service({
                method: 'get', 
                url,
                params,
            })
        } else {
            service({
                method: 'post', 
                url,
                params,
            })
        }
    })
}

export default {
    mineBaseMsgApi() {
        console.log('进入api.js')
        return fetch(`${api}/video/videoList`, {currentPage: 1, pageSize: 10}, 'POST')
    }
}