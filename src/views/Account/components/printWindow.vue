<template>
  <div>
    <div class="button1">
      <a-button type="primary" @click="onPrint">打印方法之window</a-button>
      <div v-show="false">
        <iframe v-show="false" ref="iframe"></iframe>
        <section ref="content">
          <P class="styleContent">打印内容</P>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "printWindow",
  data() {
    return {
      styled: `<style>
                .styleContent {
                  color: blue;
                }
              </style>`,
    };
  },
  methods: {
    onPrint() {
      this.resetContent();
      this.writeContent();
      this.toPrint();
    },
    toPrint() {
      this.$refs.iframe.contentWindow.print();
    },
    //将文本内容写入ifram中
    writeContent() {
      const innerHtml = this.$refs.content.innerHTML;
      this.$refs.iframe.contentDocument.write(this.styled, innerHtml);
    },
    //清空上一次存入的内容
    resetContent() {
      this.$refs.iframe.contentDocument.body.innerHTML = "";
    },
  },
};
</script>

<style scoped>
.button1 {
  margin-top: 10px;
}
</style>
