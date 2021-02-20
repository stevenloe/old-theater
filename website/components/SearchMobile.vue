<template>
  <div class="">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search oldtheater.org"
      class="w-full rounded-lg bg-gray-400 text-xl px-3  h-12 mt-2 mb-2 focus:outline-none placeholder-black"
    />
    <ul
      v-if="results.length"
      class="w-full h-full flex-1 top-40 pb-8 bg-gray-300 rounded-md border border-gray-300 overflow-hidden"
    >
      <div class="flex justify-between items-center border-b-2 border-gray-500">
        <div class="m-4 text-lg font-semibold">Search Results</div>
        <svg
          @click="clearQuery"
          class="h-6 w-6 m-2 fill-current cursor-pointer"
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
          :to="result.slug"
          class="flex px-8 py-4 items-center leading-8 transition ease-in-out duration-150 text-gray-900 text-3xl hover:text-black"
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
        .limit(20)
        .search(searchQuery)
        .fetch();
      let abouts = await this.$content("abouts")
        .limit(20)
        .search(searchQuery)
        .fetch();
      console.log("shows", shows, "abouts", abouts);

      this.results = [...shows, ...abouts];

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