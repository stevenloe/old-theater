<template>
  <div>
    <div class="ml-8 mr-8 md:mt-8">
      <div class="mb-8">
        <UiHeadline level="1" >Calendar</UiHeadline>
        <CalendarMonth />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarMonth from "@/components/CalendarMonth";
import UiHeadline from "@/components/ui/UiHeadline";

export default {
  metaInfo: {
    title: "Calendar",
  },
  components: {
    CalendarMonth,
    UiHeadline
  },
  layout: "NewLayout",
};
</script>
