import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/GetStarted/Layout'
import Manage from '../views/Contacts/Manage'
import Contacts from '../components/Contacts'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "contacts",
        name: "Contacts",
        component: Contacts
      },
      {
        path: "manage/contacts/:id",
        name: "ManageContacts",
        component:Manage
      },
      {
        path: "manage/contacts",
        name: "ManageContacts",
        component:Manage
      }
    ]
  },
  {
    path: "",
    name: "auth",
    component: () => import(/* webpackChunkName: "Auth" */ '../views/Auth'),
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/Auth/Login.vue")
      },
      // {
      //   path: "/register",
      //   name: "register",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "Register" */ "../views/auth/Register.vue"
      //     )
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
