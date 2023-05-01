import * as types from "./mutation-types";
import axios from "axios";

export const setUser = async ({ commit }, user) => {
	commit(types.ADD_USER, user);
	// try {
	// 	const res = await axios.post(
	// 		"https://front.opperdev.com/api/register",
	// 		{
	// 			user,
	// 		},
	// 		{
	// 			headers: {
	// 				Accept: "application/json",
	// 			},
	// 		}
	// 	);
	// 	commit(types.ADD_USER, res.data);
	// } catch (error) {
	// 	console.log(error);
	// }
};

export const login = async ({ commit }, user) => {
	try {
		const res = await axios.post("http://front.opperdev.com/api/login", user);
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};
