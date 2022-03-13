<template>
  <div class="-mt-24 wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        fill="`#{`"
      />
    </svg>

<div>{{partner.bgcolor}}</div>
    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
      style="bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
          <div class="flex justify-between">
            <div>
              <UiHeadline class="mb-2" level="3"
                >{{partner.title}}</UiHeadline
              >
            </div>
            <div class="flex">
              <img
                class="object-contain h-12 mb-2 ml-2 "
                src="/images/community/pms-new-logo-crop-omg.svg"
                alt="Pamlico Musical Society logo"
              />
            </div>
          </div>
          <UiHeadline class="mb-4" level="4"
            >{{partner.subhead}}</UiHeadline
          >
          <div class="mb-8">
            <base-picture
              :img="partner.img"
              :alt="partner.alt"
           
            ></base-picture>
          </div>

          <nuxt-content
          class="mx-auto mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="partner"
        />
          <!-- <p
            class="mb-4 leading-7 text-gray-900 text-medium lg:leading-9 lg:mb-6"
          >
            The mission of the Pamlico Musical Society is to present diverse
            musical experiences that enrich the quality of life in our
            community. Since 1997, our concert performances and outreach
            activities have provided opportunities to enjoy and interact with a
            wide variety of high quality musical groups representing many
            musical genres.
          </p>
          <p
            class="mb-4 leading-7 text-gray-900 text-medium lg:leading-9 lg:mb-6"
          >
            Our primary performance venue is the Old Theater, where the small
            hall promotes intimate exchanges between the artists and audiences
            &mdash; further enhancing the significance of the musical
            experience. Many of our artists also present an outreach component
            which extends the impact of our programs to partners including the
            Pamlico County Public Schools, the Arapahoe Charter School, the
            Pamlico Christian Academy, HeartWorks, Prime Time, the Holt's Chapel
            Community Center, and the Pamlico Community College.
          </p>
          <p
            class="mb-4 leading-7 text-gray-900 text-medium lg:leading-9 lg:mb-6"
          >
            With a season that runs from September/October through April/May
            each year, our Grammy-quality programming embraces bluegrass, jazz,
            classical, folk, rock, Americana, pop, blues and more, offering
            something special for everyone who loves great music.To learn more
            visit
            <a class="underline" href="https://www.pamlicomusic.org"
              >www.pamlicomusic.org</a
            >.
          </p> -->
       
      </div>
    </div>
  </div>
</template>

<script>
import UiHeadline from "./ui/UiHeadline.vue";
import BasePicture from "./BasePicture.vue";

export default {
  props: {
    partner: {
      type:Object,
      required: true,
    },
  },
    mounted() {
    console.log ("____________________ MOUNTED content", this.partner)
  },
    computed: {

    bgColor() {
      console.log("BGCOLOR______ ", this.partner)
      return `background-color: #${this.partner.bgcolor}`;
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
  
  data() {
    return {
      pms: {
        img: "/images/community/pms_supplied_collage.jpg",
        alt: "Pamlico Musical Society",
        caption: "",
      },
    };
  },
  components: { UiHeadline, BasePicture },
};
</script>





