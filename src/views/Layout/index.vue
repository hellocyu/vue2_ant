<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      class="left_sider"
    >
      <div class="logo">
        <span class="logoIcon"><a-icon type="code-sandbox" /></span>
        <span v-if="!collapsed">车辆管理系统</span>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="selectKeys"
        :defaultOpenKeys="openKeys"
      >
        <a-sub-menu v-for="item in minMenus" :key="item.title">
          <template #title>
            <span>
              <a-icon :type="item.icon" />
              <span>{{ item.title }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="item1 in item.children"
            :key="item1.title"
            @click="$router.push(item1.path)"
            >{{ item1.title }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layoutHeader">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-menu mode="horizontal">
          <a-menu-item key="home" @click="$router.push('/layout')">
            <a-icon type="mail" />首页
          </a-menu-item>
          <a-menu-item key="mail" @click="$router.push('/mail')">
            <a-icon type="mail" />邮件
          </a-menu-item>
          <a-menu-item key="message" @click="$router.push('/message')">
            <a-icon type="mail" />消息
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>管理员</span></span>
            <a-menu-item key="1"> 个人中心</a-menu-item>
            <a-menu-item key="2"> 修改密码</a-menu-item>
            <a-menu-item key="3" @click="$router.push('/')">
              退出登录</a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '10px',
          padding: '10px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <a-breadcrumb style="margin-bottom: 10px">
          <a-breadcrumb-item>车辆管理系统</a-breadcrumb-item>
          <a-breadcrumb-item v-if="$route.meta.module"
            ><a href="">{{ $route.meta.module }}</a></a-breadcrumb-item
          >
          <a-breadcrumb-item
            ><a href="">{{ $route.meta.title }}</a></a-breadcrumb-item
          >
        </a-breadcrumb>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "userLayout",
  data() {
    return {
      collapsed: false,
      minMenus: [
        {
          children: [
            {
              title: "车辆信息",
              component: "Car/carInfo",
              name: "carInfo",
              path: "/carInfo",
              roleId: [1, 2, 3],
            },
          ],
          roleId: [1, 2, 3],
          title: "车辆管理",
          icon: "pie-chart",
        },
        {
          children: [
            {
              title: "车辆预定",
              component: "Lease/carReserve",
              name: "carReserve",
              path: "/carReserve",
              roleId: [1, 2, 3],
            },
            {
              title: "汽车租赁",
              component: "Lease/carLease",
              name: "carLease",
              path: "/carLease",
              roleId: [1, 2, 3],
            },
          ],
          roleId: [1, 2, 3],
          title: "租赁管理",
          icon: "area-chart",
        },
        {
          children: [
            {
              title: "会员申请",
              component: "Member/apply",
              name: "apply",
              path: "/apply",
              roleId: [1, 2],
            },
            {
              title: "会员审核",
              component: "Member/examine",
              name: "examine",
              path: "/examine",
              roleId: [1, 2],
            },
            {
              title: "会员信息",
              component: "Member/memberInfo",
              name: "memberInfo",
              path: "/memberInfo",
              roleId: [1, 2],
            },
          ],
          roleId: [1, 2, 3],
          title: "会员管理",
          icon: "android",
        },
        {
          children: [
            {
              title: "账户管理",
              component: "Account/user",
              name: "user",
              path: "/user",
              roleId: [1, 2],
            },
          ],
          roleId: [1, 2, 3],
          title: "用户管理",
          icon: "ant-cloud",
        },
        {
          children: [
            {
              title: "字典管理",
              component: "System/dictionary",
              name: "dictionary",
              path: "/dictionary",
              roleId: [1, 2],
            },
            {
              title: "菜单管理",
              component: "System/menu",
              name: "menu",
              path: "/menu",
              roleId: [1, 2],
            },
          ],
          roleId: [1, 2, 3],
          title: "系统管理",
          icon: "sketch",
        },
      ],
      selectKeys: [],
      openKeys: ["车辆管理"],
    };
  },
  created() {
    if (
      (this.$route.meta && this.$route.meta.title) ||
      (this.$route.meta && this.$route.meta.module)
    ) {
      this.selectKeys = [this.$route.meta.title];
      this.openKeys = [this.$route.meta.module];
    }
  },
};
</script>
<style scoped>
/* // 滚动条本体，要想设置滚动条样式，需要先设置该元素 */
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
/* // 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: pink;
}
/* // 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background-color: skyblue;
}
.left_sider {
  overflow-y: scroll;
}
.layout {
  width: 100vw;
  height: 100vh;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  line-height: 32px;
  color: white;
  font-size: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  overflow: hidden;
}
.logoIcon {
  font-size: 20px;
  margin-right: 6px;
}
.layoutHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0;
}
</style>
