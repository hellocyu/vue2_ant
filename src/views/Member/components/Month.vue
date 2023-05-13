<template>
  <div class="calendar">
    <h3 class="calendar_header">{{ `${year}年${month}月` }}</h3>
    <div class="table">
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
            <span> {{ $_Get_Day_From_Days(row, col) }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
const getArrayByLength = (length) =>
  Array.prototype.concat.apply([], Array(length));
const WEEK_SUNDAY = 0;
const WEEK_SATURDAY = 6;

export const EVENT_STATUS = {
  WORK_DAY: 0,
  REST_DAY: 2,
  VACATION: 1,
};
const DEFAULT_ROW_DAYS = 7;
const JANUARY = 1;
const FEBRUARY = 2;
const DECEMBER = 12;
const BIG_MONTH = [1, 3, 5, 7, 8, 10, 12];

export default {
  name: "memberMonth",
  props: {
    year: {
      type: [String, Number],
      default: "",
    },
    month: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      cols: 7,
      rows: 6,
      today: moment().format("YYYY-MM-DD"),
    };
  },
  computed: {
    days() {
      let row = 0;
      const length = this.getMonthLength(this.year, this.month);
      return getArrayByLength(length)
        .map((_, i) => i + 1)
        .reduce((acc, item) => {
          const date = this.formDate(this.year, this.month, item);
          const day = moment(date).day();
          const status = [WEEK_SUNDAY, WEEK_SATURDAY].includes(day)
            ? EVENT_STATUS.REST_DAY
            : EVENT_STATUS.WORK_DAY;
          if (item === 1 || day % DEFAULT_ROW_DAYS === 0) {
            if (item === 1) {
              acc[++row] = [
                ...this.getLastMonthDays(this.year, this.month).slice(
                  -1 * (day + 1)
                ),
                { day: item, date, status },
              ];
            } else acc[++row] = [undefined, { day: item, date, status }];
          } else acc[row].push({ day: item, date, status });

          if (item === length) {
            const index = Math.max(0, DEFAULT_ROW_DAYS - acc[row].length + 1);
            const nextMonthDays = this.getNextMonthDays(this.year, this.month);
            acc[row] = [...acc[row], ...nextMonthDays.slice(0, index)];

            if (row < this.rows) {
              acc[this.rows] = [
                undefined,
                ...nextMonthDays.slice(index, index + DEFAULT_ROW_DAYS),
              ];
            }
          }
          return acc;
        }, []);
    },
  },
  methods: {
    $_Get_Day_From_Days(row, col) {
      console.log(this.days);
      return this.days?.[row]?.[col]?.day || undefined;
    },
    getMonthLength(year, month) {
      const leap = Number(year) % 4 === 0;
      const isFebruary = Number(month) === FEBRUARY;
      return BIG_MONTH.includes(month)
        ? 31
        : isFebruary
        ? leap
          ? 29
          : 28
        : 30;
    },
    formDate(year, month, day) {
      return `${year}-${`00${month}`.slice(-2)}-${`00${day}`.slice(-2)}`;
    },
    getLastMonthDays(year, month) {
      const isLastYear = Number(month) === JANUARY;
      const m = isLastYear ? DECEMBER : month - 1;
      const length = this.getMonthLength(isLastYear ? year - 1 : year, m);
      return getArrayByLength(length).map((_, i) => ({
        day: i + 1,
        date: null,
        disabled: true,
      }));
    },
    getNextMonthDays(year, month) {
      const isNextYear = Number(month) === DECEMBER;
      const m = isNextYear ? JANUARY : Number(month) + 1;
      const length = this.getMonthLength(isNextYear ? year + 1 : year, m);
      return getArrayByLength(length).map((_, i) => ({
        day: i + 1,
        date: null,
        disabled: true,
      }));
    },
  },
};
</script>

<style scoped>
.calendar {
  width: 220px;
  height: 100%;
  overflow-y: auto;
  border: 1px solid black;
  margin-right: 20px;
  margin-bottom: 20px;
}
.calendar_header {
  text-align: center;
}
.table {
  width: 100%;
  padding: 0 10px;
}
.table .thead .tr {
  display: flex;
  justify-content: space-around;
}
.table .tbody {
  margin-bottom: 10px;
}
.table .tbody .tr {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  /* flex-direction: column;
  align-items: stretch;
  justify-content: flex-start; */
}
.table .tbody .tr .td {
  height: 20px;
  width: 20px;
  background-color: pink;
  text-align: center;
  /* padding: 2px; */
}
</style>
