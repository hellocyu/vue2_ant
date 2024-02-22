import Vue from "vue";
import Router from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
Nprogress.configure({ showSpinner: false });

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      meta: { title: "登录" },
      component: () => import("../views/Login"),
    },
    {
      path: "/workshop/:workshopId",
      name: "WorkShop",
      meta: { title: "工作区间" },
      component: () => import("../views/WorkShop"),
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/Layout"),
      children: [
        {
          path: "",
          name: "home",
          meta: { title: "首页" },
          component: () => import("../views/Home"),
        },
        {
          path: "/mail",
          name: "mail",
          meta: { title: "邮件" },
          component: () => import("../views/Mail"),
        },
        {
          path: "/message",
          name: "message",
          meta: { title: "消息" },
          component: () => import("../views/Message"),
        },
        {
          path: "/carInfo",
          name: "carInfo",
          meta: { title: "车辆信息", module: "车辆管理" },
          // component: () => import("../views/Car/carInfo.vue"),
          component: () => import("../views/Car/carInfo"),
        },
        {
          path: "/carReserve",
          name: "carReserve",
          meta: { title: "车辆预定", module: "租赁管理" },
          component: () => import("../views/Lease/carReserve.vue"),
        },
        {
          path: "/carLease",
          name: "carLease",
          meta: { title: "汽车租赁", module: "租赁管理" },
          component: () => import("../views/Lease/carLease.vue"),
        },
        {
          path: "/apply",
          name: "apply",
          meta: { title: "年度日历", module: "会员管理" },
          component: () => import("../views/Member/apply.vue"),
        },
        {
          path: "/examine",
          name: "examine",
          meta: { title: "会员审核", module: "会员管理" },
          component: () => import("../views/Member/examine.vue"),
        },
        {
          path: "/memberInfo",
          name: "memberInfo",
          meta: { title: "会员信息", module: "会员管理" },
          component: () => import("../views/Member/memberInfo.vue"),
        },
        {
          path: "/user",
          name: "user",
          meta: { title: "账户管理", module: "用户管理" },
          component: () => import("../views/Account/user.vue"),
        },
        {
          path: "/dictionary",
          name: "dictionary",
          meta: { title: "字典管理", module: "系统管理" },
          component: () => import("../views/System/dictionary.vue"),
        },
        {
          path: "/menu",
          name: "menu",
          meta: { title: "菜单管理", module: "系统管理" },
          component: () => import("../views/System/menu.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      meta: { title: "404" },
      component: () => import("../views//Error"),
    },
  ],
});
router.beforeEach((_to, _from, next) => {
  Nprogress.start();
  next();
});
router.afterEach((to) => {
  Nprogress.done();
  document.title = to.meta.title;
});
export default router;
