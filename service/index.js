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

export async function fetch(url, params, method = 'GET', type) {
	const loading = Loading.service({
		lock: true,
		text: '获取数据中',
		spinner: 'el-icon-loading',
		background: 'rgba(255, 255, 255, 0.6)'
	})
	let headers = {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	}
  	let user = localStorage.getItem('user')
	if (user) {
		user = JSON.parse(user)
		headers.userId = user.userId
		headers.accessToken = user.accessToken
	}
	if(type == 'arraybuffer') {
		config.responseType = 'arraybuffer'
	}
	return new Promise((resolve, reject) => {
		if (method == 'GET') {
			service({
				method: 'get',
				url,
				params,
				headers
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
		if (method == 'POST') {
			service({
				method: 'post',
				url,
				params,
				headers
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
