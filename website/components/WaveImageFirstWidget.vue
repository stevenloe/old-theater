<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${info.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <!-- Top info section and body text -->
        <article>
          <nuxt-link :to="`${info.path}?page=index`">
            <base-picture
              class="mb-6"
              :v-if="info.img"
              :caption="info.caption"
              :img="info.img"
              :alt="info.alt"
            ></base-picture>
          </nuxt-link>
          <div
            class="mb-1 text-sm font-semibold text-gray-700 uppercase md:text-base lg:text-lg"
          >
            {{ showDate(info.date) }}
          </div>

          <h2
            class="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <nuxt-link :to="`${info.path}?page=index`">
              {{ info.title }}</nuxt-link
            >
          </h2>

          <p>
            {{ info.summary }}

            <nuxt-link
              class="block mt-2 text-lg italic underline"
              :to="`${info.path}?page=index`"
            >
              More about {{ info.title }}</nuxt-link
            >
          </p>
        </article>

        <div v-if="info.buttonurl" class="flex">
          <ButtonLink
            :url="info.buttonurl"
            :color="info.buttoncolor"
            :text="info.buttontext"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasePicture from "./BasePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";
import ButtonLink from "./ui/ButtonLink.vue";

import { formatShowDate } from "@/utils/dates.js";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bgColor() {
      return `background-color: #${this.info.bgcolor}`;
    },
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    },
  },
  components: {
    BasePicture,
    UiHeadline,
    ButtonLink,
  },
};
</script>





