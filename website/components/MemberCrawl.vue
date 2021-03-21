<template>
  <div
    class="overflow-hidden bg-white border-8 border-blue-700 shadow-lg rounded-xl"
  >
    <div class="bg-blue-700">
      <div
        class="flex p-5 pt-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
      >
        Thanks to our 2021 Members!
      </div>
      <client-only>
        <MemberCarousel />
      </client-only>
    </div>
  </div>
</template>

<script>
import MemberCarousel from "@/components/MemberCarousel";
export default {
  components: {
    MemberCarousel,
  },
};
</script>
