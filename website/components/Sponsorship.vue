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
      <!-- image card -->
      <div class="relative">
        <nuxt-link :to="item.url">
          <show-picture
            img="/images/home/placeholder-sponsors.png"
            alt="foo"
          ></show-picture>
        </nuxt-link>
      </div>

      <!-- details card -->
      <div class="relative">
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <nuxt-link :to="item.url">
              <UiHeadline class="mb-2 leading-none text-white" level="1">{{
                item.title
              }}</UiHeadline>
            </nuxt-link>

            <div
              class="mb-4 text-base leading-relaxed tracking-wide"
            >
              <nuxt-content class="text-white" :document="item" />
            </div>

            <div
              class="visible my-6 text-xl tracking-wide md:hidden lg:block lg:mt-6"
            ></div>
          </div>

    

          <!-- Learn More Button -->
          <div class="flex justify-end">
            <ButtonLink :url="item.url" text="LEARN MORE" />
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
      return `background-color: #${this.item.bgcolor}`;
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
    ShowPicture,
    ButtonLink,
    UiHeadline
},
};
</script>