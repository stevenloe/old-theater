<template>
  <div class="">
  <article>
    <div class="rounded-lg overflow-hidden shadow-lg mb-6">
      <img :src="require(`~/assets/img_new/processed/${article.img}`)" :alt="article.imgAlt" />
    </div>

    <div>
      <h3 class="font-bold text-4xl">{{ article.title }}</h3>
                <div class="text-xs uppercase font-semibold tracking-wide">{{ article.eventTime | formatDate}} • {{ article.eventTime | formatTime }} • ${{ article.formattedPrice}}</div>
    </div>


    <!-- <nuxt-content class="prose  lg:prose-lg xl:prose-2xl mx-auto" :document="article" /> -->
    <nuxt-content class="prose lg:prose-lg xl:prose-2xl mx-auto" :document="article" />

    <nuxt-link :to="{ name: 'slug', params: { slug: article.slug }}" class="w-1/2 bg-orange-300 md:w-full  md:block border border-gray-800 text-gray-900 font-bold py-1 px-4 rounded-lg text-lg text-center hover:bg-yellow-300 hover:text-gray-900">Buy Tickets</nuxt-link>

  </article>

  </div>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>