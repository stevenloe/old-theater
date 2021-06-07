<template>
  <div class="bg-pink-200">
    <h1>AXIOS TEST PAGE !</h1>



    <ul id="example-3" class="mb-6 border border-redto-red-400">
      <li v-for="mountain in mountains" :key="mountain.id">
        <h2 class="mt-4 font-bold">
          {{ mountain.title }}
        </h2>
        <p>{{ mountain.description }}</p>
      </li>
    </ul>

    <client-only>
      <axios-test />
    </client-only>
  </div>
</template>


<script>
import AxiosTest from "@/components/AxiosTest";
export default {
  components: {
    AxiosTest,
  },
  data() {
    return {
      mountains:[]
    }
  },
  async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    },
};
</script>