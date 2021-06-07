<template>
  <div class="px-6 py-64 bg-blue-200">
    AXIOS TEST COMPONENT

    <ul id="example-1">
  <li v-for="post in posts" :key="post.id">
    <h2 class="mt-4 font-bold">
      {{ post.title }}
      </h2>
      <p>{{post.description}}</p>
      
  </li>
</ul>
  </div>


</template>


<script>
export default {
  created() {
    console.log("---- CREATED AXIOS TEST COMPONENT ------");
  },
  // async fetch() {
  //     this.mountains = await fetch(
  //       'https://api.nuxtjs.dev/mountains'
  //     ).then(res => res.json())
  //   }
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
      res.json()
    )
  },
  fetchOnServer: false
}
</script>