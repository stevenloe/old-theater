<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <UiHeadline level="1">News</UiHeadline>

      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg content-border"
        v-for="post of posts"
        :key="post.title"
      >
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
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

      <section class="flex justify-end" v-if="nextPage">
        <nuxt-link class="font-medium" v-if="nextPage" to="/news/page/2"
          >Older Posts <span aria-hidden="true">→</span></nuxt-link
        >
      </section>
    </article>
  </div>
</template>


<script>
import UiHeadline from "@/components/ui/UiHeadline";
import {formatShowDate} from '@/utils/dates.js'
import {sortByDate} from '@/utils/sort.js'

export default {
  async asyncData({ $content }) {
    let posts = await $content("news")
      .sortBy("date", "desc")
      .limit(10)
      .fetch();

      posts = sortByDate(posts)

    const nextPage = posts.length === 10;
    return { nextPage, posts };
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


methods: {

},
