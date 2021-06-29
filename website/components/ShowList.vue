<template>
  <div>
    <div
      class="p-0 m-4 rounded-lg shadow-lg sm:m-8 md:flex md:m-8 md:mr-8 content-border"
      v-for="show of shows"
      :key="show.title"
    >

      <!-- image card -->
      <div
        class="relative overflow-hidden rounded-lg md:w-7/12 md:rounded-r-none text"
      >
        <nuxt-link  :to="show.path">
          <img class="object-cover w-full h-full " :src="`/images/shows/${show.img}`" :alt="show.imgAlt" />
        </nuxt-link>
      </div>

      <!-- details card -->
      <div
        class="relative pb-3 -mt-1 bg-white border rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg md:w-5/12"
      >
        <div class="w-full p-6 pt-2 pb-0">
          <h3 class="mt-3 mb-2 text-4xl font-bold leading-none">
            {{ show.title }}
          </h3>
          <div class="flex">
            <ShowPill :showtype="show.showtype"></ShowPill>
          </div>
          <div
            class="mb-4 text-sm font-semibold leading-relaxed tracking-wide uppercase flex-start"
          >
          <div>
            
          <span class="mr-2">{{ showDate(show.date) }}</span>
        {{ showTime(show.date) }}
          </div>
            <span class="mr-2">${{ show.formattedPrice }}</span>
            <div class="flex flex-wrap" v-if="show.location">
              <div>At {{ show.location }}</div>
            </div>
          </div>
        </div>

        <div
          class="visible mx-6 my-6 text-gray-700 md:hidden lg:block xl:text-lg lg:mt-6"
        >
          {{ show.shortDesc }}
        </div>

        <div class="flex justify-end w-full pb-0 pl-6 pr-6 md:inline-block">
          <a
            v-if="show.ticketURL"
            :href="show.ticketURL"
            class="px-4 py-2 mb-3 mr-2 font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg md:block hover:bg-blue-700"
          >
            Buy tickets</a
          >
          <nuxt-link
            :to="show.path"
            class="w-full px-4 py-2 mb-3 font-bold tracking-wide text-center text-white uppercase bg-gray-600 rounded-lg shadow-lg md:block hover:bg-gray-700"
          >
            Learn More</nuxt-link
          >
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import ShowPill from './ShowPill'
import {formatShowDate} from '@/utils/dates.js'
export default {
  props: {
    shows: {
      type: Array,
      required: true
    }
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
    ShowPill
  }
}
</script>
