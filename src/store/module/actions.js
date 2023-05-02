import * as types from "./mutation-types";
import axios from "axios";
const URL = import.meta.env.VITE_URL_API;

export const register_action = async ({ commit }, user) => {
	commit(types.REGISTER_ACTION, user);
	// try {
	// 	const res = await axios.post(
	// 		`${URL}/register`,
	// 		{
	// 			user
	// 		},
	// 		{
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 		}
	// 	);
	// 	commit(types.REGISTER_ACTION, res.data.token)
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const login_action = async ({ commit }, user) => {
	commit(
		types.LOGIN_ACTION,
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRw"
	);
	// try {
	// 	const res = await axios.post(`${URL}/login`, user);
	// 	commit(types.LOGIN_ACTION, res.data.token);
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const logout_action = ({ commit }) => {
	commit(types.LOGOUT_ACTION);
};
