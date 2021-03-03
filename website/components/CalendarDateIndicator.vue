<template>
  <div class="font-semibold text-3xl ml-2 md:text-center md:w-1/3 self-center">{{ selectedMonth }}</div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    }
  }
};
</script>


