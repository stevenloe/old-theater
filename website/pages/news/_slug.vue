<template>
  <article class="bg-white p-5 rounded mx-auto mb-12 shadow">
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
</template>


<script>

import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content, params }) {
    const post = await $content("news", params.slug).fetch();
    console.log("post", post, "PARAMS", params);

    return { post, params };
  },
    methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
  layout: 'NewLayout'
};
</script>

<style >
p {
  margin-bottom: 2em !important;
}
</style>
