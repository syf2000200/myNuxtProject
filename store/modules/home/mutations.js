/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import types from '~/service/type'

const mutations = {
    [types.GET_BASE_API]: (state, res) => {
        console.log('进入mutation')
        state.menuData = res.data.categoryList
        console.log('进入mutations修改state成功')
        console.log(state.menuData)
    }
}
export default mutations