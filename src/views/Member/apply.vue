<template>
  <div class="canlender">
    <Month
      v-for="month in MONTH_COUNT"
      :key="month"
      :month="month"
      :year="year"
      :current.sync="current"
      @click="handlerClick"
    ></Month>
  </div>
</template>

<script>
import Month from "./components/Month.vue";
import moment from "moment";
export default {
  name: "memberApply",
  components: {
    Month,
  },
  data() {
    return {
      MONTH_COUNT: 12,
      year: moment().year(),
      current: moment().format("YYYY-MM-DD")
    };
  },
  methods: {
    handlerClick(date) {
      this.current = date
    }
  }
};
</script>

<style scoped>
.canlender {
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
}
</style>
