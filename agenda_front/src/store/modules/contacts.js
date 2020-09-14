import Vue from "vue"
import Vuex from "vuex"
import router from "../../router"

import http from "../../http"

Vue.use(Vuex)

export default {
	state: {
		contacts: [],
		contact: {},
	},
	getters: {
		contacts: (state) => state.contacts,
		contact: (state) => state.contact,
	},
	mutations: {
		set_contacts(state, contacts) {
			state.contacts = contacts
		},
		get_contact(state, contact) {
			state.contacts = contact
		},
		store_contact(state, contact) {
			state.contacts.push(contact)
		},
		remove_contact(state, index) {
			state.contacts.splice(index, 1)
		},
	},

	actions: {
		LOAD_CONTACTS: (context) => {
			return http()
				.get(`contacts`)
				.then((response) => {
					console.log("works - LOAD_CONTACTS")
					context.commit("set_contacts", response.data)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		GET_CONTACT: (context, payload) => {
			context.commit("get_contact", payload)
		},
		SAVE_CONTACT: (context, payload) => {
			return http()
				.post(`contacts`, payload)
				.then((response) => {
					context.commit("store_contact", response.data)
					router.push({ path: "/manage/contacts/" + response.data.id })
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		UPDATE_CONTACT: (context, payload) => {
			return http()
				.put(`contacts/${payload.id}`, payload)
				.then((response) => {
					console.log("contact updated", response.data)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		DELETE_CONTACT: (context, payload) => {
			return http()
				.delete(`contacts/${payload.id}`)
				.then(() => {
					context.commit("remove_contact", payload.index)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
	},
}
