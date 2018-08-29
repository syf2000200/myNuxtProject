/**
 *  Created by 2018/8/24
 *  @author: sunyafei
 *  @description: 
 *  @param:
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Common from './modules/common'
import Home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        Common,
        Home,
    }
})

export default store