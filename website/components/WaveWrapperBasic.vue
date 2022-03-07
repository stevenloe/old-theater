<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${widget.bgcolor}`"
      />
    </svg>
    <div
      class="grid grid-cols-2 gap-8 p-12 pb-48 wave-content"
      :style="bgColor"
    >
    <!-- Content Start-->
this is content
    <!-- Content End -->
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";


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
        bgcolor: "ff0000",
      },
    };
  },
  methods: {

  },
  computed: {

    bgColor() {
      return `background-color: #${this.widget.bgcolor}`;
    },


  },
  components: {
    ButtonLink,
  },
};
</script>