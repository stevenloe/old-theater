<template>
  <div class="m-4 sm:m-8 md:m-8 bg-indigo-700 pt-1 rounded-lg shadow-lg ">
    <!-- image card-->
    <div class=" m-6  rounded-lg overflow-hidden shadow-xl">
      <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.imageAlt">
    </div>
    <!-- details -->
    <div class="rounded-b-lg  pl-6 pr-6 pt-0 pb-4 -mt-4">
      <h2 class="text-white  font-bold text-4xl text-shadow">{{ item.title }}</h2>
      <p class="text-white mb-5 block font-medium text-lg md:text-2xl lg:text-3xl">{{ item.description }}</p>
      <nuxt-link to="/community-education" class="block mb-3 bg-yellow-500  text-center border-2 border-yellow-400 text-black font-semibold text-lg py-2 px-4 shadow-md rounded-lg tracking-wide hover:bg-blue-700 hover:shadow-sm uppercase sm:w-1/3">{{ item.cta }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: "Education",
        category: "Education",
        description:
          "The Old Theater impacts area youth though education and engagement programs.",
        imageUrl: "_nuxt/assets/img/childrens_theater_workshop_crop.jpg",
        imageAlt: "education image",
        cta: "Learn More",
      },
    };
  },
};
</script>
