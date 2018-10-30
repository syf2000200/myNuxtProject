/**
 *  Created by 2018/8/29
 *  @author: sunyafei
 *  @description:
 *  @param:
 */

import types from '~/service/type'
import state from './state'
const mutations = {
  user(state, user) {
    state.user = user;
  },
}
export default mutations
