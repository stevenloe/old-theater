<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto content-column md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
      <article class="p-6 bg-white rounded shadow lg:p-8">
        <nuxt-content
          class="mx-auto mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="content"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const content = await $content("supports", params.slug).fetch();
    return { content };
  },
  layout: "NewLayout",
};
</script>