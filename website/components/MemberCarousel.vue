<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${bgcolor}`"
      />
    </svg>

    <div class="p-12 pb-56 wave-content" :style="bgColor">
      <div
        class="overflow-hidden"
      >
        <div>
          <div
            class="flex py-2 mx-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
          >
            Thanks to Our {{ membershipYear }} Members!
          </div>

          <div
            class="overflow-hidden "
          >
            <div class="box-container">
              <div
                v-for="(group, index) in membersGrouped"
                v-bind:key="index"
                class="grid-cols-2 box md:grid-cols-3"
                :style="bgColor"
              >
                <div
                  class="text-xl name sm:text-2xl md:3xl"
                  v-for="(name, index) in group"
                  v-bind:key="index"
                >
                  {{ name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import gsap from "gsap";

export default {
  props: {
    bgcolor: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    const { data } = await axios.get(
      // `${this.$axios.defaults.baseURL}data/members2.json`
      `${this.$axios.defaults.baseURL}data/members-2022.json`
    );

    let list = data.members.map((item) => {
      if (item.spouseFirst) {
        return `${item.firstName} ${item.lastName} & ${item.spouseFirst} ${item.spouseLast}`;
      } else {
        return `${item.firstName} ${item.lastName}`;
      }
    });

    

    this.members = list;
    this.membershipYear = data.membershipYear
    this.init();
    this.start();
  },

  data: function () {
    return {
      isMobile: null,
      interval: null,
      count: 0,
      targets: null,
      membersGrouped: [],
      members: [],
      membershipYear: null
    };
  },

  methods: {
    init() {
      this.members = this.shuffle(this.members);
      this.membersGrouped = this.chunk(this.members, this.groupDataBy);

      this.$nextTick(() => {
        this.targets = document.querySelectorAll(".box");
        gsap.set(this.targets, { xPercent: 100 });
        gsap.set(this.targets[0], { xPercent: 0 });
      });
    },
    slideIt() {
      gsap.to(this.targets[this.count], { xPercent: -100 });
      this.count = this.count < this.targets.length - 1 ? ++this.count : 0;
      gsap.fromTo(this.targets[this.count], { xPercent: 100 }, { xPercent: 0 });
      gsap.to({}, { duration: 5 });
    },

    stop() {
      clearInterval(this.interval);
    },
    start() {
      this.interval = setInterval(this.slideIt, 6000);
    },
    shuffle(array) {
      // Knuth-Fisher-Yates shuffle
      var m = array.length,
        temp,
        i;

      // Check if there's still elements remaining
      while (m) {
        // Pick remaining element
        i = Math.floor(Math.random() * m--);

        // Swap it with the current element
        temp = array[m];
        array[m] = array[i];
        array[i] = temp;
      }

      return array;
    },
    chunk(arr, chunkSize) {
      var R = [];
      for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
      return R;
    },

    hasLayoutChanged() {
      const newIsMobile = window.innerWidth < 768;
      let result = false;
      if (this.isMobile === null || newIsMobile !== this.isMobile) {
        result = true;
      }
      this.isMobile = newIsMobile;
      return result;
    },
  },
  computed: {
    groupDataBy() {
      const result = this.isMobile ? 2 : 3;
      return result;
    },
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    },
    bgColor() {
      return `background-color: #${this.bgcolor}`;
    },
  },
  created: function () {
    this.hasLayoutChanged();
    this.$bus.$on("resize-window", (e) => {
      if (this.hasLayoutChanged()) {
        this.stop();
        this.init();
        this.start();
      }
    });
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  name: "MemberCarousel",
};
</script>

<style scoped>
.box-container {
  width: 100%;
  height: 10rem;
  position: relative;
  overflow: hidden;
}

.box {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
}

.name {
  padding-left: 1em;
  padding-right: 1em;
  font-family: 'Comfortaa', serif;
  color: #fff;
  text-align: center;
}
</style>
