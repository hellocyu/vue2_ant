<template>
  <div>
    <a-button @click="onClick">选中某一行及其后面所有</a-button>
    <a-table
      :row-selection="rowSelection"
      :columns="columns"
      :data-source="data"
      :scroll="{ y: 200 }"
    />
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default {
  name: "checkColumn",
  data() {
    return {
      columns,
      data,
      countData: [],
      selectedRowKeys: [],
    };
  },
  mounted() {
    this.onCountData();
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        onSelect: this.onSelectChange,
        onSelectAll: this.onSelectAll,
      };
    },
  },
  methods: {
    // 获取数据的总数量并整理成数组
    onCountData() {
      const dataLength = this.data.length;
      for (let i = 0; i < dataLength; i++) {
        this.countData.push(i);
      }
    },
    onSelectAll() {
      this.onSelectChange({ key: 0 });
    },
    onSelectChange(record) {
      let newSelectedRowKeys = [];
      let current_first = this.selectedRowKeys?.[0];
      this.countData.forEach((item) => {
        if (item >= record?.key && record?.key !== current_first) {
          newSelectedRowKeys.push(item);
        }
      });
      this.selectedRowKeys = newSelectedRowKeys;
    },

    onClick() {
      const params = [];
      this.selectedRowKeys.forEach((item) => {
        params.push(this.data[item]);
      });
      console.log(params, "params");
    },
  },
};
</script>

<style scoped>
.tableHeight {
  overflow-y: scroll;
}
</style>
