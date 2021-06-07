<template>
  <div class="bg-pink-200">
    <h1>AXIOS TEST PAGE !</h1>

    <ul id="example-1">
      <li v-for="member in members" :key="member.id">
        <h2 class="font-bold ">
          {{ member.lastName }}
        </h2>
      </li>
    </ul>

    <ul id="example-3" class="mb-6 border border-redto-red-400">
      <li v-for="mountain in mountains" :key="mountain.id">
        <h2 class="mt-4 font-bold">
          {{ mountain.title }}
        </h2>
        <p>{{ mountain.description }}</p>
      </li>
    </ul>

    <client-only>
      <!-- <axios-test /> -->
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
      mountains:[],
      members:[]
    }
  },
  async fetch() {

    console.log("##### ",  process.env);

    console.log("-------- ", `${process.env._AXIOS_BASE_URL_} HI THERE` );
    // console.log("NOW FETVH THIS", `${baseURL}/data/members2.json`);
      // this.members = await fetch(
      //   `${baseURL}/data/members2.json`
      // ).then(res => res.json())
    },
    beforeCreate() {
      console.log("AXIO BEFORE CREATE",process.env._AXIOS_BASE_URL_);
    },
    created() {
      console.log("AXIO CREATED", process.env._AXIOS_BASE_URL_);
    },
    mounted() {
      console.log("AXIO MOUNTED", process.env._AXIOS_BASE_URL_);
    },
    
    
    
};
</script>