<template>
  <post>
    <header class="text-white mx-auto text-xs">
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
    <div class="prose prose-lg text-gray-500 bg-white p-5 rounded mx-auto">
      <nuxt-content :document="post" />
    </div>
    <footer class="py-5 mt-5">
      <prev-next :prev="prev" :next="next" />
    </footer>
  </post>
</template>


<script>
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content }) {
    const posts = await $content("news")
      // .only(["author", "createdAt", "description", "path", "title"])
      .sortBy("createdAt", "desc")
      .limit(10)
      .fetch();

    const nextPage = posts.length === 10;
    console.log("nextPage", nextPage);
    console.log("POSTS Len", posts.length);
    return { nextPage, posts };
  },
  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
  },
};
</script>
