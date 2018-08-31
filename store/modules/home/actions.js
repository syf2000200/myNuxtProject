/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import fetch from '~/service'
import types from '~/service/type'

const actions = {
    getCategoryApi({commit}) {
        fetch.mineCategoryApi()
        .then(res => {
            console.log('action调用封装后的axios成功')
            console.log(res)
            commit(types.GET_CATEGORY_API, res)
        })
        console.log('进入action')
    }
}

export default actions