<template>
  <nuxt-link :to='url' class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-gray-700 uppercase bg-white border-2 border-gray-700 rounded-lg hover:shadow-md hover:border-black hover:text-white hover:bg-indigo-200 sm:w-1/3">{{ text }}</nuxt-link>
</template>

<script>
export default {
  props: ['url', 'text']
}
</script>