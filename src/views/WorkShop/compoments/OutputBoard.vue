<template>
  <div ref="outputChart" class="goodChart"></div>
</template>

<script>
export default {
  name: "goodChart",
  data() {
    return {
      chartData: "",
      title: "",
      color: "",
      clientW: document.documentElement.clientWidth,
    };
  },
  props: {
    finallyData: {
      type: Number,
    },
    chartTitle: {
      type: String,
    },
    chartColor: {
      type: String,
    },
  },
  mounted() {
    this.getFinallyData();
    this.init();
  },
  methods: {
    getFontSize(num) {
      return (this.clientW / 1336) * num;
    },
    getFinallyData() {
      this.chartData = this.finallyData;
      console.log(this.chartData, "this.chartData");
    },
    init() {
      let other = 100 - this.chartData;
      let data = this.chartData + "%";
      var myChart = this.$echarts.init(this.$refs.outputChart);
      let title = this.chartTitle;
      let color = this.chartColor;
      myChart.setOption({
        title: [
          {
            text: "{total|" + data + "}\n{name|" + title + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                total: {
                  fontSize: this.getFontSize(40),
                  fontWeight: 600,
                  color: color,
                  padding: [10, 0],
                },
                name: {
                  fontSize: this.getFontSize(20),
                  fontWeight: 600,
                  color: "#666666",
                },
              },
            },
          },
        ],
        series: [
          {
            type: "pie",
            radius: ["90%", "50%"],
            color: [color, "#ffff"],
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            data: [
              {
                value: this.chartData,
                selected: true,
              },
              { name: "其他", value: other },
            ],
            itemStyle: {
              normal: {
                border: 20,
                borderColor: color,
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.goodChart {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
</style>
