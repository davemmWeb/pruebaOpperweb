import * as types from "./mutation-types";
import axios from "axios";
const URL = import.meta.env.VITE_URL_API;

const storage = window.localStorage;

export const register_action = async ({ commit }, user) => {
	commit(types.REGISTER_USER, user);
	storage.setItem("user_email", user.email);
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
	//  localStorage.setItem('token', res.data.token)
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const login_action = async ({ commit }, user) => {
	commit(
		types.LOGIN_USER,
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRw"
	);
	// try {
	// 	const res = await axios.post(`${URL}/login`, user);
	// 	commit(types.LOGIN_ACTION, res.data.token);
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const get_user_action = async ({ commit }, id) => {
	// try {
	// 	const res = await axios.get(`${URL}/v1/${id}`, {
	// 		headers: {
	// 			Accept: "application/json",
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});
	// 	commit(types.GET_USER, res.data.name);
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const logout_action = ({ commit }) => {
	commit(types.LOGOUT_USER);
};

export const get_categories_action = async ({ commit }) => {
	try {
		const res = await axios.get(`${URL}/v1/categoria`, {
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		commit(types.GET_CATEGORIES, res.data.categorias);
	} catch (error) {
		console.log(error);
	}
};

export const put_category_action = async ({ commit }, id, category) => {
	commit(types.GET_CATEGORIES, category);
	// try {
	// 	const res = await axios.put(`${URL}/v1/update/${id}`,{
	// 		category
	// 	}, {
	// 		headers: {
	// 			Accept: "application/json",
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// }
};
export const create_category_action = async ({ commit }, category) => {
	commit(types.CREATE_CATEGORY, category);
	// try {
	// 	const res = await axios.post(`${URL}/v1/categoria/create`,{
	// 		category
	// 	}, {
	// 		headers: {
	// 			Accept: "application/json",
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// }
};
