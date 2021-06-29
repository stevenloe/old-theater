<template>
  <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg content-border">
    <div class="mb-12" v-for="show of pastShows" :key="show.title">
      <div
        class="mb-1 text-sm font-semibold uppercase text-gray-00 md:text-base lg:text-lg"
      >
        <span class="mr-2">{{ showDate(show.date) }}</span>
        {{ showTime(show.date) }}
      </div>
      <h2
        class="text-xl font-semibold text-gray-600 sm:text-2xl md:text-3xl lg:text-4xl"
      >
        <nuxt-link :to="`${show.slug}?page=index`"> {{ show.title }}</nuxt-link>
      </h2>
      <nuxt-content
        class="mx-auto prose-sm prose sm:prose xl:prose-lg "
        :document="show"
      />
    </div>
  </div>
</template>

<script>
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
};
</script>