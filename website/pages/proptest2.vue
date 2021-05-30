<template>
  <div>
    <nuxt-content :document="page" />
    <prop-me :peeps="page" :memberData="mems"/>
  </div>
</template>

<script>
import PropMe from "@/components/PropMe";
export default {
  async asyncData({ $content, params, error }) {
    const slug = "members";
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    return {
      page: {
        ...page,
        injected: page[0].body,
      },
      mems: page[0].body
    };
  },
  components: {PropMe}
};
</script>
