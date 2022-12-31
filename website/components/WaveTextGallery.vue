<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${item.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-24 pb-48 pl-8 pr-8 md:pt-12 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <!-- Top item section and body text -->
        
        <UiHeadline v-if="item.title" class="mb-2" level="2">{{
          item.title
        }}</UiHeadline>
        <UiHeadline v-if="item.subhead" class="mb-4" level="4">{{
          item.subhead
        }}</UiHeadline>

        

       <div class="grid gap-1 ">
          <simple-picture
            v-for="pic of item.img_gallery"
            :key="pic.image.img"
            :alt="pic.image.alt"
            :caption="pic.image.caption"
            :headline="pic.image.headline"
            :img="pic.image.img"
          ></simple-picture>
        </div>

     

        <nuxt-content
          class="mx-auto mb-8 prose prose-lg xl:prose-2xl"
          :document="item"
        />
    
        <div v-if="item.buttonurl" class="flex"><ButtonLink :url="item.buttonurl" :color="item.buttoncolor" :text="item.buttontext" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import SimplePicture from "./SimplePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";
import ButtonLink from "./ui/ButtonLink.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bgColor() {
      console.log("$$$$$$$$$$$$$$$ IMG_GALLERY: ", this.item.img_gallery)
      return `background-color: #${this.item.bgcolor}`;
    },
  },
  components: {
    SimplePicture,
    UiHeadline,
    ButtonLink
},
};
</script>