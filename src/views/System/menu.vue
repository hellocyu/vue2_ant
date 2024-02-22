<template>
  <div>
    <button @click="random">random</button>
    <transition-group move-class="mm" tag="div" class="wraps">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: "systemMenu",
  data() {
    // Array.prototype.concat.apply([], new Array(81)) === Array.apply(null,{length:81}) === [...new Array(81)]
    const list = Array.prototype.concat.apply([], new Array(81)).map((_, index) => {
      return {
        id: index,
        number: (index % 9)+1
      }
    })
    return {
      list
    }
  },
  methods: {
    random() {
      //shuffle打乱顺序重新排列
      this.list = _.shuffle(this.list)
    }
  }
};
</script>

<style scoped>
  .wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 9 + 9px);
    margin-top: 10px;
  }
  .items {
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    border: 1px solid #ccc;
  }
  .mm {
    transition: all 1s;
  }
</style>
