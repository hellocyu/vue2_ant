<template>
  <div class="layout">
    <div class="top">
      <a-row class="top_boss">
        <a-col :span="10" class="top_left">
          <div
            class="top_left_id"
            :style="{ fontSize: `${this.getClineFontSize()}px` }"
          >
            {{ workshopId }}
          </div>
          <div class="top_left_text">生产中</div>
        </a-col>
        <a-col :span="7" class="top_center">
          <OutputBoard
            class="top_center"
            :finallyData="finallyOEEData"
            chartTitle="OEE"
            chartColor="#fad352"
          ></OutputBoard>
        </a-col>
        <a-col :span="7" class="top_center">
          <OutputBoard
            class="top_center"
            :finallyData="finallyGoodData"
            chartTitle="良品率"
            chartColor="#028002"
          ></OutputBoard>
        </a-col>
      </a-row>
    </div>
    <div class="bottom">
      <HourlyPut class="axisChart"></HourlyPut>
    </div>
  </div>
</template>

<script>
// import OEEChart from "./compoments/OEEChart.vue";
// import GoodChart from "@/views/WorkShop/compoments/GoodChart";
// import AxisChart from "./compoments/AxisChart.vue";
import OutputBoard from "@/views/WorkShop/compoments/OutputBoard";
import HourlyPut from "@/views/WorkShop/compoments/HourlyPut";
export default {
  name: "WorkShop",
  components: {
    // OEEChart,
    // GoodChart,
    // AxisChart,
    OutputBoard,
    HourlyPut,
  },
  data() {
    return {
      workshopId: "",
      fontsize: "",
      clientW: document.documentElement.clientWidth,
      size: 0,
      finallyOEEData: 0,
      finallyGoodData: 0,
    };
  },
  created() {
    const { workshopId } = this.$route.params;
    this.workshopId = workshopId;
    this.getGoodData();
    this.getoeeData();
  },
  mounted() {},
  methods: {
    getGoodData() {
      this.finallyGoodData = Number("97");
    },
    getoeeData() {
      this.finallyOEEData = Number("83");
    },
    getClineFontSize() {
      const length = this.workshopId.length;
      if (length < 8) {
        return this.getFontSize(100);
      } else if (length < 10) {
        return this.getFontSize(90);
      } else if (length < 12) {
        return this.getFontSize(80);
      } else if (length < 14) {
        return this.getFontSize(70);
      } else if (length < 16) {
        return this.getFontSize(60);
      } else if (length < 18) {
        return this.getFontSize(50);
      } else {
        return this.getFontSize(40);
      }
    },
    getFontSize(num) {
      this.size = (this.clientW / 1336) * num;
      return Math.ceil(this.size);
    },
  },
};
</script>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  border: 5px solid #d19a5b;
  /* margin: 20px; */
  border-radius: 15%;
}
.layout .top {
  height: 40%;
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
  /* font-size: 150px; */
  font-weight: 600;
  color: cadetblue;
  margin-bottom: 20px;
}
.layout .top .top_boss .top_left .top_left_text {
  height: 125px;
  width: 400px;
  border-radius: 7px;
  background-color: green;
  font-size: 80px;
  font-weight: 700;
  text-align: center;
  color: white;
}
.layout .bottom {
  height: 60%;
  width: 100%;
  /* background-color: pink; */
}
.layout .bottom .axisChart {
  height: 100%;
  width: 100%;
  /* background-color: red; */
}
</style>
