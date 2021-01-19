<template>
  <div class="m-4 sm:m-8 md:m-8 ">
    <!-- image card-->
    <div class="rounded-t-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="require(`~/assets/img/sponsorship/${randomImg}`)" :alt="item.imgAlt" />
    </div>
    <!-- details -->
    <div class=" bg-blue-800 rounded-b-lg  pl-6 pr-6 pt-3 pb-4 shadow-lg">
      <h2 class="text-white  font-bold text-4xl text-shadow">{{ item.title }}</h2>
      <p class="text-white mb-5 block font-medium text-lg md:text-2xl lg:text-3xl">{{ item.description }}</p>
      <nuxt-link to="/support" class="block mb-3 bg-blue-600  text-center border-2 border-white text-white font-semibold text-lg py-2 px-4 shadow-md rounded-lg tracking-wide hover:bg-blue-700 uppercase sm:w-1/3">{{ item.cta }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: "Sponsorship",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        description:
          "Give back to the community by sponsoring a theatrical production, a live music event, or a Friday flick. ... more text goes here",
        images: ['gravy_boys.jpg', 'henri_herbert.jpg', 'on_stage_edit.jpg'],
        imageAlt: "musical or theatrical artist image",
        cta: "Learn More",
      },
    };
  },
  computed: {
    randomImg() {
      const i = Math.floor((Math.random() * 3))
      return  this.item.images[i]
    }
  }
};
</script>
