<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg content-border">
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>
      
        <nuxt-link :to="`/news/${post.slug}?page=index`">

          <UiHeadline level="3" class="mb-4">{{ post.title }}</UiHeadline>
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
import UiHeadline from "@/components/ui/UiHeadline";
import {formatShowDate} from '@/utils/dates.js'

export default {
  async asyncData({ $content, params }) {
    const post = await $content("news", params.slug).fetch();

    return { post, params };
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


