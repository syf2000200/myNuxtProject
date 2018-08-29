/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: axios处理函数封装
 *  @param:
 */

import axios from 'axios'
import qs from 'qs'
import config from './config'

const service = axios.create(config)

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

export default {
    //post方法
    post (url ,data) {
        console.log('post请求地址是', url)
        return service({
            method: 'post',
            url,
            params: data,
        })
    },
    //get方法
    get (url, data) {
        console.log('get请求地址是', url)
        return service({
            method: 'get',
            url,
            params: data,
        })
    },
    //delete方法
    delete (url, data) {
        console.log('移除请求地址', url)
        return service({
            method: 'delete',
            url,
            params: data,
        })
    }
}