<template>
<div class="m-4 sm:m-8 md:m-8 ">
  <!-- image card-->
    <div class="relative rounded-t-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.imageAlt">
      <!-- <h2 class="absolute inset-x-0 top-0 pt-2 h-16  text-white text-center font-medium text-4xl ">{{ item.title }}</h2> -->
    </div>
    <!-- details -->
    <div class=" bg-yellow-900 rounded-b-lg  pl-6 pt-3 pb-4 pr-4 shadow-lg">
      <h2 class="text-white font-medium text-4xl mb-2">{{ item.title }}</h2>
      <h4 class="text-gray-300 text-lg font-semibold mb-3">{{item.subhead}}</h4>
      <p class="text-white mb-4 block font-medium text-lg">{{ item.description }}</p>
      <g-link to="/education/" class="w-1/2 block  mb-3 bg-yellow-900  text-center border-2 border-white  text-white font-semibold text-lg py-1 px-4 pb-2  rounded-lg  hover:bg-yellow-800 ">{{ item.cta }}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
 
};
</script>
