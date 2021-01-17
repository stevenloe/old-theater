<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search oldtheater.org"
      class="block w-56  pl-3 py-2 truncate leading-5 placeholder-gray-700 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    />
    <ul
      v-if="results.length"
      class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="result of results" :key="result.slug">
        <NuxtLink
          @click="clear()"
          :to="result.slug"
          class="flex px-8 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black"
        >
          {{ result.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      results: []
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
    }
  }
}
</script>