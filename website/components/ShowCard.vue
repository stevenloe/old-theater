<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${show.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 sm:grid-cols-2 wave-content"
      :style="bgColor"
    >
    <!-- content area -->
      <!-- image card -->
      <div>
        <nuxt-link :to="show.path">
          <show-picture
            :img="`/images/shows/${show.img}`"
            :alt="show.imgAlt"
          ></show-picture>
        </nuxt-link>
      </div>

      <!-- details card -->
      <div>
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <!-- <h3 class="mb-2 -mt-1 text-6xl font-bold leading-none"> -->
            <!-- TODO: Use UI Headline here. Adjust sizes to work with  new design -->
            <nuxt-link :to="show.path">
              <UiHeadline class="mb-2" level="1" style="line-height: 1.08em">{{
                show.title
              }}</UiHeadline>
            </nuxt-link>

            <div
              class="mb-4 md:text-lg lg:text-xl xl:2xl"
            >
              <div class="">
                <span
                  v-if="show.presentedby == 'PMS'"
                  class="flex items-baseline "
                >
                  <span class="pr-3 font-bold"> Presented by: </span>
                  <img
                    class="h-10"
                    src="/images/logos/pms-logo-300-flat.jpg"
                    alt="Pamlico Musical Society Logo"
                /></span>
                <span class="font-bold" v-else>Presented by: The Old Theater</span>
              </div>
              <div>
                <span>{{ showDate(show.date) }}</span>
                {{ show.showTime }}
              </div>
              <span>{{ show.price }}</span>
              <div v-if="show.location">
                <span>{{ show.location }}</span>
              </div>
            </div>

            <div class="hidden my-6 text-xl tracking-wide lg:block lg:mt-6">
              {{ show.shortDesc }}
            </div>
          </div>

          <!-- Learn More / Buy Tickets buttons -->
          <div class="md:justify-between md:flex">
            <ButtonLink :url="show.path" text="LEARN MORE" />
            <ButtonLink 
              v-if="show.ticketURL"
              :url="show.ticketURL"
              text="BUY TICKETS NOW"
            />
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
import { formatShowDate } from "@/utils/dates.js";
import { formatPrice } from "@/utils/format.js";

export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
    backgroundColor: String,
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
    //   return formatPrice(this.show.price);
    // },
    bgColor() {
      return `background-color: #${this.show.bgcolor}`;
    },
    presentedBy() {
      if (this.show.presentedby == "PMS") {
        return '<img src="/logos/pms-logo-300-flat.jpg" alt="Pamlico Musical Society Logo">';
      } else {
        console.log(" NOT PMS");
        return this.show.presentedby;
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