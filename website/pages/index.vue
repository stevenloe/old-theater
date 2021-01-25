<template>
  <div class="home-page">
    <client-only>
      <NavBar/>
    </client-only>

    <AlertBox />

    <div class="articles">
      <div class="show-card m-4 sm:m-8 md:flex md:m-8 md:mr-8  rounded-lg p-0" v-for="article of articles" :key="article">
        <!-- <pre>{{ article }}</pre> -->
        <!-- image card -->
        <div class="relative md:w-2/3 md:rounded-r-none rounded-lg overflow-hidden ">
          <nuxt-link :to="article.slug">
            <img :src="require(`~/assets/img_new/processed/${article.img}`)" :alt="article.imgAlt" />
          </nuxt-link>
        </div>

        <!-- details card -->
        <div class="relative -mt-1 bg-gray-200 rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg  md:w-1/3  md:p-0 ">
          <div class="p-6 pt-2 w-full">
            <h3 class="font-bold text-4xl">{{ article.title }}</h3>
            <div class="text-xs uppercase font-semibold tracking-wide">{{ article.eventTime | formatDate}} • {{ article.eventTime | formatTime }} • ${{ article.formattedPrice}}</div>
            <p class="block overflow md:break-normal">{{ article.shortDesc }}.</p>
          </div>

          <div class="flex w-full mt-2 md:inline-block pl-6 pr-6 pb-6">
            <nuxt-link to="#" class="w-1/2 bg-orange-300 md:w-full  md:block border border-gray-800 text-gray-900 font-bold py-1 px-4 rounded-lg text-lg text-center hover:bg-yellow-300 hover:text-gray-900">Buy Tickets</nuxt-link>
            <nuxt-link :to="article.slug" class="w-1/2 ml-3 md:ml-0 md:mt-3 md:w-full md:block bg-white  border border-gray-700  text-gray-800 font-semibold py-1 px-4 text-lg text-center rounded-lg  hover:bg-gray-100 hover:text-gray-900">Learn More</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <NewsWidget />
    <Education />
    <Membership />
    <Sponsorship />
    <MemberCrawl />


  </div>
</template>

<script>
import AlertBox from '~/components/AlertBox'
import Education from '~/components/Education'
import Membership from '~/components/Membership'
import MemberCrawl from '~/components/MemberCrawl'
import Sponsorship from '~/components/Sponsorship'
import NewsWidget from '~/components/NewsWidget'
export default {
  async asyncData({ $content, params }) {
    console.log("PARAMS", params);
    let articles = await $content("articles", params.slug)
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

    // const n = new Date();
    // const now = n.getTime();

    // articles.forEach(element => {
    //   const ed = new Date(element.eventDate)
    //   const eventDate = ed.getTime();
    //   console.log("now", now, "eventDate", eventDate);
    //   console.log("event in future:", ed > n);
    //   console.log("element", element)
    // });

    articles.forEach((element) => {
      console.log("elem", element);
    });

    // filter out past events
    // const now = new Date()
    // articles = articles.filter(article =>  new Date(article.eventDate) > now)

    return {
      articles,
    };
  },
  layout: "home",
  components: {
    AlertBox,
    Education,
    Membership,
    MemberCrawl,
    Sponsorship,
    NewsWidget,
  }
};
</script>

<style>
.show-card {
  box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.4);
}
</style>




