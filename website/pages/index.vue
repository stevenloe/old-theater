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
            <div
              class="flex flex-wrap mb-4 text-sm font-semibold leading-relaxed tracking-wide uppercase flex-start"
            >
              <span class="mr-2">{{ show.showDate }}</span>
        
              <span class="mr-2">{{ show.showTime }} </span>
              <span class="mr-2">${{ show.formattedPrice }}</span>

              <div class="flex flex-wrap" v-if="show.location">
                <div>At {{ show.location }}</div>
              </div>
              
              
            </div>
          </div>
          
          <div class="visible mx-6 my-6 text-gray-700 md:hidden lg:block xl:text-lg lg:mt-6">{{show.shortDesc}} </div>

          <div class="flex justify-end w-full pb-0 pl-6 pr-6 md:inline-block">
            <a
              v-if="show.ticketURL"
              :href="show.ticketURL"
              class="px-4 py-2 mb-3 mr-2 font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg md:block hover:bg-blue-700"
            >
              Buy tickets</a
            >
            <nuxt-link
              :to="show.slug"
              class="w-full px-4 py-2 mb-3 font-bold tracking-wide text-center text-white uppercase bg-gray-600 rounded-lg shadow-lg md:block hover:bg-gray-700"
            >
              Learn More</nuxt-link
            >
          </div>
        </div>
      </div>

      <!-- Begin home page news widget -->

      <div
    class="pt-3 pb-4 pl-6 pr-4 m-4 bg-gray-100 rounded-lg shadow-lg sm:m-8 md:m-8"
  >
    <UiHeadline class="mb-3" level="1">News</UiHeadline>
    <div v-for="(item, i) in news" :key="i" class="mb-6">
      <UiHeadline class="mb-2 leading-snug" level="2">{{ item.title }}</UiHeadline>
      <h4
        v-if="item.subhead"
        class="mb-3 text-lg font-semibold text-gray-400 border border-red-900"
      >
        {{ item.subhead }}
      </h4>
      <p class="block mb-1 font-medium text-gray-600 md:text-xl">
        {{ item.description }}
      </p>
      <div class="flex mb-4">
        <div class="p-0 mb-0 text-gray-700">{{ item.date }}</div>
        <div class="text-gray-700">
          <!-- <nuxt-link class="ml-1 italic underline" :to="item.link">{{
            item.cta
          }}</nuxt-link> -->
        </div>
      </div>
    </div>
    <nuxt-link to="/news/" class="block mb-3 text-lg italic underline">
      More News Stories</nuxt-link
    >
  </div>
      <!-- End home page news widget -->
      <NewsWidget  :news="news"/>
      <Education />
      <Membership />
      <Sponsorship />

      <div class="m-4 md:m-8">
        <client-only>
          <MemberCarousel />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "@/components/AlertBox";
import Education from "@/components/Education";
import Membership from "@/components/Membership";
import MemberCarousel from "@/components/MemberCarousel";
import Sponsorship from "@/components/Sponsorship";
import NewsWidget from "@/components/NewsWidget";
import ShowPill from "@/components/ShowPill";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },


  async asyncData ({ $content, params }) {
  const [shows, news] = await Promise.all([ 
    $content("shows", params.slug).sortBy("eventTime", "asc").fetch(),
    $content("news", params.slug).sortBy("eventTime", "desc").fetch(),
    
  ])

  return {
    shows: shows,
    news: news,
  }
},
  layout: "NewLayout",
  components: {
    AlertBox,
    Education,
    Membership,
    MemberCarousel,
    Sponsorship,
    NewsWidget,
    ShowPill,
  },
};
</script>

<style>
.show-card {
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); */
}
</style>



