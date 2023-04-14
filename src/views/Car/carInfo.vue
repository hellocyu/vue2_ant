<template>
  <div>
    <!-- 选择列固定 -->
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1000, y: 500 }"
    >
      <template v-for="item in columns" v-slot:[item.slots.title]>
        <a-checkbox
          :key="item.key"
          :checked="item.fixed"
          v-if="fixedColumnFlag"
          @change="onFixedColumn(item)"
        >
          {{ item.slots.title }}
        </a-checkbox>
        <!-- <span :key="item.key">{{ item.slots.title }}</span> -->
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    // title: "Name",
    dataIndex: "name",
    key: "name",
    slots: { title: "Name" },
    width: 200,
    // scopedSlots: { customRender: "name" },
  },
  {
    // title: "Age",
    dataIndex: "age",
    key: "age",
    slots: { title: "Age" },
    width: 200,
  },
  {
    // title: "Address",
    dataIndex: "address",
    key: "address",
    slots: { title: "Address" },
    width: 200,
  },
  {
    // title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
    slots: { title: "Tags" },
    width: 200,
  },
  {
    // title: "Test1",
    key: "test1",
    dataIndex: "test1",
    scopedSlots: { customRender: "test1" },
    slots: { title: "Test1" },
    width: 200,
  },
  {
    // title: "Test2",
    key: "test2",
    dataIndex: "test2",
    scopedSlots: { customRender: "test2" },
    slots: { title: "Test2" },
    width: 200,
  },
  {
    // title: "Test3",
    key: "test3",
    dataIndex: "test3",
    scopedSlots: { customRender: "test3" },
    slots: { title: "Test3" },
    width: 200,
  },
  {
    // title: "Test4",
    key: "test4",
    dataIndex: "test4",
    scopedSlots: { customRender: "test4" },
    slots: { title: "Test4" },
    width: 200,
  },
  {
    // title: "Test5",
    key: "test5",
    dataIndex: "test5",
    scopedSlots: { customRender: "test5" },
    slots: { title: "Test5" },
    width: 200,
  },
  {
    // title: "Test6",
    key: "test6",
    dataIndex: "test6",
    scopedSlots: { customRender: "test6" },
    slots: { title: "Test6" },
    width: 200,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: "nice",
    test1: 33,
    test2: 33,
    test3: 33,
    test4: 33,
    test5: 33,
    test6: 33,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: "loser",
    test1: 33,
    test2: 33,
    test3: 33,
    test4: 33,
    test5: 33,
    test6: 33,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: "cool",
    test1: 33,
    test2: 33,
    test3: 33,
    test4: 33,
    test5: 33,
    test6: 33,
  },
];

export default {
  name: "carInfo",
  data() {
    return {
      data,
      columns,
      fixedColumnFlag: "order-tracking",
      defaultFixedColumnSelect: [],
      cloneCloumns: [],
    };
  },
  created() {
    this.cloneCloumns = JSON.parse(JSON.stringify(this.columns));
  },
  methods: {
    onFixedColumn(value) {
      // 将选中的列存放入defaultFixedColumnSelect数组中
      const ind = this.defaultFixedColumnSelect.indexOf(value.key);
      if (ind === -1) {
        this.defaultFixedColumnSelect = [
          ...this.defaultFixedColumnSelect,
          value.key,
        ];
      } else {
        this.defaultFixedColumnSelect.splice(ind, 1);
      }

      // 将选中的列和未选中的列排序存放到newArr数组中  方法一
      let arr = [];
      let arr1 = [];
      let newArr = [];
      this.cloneCloumns.forEach((item) => {
        if (this.defaultFixedColumnSelect.includes(item.key)) {
          arr.push(item);
        } else {
          arr1.push(item);
        }
        newArr = [...arr, ...arr1];
      });
      // 将选中的列加一个属性fixed;
      this.columns = newArr.map((item) => {
        if (this.defaultFixedColumnSelect.includes(item.key)) {
          return {
            ...item,
            fixed: true,
          };
        } else {
          return {
            ...item,
            fixed: false,
          };
        }
      });
      // 将选中的列和未选中的列排序存放到newArr数组中  方法二
      // let arr = JSON.parse(JSON.stringify(this.cloneCloumns));
      // let arr1 = JSON.parse(JSON.stringify(this.cloneCloumns));
      // arr = arr.filter((item) => {
      //   if (this.defaultFixedColumnSelect.includes(item.key)) {
      //     item.fixed = true;
      //     return item;
      //   }
      // });
      // arr1 = arr1.filter((item) => {
      //   if (!this.defaultFixedColumnSelect.includes(item.key)) {
      //     item.fixed = false;
      //     return item;
      //   }
      // });
      // this.columns = [...arr, ...arr1];
    },
  },
};
</script>

<style scoped></style>
