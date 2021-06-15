<template>
  <nuxt-link :to='url'>
    <div class="block px-4 py-2 mb-3 text-lg font-semibold tracking-wide text-center text-gray-900 uppercase bg-white border-2 border-gray-700 rounded-lg hover:text-white hover:shadow-md hover:border-black hover:bg-black sm:w-1/3">
    {{ text }}
    </div>
    </nuxt-link>
</template>

<script>
export default {
  props: ['url', 'text']
}
</script>