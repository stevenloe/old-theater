<template>
  <div class="mx-auto">
    <article
      class="w-full mx-auto content-column lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <UiHeadline level="1">Alerts</UiHeadline>

      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg"
        v-for="post of posts"
        :key="post.title"
      >
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ postTime(post.eventTime) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <nuxt-link :to="`${post.path}?page=index`">
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
      <!-- </div> -->
    </article>
  </div>
</template>




<script>
import UiHeadline from "@/components/ui/UiHeadline";
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content }) {
    const posts = await $content("alerts")
      .sortBy("eventTime", "desc")
      .limit(10)
      .fetch();

    const nextPage = posts.length === 10;
    return { nextPage, posts };
  },
  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
  layout: "NewLayout",
  components: {
    UiHeadline
  }
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
