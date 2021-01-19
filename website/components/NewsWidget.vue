<template>
  <div class="m-4 sm:m-8 md:m-8 bg-gray-100 rounded-lg  pl-6 pr-6 pt-3 pb-4 pr-4  shadow-lg">
    <h2 class="text-4xl mb-4 border-b-2 border-gray-500 font-semibold text-gray-900">News</h2>
    <div v-for="(item, i) in items" :key="i" class="mb-6">
      <h2 class="text-gray-900  font-medium text-2xl ">{{ item.title }}</h2>
      <h4 v-if="item.subhead" class="text-gray-400 text-lg font-semibold mb-3 border border-red-900">{{item.subhead}}</h4>
      <p class="text-gray-600 mb-1 block font-medium text-xl">{{ item.description }}</p>
      <div class="flex mb-4">
        <div class="mb-0 p-0 text-gray-700">{{ item.date }}</div>
        <div class="text-gray-700">
          <nuxt-link class="ml-1 italic underline " :to="item.link">{{ item.cta }}</nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link to="/news/" class="block mb-3  italic underline text-lg"> Older news stories</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title:
            "Casting call for production of Sex Please We’re Sixty, “A Saucy Senior Scandal”",
          category: "News",
          description:
            "Calling actors! Please join us at our call casting call for The Old Theater's production of Sex Please We’re Sixty.. ",
          cta: "Read More",
          date: "1/3/2020",
          link: "",
        },
        {
          title: "The Old Theater announces new board members",
          category: "News",
          location: "The Old Theater",
          description:
            "The Old Theater is pleased to announce ...",
          cta: "Read More",
          date: "1/5/2020",
          link: "",
        },
      ],
    };
  },
};
</script>
