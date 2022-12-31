<template>
  <div style="background-color:#c8ecf7" class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
     >
    <article class="w-full max-w-4xl pb-48 mx-auto lg:text-xl xl:text-2xl">
      <UiHeadline level="2">Our Fundraisers</UiHeadline>

      <article class="mt-8"
        v-for="post of posts"
        :key="post.title"
      >
      <nuxt-link :to="`${post.path}?page=index`">
        <base-picture class="mb-6" :v-if="post.img" :caption="post.caption" :img="post.img" :alt="post.alt"></base-picture>
      </nuxt-link>
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>

        
        <UiHeadline level="4">{{ post.title }}</UiHeadline>
        <p>
          {{ post.summary }}

        </p>
          <div v-if="post.path" class="flex mt-3 mb-20"><ButtonLink :url="post.path" color="black" text="LEARN MORE" /></div>
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
import WaveImageFirstWidget from "@/components/WaveImageFirstWidget";
import BasePicture from "@/components/BasePicture";
import { formatShowDate } from "@/utils/dates.js";
import ButtonLink from "../../components/ui/ButtonLink.vue";


export default {
  async asyncData({ $content }) {
    const posts = await $content("fundraisers")
      .sortBy("date", "desc")
      .fetch();

    console.log("POSTS", posts);

    const nextPage = posts.length === 20;
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
    BasePicture,
    WaveImageFirstWidget,
    ButtonLink
},
};
</script>


methods: {

},
