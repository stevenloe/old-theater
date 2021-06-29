<template>
  <div class="mx-auto ">
    <article class="container mx-auto">
      <UiHeadline class="pl-4 mb-6" level="1">Upcoming Shows</UiHeadline>
      <ShowList :shows="futureShows" />
    </article>

    <article class="container p-4 mx-auto md:p-8 lg:text-xl xl:text-2xl">
      <UiHeadline class="mb-6" level="1">Past Shows</UiHeadline>
      <PastShowList :pastShows="pastShows" />
    </article>
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline"
import ShowList from "@/components/ShowList"
import PastShowList from "@/components/PastShowList"

import {sortShows} from '@/utils/sort.js'

export default {
  data() {
    return {
      futureShows: [],
      pastShows: [],
    };
  },
  async asyncData({ $content }) {
    const shows = await $content("shows")
      .sortBy("date", "desc")
      .fetch();

    return sortShows(shows)
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    ShowList,
    PastShowList
  },
};
</script>
