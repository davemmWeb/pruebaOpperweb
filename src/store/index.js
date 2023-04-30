import { createStore } from "vuex";

export default createStore({
	state: {
		users: ["pepito", "sultanito"],
	},
	mutations: {
		["AGREGAR_USUARIO"](state, user) {
			state.users.push(user);
		},
	},
	actions: {
		agregarUsuario: ({ commit }, user) => {
			commit("AGREGAR_USUARIO", user);
		},
	},
});
