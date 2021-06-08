<template>
  <div class="px-6 py-64 bg-blue-200">
    AXIOS TEST COMPONENT

    <ul id="example-1">
      <li v-for="member in members" :key="member.id">
        <h2 class="font-bold">
          {{ member.lastName }}
        </h2>
      </li>
    </ul>

    <h2 class="mt-4 text-2xl font-bold">MOUNTAINS</h2>

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
import indexVue from "../pages/index.vue";
export default {
  beforeCreate() {
    console.log(" $$ AXIO BEFORE CREATE");
  },
  created() {
    console.log(" $$ AXIO CREATED");
  },
  mounted() {
    console.log(" $$ AXIO MOUNTED");
  },
};

// .get("https://old-theater.netlify.app/data/members.json")
</script>