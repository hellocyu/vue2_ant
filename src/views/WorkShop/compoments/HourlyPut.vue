<template>
  <div class="chart">
    <div class="chartTable">
      <a-table
        :columns="columns"
        :data-source="data"
        size="small"
        :pagination="false"
      >
        <a-progress
          slot="status"
          slot-scope="status"
          :percent="status"
          stroke-color="red"
          :strokeColor="status > 90 ? 'green' : status > 85 ? 'yellow' : 'red'"
        />
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    key: "time",
    align: "center",
    title: "Time",
    dataIndex: "time",
    width: "10%",
  },
  {
    key: "target",
    title: "Target",
    align: "center",
    dataIndex: "target",
    width: "10%",
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    align: "center",
    scopedSlots: { customRender: "status" },
  },
  {
    key: "sum",
    title: "累计",
    dataIndex: "sum",
    align: "center",
    width: "10%",
  },
];
const data = [
  {
    key: "1",
    time: "8:40-9:40",
    target: "2400",
    status: 46,
    sum: "1600",
  },
  {
    key: "2",
    time: "9:40-10:40",
    target: "2400",
    status: 85,
    sum: "500",
  },
  {
    key: "3",
    time: "10:40-11:40",
    target: "2400",
    status: 90,
    sum: "700",
  },
  {
    key: "4",
    time: "11:40-12:40",
    target: "2400",
    status: 57,
    sum: "1200",
  },
  {
    key: "5",
    time: "12:40-13:40",
    target: "2400",
    status: 73,
    sum: "1300",
  },
  {
    key: "6",
    time: "13:40-14:40",
    target: "2400",
    status: 97,
    sum: "2000",
  },
  {
    key: "7",
    time: "14:40-15:40",
    target: "2400",
    status: 76,
    sum: "2177",
  },
  {
    key: "8",
    time: "15:40-16:40",
    target: "2400",
    status: 14,
    sum: "1689",
  },
  {
    key: "9",
    time: "16:40-17:40",
    target: "2400",
    status: 57,
    sum: "890",
  },
  {
    key: "10",
    time: "17:40-18:40",
    target: "2400",
    status: 70,
    sum: "737",
  },
  {
    key: "11",
    time: "18:40-19:40",
    target: "2400",
    status: 46,
    sum: "600",
  },
  {
    key: "12",
    time: "19:40-20:40",
    target: "2400",
    status: 86,
    sum: "200",
  },
  {
    key: "13",
    time: "summrize",
    target: "2400",
    status: 53,
    sum: "2600",
  },
];
export default {
  name: "hourlyPut",
  data() {
    return {
      data,
      columns,
    };
  },
  mounted() {
    this.getStatus();
  },
  methods: {
    getStatus() {
      // const arr = []
      this.data.forEach((item) => {
        const res = (item.sum / item.target).toFixed(2) * 100;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
td:has(div[class="ant-progress"]) {
  position: relative !important;
}
td:has(div[class="ant-progress"])::after {
  content: "";
  height: 47.8px;
  width: 85%;
  border-right: 2px rgb(233, 233, 10) dotted;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: -1; */
  box-sizing: content-box;
}
/deep/.ant-table-small {
  border: 0;
  height: 100%;
}
/deep/.ant-table-thead > tr > th {
  border: 0;
}
/deep/.ant-table-tbody > tr > td {
  border: 0;
}
/deep/ .ant-table-wrapper .ant-spin-nested-loading .ant-spin-container {
  height: 100%;
}
/deep/
  .ant-table-wrapper
  .ant-spin-nested-loading
  .ant-spin-container
  .ant-table-small
  .ant-table-content {
  height: 100%;
}
/deep/
  .ant-table-wrapper
  .ant-spin-nested-loading
  .ant-spin-container
  .ant-table-small
  .ant-table-content
  .ant-table-body {
  height: 100%;
}
/deep/ .ant-table-small > .ant-table-content > .ant-table-body > table {
  height: 100%;
}
/deep/ .ant-spin-nested-loading {
  height: 100%;
}
/deep/.ant-progress-bg {
  height: 15px !important;
}
.chart {
  width: 100%;
  height: 100%;
}
.chartTable {
  height: 100%;
  /* margin-top: 20px; */
  padding: 30px;
}
/* .status {
  width: 100%;
  height: 80%;
  border: 1px solid #bebbbb;
  border-radius: 30px;
}
.npgroess {
  width: 50%;
  height: 100%;
  border-radius: 30px;
  background-color: red;
} */
</style>
