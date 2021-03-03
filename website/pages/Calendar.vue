<template>
  <div>
    <div class="md:mt-8 ml-8 mr-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold">Calendar</h1>
        <CalendarMonth />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarMonth from "@/components/CalendarMonth";

export default {
  metaInfo: {
    title: "Calendar",
  },
  components: {
    CalendarMonth,
  },
  layout: "NewLayout",
};
</script>
