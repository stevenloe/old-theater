<template>
  <div class="m-4 sm:m-8 md:m-8 ">
    <!-- image card-->
    <div class="rounded-t-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="require(`~/assets/img_new/processed/${item.imageUrl}`)" :alt="item.imgAlt" />
    </div>
    <!-- details -->
    <div class=" bg-yellow-600 rounded-b-lg  pl-6 pr-6 pt-3 pb-4 shadow-lg">
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
        title: "Membership",
        subhead: "PATREON MEMBERSHIP",
        category: "Membership",
        location: "The Old Theater",
        description:
          "Enjoy the benefits of membership while providing the support that enables us to continue creating magical experiences both in front of and behind the curtains. We thank our generous donors who help the Old Theater bring outstanding entertainment to our community.",
        imageUrl: "cast-edit.jpg",
        imageAlt: "Membership Photo",
        cta: "Join",
      },
    };
  },
};
</script>
