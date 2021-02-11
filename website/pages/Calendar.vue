<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>

    <div class="mt-12 ml-8 mr-8">
      <div class="mb-4">
        <h1 class="text-3xl font-semibold">Calendar</h1>
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
  layout: "default",
};
</script>
