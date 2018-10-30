/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import fetch from '~/service/service'
import types from '~/service/type'

const actions = {
    //获取分类action
    getCategoryApi: ({commit}) => {
        fetch.mineCategoryApi()
        .then(res => {
            commit(types.GET_CATEGORY_API, res)
        })
    },
    //获取网站列表action
    getListApi: ({commit}, params) => {
        fetch.mineListApi(params)
        .then(res => {
            commit(types.GET_LIST_API, res)
        })
    },
    //获取视频详情action
    getVideoDetailApi: ({commit}, params) => {
        fetch.mineVideoDetailApi(params)
        .then(res => {
            commit(types.GET_VIDEODETAIL_API, res)
        })
    },
}

export default actions