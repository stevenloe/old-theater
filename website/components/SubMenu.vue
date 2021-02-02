<template>
  <div
    @mouseenter="isMouseOver = 1"
    @mouseleave="isMouseOver = 0"
    class="block relative text-2xl md:py-1 md:px-2 md:text-lg rounded md:hover:bg-gray-200 mt-2 z-30
    ">
    <span class="text-gray-600 md:text-gray-900">
      {{ menuData.title }}
    </span>

    <span class="text-sm text-white md:text-gray-500 tracking-tighter">&#9660;</span>

    <div
      v-show="isOpen"
      class="md:w-48 mt-1 ml-4 block p-3 bg-white z-50 md:absolute md:shadow-xl md:-ml-2">
      <nuxt-link
        v-for="item in menuData.items"
        v-bind:item="item"
        :key="item.id"
        :to="item.link"
        class="block p-2 rounded hover:bg-gray-200"
        >{{ item.text }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuData: Object,
    isMobile: Boolean
  },
  data() {
    return {
      isMouseOver: false
    };
  },
  computed: {
    isOpen() {
      if (this.isMobile) {
        return true;
      }
      return this.isMouseOver === 1 ? true : false;
    }
  }
};
</script>
