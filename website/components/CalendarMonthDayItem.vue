<template>
  <li

  
    class="calendar-day"
    :class="day.isCurrentMonth ? 'bg-white' : 'bg-gray-200'"
  >
    <div class="flex justify-end">
      <div
        :class="
          isToday
            ? 'text-white font-semibold w-6 h-6 rounded-full bg-gray-900'
            : 'text-gray-600'
        "
        class="flex justify-center items-center font-light mr-1"
      >
        {{ label }}
      </div>
    </div>

    <ul v-if="day.items">
      <CalendarMonthDayEventItem :items="day.items" />
    </ul>
  </li>
</template>

<script>
import dayjs from "dayjs";
import CalendarMonthDayEventItem from "./CalendarMonthDayEventItem";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    },
  },
  components: {
    CalendarMonthDayEventItem,
  },
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 90px;
  margin: 1px;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}

.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
