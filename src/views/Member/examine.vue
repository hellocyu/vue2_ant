<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <a-tag
      :color="text == '1' ? 'blue' : text == 2 ? 'green' : 'red'"
      slot="status"
      slot-scope="text"
      >{{ statusMap.get(parseInt(text)) }}</a-tag
    >
    <span slot="age" slot-scope="age, { key }">
      <a-switch
        :checked="age"
        @change="(checked) => onChange(checked, key)"
      />{{ age }}
    </span>
  </a-table>
</template>

<script>
const statusMap = new Map([
  [1, "解析成功"],
  [2, "已签收"],
  [3, "解析失败"],
]);
const listMap = new Map([
  ["a", "宝马"],
  ["b", "Jeep"],
  ["c", "特斯拉"],
]);
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "List",
    dataIndex: "list",
    key: "list",
    // slots: { title: "list" },
    // customRender: (value) => {
    //   value = listMap.get(value);
    //   return value;
    // },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
    scopedSlots: { customRender: "age" },
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true,
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true,
  },
];
const data = [
  {
    key: "1",
    list: "a",
    status: "1",
    name: "John Brown",
    age: true,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    list: "b",
    status: "2",
    name: "Jim Green",
    age: false,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    list: "c",
    status: "3",
    name: "Joe Black",
    age: false,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  name: "memberExamine",
  data() {
    return {
      data,
      columns,
      statusMap,
    };
  },

  mounted() {
    this.pipeColumn();
  },
  methods: {
    onChange(checked, key) {
      this.data[key - 1].age = checked;
    },
    renderDom(value) {
      value = listMap.get(value);
      return <b>{value}</b>;
    },
    pipeColumn() {
      this.columns = this.columns.map((item) => {
        //方法一
        if (item.key === "list") {
          return {
            ...item,
            customRender: (value, record) =>
              this.renderDom(value, record, item.key),
          };
        } else return item;
        //方法二
        // return {
        //   ...item,
        //   ...(item.key === "list"
        //     ? {
        //         customRender: (value, record) =>
        //           this.renderDom(value, record, item.key),
        //       }
        //     : {}),
        // };
      });
    },
  },
};
</script>

<style></style>
