<template>
  <div>
    <NavBar class="mb-24" />

    <div
      class="pl-8 pr-8 pt-8 mb-24 sm:pt-0 sm:max-w-lg md:max-w-xl md:text-4xl lg:max-w-3xl xl:max-w-4xl mx-auto prose"
    >
      <h2>News</h2>
      <article
        v-for="article of articles[pageNumber]"
        :key="article.title"
        class="mb-24"
      >
        <div class="text-sm font-semibold uppercase text-gray-700">
          {{ postTime(article.eventTime) }}
        </div>
        <nuxt-content
          :document="article"
          class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8"
        />
      </article>

      <div class="flex justify-between">
        <div
          v-if="pageNumber > 0"
          class="cursor-pointer mr-8 text-2xl font-semibold italic rounded-lg hover:bg-gray-200 px-4 py-2"
          @click="changePageNumber('prev')"
        >
          Newer Articles
        </div>
        <div
          v-if="pageNumber < articles.length - 1"
          class="cursor-pointer mr-8 text-2xl font-semibold italic rounded-lg hover:bg-gray-200 px-4 py-2"
          @click="changePageNumber('next')"
        >
          Older Articles
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  async asyncData({ $content, params }) {
    let data = await $content("news", params.slug)
      .sortBy("eventTime", "desc")
      .fetch();

    const paginate = (array, page_size, page_number) => {
      return array.slice(
        page_number * page_size,
        page_number * page_size + page_size
      );
    };

    let articles = [];
    for (let index = 0; index < data.length / 5; index++) {
      articles.push(paginate(data, 5, index));
    }

    return { articles };
  },

  methods: {
    postTime(date) {
      return dayjs(date).format("LL");
    },
    changePageNumber(prevNext) {
      if (prevNext == "prev" && this.pageNumber > 0) {
        this.pageNumber--;
      } else if (
        prevNext == "next" &&
        this.pageNumber + 1 < this.articles.length
      ) {
        this.pageNumber++;
      }
    },
  },

  data() {
    return {
      pageNumber: 0,
    };
  },

  metaInfo: {
    title: "News",
  },

  layout: "content",
};
</script>

