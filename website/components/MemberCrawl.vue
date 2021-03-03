<template>
  <div
    class=" border-8 rounded-xl border-blue-700 bg-white overflow-hidden shadow-lg"
  >
    <div class="bg-blue-700">
      <div
        class="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight flex text-white p-5 pt-3"
      >
        Thanks to our 2021 Members!
      </div>

      <MemberCarousel />
    </div>
  </div>
</template>

<script>
import MemberCarousel from "@/components/MemberCarousel";
export default {
  components: {
    MemberCarousel,
  },
  created: function () {
    // `this` points to the vm instance
    console.log("------- CREATED CRAWL ----------");
  },
};
</script>
