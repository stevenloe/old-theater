<template>
  <div class="p-8 mt-8 bg-gray-100 border border-gray-400">
    <h1>Welcome {{ currentYear }} Members!!</h1>
    <ul>
      <li v-for="(group, name) in membersGrouped" :key="name">
        <div class="mt-4 font-bold text-gray-700 uppercase">{{ name }}</div>
        <ul class="ml-4">
          <li
            class="text-gray-800"
            v-for="(member, index) in group"
            :key="index"
          >
            {{ member.firstName }} {{ member.lastName }}
            <span class="text-gray-800" v-if="member.spouseFirst"
              >&amp; {{ member.spouseFirst }} {{ member.spouseLast }}</span
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";

export default {
  async fetch() {
    const { data } = await axios.get(
      `${this.$axios.defaults.baseURL}data/members2.json`
    );

    console.log("DATA", data);

    let membersGrouped = data.reduce(function (r, a) {
      r[a.level] = r[a.level] || [];
      r[a.level].push(a);
      return r;
    }, Object.create(null));
    

    function compareValues(key, order = "asc") {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    }

    const keys = Object.keys(membersGrouped);

    keys.forEach((key, index) => {
      membersGrouped[key].sort(compareValues("lastName"));
    });

    console.log("MEMBERS GROUPED", membersGrouped);

    this.membersGrouped = membersGrouped;
  },
  data() {
    return {
      membersGrouped: null,
    };
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    },
  },
};
</script>
