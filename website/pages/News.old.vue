<template>
  <div>
    <NavBar />

    <div
      class="container md:mx-auto max-w-3xl pl-8 pr-8 md:pl-0 md:pr-0 pt-16 md:pt-24"
    >
      <div class="mb-4">
        <h1 class="text-3xl font-semibold">News</h1>
        <ul>
          <li
            class="mb-4 hover:bg-gray-200 rounded-lg px-2 py-3"
            v-for="article of articles"
            :key="article.title"
          >
            <nuxt-link  :to="{ name: 'news-slug', params: { slug: article.slug }}">
              <div class="uppercase text-sm text-gray-700 font-semibold">
                {{ article.eventDate }}
              </div>
              <div class="text-lg font-semibold">
                {{ article.title }}
              </div>

              <div class="italic">Read more...</div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let articles = await $content("news", params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "createdAt",
        "eventDate",
        "eventTime",
        "url",
        "shortDesc",
        "imgAlt",
      
      ])
      .sortBy("eventTime", "asc")
      .fetch();

      console.log("articles", articles);

    return { articles };
  },
  metaInfo: {
    title: "News",
  },
  layout: "content",
};
</script>
