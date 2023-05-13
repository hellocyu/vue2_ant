<template>
  <div class="layout">
    <div class="top">
      <a-row class="top_boss">
        <a-col :span="8" class="top_left">
          <div class="top_left_id">{{ workshopId }}</div>
          <div class="top_left_text">设备故障</div>
        </a-col>
        <a-col :span="8" class="top_center">
          <OEEChart></OEEChart>
        </a-col>
        <a-col :span="8" class="top_center">
          <GoodChart></GoodChart>
        </a-col>
      </a-row>
    </div>
    <div class="bottom">
      <AxisChart class="axisChart"></AxisChart>
    </div>
  </div>
</template>

<script>
import OEEChart from "./compoments/OEEChart.vue";
import GoodChart from "@/views/WorkShop/compoments/GoodChart";
import AxisChart from "./compoments/AxisChart.vue";
export default {
  name: "WorkShop",
  components: {
    OEEChart,
    GoodChart,
    AxisChart,
  },
  data() {
    return {
      workshopId: "",
    };
  },
  created() {
    const { workshopId } = this.$route.params;
    console.log(workshopId, "workshopId");
    this.workshopId = workshopId;
  },
};
</script>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  border: 2px solid #d19a5b;
  border-radius: 15%;
}
.layout .top {
  height: 30%;
  width: 100%;
  /* background-color: pink; */
}
.layout .top .top_boss {
  height: 100%;
}
.layout .top .top_boss .top_left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.layout .top .top_boss .top_center {
  height: 100%;
}
.layout .top .top_boss .top_left .top_left_id {
  font-size: 50px;
  font-weight: 600;
  color: cadetblue;
  margin-bottom: 5px;
}
.layout .top .top_boss .top_left .top_left_text {
  height: 75px;
  width: 250px;
  border-radius: 7px;
  background-color: #cc202c;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  color: white;
}
.layout .bottom {
  height: 70%;
  width: 100%;
  /* background-color: pink; */
}
.layout .bottom .axisChart {
  height: 100%;
  width: 100%;
  /* background-color: red; */
}
</style>
