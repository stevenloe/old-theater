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
        <a v-if="show.presentedby == 'PMS'" href="https://www.pamlicomusic.org">
          <show-picture
            :img="`/images/shows/${show.img}`"
            :alt="show.imgAlt"
          ></show-picture>
        </a>
        <nuxt-link v-else :to="show.path">
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
              <div class="flex ">
                <span class="flex items-center"
                >
                  <span class="pr-3 font-bold"> Presented by: </span>
          
                <a v-if="show.presentedby == 'PMS'" href="https://www.pamlicomusic.org">
                <img class="object-contain h-12 p-1 mb-2 ml-2 bg-white" 
                src="/images/community/pms-new-logo-crop-omg.svg"
                alt="Pamlico Musical Society logo"
              /></a>
              <a v-if="show.presentedby == 'ACS'" href="https://www.arapahoecharter.org/">
                <img class="object-contain h-16 p-1 mb-2 ml-2 bg-white" 
                src="/images/community/acs-logo.webp"
                alt="Pamlico Musical Society logo"
              />
              </a>
                <img v-if="show.presentedby == 'OTC'"  class="object-contain h-10 mb-2 -ml-2 md:h-12" 
                src="/images/community/old-theater-logo.svg"
                alt="Pamlico Musical Society logo"
              />
                </span>
              </div>
              <div>
                <span>{{ show.dateText}}</span>
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
            <ButtonLink :url="computeShowUrl" text="LEARN MORE" />
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
    computeShowUrl() {
      // PMS shows should not click through to our _slug page. Instead, take the user to  PMS's Calendar page:
      return this.show.presentedby == 'PMS' ? 'https://www.pamlicomusic.org/' : this.show.path
    },
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