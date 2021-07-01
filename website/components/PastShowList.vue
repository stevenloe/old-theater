<template>
  <div>
    <div v-for="show of pastShows" :key="show.title" class="mb-8">
      <PastShowCard :show="show" />
  </div>
  </div>
</template>

<script>
  import PastShowCard from './PastShowCard'
  import {formatShowDate} from '@/utils/dates.js'
  
export default {
  props: {
    pastShows: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    },
    showTime(date) {
      return formatShowDate(date, "time")
    }
  },
  components: {
    PastShowCard
  }
};
</script>