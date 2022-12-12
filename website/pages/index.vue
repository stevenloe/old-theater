<template>
  <div>
    <!-- <ImageWidget backgroundColor="#ffffff" /> -->
    <ShowList :shows="futureShows" />

    <!-- This is bonafides -->
    <ShowList :shows="bonafides" />

    <!-- this is film fest -->
    <WaveWrapperBasic2 :show="filmfest" bgcolor="723333" />

    <!-- TODO: remove-->
    <!-- <WaveWrapperBasic /> -->

    <NewsWidget :news="news" />
    <Membership :item="membership" :images="homeMemberImages" />
    <Sponsorship :item="sponsorship" :homeSponsorData="homeSponsorData" />
    <Amazon :content="amazonSmile" />
    <WhoWeAre
      :leftContent="whoWeAreLeftColumn"
      :rightContent="whoWeAreRightColumn"
    />
    <BoardOfDirectors
      :executives="boardExecutives"
      :managers="boardManagers"
    />

    <div>
      <client-only>
        <MemberCarousel bgcolor="723333" />
      </client-only>
    </div>
    <DonateWidget backgroundColor="#A5B69D" path="/support/donate" />
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
import WaveWrapperBasic2 from "@/components/WaveWrapperBasic2";
import WaveShowNoInfo from "@/components/WaveShowNoInfo";

import { sortShows } from "@/utils/sort.js";
import { sortByDate } from "@/utils/sort.js";
import { sortBoardMembers } from "@/utils/sort.js";


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

  async asyncData({ $content, params }) {
    const [shows, news, alerts, whoWeAreLeftColumn, whoWeAreRightColumn, boardExecutives, boardManagers, sponsorship, homeSponsorData, membership, amazonSmile, homeMemberImages, filmfest, bonafides] = await Promise.all(
      [
        $content("shows", params.slug).fetch(),
        $content("news", params.slug).fetch(),
        $content("alerts", params.slug).fetch(),
        $content("home/who-we-are-left-column", params.slug).fetch(),
        $content("home/who-we-are-right-column", params.slug).fetch(),
        $content("data/board/executive-officers", params.slug).fetch(),
        $content("data/board/department-managers", params.slug).fetch(),
        $content("home/home-sponsorship", params.slug).fetch(),
        $content("data/home/sponsor-logos", params.slug).fetch(),
        $content("home/home-membership", params.slug).fetch(),
        $content("home/home-amazon-smile", params.slug).fetch(),
        $content("data/members/home-member-photos", params.slug).fetch(),
        $content("filmfest/small-town-film-festival", params.slug).fetch(),
        $content("bonafides", params.slug).fetch(),
      ]
    );

   
    let sortedExecutives = sortBoardMembers(boardExecutives.team);
    let sortedManagers = sortBoardMembers(boardManagers.team);

    let sortedNews = sortByDate(news).slice(0, 5);
    sortedNews.length = 3;
    
    const { futureShows, pastShows } = sortShows(shows);

    return {
      shows,
      futureShows,
      news: sortedNews,
      alerts,
      whoWeAreLeftColumn,
      whoWeAreRightColumn,
      boardExecutives: sortedExecutives, 
      boardManagers: sortedManagers,
      sponsorship,
      homeSponsorData,
      membership,
      amazonSmile,
      homeMemberImages,
      filmfest, 
      bonafides,
    }
  },

  data() {
    return {
      futureShows: [],
      pastShows: [],
      boardExecutives: [],
      boardManagers:[],
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
    WaveWrapperBasic2,
    WaveShowNoInfo,
}
};
</script>




