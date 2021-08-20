<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="mb-10 overflow-hidden rounded">
          <img
          :src="`/images/shows/${show.img}`"
          :alt="show.imgAlt"
          />
        </div>
        <div
          class="pl-8 pr-8 mx-auto"
        >
          <UiHeadline class="mt-4"  level="1">{{show.title}}</UiHeadline>
          <div class="flex">
              <ShowPill :showtype="showType"></ShowPill>
            </div>
          <div
            class="mb-8 text-sm font-semibold leading-relaxed tracking-wide uppercase"
          >
            <div class="flex flex-wrap lg:text-lg">
              <div class="mr-4">
                <span class="text-gray-600">DATE: </span>
                {{ showDate(show.date) }}
              </div>
              <div v-if="isFutureShow" class="mr-4">
                <span class="text-gray-600">TIME: </span>
                {{ show.showTime }}
              </div>
              <div v-if="isFutureShow" class="mr-4">
                <span class="text-gray-600">COST: </span>
                {{ formattedPrice }}
              </div>
              <div v-if="isFutureShow" class="mr-4">
                <span class="text-gray-600">LOCATION: </span>{{ show.location }}
              </div>
              <div v-if="isFutureShow"  class="mr-4">
                <span class="text-gray-600"> </span>{{ show.locationDetail }}
              </div>
            </div>
          </div>
          
          <nuxt-content
            :document="show"
            class="mb-8 prose md:prose-lg lg:prose-xl lg:prose-2xl"
          />

          <client-only>
            <YoutubeWidget v-if="show.youtubeVideo" :videoUrl="show.youtubeVideo"/>
          </client-only>
            
          <a
            v-if="show.ticketURL"
            :href="show.ticketURL"
            class="block w-full px-4 py-2 mb-3 mr-2 text-lg font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            >Buy tickets</a
          >
        </div>
      </div>
    </article>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar";
import UiHeadline from "@/components/ui/UiHeadline";
import YoutubeWidget from "@/components/YoutubeWidget";
import ShowPill from "@/components/ShowPill";
import {isFutureDate} from '@/utils/dates.js'
import {formatShowDate} from '@/utils/dates.js'
import {formatPrice} from '@/utils/format.js'

export default {
  async asyncData({ $content, params }) {
    const show = await $content("shows", params.slug).fetch();
    console.log("Show is:", show);
    return { show };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    }
  },
  computed: {
    isFutureShow() {
      return isFutureDate(this.show.date)
    },
    showType() {
      console.log("SHowType()", this.show.showtype);
       return this.isFutureShow ? this.show.showtype : "Past Show"
    },
    formattedPrice() {
      return formatPrice(this.show.price) 
    }
  },
  layout: "NewLayout",
  components: {
    NavBar,
    UiHeadline,
    YoutubeWidget,
    ShowPill
  }
};
</script>


