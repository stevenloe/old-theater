<template>
  <div
    class="overflow-hidden bg-white border-8 border-blue-700 shadow-lg rounded-xl"
  >
      <div class="box-container">
        <div
          v-for="(group, index) in membersGrouped"
          v-bind:key="index"
          class="grid-cols-2 box md:grid-cols-3"
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
</template>

<script>
import axios from "axios";
import gsap from "gsap";


export default {
 

  async fetch() {
    console.log("FETCH 2");
    console.log("LETS FETCH MEMBERS ", this.$axios.defaults.baseURL);
    const { data } = await axios.get(
      `${this.$axios.defaults.baseURL}data/members2.json`
    );
    
    let list = data.map((item) => {
      if (item.spouseFirst) {
        return `${item.firstName} ${item.lastName} & ${item.spouseFirst} ${item.spouseLast}`;
      } else {
        return `${item.firstName} ${item.lastName}`;
      }
    });

    this.members = list;
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
    };
  },
  
  methods: {
    init() {
      console.log("---  MemberCarousel --> 2 init");
      this.members = this.shuffle(this.members);
      this.membersGrouped = this.chunk(this.members, this.groupDataBy);

      this.$nextTick(() => {
        this.targets = document.querySelectorAll(".box");
        console.log(
          "---  MemberCarousel --> 2.5 Init got targets:",
          this.targets
        );
        gsap.set(this.targets, { xPercent: 100 });
        gsap.set(this.targets[0], { xPercent: 0 });
      });
    },
    slideIt() {
      console.log("---  MemberCarousel --> 4 slideIt()");
      gsap.to(this.targets[this.count], { xPercent: -100 });
      this.count = this.count < this.targets.length - 1 ? ++this.count : 0;
      gsap.fromTo(this.targets[this.count], { xPercent: 100 }, { xPercent: 0 });
      gsap.to({}, { duration: 5 });
    },

    stop() {
      clearInterval(this.interval);
    },
    start() {
      console.log("---  MemberCarousel --> 3 Start()");
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
      console.log("---  MemberCarousel --> hasLayoutChanged()");
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
  },
  created: function () {
    console.log("-------- Created ----------------");
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  background: white;
}

.name {
  padding-left: 1em;
  padding-right: 1em;
  font-family: serif;
  font-style: italic;
  line-height: 1.25;
  color: #222;
  text-align: center;
}
</style>
