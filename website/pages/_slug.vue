<template>
  <div class="mx-auto">
    <article
      class="w-full mx-auto content-column md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <div class="overflow-hidden rounded">
          <img
            :src="require(`~/assets/img_new/processed/${article.img}`)"
            :alt="article.imgAlt"
          />
        </div>
        <div
          class="pl-8 pr-8 mx-auto sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl"
        >
          <h1 class="mt-4 mb-4 text-4xl font-extrabold">{{ article.title }}</h1>
          <div class="mb-8 text-xs font-semibold tracking-wide uppercase">
            {{ article.eventTime | formatDate }} •
            {{ article.eventTime | formatTime }} • ${{ article.formattedPrice }}
          </div>

          <nuxt-content
            :document="article"
            class="mb-8 prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl"
          />

          <a
            :href="article.ticketURL"
            class="block w-full px-4 py-2 mb-3 mr-2 text-lg font-bold tracking-wide text-center text-white uppercase bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
            >Buy tickets</a
          >
        </div>
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
  layout: "NewLayout",
};
</script>
