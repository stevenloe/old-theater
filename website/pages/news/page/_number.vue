<template>
  <div>
    <NavBar />
    <div class="container m-24 w-3/4">
      <h1 class="text-3xl font-bold mb-8">News</h1>
      <article v-for="post of posts" :key="post.title" class="mb-24">
        <div class="text-sm font-semibold uppercase text-gray-700">
          {{ postTime(post.eventTime) }}
        </div>
        <nuxt-link :to="`/news/${post.slug}`">
          <h1 class="text-2xl font-bold mb-8">{{ post.title }}</h1></nuxt-link
        >
        <nuxt-content
          :document="post"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
        />
      </article>

      <section class="flex justify-between">
        <nuxt-link class="font-medium" :to="prevLink"
          ><span aria-hidden="true">←</span> Newer Posts</nuxt-link
        >
        <nuxt-link
          class="font-medium"
          :pageNo="pageNo"
          v-if="nextPage"
          :to="`/news/page/${pageNo + 1}`"
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
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number);
    const posts = await $content("news")
      // .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(10)
      .skip(10 * (pageNo - 1))
      .fetch();

    if (!posts.length) {
      return error({ statusCode: 404, message: "No posts found!" });
    }

    const nextPage = posts.length === 10;
    return { nextPage, posts, pageNo };
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/news" : `/news/page/${this.pageNo - 1}`;
    },
  },
  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
  created() {
    console.log("------ HI NUMBER --------"); // john

    console.log(this.$route); // john
  },
};
</script>

<style >
p {
  margin-bottom: 2em !important;
}
</style>

