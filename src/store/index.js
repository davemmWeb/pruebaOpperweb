import { createStore } from "vuex";
import module from "./module";

export default createStore({
	modules: {
		module,
	},
});
