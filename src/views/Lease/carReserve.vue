<template>
  <div>
    <!-- 表格列动态变换，随着时间的不同列也不同 -->
    <a-form layout="inline" :form="form" class="formStyle">
      <a-form-item label="MonthPicker">
        <a-month-picker v-model="dateValue" @change="initMonths" />
      </a-form-item>
      <a-form-item label="Note">
        <a-input />
      </a-form-item>
    </a-form>
    <a-table
      :columns="columns"
      :data-source="data"
      class="tableStyle"
    ></a-table>
  </div>
</template>

<script>
import moment from "moment";
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
// import moment from 'moment'
export default {
  name: "carLease",
  data() {
    return {
      data,
      columns,
      dateValue: moment(),
      months: [],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "time_related_controls" });
  },
  mounted() {
    this.initMonths();
  },
  methods: {
    initMonths() {
      this.columns.splice(4, 12);
      const current = moment(this.dateValue).format("YYYY-MM");
      this.months = [];
      this.months = Array.prototype.concat
        .apply([], Array(12))
        .map((_, index) => {
          const next = moment(current).add(index, "months");
          const year = next.year();
          const month = next.month();
          this.columns.push({
            key: `N${index}`,
            dataIndex: `N{index}`,
            title: `${year}年${month + 1}月`,
          });
        });
    },
  },
};
</script>

<style scoped>
.formStyle {
  margin-bottom: 20px;
}
/* .tableStyle {
  overflow-x: scroll;
} */
</style>
