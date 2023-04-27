<template>
  <div>
    <div ref="chartColumn" class="chartStyle"></div>
  </div>
</template>

<script>
export default {
  name: "memberInfo",
  data() {
    return {
      option: {
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.chartColumn = this.$echarts.init(this.$refs.chartColumn);
      this.chartColumn.setOption(this.option);
    },
  },
};
</script>

<style scoped>
.chartStyle {
  width: 100%;
  height: 400px;
}
</style>
