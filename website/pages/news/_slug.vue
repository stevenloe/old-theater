<template>
  <div>
    <NavBar />

    <h2>News</h2>
    <article class="pt-4 sm:pt-8 md:pt-16">
      <div
        class="pl-8 pr-8 pt-8 sm:pt-0 sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl mx-auto"
      >
        <nuxt-content
          :document="article"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
        />
      </div>
    </article>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("news", params.slug).fetch();
    console.log("ARTICLE", article);
    return { article };
  },
  components: {
    NavBar,
  },
};
</script>

<style >
p {
  margin-bottom: 2em !important;
}
</style>

