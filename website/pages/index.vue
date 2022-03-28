<template>
  <div>
    <DonateWidget backgroundColor="#A5B69D" path="/support/donate" />
    <ShowList :shows="futureShows" />

      <!-- TODO: remove-->
      <!-- <WaveWrapperBasic /> -->
   
    <NewsWidget :news="news" />
    <Membership :item="membership" :images="homeMemberImages"/>
    <Sponsorship :item="sponsorship" :homeSponsorData="homeSponsorData"/>
    <Amazon :content="amazonSmile"/>
    <WhoWeAre :leftContent="whoWeAreLeftColumn" :rightContent="whoWeAreRightColumn"/>
    <BoardOfDirectors :content="boardData" />

    <div>
      <client-only>
        <MemberCarousel bgcolor="723333"/>
      </client-only>
    </div>
  </div>
</template>

<script>
import ShowList from "@/components/ShowList";
import Membership from "@/components/Membership";
import MemberCarousel from "@/components/MemberCarousel";
import Sponsorship from "@/components/Sponsorship";
import NewsWidget from "@/components/NewsWidget";
import WhoWeAre from "@/components/WhoWeAre";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import Amazon from "@/components/Amazon";
import DonateWidget from "@/components/DonateWidget";
import WaveWrapperBasic from "@/components/WaveWrapperBasic";

import { sortShows } from "@/utils/sort.js";
import { sortByDate } from "@/utils/sort.js";

export default {
  head() {
    return {
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
          defer: true,
        },
      ],
    };
  },
  data() {
    return {
      futureShows: [],
      pastShows: [],
    };
  },

  async asyncData({ $content, params }) {
    const [shows, news, alerts, whoWeAreLeftColumn, whoWeAreRightColumn, boardData, sponsorship, homeSponsorData, membership, amazonSmile, homeMemberImages] = await Promise.all(
      [
        $content("shows", params.slug).fetch(),
        $content("news", params.slug).limit(3).fetch(),
        $content("alerts", params.slug).fetch(),
        $content("home/who-we-are-left-column", params.slug).fetch(),
        $content("home/who-we-are-right-column", params.slug).fetch(),
        $content("data/board/board-of-directors", params.slug).fetch(),
        $content("home/home-sponsorship", params.slug).fetch(),
        $content("data/home/sponsor-logos", params.slug).fetch(),
        $content("home/home-membership", params.slug).fetch(),
        $content("home/home-amazon-smile", params.slug).fetch(),
        $content("data/members/home-member-photos", params.slug).fetch(),
      
      ]
    );

   



    const sortedNews = sortByDate(news).slice(0, 5);

    const { futureShows, pastShows } = sortShows(shows);

    return {
      shows,
      futureShows,
      news: sortedNews,
      alerts,
      whoWeAreLeftColumn,
      whoWeAreRightColumn,
      boardData,
      sponsorship,
      homeSponsorData,
      membership,
      amazonSmile,
      homeMemberImages
    };
  },
  layout: "NewLayout",
  components: {
    ShowList,
    Membership,
    MemberCarousel,
    Sponsorship,
    NewsWidget,
    WhoWeAre,
    BoardOfDirectors,
    Amazon,
    DonateWidget,
    WaveWrapperBasic
  },
  // TODO:  ^^Remove WaveWrapperBasic 
};
</script>




