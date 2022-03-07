<template>
  <div class="pb-8 m-4 bg-white sm:m-8 md:m-8">
    <!-- image card-->
    <div class="overflow-hidden rounded-t-lg shadow-lg">
      <show-picture :img="whoWeAre.img" :alt="whoWeAre.caption"></show-picture>    
      </div>
    <!-- details -->
    <h3 class="mt-8 ml-8 text-3xl font-bold ">{{ whoWeAre.title }}</h3>
    <nuxt-content
          :document="whoWeAre"
          class="m-8 mb-4 prose max-w-none md:prose-lg"
        />
  </div>
</template>

<script>
import ShowPicture from './ShowPicture.vue'
export default {
  
  data() {
    return {
      item: {
        title: "Who We Are",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        description:
          "Enjoy the benefits of membership while providing the support that enables us to continue creating magical experiences both in front of and behind the curtains. We thank our generous donors who help The Old Theater bring outstanding entertainment to our community.",
        img: "/images/widgets/cast-edit.jpg",
        alt: "Membership Photo",
        cta: "Join",
      },
    };
  },
  components: {
    ShowPicture
  },
  props: {
    whoWeAre: {
      type: Object,
      required: true,
    },
  },
};
</script>
