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
      <!-- image grid -->
      <div class="relative">
        <div class="grid grid-cols-3 grid-rows-3 gap-6">
          <div class="bg-red-100 rounded-full">
            <img class="rounded-full" src="https://source.unsplash.com/random/190x190?orangecat" alt="" />
          </div>
          <div class="rounded-full">
            <img class="rounded-full" src="https://source.unsplash.com/random/201x201?bluecat" alt="wer" />
          </div>
          <div class="rounded-full ">
            <img class="rounded-full" src="https://source.unsplash.com/random/202x202?littlecat" alt="werwer" />
          </div>
          <div class="rounded-full">
            <img class="rounded-full" src="https://source.unsplash.com/random/203x203?redcat" alt="wer" />
          </div>
          <div class="bg-red-208">
            <img class="rounded-full" src="https://source.unsplash.com/random/204x204?mycat" alt="etrwe" />
          </div>
          <div class="bg-red-209">
            <img class="rounded-full" src="https://source.unsplash.com/random/205x205?cutekitten" alt="fdsfd" />
          </div>
          <div class="bg-red-290">
            <img class="rounded-full" src="https://source.unsplash.com/random/206x206?sleepingcat" alt="sdff" />
          </div>
          <div class="rounded-full">
            <img class="rounded-full" src="https://source.unsplash.com/random/207x207?persiancat" alt="sfds" />
          </div>
          <div class="bg-red-2099">
            <img class="rounded-full" src="https://source.unsplash.com/random/208x208?browncat" alt="doo" />
          </div>
        </div>
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

            <div class="mb-4 md:text-lg lg:text-xl xl:2xl">
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

import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
    UiHeadline,
  },
};
</script>