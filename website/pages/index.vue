<template>
  <div>
    <DonateWidget backgroundColor="#A5B69D" path="/" />
    <ShowList :shows="futureShows" />

      <!-- TODO: remove-->
      <!-- <WaveWrapperBasic /> -->
   
    <NewsWidget :news="news" />
    <Membership :item="membership"/>
    <Sponsorship :item="sponsorship"/>
    <Amazon :content="amazonSmile"/>
    <WhoWeAre :leftContent="whoWeAreLeftColumn" :rightContent="whoWeAreRightColumn"/>
    <BoardOfDirectors :leftContent="boardOfDirectorsLeft" :rightContent="boardOfDirectorsRight" />

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
    const [shows, news, alerts, whoWeAreLeftColumn, whoWeAreRightColumn, boardOfDirectorsLeft, boardOfDirectorsRight, sponsorship, membership, amazonSmile] = await Promise.all(
      [
        $content("shows", params.slug).fetch(),
        $content("news", params.slug).limit(3).fetch(),
        $content("alerts", params.slug).fetch(),
        $content("home/who-we-are-left-column", params.slug).fetch(),
        $content("home/who-we-are-right-column", params.slug).fetch(),
        $content("home/home-board-of-directors-left-column", params.slug).fetch(),
        $content("home/home-board-of-directors-right-column", params.slug).fetch(),
        $content("home/home-sponsorship", params.slug).fetch(),
        $content("home/home-membership", params.slug).fetch(),
        $content("home/home-amazon-smile", params.slug).fetch(),
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
      boardOfDirectorsLeft,
      boardOfDirectorsRight,
      sponsorship,
      membership,
      amazonSmile,
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




