<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="mb-10 overflow-hidden rounded">
          <img
          :src="`/images/shows/${article.img}`"
          :alt="article.imgAlt"
          />
        </div>
        <div
          class="pl-8 pr-8 mx-auto"
        >
          <UiHeadline class="mt-4"  level="1">{{article.title}}</UiHeadline>
          <div class="flex">
              <ShowPill :showtype="showType"></ShowPill>
            </div>
          <div
            class="mb-8 text-sm font-semibold leading-relaxed tracking-wide uppercase"
          >
            <div class="flex flex-wrap lg:text-lg">
              <div class="mr-4">
                <span class="text-gray-600">DATE: </span>
                {{ showDate(article.date) }}
              </div>
              <div v-if="isFutureShow">
                
                <div class="mr-4">
                  <span class="text-gray-600">TIME: </span>
                  {{ article.showTime }}
                </div>
                <div class="mr-4">
                  <span class="text-gray-600">COST: </span>
                  ${{ article.price }}
                </div>
                <div v-if="article.location" class="mr-4">
                  <span class="text-gray-600">LOCATION: </span>{{ article.location }}
                </div>
                <div v-if="article.locationDetail" class="mr-4">
                  <span class="text-gray-600"> </span>{{ article.locationDetail }}
                </div>
              </div>
            </div>
          </div>
          
          <nuxt-content
            :document="article"
            class="mb-8 prose md:prose-lg lg:prose-xl lg:prose-2xl"
          />

          <client-only>
            <YoutubeWidget v-if="article.youtubeVideo" :videoUrl="article.youtubeVideo"/>
          </client-only>
            
          <a
            v-if="article.ticketURL"
            :href="article.ticketURL"
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

export default {
  async asyncData({ $content, params }) {
    const article = await $content("shows", params.slug).fetch();
    return { article };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    }
  },
  computed: {
    isFutureShow() {
      return isFutureDate(this.article.date)
    },
    showType() {
      console.log("SHowType()", this.article.showtype);
       return this.isFutureShow ? this.article.showtype : "Past Show"
   
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
