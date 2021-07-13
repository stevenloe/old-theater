<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg content-border">
        <base-picture
          class="mb-6"
          :v-if="post.img"
          :caption="post.caption"
          :img="post.img"
          :alt="post.alt"
        ></base-picture>
        <div
          class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
        >
          {{ showDate(post.date) }}
        </div>
        <nuxt-link :to="`${post.slug}?page=index`">
          <UiHeadline level="3" class="mb-4">{{ post.title }}</UiHeadline>
        </nuxt-link>
        <nuxt-content
          :document="post"
          class="mb-8 prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl"
        />

        <div class="grid gap-4 ">
          <gallery-picture
            v-for="item of post.img_gallery"
            :key="item.image.img"
            :alt="item.image.alt"
            :caption="item.image.caption"
            :headline="item.image.headline"
            :img="item.image.img"
          ></gallery-picture>
        </div>
      </div>
    </article>
  </div>
</template>


<script>
import UiHeadline from "@/components/ui/UiHeadline";
import BasePicture from "@/components/BasePicture";
import GalleryPicture from "@/components/GalleryPicture";
import { formatShowDate } from "@/utils/dates.js";

export default {
  async asyncData({ $content, params }) {
    const post = await $content("fundraisers", params.slug).fetch();
    console.log("--- POST IS", JSON.stringify(post, null, 1));

    return { post, params };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date");
    },
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    BasePicture,
    GalleryPicture,
  },
};
</script>


