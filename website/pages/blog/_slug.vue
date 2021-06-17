<template>
  <div class="m-8">
  This is slug
    <h2>{{ post.title }}</h2>
    <img :src="post.thumbnail" alt="">
    <p>
    image is {{post.thumbnail}}
    </p>
    <p>
    date is {{post.date}}
    </p>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>