<template>
  <div>
    <FixColumn></FixColumn>
    <CheckColumn></CheckColumn>
  </div>
</template>
<script>
import FixColumn from "@/views/Car/components/FixColumn";
import CheckColumn from "@/views/Car/components/CheckColumn";
export default {
  name: "carInfo",
  components: {
    FixColumn,
    CheckColumn,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
