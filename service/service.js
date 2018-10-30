/**
 *  Created by 2018/9/11
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import { fetch } from './index'

const api = '/api'

export default {
    //用户登录
    userLogin: params => fetch(`${api}/user/login`, params, 'POST'),
    //用户登出
    userLoginOut: () => fetch(`${api}/user/loginOut`, 'POST'),
    //获取网站列表
    mineListApi: params => fetch(`${api}/website/websiteList`, params, 'POST'),
    //获取视频列表
    mineVideoListApi: params => fetch(`${api}/video/videoList`, params, 'POST'),
    //获取视频详情
    mineVideoDetailApi: params => fetch(`${api}/video/videoDetail`, params, 'POST'),
    //获取视频类目列表
    mineCategoryApi: () => fetch(`${api}/video/searchConditionList`, 'GET'),
}