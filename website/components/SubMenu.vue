<template>
  <div @mouseenter="isOpen = true" @mouseleave="isOpen = false" class="px-1 block text-2xl md:text-base md:mt-1 md:ml-2 relative">
    <button @click="isOpen = !isOpen">
      {{ menuData.title }}
      <span class="text-sm text-gray-600">&#9660;</span>
    </button>
    <transition
        enter-active-class="transition-all duration-1000 ease-out"
        leave-active-class="transition-all duration-1000 ease-in"
        enter-class="opacity-0 scale-y-0"
        enter-to-class="opacity-100 scale-y-100"
        leave-class="opacity-100 scale-y-100"
        leave-to-class="opacity-0 scale-y-25"
      >
    <div v-show="isOpen" class="md:w-48 mt-1 ml-4 block p-3 pt-0 bg-white z-10 md:absolute md:ml-0">
      <nuxt-link v-for="item in menuData.items" v-bind:item="item" :key="item.id" :to="item.link" class="block pt-2">{{ item.text }}</nuxt-link>
    </div>
    </transition>
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