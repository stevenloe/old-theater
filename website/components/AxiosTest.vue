<template>
  <div class="px-6 py-64 bg-blue-200">
    AXIOS TEST COMPONENT

    <ul id="example-1">
      <li v-for="member in members" :key="member.id">
        <h2 class="font-bold ">
          {{ member.lastName }}
        </h2>
      </li>
    </ul>

    <h2 class="mt-4 text-2xl font-bold">
      
    MOUNTAINS
    </h2>

    <ul id="example-2">
      <li v-for="mountain in mountains" :key="mountain.id">
        <h2 class="mt-4 font-bold">
          {{ mountain.title }}
        </h2>
        <p>{{ mountain.description }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
import indexVue from '../pages/index.vue';
export default {
  created() {
    console.log("---- CREATED AXIOS TEST COMPONENT ------");

    // axios
    //   .get("https://api.nuxtjs.dev/posts")
    //   .then((response) => {
    //     // JSON responses are automatically parsed.
    //     this.posts = response.data;
    //   })
    //   .catch((e) => {
    //     this.errors.push(e);
    //   });

    axios
      .get("http://localhost:3000/data/members2.json")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.members = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });

      // setTimeout(this.fetchHole, 1000)

    //   axios
    // .get('https://api.nuxtjs.dev/posts')
    // .then(response => (this.posts = response.data.bpi))
  },
  async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    },
  data() {
    return {
      mountains: [],
      members: [],
    };
  }


};

// .get("https://old-theater.netlify.app/data/members.json")
</script>