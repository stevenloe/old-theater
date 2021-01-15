<template>
<div class="m-4 sm:m-8 md:m-8 ">
  <!-- image card-->
    <div class="rounded-t-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.imageAlt">
    </div>
    <!-- details -->
    <div class=" bg-blue-500 rounded-b-lg  pl-6 pr-6 pt-3 pb-4 shadow-lg">
      <h2 class="text-white font-medium text-4xl text-shadow">{{ item.title }}</h2>
      <p class="text-white mb-5 block font-medium text-lg">{{ item.description }}</p>
      <nuxt-link to="/education/" class="block mb-3 bg-blue-600  text-center border-2 border-white text-white font-semibold text-lg py-2 px-4 shadow-md rounded-lg tracking-wide hover:bg-blue-700 uppercase sm:w-1/3">{{ item.cta }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
 
};
</script>
