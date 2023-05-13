import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
import moment from "moment";

Vue.config.productionTip = false;
Vue.use(Antd);

// 日期中文选择全局设置，从周日开始
moment.updateLocale("zh-cn", {
  week: {
    dow: 0, // 星期的第一天是星期日
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
