import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "../views/Layout"
import Manage from "../views/Contacts/Manage"
import Contacts from "../components/Contacts"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Layout",
		component: Layout,
		children: [
			{
				path: "",
				name: "Contacts",
				component: Contacts,
			},
			{
				path: "manage/contacts/:id",
				name: "ManageContacts",
				component: Manage,
			},
			{
				path: "manage/contacts",
				name: "ManageContacts",
				component: Manage,
			},
		],
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

export default router
