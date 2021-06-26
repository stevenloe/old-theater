<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <UiHeadline class="mb-6" level="1">Upcoming Shows</UiHeadline>

      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg"
        v-for="show of futureShows"
        :key="show.title"
      >

        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showTime(show.eventTime) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <nuxt-link :to="`${show.slug}?page=index`">
            {{ show.title }}</nuxt-link
          >
        </h2>

        <nuxt-content
          class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="show"
        />
      </article>


      <!-- </div> -->
    </article>

    
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <UiHeadline class="mb-6" level="1">Past Shows</UiHeadline>
      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg"
        v-for="show of pastShows"
        :key="show.title"
      >
      <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
         PAST SHOW
        </div>
      

        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showTime(show.eventTime) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <nuxt-link :to="`${show.slug}?page=index`">
            {{ show.title }}</nuxt-link
          >
        </h2>

        <nuxt-content
          class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="show"
        />
      </article>


    </article>
  </div>
</template>




<script>
import UiHeadline from "@/components/ui/UiHeadline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
dayjs.extend(utc);

export default {
  data() {
    return {
      shows: [],
      futureShows: [],
      pastShows: []
    }
  },
  async asyncData({ $content }) {
    const shows = await $content("shows")
      .sortBy("eventTime", "desc")
      .limit(10)
      .fetch();

      shows.sort(function(a, b) {
        var c = new Date(a.eventDate);
        var d = new Date(b.eventDate);
        return d-c;
      });

      const today = dayjs.utc().startOf('day')
      console.log( "today", today.format('dddd, MMMM D h:mm A'));

      const pastShows = []
      const futureShows = [] 

      shows.forEach(event => {
      // console.log(event);
      let EDate = dayjs.utc((event.eventDate))
      console.log("eDate", event.title, "date", EDate.format('dddd, MMMM D h:mm A'));
      if (today.isAfter(EDate)) {
        console.log("past event", event.title);
        pastShows.push(event)
        console.log("Added to Past SHows", pastShows);
      } else {
        console.log("future event", event.title);
        futureShows.push(event)
      }
    })

    // console.log("FS", futureShows);
    // console.log( "PS", pastShows);



    return {  shows, futureShows, pastShows };
  },
  methods: {
    showTime(date) {
      return dayjs(date).format("LL");
    },
    listData() {
      console.log("listData", this.shows);
    }
  },
  layout: "NewLayout",
  components: {
    UiHeadline
  }
};
</script>
