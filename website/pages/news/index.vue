<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto content-column md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <h1 class="text-4xl font-bold md:text-5xl lg:text-5xl">News</h1>

      <article
        class="p-6 mb-12 bg-white rounded shadow lg:p-8"
        v-for="post of posts"
        :key="post.title"
      >

        <div class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg">
          {{ postTime(post.eventTime) }}
        </div>

        <h2 class="mb-4 text-xl font-semibold sm:tett-2xl md:text-3xl lg:text-5xl">
          <nuxt-link 
            :to="`/news/${post.slug}?page=index`"
          >
            {{ post.title }}</nuxt-link
          >
        </h2>

          <nuxt-content 
    class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
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
