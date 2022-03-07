<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${item.bgcolor}`"
      />
    </svg>
    
    <div
      class="grid grid-cols-1 gap-8 p-12 pb-48 sm:grid-cols-2 wave-content"
      :style="bgColor"
    >
      <!-- Content Start-->
      <div class="col-span-1">
        
        <UiHeadline class="mb-3 text-white" level="1">Membership</UiHeadline>
      <p class="text-xl text-white">
        {{item.description}}
      </p>
      
            
         
      </div>

      <div class="col-span-1 justify-self-end">
        <img :src="item.img" />
      </div>
      <!-- Content End -->
    </div>
  </div>
</template>


<script>
import ShowPicture from "./ShowPicture.vue";
import UiHeadline from "@/components/ui/UiHeadline";
export default {
  data() {
    return {
      item: {
        title: "Membership",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        url: "/",
        description:
          "Enjoy the benefits of membership while providing the support that enables us to continue creating magical experiences both in front of and behind the curtains. We thank our generous donors who help The Old Theater bring outstanding entertainment to our community.",
        img: "/images/home/placeholder-members.png",
        alt: "Membership Photo",
        cta: "Join",
        bgcolor: "375464",
      },
    };
  },
  computed: {
    bgColor() {
      return `background-color: #${this.item.bgcolor}`;
    },
  },
  components: {
    ShowPicture,
    UiHeadline,
  },
};
</script>
