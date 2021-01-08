<template>
<div class="m-4 sm:m-8 md:m-8 ">
  <!-- image card-->
    <div class="rounded-t-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.imageAlt">
    </div>
    <!-- details -->
    <div class=" bg-blue-500 rounded-b-lg  pl-6 pt-3 pb-4 shadow-lg">
      <h2 class="text-white font-medium text-4xl ">{{ item.title }}</h2>
      <p class="text-white mb-3 block font-medium text-lg">{{ item.description }}</p>
      <g-link to="/education/" class="w-1/2 block  mb-3 bg-blue-500  text-center border-2 border-white  text-white font-semibold text-lg py-1 px-4 pb-2  rounded-lg  hover:bg-blue-700 ">{{ item.cta }}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
 
};
</script>
