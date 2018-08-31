/**
 *  Created by 2018/8/29
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import fetch from '~/service'
import types from '~/service/type'

const actions = {
    getMineBaseApi({commit}) {
        fetch.mineBaseMsgApi()
        .then(res => {
            console.log('action调用封装后的axios成功')
            commit(types.GET_BASE_API, res)
        })
        console.log('进入action')
    }
}

 export default actions