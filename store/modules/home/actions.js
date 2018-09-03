/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import fetch from '~/service'
import types from '~/service/type'

const actions = {
    //获取分类action
    getCategoryApi({commit}, params) {
        fetch.mineCategoryApi(params)
        .then(res => {
            console.log('action调用封装后的axios成功')
            console.log(res)
            commit(types.GET_CATEGORY_API, res)
        })
        console.log('进入action')
    },
    //获取视频列表action
    getListApi({commit}, params) {
        fetch.mineListApi(params)
        .then(res => {
            console.log('action调用封装后的axios成功')
            console.log(res)
            commit(types.GET_LIST_API, res)
        })
    }
}

export default actions