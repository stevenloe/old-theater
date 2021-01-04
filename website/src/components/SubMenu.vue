<template>
  <div @mouseenter="isOpen = true" @mouseleave="isOpen = false" class="px-1 block text-2xl md:text-base md:mt-1 md:ml-2 relative">
    <button @click="isOpen = !isOpen">
      {{ menuData.title }}
      <span class="text-sm text-gray-600">&#9660;</span>
    </button>
    <div :class="isOpen ? ' ' : 'hidden'" class="md:w-48 mt-1 ml-4 block p-3 pt-0 bg-white z-10 md:absolute md:ml-0">
      <g-link v-for="item in menuData.items" v-bind:item="item" :key="item.id" :to="item.link" class="block pt-2">{{ item.text }}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuData: Object,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>