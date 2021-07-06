<template>
  <div class="m-4 sm:m-8 md:m-8 ">
    <!-- image card-->
    <div class="overflow-hidden rounded-t-lg shadow-lg">
      <show-picture :img="`/images/widgets/${randomImg}`" :alt="item.alt"></show-picture>
    </div>
    <!-- details -->
    <div class="pt-3 pb-4 pl-6 pr-6 bg-purple-800 rounded-b-lg shadow-lg ">
      <h2 class="text-4xl font-bold text-white text-shadow">{{ item.title }}</h2>
      <p class="block mb-5 text-lg font-medium text-white md:text-2xl lg:text-3xl">{{ item.description }}</p>
      <nuxt-link to="/support/sponsor" class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-white uppercase bg-blue-600 border-2 border-white rounded-lg shadow-md hover:bg-blue-700 sm:w-1/3">{{ item.cta }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import ShowPicture from './ShowPicture.vue'
export default {
  data() {
    return {
      item: {
        title: "Sponsorship",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        description:
          "Give back to the community by sponsoring a theatrical production, a live music event, or a Friday flick.",
        images: ['gravy_boys.jpg', 'henri_herbert.jpg', 'on_stage_edit.jpg'],
        alt: "musical or theatrical artist image",
        cta: "Learn More",
      },
    };
  },
  computed: {
    randomImg() {
      const i = Math.floor((Math.random() * 3))
      return  this.item.images[i]
    }
  },
  components: {
    ShowPicture
  }
};
</script>
