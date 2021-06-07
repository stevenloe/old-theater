<template>
  <div class="px-6 py-64 bg-blue-200">
    AXIOS TEST COMPONENT

    <ul id="example-1">
      <li v-for="member in members" :key="member.id">
        <h2 class="mt-4 font-bold">
          {{ member.lastName }}
        </h2>
      </li>
    </ul>
    <ul id="example-2">
      <li v-for="post in posts" :key="post.id">
        <h2 class="mt-4 font-bold">
          {{ post.title }}
        </h2>
        <p>{{ post.description }}</p>
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

    axios
      .get("https://api.nuxtjs.dev/posts")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });

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
      posts: [],
      members: [],
    };
  },

  methods: {
    fetchHole() {
      let id = 1;
      this.members.forEach((element, index) => {
        element.id = index
      });
      console.log(JSON.stringify(this.members));
    },
  },
};

// .get("https://old-theater.netlify.app/data/members.json")
</script>