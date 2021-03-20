<template>
  <div>
    <h1>MEMBER LSIT</h1>
    <ul>
      <li class="mt-4" v-for="(group, name) in membersGrouped" :key="name">
        <span class="font-bold uppercase">{{ name }}</span>
        <ul class="ml-4">
          <li
            class="text-gray-800"
            v-for="(member, index) in group"
            :key="index"
          >
            {{ member.first1 }} {{ member.last1 }}
            <span class="text-gray-800" v-if="member.first2"
              >&amp; {{ member.first2 }} {{ member.last2 }}</span
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>




////////////



export default {
  async asyncData({ $content }) {
    const members = await $content("members").fetch();

    console.log("members B ", members[0].body);

    let membersGrouped = members[0].body.reduce(function (r, a) {
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
      membersGrouped[key].sort(compareValues("last1"));
    });

    return { membersGrouped };
  },
};
</script>
