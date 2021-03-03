<template>
  <div class="mx-auto">
    <div
      class="content-column mx-auto w-full md:w-3/4 lg:w-9/12 xl:3/4  lg:text-xl xl:text-2xl text-red-800 font sm:text-blue-400 md:text-lg lg:text-green-800 xl:text-orange-500"
    >
      <!-- <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl">News</h1> -->

      <!-- <nuxt-content class="prose prose-lg mx-auto p-5 bg-white rounded shadow-lg" :document="about" /> -->

      <article
        class="bg-white rounded shadow mb-12 p-6 lg:p-8"
      >
  

        <h2 class=" text-xl sm:tett-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
       
        </h2>
        <!-- <nuxt-content :document="post" /> -->

          <nuxt-content 
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
    :document="support"
  />
      </article>

      <section class="flex justify-end" v-if="nextPage">
        <nuxt-link class="font-medium" v-if="nextPage" to="/news/page/2"
          >Older Posts <span aria-hidden="true">→</span></nuxt-link
        >
      </section>
    </div>
  </div>
</template>


<script>

export default {
  async asyncData({ $content, params }) {
    const support = await $content("supports", params.slug).fetch();
    return { support };
  },
  layout: 'NewLayout'


};
</script>

<style >
p {
  margin-bottom: 2em !important;
}

h2 {
  padding-top: 0 !important;
}
</style>

