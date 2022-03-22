<template>
<div class=" wave-section" >
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

<style scoped>
.bgColor {
  background-color: #c8ecf7;
}

</style>