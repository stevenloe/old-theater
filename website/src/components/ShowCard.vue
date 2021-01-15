<template>
<div class="m-4 sm:m-8 md:flex md:m-8 md:mr-4">
  <!-- image card-->
    <div class="relative md:w-2/3 rounded-lg overflow-hidden shadow-lg">
      <img class="h-full w-full object-cover" :src="item.imageUrl" :alt="item.imageAlt">
    </div>

    <!-- details card-->
    <div class="relative -mt-1 bg-gray-200 rounded-b-lg md:mt-0 md:rounded-b-none md:rounded-r-lg md:-ml-4 md:flex md:w-1/3  md:p-0 shadow-lg">
      <div class="p-6 pt-2 w-full">
        <div class="">
          <h4 class="  font-semibold text-4xl ">{{ item.title }}</h4>
          <div class=" text-xs uppercase font-semibold tracking-wide">
            {{ item.date }} &bull; {{ item.time}} &bull; ${{ item.formattedPrice }}
          </div>
        </div>
        <p class="block overflow md:break-normal">{{ item.shortDesc }}.</p>
        <div class="flex w-full mt-2 md:inline-block">
          <g-link to="/" class="w-1/2 bg-orange-300 md:w-full border border-gray-800 text-gray-900 font-bold py-1 px-4 rounded-lg text-lg hover:bg-yellow-300 hover:text-gray-900">Buy Tickets</g-link>
          <g-link to="/show/" class="w-1/2 ml-3 md:ml-0 md:mt-3 md:w-full bg-white  border border-gray-700  text-gray-800 font-semibold py-1 px-4 text-lg rounded-lg  hover:bg-gray-100 hover:text-gray-900">Learn More</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>
