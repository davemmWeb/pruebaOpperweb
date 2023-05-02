import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";

const routes = [
	{
		path: "/",
		name: "Login",
		component: () => import("@/views/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/views/Register.vue"),
	},
	{
		path: "/backoffice/select",
		name: "BackofficeSelect",
		component: () => import("@/views/BackofficeSelect.vue"),
	},
	{
		path: "/categories",
		name: "Categories",
		component: () => import("@/views/Categories.vue"),
	},
	{
		path: "/update/:id",
		name: "update",
		component: () => import("@/views/BackofficeUpdate.vue"),
	},
	{
		path: "/create",
		name: "Create",
		component: () => import("@/views/Create.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
