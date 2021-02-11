<template>
  <div
    @mouseenter="isMouseOver = 1"
    @mouseleave="isMouseOver = 0"
    class="block relative text-2xl md:py-1 md:px-2 md:text-lg rounded md:hover:bg-gray-200 mt-2 z-30"
  >
    <span class="inline-block text-gray-600 md:text-gray-900">
      {{ menuData.title }}
    </span>

    <span class="inline-block">
      <svg
        class="fill-current text-white md:text-gray-800 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>

    <div
      v-show="isOpen"
      class="md:w-48 mt-1 ml-4 block p-3 bg-white z-50 md:absolute md:shadow-xl md:-ml-2"
    >
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
    isMobile: Boolean,
  },
  data() {
    return {
      isMouseOver: false,
    };
  },
  computed: {
    isOpen() {
      if (this.isMobile) {
        return true;
      }
      return this.isMouseOver === 1 ? true : false;
    },
  },
};
</script>
