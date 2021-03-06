<template>
  <div class="mx-auto">
    <div class="container mx-auto">
      <AlertBox />
      <div class="show-card m-4 sm:m-8 md:flex md:m-8 md:mr-8 rounded p-0 shadow-lg" v-for="show of shows"
        :key="show.title">
        <!-- image card -->
        <div class="relative md:w-7/12 md:rounded-r-none rounded overflow-hidden text">
          <nuxt-link :to="show.slug">
            <img :src="require(`~/assets/img_new/processed/${show.img}`)" :alt="show.imgAlt" />
          </nuxt-link>
        </div>

        <!-- details card -->
        <div class="relative -mt-1 bg-white rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg md:w-5/12 md:p-0 ">
          <div class="p-6 pt-2 pb-0 w-full">
            <h3 class="font-bold text-4xl leading-none mt-3 mb-2">{{ show.title }}</h3>
            <div class="text-sm uppercase font-semibold tracking-wide mb-4">
              {{ show.eventTime | formatDate }} •
              {{ show.eventTime | formatTime }} • ${{ show.formattedPrice }}
            </div>
          </div>

          <div class="flex w-full md:inline-block pl-6 pr-6 pb-4">
            <nuxt-link to="#"
              class="w-1/2 bg-blue-600 md:w-full md:block text-white uppercase shadow-lg rounded-lg tracking-wide font-bold py-2 px-4  text-center hover:bg-blue-700 mb-3 mr-2">
              Buy Tickets</nuxt-link>
            <nuxt-link :to="show.slug"
              class="w-1/2 bg-gray-600 md:w-full md:block text-white uppercase shadow-lg rounded-lg tracking-wide font-bold py-2 px-4  text-center hover:bg-gray-700 mb-3">
              Learn More</nuxt-link>
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
    },
  };
</script>

<style>
  .show-card {
    /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); */
  }

  .default-gray {
    background-color: #889;
  }
</style>