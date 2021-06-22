<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="text-sm font-semibold text-gray-700 uppercase">
          {{ postTime(post.eventTime) }}
        </div>
        <nuxt-link :to="`${post.slug}?page=index`">

        <UiHeadline level="3">{{ post.title }}</UiHeadline>
         </nuxt-link
        >
        <nuxt-content
          :document="post"
          class="mb-8 prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl"
        />
      </div>
    </article>
  </div>
</template>


<script>
import dayjs from "dayjs";
import UiHeadline from "@/components/ui/UiHeadline";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content, params }) {
    const post = await $content("news", params.slug).fetch();

    return { post, params };
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


