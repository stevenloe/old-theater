<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <UiHeadline level="1">Our Fundraisers</UiHeadline>

      <article
        class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg content-border"
        v-for="post of posts"
        :key="post.title"
      >

      <base-picture class="mb-6" :v-if="post.img" :caption="post.caption" :img="post.img" :alt="post.alt"></base-picture>
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>

        <h2
          class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <nuxt-link :to="`${post.path}?page=index`">
            {{ post.title }}</nuxt-link
          >
        </h2>
        
        <p>
          {{ post.summary }}

          <nuxt-link
            class="block mt-2 text-lg italic underline"
            :to="`${post.path}?page=index`"
          >
            Learn more...</nuxt-link
          >
        </p>
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
import BasePicture from "@/components/BasePicture";
import { formatShowDate } from "@/utils/dates.js";

export default {
  async asyncData({ $content }) {
    const posts = await $content("fundraisers")
      .sortBy("date", "desc")
      .limit(10)
      .fetch();

    console.log("POSTS", posts);

    const nextPage = posts.length === 10;
    return { nextPage, posts };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date");
    },
    imagePath(path, date) {
      let result = path + new Date(theDate).getFullYear()
      console.log("result");
      return result
    }
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    BasePicture
  },
};
</script>


methods: {

},
