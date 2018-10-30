/**
 *    Created by 2018/4/18
 *    @author : ivan
 *    @dec :
 *    @params :
 */
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
	createPersistedState({
		key: 'ivan',
		state: {
			user: null,
		}
	})(store)
}
