<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <span class="logoIcon"><a-icon type="code-sandbox" /></span>
        <span v-if="!collapsed">车辆管理系统</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-sub-menu v-for="(item, index) in minMenus" :key="index">
          <template #title>
            <span>
              <a-icon :type="item.icon" />
              <span>{{ item.title }}</span>
            </span>
          </template>
          <a-menu-item
            v-for="(item1, index1) in item.children"
            :key="index + '-' + index1"
            @click="$router.push(item1.path)"
            >{{ item1.title }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
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
          title: "账户管理",
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
    };
  },
};
</script>
<style>
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
</style>
