/**
 *  Created by 2018/8/29
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import types from '~/service/type'

const mutations = {
    [types.GET_BASE_API]: (state, res) => {
        console.log('进入mutation')
        state.getMineBaseMsg = {
            ...state.getMineBaseMsg,
            msg: res,
        }
        console.log('进入mutations修改state成功', state, res)
    }
}

export default mutations