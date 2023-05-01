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
		path: "/backoffice/categories",
		name: "BackofficeCategories",
		component: () => import("@/views/BackofficeCategories.vue"),
	},
	{
		path: "/backoffice/update",
		name: "BackofficeUpdate",
		component: () => import("@/views/BackofficeUpdate.vue"),
	},
	{
		path: "/backoffice/create",
		name: "BackofficeCreate",
		component: () => import("@/views/BackofficeCreate.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
