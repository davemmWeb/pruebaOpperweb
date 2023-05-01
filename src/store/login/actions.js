import * as types from "./mutation-types";
import axios from "axios";

export const setUser = async ({ commit }, user) => {
	try {
		const res = await axios.post(
			"https://front.opperdev.com/api/register",
			user
		);
		commit(types.ADD_USER, res.data);
	} catch (error) {
		console.log("error", error);
	}
};
