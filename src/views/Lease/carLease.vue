<template>
  <div>
    <a-row>
      <a-col :span="12">
        <div class="mutiOne">
          <div class="tagDate">
            <template v-for="item in arrDate">
              <a-tag closable :key="item" @close="() => handleColse(item)">
                {{ item }}
              </a-tag>
            </template>
          </div>
          <a-range-picker
            v-model="date"
            @change="onChange"
            class="rangePicker"
          />
          <a-button type="primary" @click="submit"> 提交 </a-button>
        </div>
      </a-col>
      <a-col :span="12">
        <a-form :form="form">
          <div>日期：</div>
          <template v-for="(k, index) in form.getFieldValue('keys')">
            <div class="timeChange" :key="index">
              <a-form-item>
                <a-range-picker
                  v-decorator="[
                    `forms[${k}].range`,
                    {
                      rules: [
                        { required: true, message: 'Please input your note!' },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-button
                v-if="form.getFieldValue('keys').length > 1"
                type="link"
                class="delete"
                icon="delete"
                @click="removeDate(k)"
              ></a-button>
              <a-button
                icon="plus"
                type="link"
                class="add"
                @click="addDate"
              ></a-button>
            </div>
          </template>

          <a-form-item :wrapper-col="{ span: 6, offset: 3 }">
            <a-button type="primary" html-type="submit" @click="timeSubmit">
              提交
            </a-button>
          </a-form-item>
        </a-form>
        <!-- <a-range-picker @change="onChange" /> -->
      </a-col>
    </a-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "carLease",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      date: undefined,
      arrDate: [],
      // $_index: 0,
    };
  },
  created() {
    this.$created();
  },
  methods: {
    $created() {
      this.$_index = 0;
      this.form.getFieldDecorator("keys", {
        initialValue: [this.$_index.toString()],
        preserve: true, //即便字段不再使用，也保留该字段的值
      });
    },
    onChange(_, dateString) {
      let arrSame = "";
      let arr = "";
      //如果开始时间和结束时间一样，则将开始时间放入数组
      if (dateString[0] === dateString[1]) {
        arrSame = dateString[0];
      } else {
        arr = dateString.join("~");
      }
      //若时间重复或为空则不存入数组
      if (arrSame !== "") {
        if (this.arrDate.indexOf(arrSame) == -1) {
          this.arrDate.push(arrSame);
        }
      } else if (arr !== "") {
        if (this.arrDate.indexOf(arr) == -1) {
          this.arrDate.push(arr);
        }
      }
      this.date = undefined;
    },
    handleColse(tag) {
      const tags = this.arrDate.filter((item) => item !== tag);
      this.arrDate = tags;
    },
    submit() {
      console.log(this.arrDate, "this.arrDate");
    },
    timeSubmit() {
      const dateData = [];
      const { forms } = this.form.getFieldsValue();
      Object.keys(forms).map((key) => {
        const range = {
          time: forms[key].range
            .map((t) => {
              return moment(t).format("YYYY-MM-DD");
            })
            .join("~"),
        };
        dateData.push(range);
      });
      console.log(dateData);

      // keys.map((key) => {
      //   const range = {
      //     time: forms[key].range.map((t) => {
      //       return moment(t).format("YYYY-MM-DD");
      //     }),
      //   };
      //   dateData.push(range);
      // });
      // console.log(dateData);
    },
    addDate() {
      this.form.setFieldsValue({
        keys: [...this.form.getFieldValue("keys"), `${++this.$_index}`],
      });
    },
    removeDate(k) {
      this.form.setFieldsValue({
        keys: this.form.getFieldValue("keys").filter((i) => i !== k),
      });
    },
  },
};
</script>

<style scoped>
.mutiOne {
  width: 90%;
  /* border: 1px solid black; */
}
.tagDate {
  margin: 10px;
}
/deep/.ant-tag {
  font-size: 16px;
}
/deep/.ant-form-item {
  margin-bottom: 0px;
}
.rangePicker {
  margin: 0 10px 10px 10px;
}
.timeChange {
  display: flex;
  align-items: center;
}
.delete {
  margin: 0 0 0 10px;
  color: red;
  background-color: rgb(236, 199, 199);
}
.delete:hover {
  color: white;
  background-color: red;
}

.add {
  color: green;
  margin-left: 10px;
  background-color: lightgreen;
}
.add:hover {
  color: white;
  background-color: green;
}
</style>
