import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const home = () => new Vuex.Store({
    state,
    mutations,
})

export default home