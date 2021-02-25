<template>
  <div>
    <NavBar />

    <div class="pt-4 sm:pt-8 md:pt-32">
      <div
        class="pl-8 pr-8 pt-8 sm:pt-0 sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl mx-auto"
      >
        <h1 class="text-2xl font-bold mb-8">{{ post.title }}</h1>

        <nuxt-content
          :document="post"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  async asyncData({ $content, params }) {
    const post = await $content("news", params.slug).fetch();
    console.log("post", post, "PARAMS", params);

    return { post, params };
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

