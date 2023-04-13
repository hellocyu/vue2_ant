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
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/Layout"),
      children: [
        // {
        //   path: "",
        //   name: "home",
        //   meta: { title: "首页" },
        //   component: () => import("../views/Home.vue"),
        // },
        // {
        //   path: "/mail",
        //   name: "mail",
        //   meta: { title: "邮件" },
        //   component: () => import("../views/Mail.vue"),
        // },
        // {
        //   path: "/message",
        //   name: "message",
        //   meta: { title: "消息" },
        //   component: () => import("../views/Message.vue"),
        // },
        {
          path: "/carInfo",
          name: "carInfo",
          meta: { title: "车辆信息" },
          // component: () => import("../views/Car/carInfo.vue"),
          component: () => import("../views/Car/carInfo"),
        },
        {
          path: "/carReserve",
          name: "carReserve",
          meta: { title: "车辆预定" },
          component: () => import("../views/Lease/carReserve.vue"),
        },
        {
          path: "/carLease",
          name: "carLease",
          meta: { title: "汽车租赁" },
          component: () => import("../views/Lease/carLease.vue"),
        },
        {
          path: "/apply",
          name: "apply",
          component: () => import("../views/Member/apply.vue"),
        },
        {
          path: "/examine",
          name: "examine",
          component: () => import("../views/Member/examine.vue"),
        },
        {
          path: "/memberInfo",
          name: "memberInfo",
          component: () => import("../views/Member/memberInfo.vue"),
        },
        {
          path: "/user",
          name: "user",
          component: () => import("../views/Account/user.vue"),
        },
        {
          path: "/dictionary",
          name: "dictionary",
          component: () => import("../views/System/dictionary.vue"),
        },
        {
          path: "/menu",
          name: "menu",
          component: () => import("../views/System/menu.vue"),
        },
      ],
    },
  ],
});
