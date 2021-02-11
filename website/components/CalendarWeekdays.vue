<template>
  <ol class="grid grid-cols-7">
    <li
      class="text-right p-2 font-semibold font-2xl bg-white pt-5"
      v-for="weekday in weekdays"
      :key="weekday"
    >
      {{ weekday }}
    </li>
  </ol>
</template>

<script>
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "CalendarWeekdays",
  computed: {
    weekdays() {
      return WEEKDAYS;
    },
  },
};
</script>

