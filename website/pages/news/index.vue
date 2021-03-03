<template>
  <div class="mx-auto">
    <div
      class="content-column mx-auto w-full md:w-3/4 lg:w-9/12 xl:3/4  lg:text-xl xl:text-2xl text-red-800 font sm:text-blue-400 md:text-lg lg:text-green-800 xl:text-orange-500"
    >
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl">News</h1>

      <!-- <nuxt-content class="prose prose-lg mx-auto p-5 bg-white rounded shadow-lg" :document="about" /> -->

      <article
        class="bg-white rounded shadow mb-12 p-6 lg:p-8"
        v-for="post of posts"
        :key="post.title"
      >
        <!-- <article
      class="prose prose-lg mx-auto p-5 bg-white rounded shadow-lg mb-12"
      v-for="post of posts"
      :key="post.title"
    > -->
        <div class="text-sm md:text-base lg:text-lg font-semibold uppercase text-gray-700 mb-1">
          {{ postTime(post.eventTime) }}
        </div>

        <h2 class=" text-xl sm:tett-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
          <nuxt-link 
            :to="`/news/${post.slug}?page=index`"
          >
            {{ post.title }}</nuxt-link
          >
        </h2>
        <!-- <nuxt-content :document="post" /> -->

          <nuxt-content 
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
    :document="post"
  />
      </article>

      <section class="flex justify-end" v-if="nextPage">
        <nuxt-link class="font-medium" v-if="nextPage" to="/news/page/2"
          >Older Posts <span aria-hidden="true">→</span></nuxt-link
        >
      </section>
    </div>
  </div>
</template>




<script>
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content }) {
    const posts = await $content("news")
      // .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();

    const nextPage = posts.length === 10;
    console.log("nextPage", nextPage);
    console.log("POSTS Len", posts.length);
    return { nextPage, posts };
  },
  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
  layout: "NewLayout",
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.content-column {
  max-width: 950px;
}
</style>
