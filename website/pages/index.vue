<template>
  <div class="mx-auto">
    <div class="container mx-auto">
      <!-- <AlertBox /> -->
      <div
        class="p-0 m-4 rounded shadow-lg show-card sm:m-8 md:flex md:m-8 md:mr-8"
        v-for="show of shows"
        :key="show.title"
      >
      
        <!-- image card -->
        <div
          class="relative overflow-hidden rounded-lg md:w-7/12 md:rounded-r-none text"
        >
          <nuxt-link :to="show.slug">
            <img
              :src="require(`~/assets/img_new/processed/${show.img}`)"
              :alt="show.imgAlt"
            />
          </nuxt-link>
        </div>

        <!-- details card -->
        <div
          class="relative pb-3 -mt-1 bg-white rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg md:w-5/12"
        >
          <div class="w-full p-6 pt-2 pb-0">
            <h3 class="mt-3 mb-2 text-4xl font-bold leading-none">
              {{ show.title }}
            </h3>
            <div class="flex">
              <ShowPill :showtype="show.showtype"></ShowPill>
            </div>
            <div class="flex flex-wrap mb-4 text-sm font-semibold leading-relaxed tracking-wide uppercase flex-start">

              
              {{ show.eventTime | formatDate }}, 
              {{ show.eventTime | formatTime }}, ${{ show.formattedPrice }} 
              
              <div  class="flex flex-wrap" v-if="show.location"> 
                <div>
                 At {{ show.location }}
              </div> 
              </div>              
            </div>
          </div>

          <div class="flex w-full pb-0 pl-6 pr-6 md:inline-block">
            <a
              v-if="show.ticketURL"
              :href="show.ticketURL"
              class="w-1/2 px-4 py-2 mb-3 mr-2 font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg md:w-full md:block hover:bg-blue-700"
            >
              Buy tickets</a
            >
            <nuxt-link
              :to="show.slug"
              class="w-1/2 px-4 py-2 mb-3 font-bold tracking-wide text-center text-white uppercase bg-gray-600 rounded-lg shadow-lg md:w-full md:block hover:bg-gray-700"
            >
              Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
      <NewsWidget />
      <Education />
      <Membership />
      <Sponsorship />

      <div class="m-4 md:m-8">
        <MemberCrawl />
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "@/components/AlertBox";
import Education from "@/components/Education";
import Membership from "@/components/Membership";
import MemberCrawl from "@/components/MemberCrawl";
import Sponsorship from "@/components/Sponsorship";
import NewsWidget from "@/components/NewsWidget";
import ShowPill from "@/components/ShowPill";

export default {
  async asyncData({ $content, params }) {
    let shows = await $content("shows", params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "createdAt",
        "eventDate",
        "eventTime",
        "formattedPrice",
        "shortDesc",
        "imgAlt",
        "ticketURL",
        "location",
        "showtype"
      ])
      .sortBy("eventTime", "asc")
      .fetch();

    return { shows };
  },
  layout: "NewLayout",
  components: {
    AlertBox,
    Education,
    Membership,
    MemberCrawl,
    Sponsorship,
    NewsWidget,
    ShowPill
  },
};
</script>

<style>
.show-card {
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); */
}

</style>