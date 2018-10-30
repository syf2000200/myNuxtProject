/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import types from '~/service/type'

const mutations = {
    //获取分类mutations
    [types.GET_CATEGORY_API]: (state, res) => {
        state.menuData = res.data.directionList
    },
    //获取网站列表mutations
    [types.GET_LIST_API]: (state, res) => {
        state.listData = res.data.websiteList
    },
    //获取视频详情mutations
    [types.GET_VIDEODETAIL_API]: (state, res) => {
        state.videoDetailData = res.data.videoDetail
    },
    //获取banner图片
    [types.GET_BANNER_URI]: (state, res) => {
        state.bannerIndex = res
    },
}
export default mutations