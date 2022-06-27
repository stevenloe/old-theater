<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${show.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-24 pb-48 pl-8 pr-8 md:pt-12 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">

        <base-picture :img="`/images/shows/${show.img}`" :alt="show.imgAlt">
        </base-picture>

        <div>
          <UiHeadline class="mt-4 mb-2" level="2" style="line-height: 1.08em">{{
            show.title
          }}</UiHeadline>

          <div class="mb-4 md:text-lg lg:text-xl xl:2xl">
            <div class="flex">
              <span class="flex items-center">
                <span class="pr-3 font-bold"> Presented by: </span>

                <a
                  v-if="show.presentedby == 'PMS'"
                  href="https://www.pamlicomusic.org"
                >
                  <img
                    class="object-contain h-12 p-1 mb-2 ml-2 bg-white"
                    src="/images/community/pms-new-logo-crop-omg.svg"
                    alt="Pamlico Musical Society logo"
                /></a>
                <a
                  v-if="show.presentedby == 'ACS'"
                  href="https://www.arapahoecharter.org/"
                >
                  <img
                    class="object-contain h-16 p-1 mb-2 ml-2 bg-white"
                    src="/images/community/acs-logo.webp"
                    alt="Pamlico Musical Society logo"
                  />
                </a>
                <img
                  v-if="show.presentedby == 'OTC'"
                  class="object-contain h-10 mb-2 -ml-2 md:h-12"
                  src="/images/community/old-theater-logo.svg"
                  alt="Pamlico Musical Society logo"
                />
              </span>
            </div>

            <div>
              <span>{{ show.dateText }}</span>
              {{ show.showTime }}
            </div>
            <span>{{ show.price }}</span>
            <div v-if="show.location">
              <span>{{ show.location }}</span>
            </div>
          </div>

          <nuxt-content
            class="mx-auto mb-8 prose prose-xl xl:prose-2xl"
            :document="show"
          />
        </div>

        <div class="md:justify-between md:flex">
          <ButtonLink
            v-if="show.ticketURL"
            :url="show.ticketURL"
            text="BUY TICKETS NOW"
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

export default {
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  computed: {
    computeShowUrl() {
      // PMS shows should not click through to our _slug page. Instead, take the user to  PMS's Calendar page:
      return this.show.presentedby == "PMS"
        ? "https://www.pamlicomusic.org/"
        : this.show.path;
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
    BasePicture,
    UiHeadline,
    ButtonLink,
  },
};
</script>


