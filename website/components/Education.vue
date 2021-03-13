<template>
  <div class="pt-1 m-4 bg-indigo-700 rounded-lg shadow-lg sm:m-8 md:m-8 ">
    <!-- image card-->
    <div class="m-6 overflow-hidden rounded-lg shadow-xl ">
      <img class="object-cover w-full h-full" :src="require(`~/assets/img/${item.imageUrl}`)" :alt="item.imgAlt" />
    </div>
    <!-- details -->
    <div class="pt-0 pb-4 pl-6 pr-6 -mt-4 rounded-b-lg">
      <h2 class="text-4xl font-bold text-white text-shadow">{{ item.title }}</h2>
      <p class="block mb-5 text-lg font-medium text-white md:text-2xl lg:text-3xl">{{ item.description }}</p>
      <nuxt-link to="/community-education" class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-black uppercase bg-yellow-500 border-2 border-yellow-400 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-sm sm:w-1/3">{{ item.cta }}</nuxt-link>
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
        imageUrl: "childrens_theater_workshop_crop.jpg",
        imageAlt: "education image",
        cta: "Learn More",
      },
    };
  },
};
</script>
