<template>
  <div
    class="pt-3 pb-4 pl-6 pr-4 m-4 mb-8 bg-gray-100 rounded-lg shadow-lg sm:m-8 md:m-8"
  >
    <UiHeadline class="mb-3" level="1">News</UiHeadline>
    <div v-for="(item, i) in news" :key="i" class="mb-6">
      <UiHeadline class="mb-2 leading-snug" level="3">{{ item.title }}</UiHeadline>
      <h4
        v-if="item.subhead"
        class="mb-3 text-lg text-gray-900 "
      >
        {{ item.subhead }}
      </h4>
      <p class="block mb-1 font-medium text-gray-900 md:text-xl">
        {{ item.description }}
      </p>
      <div class="flex mb-4">
        <div class="p-0 mb-0 text-gray-700">{{ item.date }}</div>
        <div class="text-gray-700">
          <nuxt-link class="ml-1 italic underline" 
            :to="'news/'+item.slug">
            Read more...
          </nuxt-link>
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
  props: ['news'],
  components: {
    UiHeadline
  }
};
</script>
