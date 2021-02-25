<template>
  <div>
    <NavBar />
    <div class="container m-24 w-3/4">
      <h1 class="text-3xl font-bold mb-8">News</h1>
      <article v-for="post of posts" :key="post.title" class="mb-24">
        <div class="text-sm font-semibold uppercase text-gray-700">
          {{ postTime(post.eventTime) }}
        </div>
        <nuxt-link :to="`/news/${post.slug}?page=index`">
          <h1 class="text-2xl font-bold mb-8">{{ post.title }}</h1></nuxt-link
        >
        <nuxt-content
          :document="post"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
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
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
