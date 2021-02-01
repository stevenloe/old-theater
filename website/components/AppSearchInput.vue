<template>
  <div class="w-full">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search oldtheater.org"
      :class="searchClass"
    />
    <ul
      v-if="results.length"
      class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="result of results" :key="result.slug">
        <NuxtLink
          :to="result.slug"
          class="flex px-8 py-2 items-center leading-5 transition ease-in-out duration-150 text-blue-800  text-2xl hover:text-black"
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
    isMobile:Boolean,
    isAnimated:String
  },
  data() {
    return {
      searchQuery: '',
      results: [],
      isOpen: false,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.results = []
        return
      }
      let articles = await this.$content('articles')
        .limit(20)
        .search(searchQuery)
        .fetch()
      let abouts = await this.$content('abouts')
        .limit(20)
        .search(searchQuery)
        .fetch()
        console.log("articles", articles, "abouts", abouts)

        this.results = [...articles, ...abouts]
    }
  },
  methods:{
    clear() {
      console.log("CLEAR");
      // this.results= [];
    },
  },
  created: function () {
    this.$bus.$on('toggle-search', (e) => {
      this.isOpen = !this.isOpen
    })
  },
  computed: {
    searchClass() {
      console.log("isMobile", this.isMobile, "isOpen", this.isOpen);
      let openClose = (this.isOpen || this.isMobile) ? 'open' : '';
      console.log("openClose", openClose, "Animated", this.isAnimated);
      if(this.isAnimated === 'true') {return `${openClose} search block w-0 h-10 text-lg`}
      return `${openClose} search block w-full rounded-lg md:border-0 bg-blue-400 md:text-2xl font-semibold placeholder-white h-0 md:rounded-tr-none`
    }
  }
}
</script>

<style scoped>
.search {
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
}

.open {
  width:220px;
  padding: 4px;
}
</style>