import { createStore } from "vuex";
import moduleLogin from "./login";

export default createStore({
	modules: {
		moduleLogin,
	},
});
