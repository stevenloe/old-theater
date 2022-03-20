<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${info.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <!-- Top info section and body text -->
        <UiHeadline class="mb-2" level="2">
          Welcome {{ membershipYear }} Members
        </UiHeadline>

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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    memberData: {
      type: Object,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      membersGrouped: null,
      membershipYear: null
    };
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    },
    bgColor() {
      return `background-color: #${this.info.bgcolor}`;
    },
  },
  methods: {
    groupMemberData(data) {
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
          const varA =
            typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
          const varB =
            typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
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
  },
  created: function () {
    this.groupMemberData(this.memberData.members);
    this.membershipYear = this.memberData.membershipYear
  },
  components: { UiHeadline },
};
</script>


