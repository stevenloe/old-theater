<template>
  <div>
    <NavBar class="mb-24" />

    <div
      class="pl-8 pr-8 pt-8 sm:pt-0 sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl mx-auto prose"
    >
      <h2>News</h2>
      <article
        v-for="article of articles"
        :key="article.title"
        class="mb-24"
      >
        <div class="text-sm font-semibold uppercase text-gray-700">
          {{ postTime(article.eventTime) }}
        </div>
        <nuxt-content
          :document="article"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
        />
      </article>
    </div>
  </div>
</template>


<script>
import dayjs from "dayjs";
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)


export default {
  async asyncData({ $content, params }) {
    let articles = await $content("news", params.slug)
      .sortBy("eventTime", "desc")
      .fetch();

    console.log("articles", articles);

    return { articles };
  },
  methods: {
    postTime(date) {
     return dayjs(date).format('LL')
    }
  },
  metaInfo: {
    title: "News",
  },
  layout: "content",
};
</script>
