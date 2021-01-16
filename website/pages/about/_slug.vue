<template>
  <div class="">
  <about>
    <div class="rounded-lg overflow-hidden shadow-lg mb-6">
      <img :src="require(`~/assets/img_new/processed/${about.img}`)" :alt="about.imgAlt" />
    </div>

    <!-- <nuxt-content class="prose  lg:prose-lg xl:prose-2xl mx-auto" :document="about" /> -->
    <nuxt-content class="prose lg:prose-lg xl:prose-2xl mx-auto" :document="about" />

    <nuxt-link :to="{ name: 'slug', params: { slug: about.slug }}" class="w-1/2 bg-orange-300 md:w-full  md:block border border-gray-800 text-gray-900 font-bold py-1 px-4 rounded-lg text-lg text-center hover:bg-yellow-300 hover:text-gray-900">Buy Tickets</nuxt-link>

  </about>

  </div>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const about = await $content('abouts', params.slug).fetch()

      return { about }
    }
  }
</script>