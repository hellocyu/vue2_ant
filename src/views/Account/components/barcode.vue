<template>
  <div>
    <barcode :value="barcodeValue" :options="barcode_option">
      条形码显示失败时的内容
      学习链接：https://blog.csdn.net/weixin_63896561/article/details/131245486
    </barcode>
  </div>
</template>

<script>
import barcode from "@xkeshi/vue-barcode";

export default {
  name: "barCode",
  components: { barcode },
  data() {
    return {
      barcodeValue: "666",
      barcode_option: {
        fontSize: "14px",
        height: "50px",
      },
    };
  },
  methods: {},
};
</script>

<style scoped></style>
