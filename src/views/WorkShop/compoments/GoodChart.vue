<template>
  <div ref="goodChart" class="goodChart"></div>
</template>

<script>
export default {
  name: "goodChart",
  data() {
    return {
      finallyData: "",
      clientW: document.documentElement.clientWidth,
      // other: "",
    };
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
      this.finallyData = 0.97;
    },
    init() {
      let other = 1 - this.finallyData;
      let data = this.finallyData * 100 + "%";
      var myChart = this.$echarts.init(this.$refs.goodChart);
      let title = "良品率";
      myChart.setOption({
        name: "良品率",
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{b}:{d}%",
        // },
        title: [
          {
            // text: "良品率",
            text: "{total|" + data + "}\n{name|" + title + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                total: {
                  fontSize: this.getFontSize(40),
                  fontWeight: 600,
                  color: "#028002",
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
            name: "良品率",
            type: "pie",
            radius: ["90%", "50%"],
            color: ["#028002", "#ffff"],
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            data: [
              {
                name: "良品率",
                value: this.finallyData,
                selected: true,
                // label: { show: true, fontSize: 40, position: "center" },
              },
              { name: "其他", value: other },
            ],
            itemStyle: {
              normal: {
                border: 20,
                borderColor: "#028002",
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
            tooltip: {
              formatter(params) {
                if (params.name === "出租率") {
                  return params.name + params.percent + "%";
                }
              },
            },
          },
        ],
      });
      // let option = {
      //   name: "出租",
      //   tooltip: {
      //     trigger: "item",
      //     formatter: "{b}:{d}%",
      //   },
      //   series: [
      //     {
      //       name: "出租",
      //       type: "pie",
      //       radius: ["65%", "80%"],
      //       color: ["#0e587e", "#fdaf46"],
      //       label: {
      //         normal: {
      //           position: "inner",
      //           show: false,
      //         },
      //       },
      //       data: [
      //         { name: "其他", value: other.value },
      //         {
      //           name: "出租率",
      //           value: this.finallyData,
      //           selected: true,
      //           label: { show: true, fontSize: 20, position: "center" },
      //         },
      //       ],
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             position: "center",
      //             formatter: "{d}%\n{b}",
      //             fonstSize: 20,
      //             color: "#fdaf46",
      //           },
      //           labelLine: { show: true },
      //         },
      //       },
      //       tooltip: {
      //         formatter(params) {
      //           if (params.name === "出租率") {
      //             return params.name + params.percent + "%";
      //           }
      //         },
      //       },
      //     },
      //   ],
      // };
      // myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.goodChart {
  width: 70%;
  height: 100%;
  /* background-color: pink; */
}
</style>
