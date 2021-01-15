<template>
  <article>
    <div class="rounded-lg overflow-hidden shadow-lg mb-6">
      <img :src="require(`~/assets/img_new/processed/${article.img}`)" :alt="article.imgAlt" />
    </div>

    <nuxt-content class="prose  lg:prose-lg xl:prose-2xl mx-auto" :document="article" />

  </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>