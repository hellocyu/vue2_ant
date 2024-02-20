<template>
  <div>
    <Print></Print>
    <PrintWindow></PrintWindow>
    <barcode></barcode>
    <qrcode></qrcode>
  </div>
</template>

<script>
import Print from "./components/print";
import PrintWindow from "@/views/Account/components/printWindow";
import barcode from "@/views/Account/components/barcode";
import qrcode from '@/views/Account/components/qrcode'

export default {
  name: "accountUser",
  components: { Print, PrintWindow, barcode ,qrcode},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
