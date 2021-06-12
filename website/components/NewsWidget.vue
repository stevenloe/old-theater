<template>
  <div
    class="pt-3 pb-4 pl-6 pr-4 m-4 bg-gray-100 rounded-lg shadow-lg sm:m-8 md:m-8"
  >
    <UiHeadline class="mb-3" level="1">News</UiHeadline>
    <div v-for="(item, i) in items" :key="i" class="mb-6">
      <UiHeadline class="mb-2 leading-snug" level="2">{{ item.title }}</UiHeadline>
      <h4
        v-if="item.subhead"
        class="mb-3 text-lg font-semibold text-gray-400 border border-red-900"
      >
        {{ item.subhead }}
      </h4>
      <p class="block mb-1 font-medium text-gray-600 md:text-xl">
        {{ item.description }}
      </p>
      <div class="flex mb-4">
        <div class="p-0 mb-0 text-gray-700">{{ item.date }}</div>
        <div class="text-gray-700">
          <nuxt-link class="ml-1 italic underline" :to="item.link">{{
            item.cta
          }}</nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-link to="/news/" class="block mb-3 text-lg italic underline">
      More News Stories</nuxt-link
    >
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
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
          link: "news/casting-call-sex-please-were-sixty?",
        },
        {
          title: "The Old Theater announces new board members",
          category: "News",
          location: "The Old Theater",
          description: "The Old Theater is pleased to announce ...",
          cta: "Read More",
          date: "1/5/2020",
          link: "news/new-board-members",
        },
      ],
    };
  },
  components: {
    UiHeadline
  }
};
</script>
