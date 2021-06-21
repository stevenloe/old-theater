<template>
  <div class="m-4 sm:m-8 md:m-8 ">
    <!-- image card-->
    <div class="overflow-hidden rounded-t-lg shadow-lg">
      <img class="object-cover w-full h-full" :src="require(`~/assets/img_new/processed/${item.imageUrl}`)" :alt="item.imgAlt" />
    </div>
    <!-- details -->
    <div class="pt-3 pb-4 pl-6 pr-6 bg-yellow-600 rounded-b-lg shadow-lg ">
      <h2 class="text-4xl font-bold text-white text-shadow">{{ item.title }}</h2>
      <p class="block mb-5 text-lg font-medium text-white md:text-2xl lg:text-3xl">{{ item.description }}</p>
      <nuxt-link to="/support/membership" class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-white uppercase bg-blue-600 border-2 border-white rounded-lg shadow-md hover:bg-blue-700 sm:w-1/3">{{ item.cta }}</nuxt-link>
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
          "Enjoy the benefits of membership while providing the support that enables us to continue creating magical experiences both in front of and behind the curtains. We thank our generous donors who help The Old Theater bring outstanding entertainment to our community.",
        imageUrl: "cast-edit.jpg",
        imageAlt: "Membership Photo",
        cta: "Join",
      },
    };
  },
};
</script>
