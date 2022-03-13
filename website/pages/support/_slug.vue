<template>

  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${content.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
    <!-- content area -->

   
    <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
    <UiHeadline id="level-1-headline" level="1">{{content.title}}</UiHeadline>
      <article>
        <base-picture :v-if="content.img" :caption="content.caption" :img="content.img" :alt="content.imgAlt"></base-picture>
        <nuxt-content
          class="mx-auto mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="content"
        />
      </article>
    </div>
  </div> </div> 
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
import ButtonLink from "@/components/ui/ButtonLink";
import BasePicture from "@/components/BasePicture";
import BaseImage from "@/components/BaseImage";
export default {

computed: {

    bgColor() {
      return `background-color: #${this.content.bgcolor}`;
    },
},
  
  data() {
    return {
      content: {}
    }
  },
  async asyncData({ $content, params }) {
    const content = await $content("supports", params.slug).fetch();
    return { content };
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    ButtonLink,
    BasePicture,
    BaseImage
  }
};
</script>