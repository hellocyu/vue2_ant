import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      meta: { title: "登录" },
      component: () => import("../views/Login"),
    },
  ],
});
