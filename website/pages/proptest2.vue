<template>
  <div>
    <nuxt-content :document="page">
      
    </nuxt-content> 
    <prop-me :peeps="page" />
  </div>
</template>

<script>
import PropMe from "@/components/PropMe";
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content("members")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "WE HAVE ERROR!!:", err });
      });
    return {
      page: {
        ...page,
        // injected: page[0].body,
      },
      // mems: page[0].body
    };
  },
  components: {PropMe}
};
</script>
