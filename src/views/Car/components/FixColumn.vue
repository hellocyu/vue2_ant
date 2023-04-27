<template>
  <div>
    <div class="formStyle">
      <a-form :form="form" layout="inline" class="formItemStyle">
        <a-form-item label="Note">
          <a-input v-decorator="['note']" />
        </a-form-item>
        <a-form-item label="Gender">
          <a-select v-decorator="['gender']">
            <a-select-option value="male"> male </a-select-option>
            <a-select-option value="female"> female </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="date">
          <a-range-picker @change="onChange" v-decorator="['date']" />
        </a-form-item>
      </a-form>
      <div>
        <a-button class="reset" @click="form.resetFields()">重置</a-button>
        <a-button type="primary" @click="search"> 查询 </a-button>
      </div>
    </div>
    <!-- 选择列固定 -->
    <a-table :columns="columns" :data-source="data">
      <template v-for="item in columns" v-slot:[item.slots.title]>
        <a-checkbox
          :key="item.key"
          :checked="item.fixed"
          v-if="fixedColumnFlag"
          @change="onFixedColumn(item)"
        >
          {{ item.slots.title }}
        </a-checkbox>
      </template>
    </a-table>
  </div>
</template>

<script>
import { columns, data } from "../config/columns";
export default {
  name: "fixCol",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
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
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    search() {
      const data = this.form.getFieldsValue();
      console.log(data);
    },
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

<style scoped>
/deep/.ant-form-item-control {
  width: 200px;
}
.formStyle {
  display: flex;
  justify-content: space-between;
}
.formItemStyle {
  margin-bottom: 20px;
}
.reset {
  margin-right: 10px;
}
</style>
