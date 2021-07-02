<template>
  <div class="mx-auto">
    <article
      class="w-full mx-auto content-column md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
    <UiHeadline level="1">News</UiHeadline>
      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg"
        v-for="post of posts"
        :key="post.title"
      >
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold sm:tett-2xl md:text-3xl lg:text-5xl"
        >
          <nuxt-link :to="`/news/${post.slug}?page=index`">
            {{ post.title }}</nuxt-link
          >
        </h2>

        <nuxt-content
          class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="post"
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
    </article>
  </div>
</template>

<script>
import dayjs from "dayjs";
import UiHeadline from "@/components/ui/UiHeadline";


export default {
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number);
    const posts = await $content("news")
      .sortBy("date", "desc")
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
    showDate(date) {
      return formatShowDate(date, "date")
    },
  },
  layout: "NewLayout",
  components: {
    UiHeadline
  }
};
</script>


