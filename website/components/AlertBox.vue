<template>
  <div class="mx-4 bg-yellow-400 rounded-lg shadow-lg sm:mx-8 md:mr-8">
    <p class="px-4 py-2 font-semibold">In response to COVID-19, The Old Theater is presenting outdoor events this Summer. Indoor shows return this Fall!
      <nuxt-link :to="`/alerts/covid-19`" class="text-blue-900 hover:bg-gray-100 hover:text-blue-800">Learn More</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>
    


