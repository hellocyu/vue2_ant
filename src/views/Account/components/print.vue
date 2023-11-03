<template>
  <div>
    <a-button type="primary" @click="onPrint">打印当前页面</a-button>
    <p id="element">6666</p>
  </div>
</template>

<script>
import printJS from "print-js";
export default {
  name: "printJs",
  data() {
    return {};
  },
  methods: {
    onPrint() {
      printJS({
        printable: "element",
        type: "html",
      });
    },
  },
};
</script>

<style></style>
