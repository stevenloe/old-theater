<template>
  <div>
    <!-- <header class="text-white mx-auto text-xs">
      <div class="p-5 bg-indigo-500 md:inline-block">
        <p>
          <span class="uppercase">Published:</span>
          <span>{{ about.published }}</span>
        </p>
        <div class="flex">
          <span class="mr-1 uppercase">Filed under:</span>
          <ul class="flex">
            <li v-for="tag in about.tags" :key="tag" class="mr-2">
              <nuxt-link
                :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
                class="hover:underline"
              >
                {{ tag }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header> -->
    <div class="prose prose-lg text-gray-700 bg-white p-5 pt-1 rounded shadow mx-auto">
      <nuxt-content :document="about" />
    </div>
    <!-- <footer class="py-5 mt-5">
      <prev-next :prev="prev" :next="next" />
    </footer> -->
  </div>
</template>

<script>

export default {
  async asyncData({ $content, params }) {
    const about = await $content("abouts", params.slug).fetch();
    return { about };
  },
  layout:'NewLayout'

};
</script>