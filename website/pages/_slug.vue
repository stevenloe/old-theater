<template>
  <div class="">
    <client-only>
      <NavBar/>
    </client-only>
    <article>
      <div class="sm:rounded-lg sm:ml-8 sm:mr-8 overflow-hidden shadow-lg mb-6 max-w-6xl mx-auto">
        <img :src="require(`~/assets/img_new/processed/${article.img}`)" :alt="article.imgAlt" />
      </div>

    
      <!-- <div class="pl-8 pr-8 sm:max-w-lg  md:max-w-xl md:text-4xl lg:max-w-3xl  xl:max-w-4xl   sm:bg-red-200  md:bg-orange-200 lg:bg-yellow-400 mx-auto"> -->
      <div class="pl-8 pr-8 sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <h3 class="font-extrabold text-4xl">{{ article.title }}</h3>
        <div class="text-xs uppercase font-semibold tracking-wide mb-8">{{ article.eventTime | formatDate}} • {{ article.eventTime | formatTime }} • ${{ article.formattedPrice}}</div>

        <nuxt-content :document="article"  class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8" />

        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug }}" class="w-1/2 bg-orange-300 md:w-full  md:block border border-gray-800 text-gray-900 font-bold py-1 px-4 rounded-lg text-lg text-center hover:bg-yellow-300 hover:text-gray-900 no-underline">Buy Tickets</nuxt-link>
      </div>
    </article>

  </div>
</template>


<script>
import NavBar from "@/components/NavBar";
export default {
  async asyncData({ $content, params }) {
    const article = await $content("shows", params.slug).fetch();
    return { article };
  },
  components: {
    NavBar,
  },
};
</script>

<style  scoped>

</style>