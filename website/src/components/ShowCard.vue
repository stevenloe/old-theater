<template>
  <div class="m-8 md:flex">
    <div class="relative pb-5/6">
      <img class="h-full w-full object-cover rounded-lg shadow-md" :src="item.imageUrl" :alt="item.imageAlt">
    </div>
    <div class="relative px-4 -mt-4 md:-ml-6 md:mt-6 md:mb-6 md:flex">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="inline-block bg-red-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{{item.category}}</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ item.date }}  &bull; {{ item.time}}  &bull; At {{ item.location}} 
          </div>
          
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ item.title }}</h4>
        <div class="mt-1">
          ${{ item.formattedPrice }}
          <span class="text-gray-600 text-sm"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
