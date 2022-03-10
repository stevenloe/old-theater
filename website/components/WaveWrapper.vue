<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${show.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-2 gap-8 p-12 pb-48 wave-content"
      :style="bgColor"
    >
      <!-- image card -->
      <div class="relative">
        <nuxt-link :to="show.path">
          <show-picture
            :img="`/images/shows/${show.img}`"
            :alt="show.imgAlt"
          ></show-picture>
        </nuxt-link>
      </div>

      <!-- details card -->
      <div class="relative">
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <h3 class="mb-2 -mt-1 text-6xl font-bold leading-none">
              <nuxt-link :to="show.path">
                {{ show.title }} {{ color }}
              </nuxt-link>
            </h3>

            <div
              class="mb-4 text-xl font-semibold leading-relaxed tracking-wide"
            >
              <div>
                <span
                  v-if="show.presentedby == 'PMS'"
                  class="flex items-baseline"
                >
                  <span class="pr-3"> Presented by: </span>
                  <img
                    class="h-10"
                    src="/images/logos/pms-logo-300-flat.jpg"
                    alt="Pamlico Musical Society Logo"
                /></span>
                <span v-else>Presented by: The Old Theater</span>
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

            <div
              class="visible my-6 text-xl tracking-wide md:hidden lg:block lg:mt-6"
            >
              {{ show.shortDesc }}
            </div>
          </div>

          <!-- Learn More / Buy Tickets buttons -->
          <div class="flex justify-between">
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
import { formatShowDate } from "@/utils/dates.js";
import { formatPrice } from "@/utils/format.js";

export default {
  props: {
    // show: {
    //   type: Object,
    //   required: true,
    // },
    // backgroundColor: String,
  },
  data() {
    return {
      show: {
      title: "Frank Vignola Guitar Magic",
      date: "2022-08-21T23:30:00.2Z",
      showTime: "7:30 PM",
      price: "$20",
      presentedby: "PMS",
      location: "At The Old Theater",
      shortDesc: "One of the most extraordinary guitarists performing today, Frank Vignolas stunning virtuosity and dynamic genre-spanning music...",
      img: "frank-vignola.jpg",
      imgAlt: "Frank Vignola Guitar Magic poster art",
      youtubeVideo: "WcN392H2jx0",
      path: "/shows/",
      bgcolor: "ff0000"
      }
    }
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
  },
};
</script>