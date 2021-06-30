<template>
  <div class="mx-auto">
    <div class="container mx-auto">
      
      <AlertBox posts="alerts"/>
      <ShowList :shows="futureShows" />
      <NewsWidget  :news="news"/>
      <CommunityPartners />
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
import CommunityPartners from "@/components/CommunityPartners";
import Membership from "@/components/Membership";
import MemberCarousel from "@/components/MemberCarousel";
import Sponsorship from "@/components/Sponsorship";
import NewsWidget from "@/components/NewsWidget";
import ShowPill from "@/components/ShowPill";

import {sortShows} from '@/utils/sort.js'

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
    $content("shows", params.slug).sortBy("date", "asc").fetch(),
    $content("news", params.slug).sortBy("date", "desc").fetch(),
    $content("alerts", params.slug).fetch(),
  ])

  const {futureShows, pastShows} = sortShows(shows)

  return {
    shows: shows,
    futureShows:futureShows,
    news: news,
    alerts: alerts
  }
},
  layout: "NewLayout",
  components: {
    ShowList,
    AlertBox,
    CommunityPartners,
    Membership,
    MemberCarousel,
    Sponsorship,
    NewsWidget,
    ShowPill,
  },
};
</script>




