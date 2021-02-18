<template>
  <div class="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
    <div class="flex justify-between bg-white py-4">
      
      <div class="hidden md:block w-1/3"></div>

      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header-selected-month"
      />

      <CalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

    <CalendarWeekdays />

    <ol class="days-grid grid grid-cols-1 md:grid-cols-7 border-t border-gray-400">
      <CalendarMonthDayItem
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
      />
    </ol>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import CalendarMonthDayItem from "./CalendarMonthDayItem";
import CalendarDateIndicator from "./CalendarDateIndicator";
import CalendarDateSelector from "./CalendarDateSelector";
import CalendarWeekdays from "./CalendarWeekdays";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: "CalendarMonth",

  components: {
    CalendarMonthDayItem,
    CalendarDateIndicator,
    CalendarDateSelector,
    CalendarWeekdays,
  },

  data() {
    return {
      selectedDate: dayjs(),
      eventItems: {
        "2020-21-21": {
          eventsToday: [
            {
              date: "2020-21-21",
              type: "Friday Flick",
              name: "Scrooged",
              time: "5:30 PM",
              url: "/scrooged",
            },
          ],
        },
        "2021-01-12": {
          eventsToday: [
            {
              date: "2020-01-12",
              type: "Casting Call",
              name: 'Casting call for "Sex Please Were Sixty"',
              time: "3:00 PM",
              url: "/news/casting-call-sex-please",
            },
            {
              date: "2021-01-12",
              type: "Friday Flick",
              name: "Goldfinger",
              time: "6:00 PM",
              url: "/goldfinger",
            },
          ],
        },
        "2021-02-05": {
          eventsToday: [
            {
              date: "2021-02-05",
              type: "Theatrical Performance",
              name: "Nunsense",
              time: "6:30 PM",
              url: "/nunsense",
            },
          ],
        },
        "2021-02-14": {
          eventsToday: [
            {
              date: "2021-02-14",
              type: "Live Music",
              name: "Barbra Lica",
              time: "5:30 PM",
              url: "/barbra-lica",
            },
          ],
        },
      },
    };
  },

  computed: {
    days() {
      let days = [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays,
      ];

      days.forEach((day) => {
        if (this.eventItems[day.date]) {
          console.log("FOUND", this.eventItems[day.date].eventsToday[0]);
          day.eventsToday = this.eventItems[day.date].eventsToday;
        }
      });

      return days;
    },

    today() {
      return dayjs().format("YYYY-MM-DD");
    },

    month() {
      return Number(this.selectedDate.format("M"));
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    numberOfDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentMonth: true,
        };
      });
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday;

      const previousMonthLastSundayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() + 1}-${
                previousMonthLastSundayDayOfMonth + index
              }`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false,
          };
        }
      );
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");
      const visibleNumberOfDaysFromNextMonth = 6 - lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false,
        };
      });
    },
  },

  methods: {
    getWeekday(date) {
      return dayjs(date).weekday();
    },

    selectDate(newSelectedDate) {
      this.selectedDate = newSelectedDate;
    },
  },
};
</script>
