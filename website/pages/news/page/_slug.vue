<template>
  <div>
    <article class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
    <header class="mx-auto text-xs text-white">
      <div class="p-5 bg-indigo-500 md:inline-block">
        <p>
          <span class="uppercase">Published:</span>
          <span>{{ post.published }}</span>
        </p>
        <div class="flex">
          <span class="mr-1 uppercase">Filed under:</span>
          <ul class="flex">
            <li v-for="tag in post.tags" :key="tag" class="mr-2">
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
    </header>
    <div class="p-5 mx-auto prose prose-lg text-gray-500 bg-white rounded">
      <nuxt-content :document="post" />
    </div>
    <footer class="py-5 mt-5">
      <prev-next :prev="prev" :next="next" />
    </footer>
    </article>
  </div>
</template>


<script>
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content }) {
    const posts = await $content("news")
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();

    const nextPage = posts.length === 10;
    return { nextPage, posts };
  },
  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
};
</script>
