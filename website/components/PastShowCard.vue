<template>
  <div class="p-0 bg-white rounded-lg shadow-lg md:flex content-border">
    <!-- image card -->
    <div
      class="m-4 overflow-hidden rounded md:mr-0 md:w-3/12"
    >
      <nuxt-link :to="show.path">
        <img
          class="object-cover "
          :src="`/images/shows/${show.img}`"
          :alt="show.imgAlt"
        />
      </nuxt-link>
    </div>

    <!-- details card -->
    <div
      class="relative pb-3 md:mt-0 md:w-9/12 past-show-label"
    >
      <div class="w-full p-6 pt-2 pb-0">
        <h3 class="mt-3 mb-2 text-2xl font-bold leading-none text-gray-700">
          <nuxt-link :to="show.path">
            {{ show.title }}
          </nuxt-link>
        </h3>
        <div class="flex">
          <ShowPill showtype="past show"></ShowPill>
        </div>
        <div
          class="mb-4 text-sm font-semibold leading-relaxed tracking-wide uppercase flex-start"
        >
          <div>
            <div class="mr-2 text-gray-700">{{ showDate(show.date) }}</div>
          </div>
        </div>
      </div>

      <div
        class="visible mx-6 my-6 text-base text-gray-700"
      >
        {{ show.shortDesc }}
      </div>


    </div>
  </div>
</template>

<script>
import ShowPill from './ShowPill'
import {formatShowDate} from '@/utils/dates.js'
import {formatPrice} from '@/utils/format.js'

export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    },
    showTime(date) {
      return formatShowDate(date, "time")
    },
  },
  computed:{
    formattedPrice() {
      return formatPrice(this.show.price) 
    }
  },
  components: {
    ShowPill
  }
};
</script>



