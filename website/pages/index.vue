<template>
  <div class="mx-auto">
    <div class="container mx-auto">
      
      <AlertBox posts="alerts"/>
      <ShowList :shows="futureShows" />
      <NewsWidget  :news="news"/>
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
import ShowList from "@/components/ShowList";
import AlertBox from "@/components/AlertBox";
import Membership from "@/components/Membership";
import MemberCarousel from "@/components/MemberCarousel";
import Sponsorship from "@/components/Sponsorship";
import NewsWidget from "@/components/NewsWidget";
import ShowPill from "@/components/ShowPill";

import {sortShows} from '@/utils/sort.js'
import {sortByDate} from '@/utils/sort.js'

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js", defer: true},
      ],
    };
  },
    data() {
    return {
      futureShows: [],
      pastShows: [],
    };
  },

  async asyncData ({ $content, params }) {
  const [shows, news, alerts] = await Promise.all([ 
    $content("shows", params.slug).fetch(),
    $content("news", params.slug).limit(3).fetch(),
    $content("alerts", params.slug).fetch(),
  ])

  const sortedNews = sortByDate(news).slice(0, 5)

  const {futureShows, pastShows} = sortShows(shows)

  return {
    shows: shows,
    futureShows:futureShows,
    news: sortedNews,
    alerts: alerts
  }
},
  layout: "NewLayout",
  components: {
    ShowList,
    AlertBox,
    Membership,
    MemberCarousel,
    Sponsorship,
    NewsWidget,
    ShowPill,
  },
};
</script>




