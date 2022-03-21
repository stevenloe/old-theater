<template>
  <div class="">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search oldtheater.org"
      class="w-full h-12 px-3 mt-2 mb-2 text-xl placeholder-black bg-gray-200 focus:outline-none"
    />
    <ul
      v-if="results.length"
      class="flex-1 w-full h-full pb-8 overflow-hidden bg-gray-300 border border-gray-300 rounded-md top-40"
    >
      <div class="flex items-center justify-between border-b-2 border-gray-500">
        <div class="m-4 text-2xl font-semibold">Search Results</div>
        <svg
          @click="clearQuery"
          class="w-6 h-6 m-2 cursor-pointer fill-current"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        </svg>
      </div>

      <li v-for="result of results" :key="result.slug">
        <NuxtLink
          :to="result.folder + result.slug"
          @click.native="close"
          class="flex items-center px-8 py-4 text-3xl leading-8 text-gray-900 no-underline transition duration-150 ease-in-out hover:text-black"
        >
          {{ result.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: Boolean,
    isAnimated: String,
  },
  data() {
    return {
      searchQuery: "",
      results: [],
      isOpen: false,
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.results = [];
        this.onSearchResults();
        return;
      }
      let shows = await this.$content("shows")
        .limit(50)
        .search(searchQuery)
        .fetch();
      let abouts = await this.$content("abouts")
        .limit(50)
        .search(searchQuery)
        .fetch();
      let supports = await this.$content("supports")
        .limit(50)
        .search(searchQuery)
        .fetch();
      let news = await this.$content("news")
        .limit(50)
        .search(searchQuery)
        .fetch();
      let fundraisers = await this.$content("fundraisers")
        .limit(50)
        .search(searchQuery)
        .fetch();

      this.results = [...shows, ...abouts, ...supports, ...news , ...fundraisers ];

      this.onSearchResults();
    },
  },
  methods: {
    onSearchResults() {
      this.$bus.$emit("no-search-results", this.results.length === 0);
    },
    clearQuery() {
      this.searchQuery = "";
    },
    close() {
      this.$bus.$emit("close-mobile-menu");
    }
  },
  created: function () {
    this.$bus.$on("toggle-search", (e) => {
      this.isOpen = !this.isOpen;
    });

    this.$bus.$on("toggle-mobile-menu", (e) => {
      this.clearQuery()
    });
  },
};
</script>

<style scoped>
.search {
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
}

.open {
  width: 220px;
  padding: 4px;
}
</style>