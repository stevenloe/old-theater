<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${leftContent.bgcolor}`"
      />
    </svg>

    <div class="p-12 wave-content" :style="bgColor">
      <div>
        <UiHeadline class="mb-4" level="1" style="line-height: 1.08em">{{
          leftContent.title
        }}</UiHeadline>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <!-- Left Column -->
        <div>
          <base-picture
            class="mb-10"
            :img="leftContent.img"
            alt="leftContent.alt"
          ></base-picture>

          <nuxt-content
            :document="leftContent"
            class="prose-sm prose text-black sm:prose lg:prose-lg xl:prose-2xl"
          />
        </div>

        <!-- Right Column-->
        <div>
          <nuxt-content
            :document="rightContent"
            class="prose-sm prose text-black sm:prose lg:prose-lg xl:prose-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import BasePicture from "./BasePicture.vue";
import { formatShowDate } from "@/utils/dates.js";
import { formatPrice } from "@/utils/format.js";
import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    leftContent: {
      type: Object,
      required: true,
    },
    rightContent: {
      type: Object,
      required: true,
    },
  },

  methods: {
    showDate(date) {
      return formatShowDate(date, "date");
    },
    showTime(date) {
      return formatShowDate(date, "time");
    },
  },
  computed: {
    // formattedPrice() {
    //   return formatPrice(this.item.price);
    // },
    bgColor() {
      return `background-color: #${this.leftContent.bgcolor}`;
    },
    presentedBy() {
      if (this.item.presentedby == "PMS") {
        return '<img src="/logos/pms-logo-300-flat.jpg" alt="Pamlico Musical Society Logo">';
      } else {
        console.log(" NOT PMS");
        return this.item.presentedby;
      }
    },
  },
  components: {
    BasePicture,
    ButtonLink,
    UiHeadline,
  },
};
</script>