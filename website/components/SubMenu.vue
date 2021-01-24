<template>
  <div @mouseenter="isMouseOver=1" @mouseleave="isMouseOver=0" class="p-1 block text-2xl md:text-base md:mt-1 md:ml-2 relative">
      <span class="text-gray-600 md:text-gray-900">
        {{ menuData.title }}
      </span>

      <span v-show="!isOpen" class="text-sm text-white md:text-gray-500">&#9660;</span>
      <span v-show="isOpen" class="text-sm text-white md:text-gray-500">&#9650;</span>

    <div v-show="isOpen" class="md:w-48 mt-1 ml-4 block p-3 pt-0 bg-white z-10 md:absolute md:ml-0">
      <nuxt-link v-for="item in menuData.items" v-bind:item="item" :key="item.id" :to="item.link" class="block p-2 rounded hover:bg-gray-200">{{ item.text }}</nuxt-link>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menuData: Object,
    isMobile:Boolean
  },
  data() {
    return {
      isMouseOver: false,
    };
  },
  computed:{
    isOpen() {
      if (this.isMobile) {
        return true;
      }
      return (this.isMouseOver === 1) ? true : false
    }
  },
};
</script>