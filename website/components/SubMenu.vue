<template>
  <div
    @mouseenter="isMouseOver = 1"
    @mouseleave="isMouseOver = 0"
    class="relative z-30 block mt-2 rounded md:py-1 md:px-2 md:hover:bg-gray-200"
  >
    <span class="inline-block text-gray-600 md:text-gray-900">
      {{ menuData.title }}
    </span>

    <span class="inline-block">
      <svg
        class="w-4 h-4 text-white fill-current md:text-gray-800"
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
      class="z-50 block p-3 mt-1 ml-4 bg-white md:w-48 md:absolute md:shadow-xl md:-ml-2"
    >
      <nuxt-link
        v-for="item in menuData.items"
        v-bind:item="item"
        :key="item.id"
        :to="item.link"
        class="block p-1 no-underline rounded md:p-2 hover:bg-gray-200"
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
