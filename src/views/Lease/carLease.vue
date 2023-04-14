<template>
  <div>
    <div class="tagDate">
      <template v-for="item in arrDate">
        <a-tag closable :key="item" @close="() => handleColse(item)">
          {{ item }}
        </a-tag>
      </template>
    </div>
    <a-range-picker v-model="date" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: "carLease",
  data() {
    return {
      date: undefined,
      arrDate: [],
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.tagDate {
  margin-bottom: 10px;
}
/deep/.ant-tag {
  font-size: 16px;
}
</style>
