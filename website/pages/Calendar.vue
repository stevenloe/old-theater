<template>
<div class=" wave-section" >
    <!-- <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${item.bgcolor}`"
      />
    </svg> -->



  <!-- content area -->
  <div
    class="z-0 grid grid-cols-1 gap-8 pb-56 pl-8 pr-8 md:pl-12 md:pr-12 wave-content bgColor"
  >
    <div class="">
      <UiHeadline level="1">Calendar</UiHeadline>
      <CalendarMonth />
    </div>
  </div> </div>
</template>

<script>
import CalendarMonth from "@/components/CalendarMonth";
import UiHeadline from "@/components/ui/UiHeadline";

export default {
  data() {
    return {
      item: {
        bgcolor: 'c8ecf7'
      },
    };
  },
  metaInfo: {
    title: "Calendar",
  },
  components: {
    CalendarMonth,
    UiHeadline,
  },
  layout: "NewLayout",
};
</script>

<style>
.bgColor {
  background-color: #c8ecf7;
}

</style>