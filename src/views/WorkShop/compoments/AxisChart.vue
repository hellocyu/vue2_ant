<template>
  <div ref="axisChart" class="axisChart"></div>
</template>

<script>
export default {
  name: "axisChart",
  data() {
    return {
      palceDatas: [
        "8:40 - 9:40",
        "9:40 - 10:40",
        "10:40 - 11:40",
        "10:40 - 12:40",
        "12:40 - 13:40",
        "13:40 - 14:40",
        "14:40 - 15:40",
        "15:40 - 16:40",
        "16:40 - 17:40",
        "17:40 - 18:40",
        "18:40 - 19:40",
        "19:40 - 20:40",
      ],
      palceNum: [45, 11, 22, 63, 33, 44, 54, 55, 66, 200, 77, 88],
    };
  },
  mounted() {
    this.placeCharts();
  },
  methods: {
    placeCharts() {
      let myChart = this.$echarts.init(this.$refs.axisChart);
      myChart.setOption({
        grid: {
          left: "130",
          containLabel: true,
        },
        xAxis: [
          //x轴数据设置
          {
            type: "value",
            // name: "人数",
            min: 0,
            // max: 150,
            interval: 30, //间隔数
            // splitNumber: 5,
            axisLabel: {
              formatter: "{value} ",
            },
            splitLine: {
              //x轴网格线
              show: true,
            },
            axisLine: {
              //这是y轴文字颜色
              lineStyle: {
                color: "#999999",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            offset: 0,
            axisLine: {
              //这是x轴文字颜色
              lineStyle: {
                color: "#999999",
              },
            },
            data: this.palceDatas,
            axisPointer: {
              type: "shadow",
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            data: this.palceNum,
            type: "bar",
            barWidth: 20,
            // label: {
            //   normal: {
            //     show: true,
            //     // position: "right",
            //   },
            // },
            itemStyle: {
              // 通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList = [
                    "#fad352",
                    "#028002",
                    "#fad352",
                    "#fad352",
                    "#028002",
                    "#028002",
                    "#fad352",
                    "#028002",
                    "#fad352",
                    "#028002",
                    "#fad352",
                    "#cc202c", //红色
                  ];
                  return colorList[params.dataIndex];
                },
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
.axisChart {
  width: 100%;
  height: 100%;
  /* background-color: blue; */
}
</style>
