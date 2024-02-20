<template>
  <div>
    <img :src="qrCodeSrc" />
  </div>
</template>

<script>
  import QRCode from 'qrcode' 
  export default {
    name: "qrCode",
    data(){
      return {
        qrCodeSrc:''
      }
    },
    created(){
      this.createdQRCode()
    },
    methods:{
      async createdQRCode(){
        this.qrCodeSrc = await QRCode.toDataURL('come on~',{width: 200,height:200})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>