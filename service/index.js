/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: axios处理函数封装
 *  @param:
 */

import axios from 'axios'
import qs from 'qs'
import config from './config'
import { Loading } from 'element-ui'

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

async function fetch(url, params, method = 'GET') {
    const loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return new Promise((resolve, reject) => {
        if(method == 'GET') {
            service({
                method: 'get',
                url,
                params,
            })
            .then(res => {
                loading.close()
                resolve(res)
            })
            .catch((error) => {
                loading.close()
                reject(error)
            })
        }
        if(method == 'POST') {
            service({
                method: 'post',
                url,
                params,
            })
            .then(res => {
                loading.close()
                resolve(res)
            })
            .catch((error) => {
                loading.close()
                reject(error)
            })
        }
    })
}

export default {
    mineCategoryApi() {
        console.log('进入api.js')
        return fetch(`${api}/website/categoryList`, 'GET')
    }
}