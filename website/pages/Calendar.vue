<template>
  <div>
    <div class="ml-8 mr-8 md:mt-8">
      <div class="mb-8">
        <UiHeadline id="level-1-headline" level="1" >Calendar</UiHeadline>
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
