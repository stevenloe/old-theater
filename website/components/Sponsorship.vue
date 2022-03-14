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
      <!-- Logo grid -->
      <div class="relative">
        <div class="grid grid-cols-3 grid-rows-3 gap-6 mt-4">
          <div v-for="logo of logos" :key="logo.alt" class="bg-white">
            <a v-if="logo.url" :href="logo.url"><img class="bg-white hover:shadow-lg" :src="logo.img" :alt="logo.alt" /></a>
            <img v-else class="bg-white" :src="logo.img" :alt="logo.alt" />
          </div>
         
          
        </div>
      </div>

      <!-- details card -->
      <div>
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

  data() {
    return {
      logos: [
        {img: 'images/home-sponsors/vet.webp', url:'https://www.orientalvillageveterinaryhospital.com/', alt:'Oriental Village Veternary Hospital'},
        {img: 'images/home-sponsors/provision.webp', url:'https://inlandwaterwayprovisioncompany.com/',  alt:'Inland Waterway Provision Company'},
        {img: 'images/home-sponsors/towndock.webp', url:'https://towndock.net/', alt:'Towndock.net'},
        {img: 'images/home-sponsors/silos.webp', url:'https://www.silosnc.com/', alt:'The Silos Restaurant'},
        {img: 'images/home-sponsors/piglet.webp', url:'', alt:'The Piglet Grocery Store'},
        {img: 'images/home-sponsors/marina.webp', url:'', url:'https://orientalmarina.com', alt:'The Oriental Marina & Inn'},
        {img: 'images/home-sponsors/nautical-wheelers.webp', url:'https://nauticalwheelersnc.com/', alt:'Nautical Wheelers'},
        {img: 'images/home-sponsors/placeholder.webp', url:'', alt:'placeholder'},
        {img: 'images/home-sponsors/placeholder.webp',url:'', alt:'placeholder1'},
      ]
    }
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