<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${item.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 p-12 pb-48 md:grid-cols-2 wave-content"
      :style="bgColor"
    >
  
      <!-- details card -->
      <div class="relative">
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <nuxt-link :to="item.url" class="no-underline">
              <UiHeadline class="mb-2 leading-none text-white " level="1">{{
                item.title
              }}</UiHeadline>
            </nuxt-link>

            <div
              class="mb-4 md:text-lg lg:text-xl xl:2xl"
            >
              <nuxt-content class="text-white" :document="item" />
            </div>

            <div
              class="visible my-6 text-xl tracking-wide md:hidden lg:block lg:mt-6"
            ></div>
          </div>

          <!-- Learn More Button -->
          <div class="flex justify-start">
            <ButtonLink :url="item.url" text="LEARN MORE" />
          </div>
        </div>
      </div>

      <!-- image grid -->
      <div class="relative">
        <div class="grid grid-cols-3 grid-rows-3 gap-6">
          <div v-for="photo in images.photos" :key="photo.img" class="rounded-full">
            <img class="rounded-full" :src="photo.img" :alt="photo.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import ShowPicture from "./ShowPicture.vue";
import { formatShowDate } from "@/utils/dates.js";
import { formatPrice } from "@/utils/format.js";
import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
  },
    created: function () {
    // shuffle sponsor logos
    let data = this.images.photos;

    for (let i = data.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = data[i];
      data[i] = data[j];
      data[j] = k;
    }

    this.images.photos.length = 9;
  },
  computed: {
    bgColor() {
      return `background-color: #${this.item.bgcolor}`;
    },

  },
  components: {
    ShowPicture,
    ButtonLink,
    UiHeadline
},
};
</script>