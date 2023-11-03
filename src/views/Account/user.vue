<template>
  <div>
    <Print></Print>
    <PrintWindow></PrintWindow>
    <barcode></barcode>
  </div>
</template>

<script>
import Print from "./components/print";
import PrintWindow from "@/views/Account/components/printWindow";
import barcode from "@/views/Account/components/barcode";

export default {
  name: "accountUser",
  components: { Print, PrintWindow, barcode },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
