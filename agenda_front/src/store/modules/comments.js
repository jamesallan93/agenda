import Vue from "vue"
import Vuex from "vuex"
// import router from "../../router";

import http from "../../http"

Vue.use(Vuex)

export default {
	state: {
		comments: [],
		comment: {},
		user_comments: [],
	},
	getters: {
		comments: (state) => state.comments,
		comment: (state) => state.comment,
		user_comments: (state) => state.user_comments,
	},
	mutations: {
		get_user_comments(state, comments) {
			state.user_comments = comments
		},
		save_user_comments(state, comment) {
			state.user_comments.push(comment)
		},
		edit_comment(state, comment) {
			state.comment = comment
		},
		remove_comment(state, index) {
			state.user_comments.splice(index, 1)
		},
	},

	actions: {
		EDIT_COMMENT: (context, payload) => {
			context.commit("edit_comment", payload)
		},
		LOAD_USER_COMMENTS: (context, id) => {
			return http()
				.post(`contact_comments/`, { id: id })
				.then((response) => {
					context.commit("get_user_comments", response.data)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		SAVE_COMMENT: (context, payload) => {
			return http()
				.post(`comments`, payload)
				.then((response) => {
					context.commit("save_user_comments", response.data)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
		UPDATE_COMMENT: (context, payload) => {
			return http()
				.put(`comments/${payload.id}`, payload)
				.then(() => {})
				.catch(function(error) {
					console.log(error)
				})
		},
		DELETE_COMMENT: (context, payload) => {
			return http()
				.delete(`comments/${payload.id}`)
				.then(() => {
					context.commit("remove_comment", payload.index)
				})
				.catch(function(error) {
					console.log(error)
				})
		},
	},
}
