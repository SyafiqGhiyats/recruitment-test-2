import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    beforeEnter(from, to, next) {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next(from.path)
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    beforeEnter(from, to, next) {
      if (localStorage.token) {
        next(from.path)
      } else {
        next()
      }
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
