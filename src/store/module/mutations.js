import * as types from "./mutation-types";
const mutations = {
	[types.REGISTER_ACTION](state, user) {
		(state.user = user), (state.auth = Boolean(user));
	},
	[types.LOGIN_ACTION](state, token) {
		state.token = token;
	},
	[types.LOGOUT_ACTION](state) {
		state.token = null;
		state.auth = false;
	},
};

export default mutations;
