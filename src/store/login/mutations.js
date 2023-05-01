import * as types from "./mutation-types";
const mutations = {
	[types.ADD_USER](state, user) {
		state.user = user;
		state.isAuthenticated = Boolean(user);
	},
};

export default mutations;
