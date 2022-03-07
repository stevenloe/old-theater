<template>
  <div class="wrap-test">
    <!--  Start wave -->
    <div class="wave-section">
      <svg
        class="wave"
        viewBox="0 0 1442 102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
          :fill="`#${widget.bgcolor}`"
        />
      </svg>
      <div class="p-12 pb-48 wave-content" :style="bgColor">
        <!-- Content Start-->
        <div>
          <UiHeadline class="mb-3" level="1"
            >News</UiHeadline
          >
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div v-for="(item, i) in news" :key="i">
              <div class="mb-1 text-lg font-light text-black">
                {{ showDate(item.date) }}
              </div>
              <div class="mb-2 text-xl font-semibold">
                <nuxt-link :to="item.path"> {{ item.title }} </nuxt-link>
              </div>

              <div class="text-black">
                <nuxt-link class="italic underline" :to="item.path">
                  Read more...
                </nuxt-link>
              </div>
              
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <ButtonLink :url="`/news/`" text="MORE STORIES" color="transparent" />
          </div>
        </div>
        <!-- Content End -->
      </div>
      <!-- end wave -->
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import UiHeadline from "@/components/ui/UiHeadline";
import { formatShowDate } from "@/utils/dates.js";
export default {
  props: ["news"],
  data() {
    return {
      widget: {
        title: "Frank Vignola Guitar Magic",
        date: "2022-08-21T23:30:00.2Z",
        showTime: "7:30 PM",
        price: "$20",
        presentedby: "PMS",
        location: "At The Old Theater",
        shortDesc:
          "One of the most extraordinary guitarists performing today, Frank Vignolas stunning virtuosity and dynamic genre-spanning music...",
        img: "frank-vignola.jpg",
        imgAlt: "Frank Vignola Guitar Magic poster art",
        youtubeVideo: "WcN392H2jx0",
        path: "/shows/",
        bgcolor: "A4964A",
      },
    };
  },
  computed: {
    bgColor() {
      return `background-color: #${this.widget.bgcolor}`;
    },
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date");
    },
  },
  components: {
    UiHeadline,
    ButtonLink,
  },
};
</script>
