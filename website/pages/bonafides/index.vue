<template>
  <div>
    <WaveHeadline :info="upcommingHeadlineInfo" />

    <ShowList :shows="futureShows" />

    <!-- <WaveHeadline :info="pastHeadlineInfo" /> -->

    <!-- <PastShowList :pastShows="pastShows" /> -->
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
import ShowList from "@/components/ShowList";
import PastShowList from "@/components/PastShowList";
import WaveHeadline from "@/components/WaveHeadline";

import { sortShows } from "@/utils/sort.js";

export default {
  data() {
    return {
      futureShows: [],
      pastShows: [],
      upcommingHeadlineInfo: {
        title: "Upcoming Shows",
        bgcolor: "99DDFF",
      },
      pastHeadlineInfo: {
        title: "Past Shows",
        bgcolor: "ccffee",
      },
    };
  },
  async asyncData({ $content }) {
    const shows = await $content("shows").sortBy("date", "desc").fetch();

    console.log("SHOWS", shows);

    return sortShows(shows);
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    ShowList,
    PastShowList,
    WaveHeadline,
  },
};
</script>
