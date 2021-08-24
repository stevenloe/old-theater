<template>
  <div class="mx-4 bg-yellow-400 rounded-lg shadow-lg sm:mx-8 md:mr-8">
    <p class="px-4 py-2 font-semibold">The Old Theater continues to follow the state and local guidance provided with regards to the COVID-19 pandemic...  
      <nuxt-link :to="`/alerts/covid-19`" class="text-blue-900 hover:bg-gray-100 hover:text-blue-800">Learn More</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>
    


