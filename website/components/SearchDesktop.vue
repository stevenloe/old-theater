<template>
  <div class="w-full">
    <input
    id="search-input"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search oldtheater.org"
      :class="searchClass"
    />
    <ul
      v-if="results.length"
      class="absolute z-40 flex-1 w-auto py-4 overflow-scroll bg-gray-200 top-40 dark:bg-gray-900" 
    >
      <li v-for="result of results" :key="result.slug">
        <NuxtLink
          :to="result.path"
          @click.native="clearSearch"
          class="flex items-center px-8 py-2 mx-2 text-lg leading-6 text-black transition duration-150 ease-in-out rounded-lg hover:bg-gray-400 "
        >
          {{ result.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import {debounce} from '@/utils/debounce.js'

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
      let supports = await this.$content("supports")
        .limit(20)
        .search(searchQuery)
        .fetch();
      let news = await this.$content("news")
        .limit(20)
        .search(searchQuery)
        .fetch();
      let fundraisers = await this.$content("fundraisers")
        .limit(20)
        .search(searchQuery)
        .fetch();

      this.results = [...shows, ...abouts, ...supports, ...news , ...fundraisers ];

      this.results.forEach(e => {
        console.log("--- slug", e.slug, "path", e.path);
      });
    },
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
      this.isOpen = false;
    }
  },
  created() {
    this.$bus.$on("toggle-search", (e) => {
      if (e === 'close') {
        this.isOpen = false
      } else {
        this.isOpen = !this.isOpen;
      }
      
      this.searchQuery = "";
      if (this.isOpen) {
        const searchInput = document.querySelector('#search-input');
        searchInput.focus();
      }
    });
    this.$bus.$on("hide-search", (e) => {
      this.isOpen = false;
    });

    this.$bus.$on("resize-window", (e) => {
      this.clearSearch();
    });
  },

  computed: {
    searchClass() {
      let openClose = this.isOpen ? "open" : "";
      console.log("SEARCH CLASS:: open", openClose);
      return `${openClose} search w-0 h-10 text-lg text-black focus:outline-none bg-gray-300 placeholder-black`;
    },
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
  padding: 6px;
  display: block;
}
</style>