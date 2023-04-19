<template>
  <div class="calendar">
    <h3 class="calendar_header">2023年1月</h3>
    <div>
      <div class="thead">
        <div class="tr">
          <div class="th">日</div>
          <div class="th">一</div>
          <div class="th">二</div>
          <div class="th">三</div>
          <div class="th">四</div>
          <div class="th">五</div>
          <div class="th">六</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="row in rows" :key="row">
          <div class="td" v-for="col in cols" :key="col">
            <span> 11 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberApply",
  data() {
    return {
      rows: 6,
      cols: 7,
    };
  },
};
</script>

<style scoped>
.calendar {
  width: 250px;
  border: 1px solid black;
}
.calendar_header {
  text-align: center;
}
.thead .tr {
  display: flex;
  justify-content: space-around;
}
.tbody {
  display: flex;
  justify-content: space-around;
}
</style>
