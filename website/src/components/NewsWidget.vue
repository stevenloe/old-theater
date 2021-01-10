<template>
<div class="m-4 sm:m-8 md:m-8 bg-gray-100 rounded-lg  pl-6 pt-3 pb-4 pr-4  shadow-lg">
    <h2 class="text-4xl mb-2 border-b-2 border-gray-600 font-semibold text-gray-900">News</h2>
    <div v-for="(item, i) in items" :key="i">
      <h2 class="text-gray-900  font-medium text-2xl ">{{ item.title }}</h2>
      <h4  v-if="item.subhead" class="text-gray-300 text-lg font-semibold mb-3 border border-red-900">{{item.subhead}}</h4>
      <p class="text-gray-600 mb-1 block font-medium text-xl">{{ item.description }}</p>
      <div class="flex mb-4">
        <div class="mb-0 p-0 text-gray-700">{{ item.date }}</div> 
        <div class="text-gray-700"> <g-link class="ml-1 italic underline " :to="item.link">{{ item.cta }}</g-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
 
};
</script>
