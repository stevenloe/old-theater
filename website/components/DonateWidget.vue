<template>
  <div class="mt-8 wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="backgroundColor"
      />
    </svg>

    <div class="pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content" :style="bgColor">
      <!-- image card -->
      <div>

        <nuxt-link :to="path">
          <img
          src="/donate/donate-banner-big-min.png"
          alt="Donate to the Old Theater Now!"
        />
        </nuxt-link>

        <div class="grid grid-cols-2 gap-6 mt-12 -mb-4 md:pl-12 md:pr-12 sm:mt-16 md:grid-cols-4" >
          <div class="col-span-2 text-lg leading-8 tracking-wide sm:text-xl sm:col-span-3">
            <p class="">The Old Theater continues to follow the state and local guidance provided with regards to the COVID-19 pandemic.</p>
          </div>
          <div class="col-span-2 sm:col-span-1">
              <ButtonLink url="/news/reopening-the-old-theater-for-the-2021-2022-season/" color="transparent" text="LEARN MORE" /></div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>

import ButtonLink from "@/components/ui/ButtonLink";


export default {
  props: {
    path: String,
    backgroundColor: String,
  },
  computed: {
    bgColor() {
      return `background-color: ${this.backgroundColor}`;
    },
  },
  components: {
    ButtonLink
  }

};
</script>