<template>
  <li
    class="border border-gray-400 md:min-h-32"
    :class="
      day.isCurrentMonth ? 'bg-white' : 'bg-gray-300 hidden md:inline-block'
    "
  >
    <div class="flex justify-end">
      <div class="block w-full mx-2">
        <div class="flex justify-between">
          <div>
            <div class="inline-block md:hidden">
              {{ weekday }}
            </div>
          </div>
          
          <div
            :class="
              isToday
                ? 'text-white font-semibold w-6 h-6 rounded-full my-1 bg-gray-900 -mr-1'
                : 'text-gray-700'
            "
            class="flex justify-center items-center font-light mr-1"
          >
            {{ label }}
          </div>
        </div>
      </div>
    </div>

    <ul v-if="day.eventsToday">
      <CalendarMonthDayEventItem :eventsToday="day.eventsToday" />
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
    weekday() {
      return dayjs(this.day.date).format("ddd");
    },
  },
  components: {
    CalendarMonthDayEventItem,
  },
};
</script>

