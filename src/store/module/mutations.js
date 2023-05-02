import * as types from "./mutation-types";
const mutations = {
	[types.REGISTER_USER](state, user) {
		(state.user = user), (state.auth = Boolean(user));
	},
	[types.LOGIN_USER](state, token) {
		state.token = token;
	},
	[types.LOGOUT_USER](state) {
		state.token = null;
		state.auth = false;
	},
	[types.GET_USER](state, user) {
		state.userName = user;
	},
	[types.GET_CATEGORIES](state, categories) {
		state.categories = categories;
	},
	[types.CREATE_CATEGORY](state, category) {
		state.categories.push(category);
	},
};

export default mutations;
