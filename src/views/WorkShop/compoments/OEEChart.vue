<template>
  <div ref="oeeChart" class="oeeChart"></div>
</template>

<script>
export default {
  name: "oeeChart",
  data() {
    return {
      clientW: document.documentElement.clientWidth,
    };
  },
  mounted() {
    this.drawPine();
  },
  methods: {
    getFontSize(num) {
      return (this.clientW / 1336) * num;
    },
    getTotal() {
      return 83;
    },
    drawPine() {
      let chart = this.$echarts.init(this.$refs.oeeChart);
      let title = "OEE";
      let other = 100 - this.getTotal();
      chart.setOption({
        title: [
          {
            text: "{total|" + this.getTotal() + "%" + "}\n{name|" + title + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                total: {
                  fontSize: this.getFontSize(40),
                  fontWeight: 600,
                  color: "#d19a66",
                  padding: [20, 0],
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
        labelLine: {
          show: false,
        },
        series: [
          {
            type: "pie",
            radius: ["90%", "50%"],
            color: ["red", "#ffff"],
            center: ["50%", "50%"],
            label: {
              show: false,
            },
            data: [
              { value: this.getTotal(), name: "OEE" },
              { value: other, name: "" },
            ],
            itemStyle: {
              normal: {
                border: 20,
                borderColor: "red",
                // label: {
                //   show: true,
                //   position: "center",
                //   // formatter: "{d}%\n{b}",
                //   formatter: "{d}%",
                //   fonstSize: 40,
                //   color: "red",
                // },
                // labelLine: { show: true },
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
.oeeChart {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
</style>
