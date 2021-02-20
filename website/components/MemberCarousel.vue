<template>
  <div class="box-container">
    <div v-for="group in members" v-bind:key="group.gid" class="box grid-cols-2 md:grid-cols-3">
      <div class="name text-xl sm:text-2xl md:3xl" v-for="name in group.names" v-bind:key="name.id">
        {{ name.name }}
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data: function () {
    return {
      isMobile: null,
      members: [],
      people: [
        { name: "Jim Berry", id: 0 },
        { name: "Richard Deming", id: 1 },
        { name: "Mary Maxwell", id: 2 },
        {
          name: "Oriental Village Veterinary Hospital / Dr. Sherry Hicks",
          id: 3,
        },
        { name: "Pamlico Musical Society", id: 4 },
        { name: "Rolf Anselm", id: 5 },
        { name: "Robert Austin & Lynda Edwards", id: 6 },
        { name: "Axelson Chiropractic", id: 7 },
        { name: "Lee & Diane Barham", id: 8 },
        { name: "Richard Bentley", id: 9 },
        { name: "Cliff Bond & Ellyn Daly", id: 10 },
        { name: "Peter & Bonnie Capp", id: 11 },
        { name: "Thomas & Cynthia Cochran", id: 12 },
        { name: "Bill & Cathy Cresswell", id: 13 },
        { name: "Jay & Lauri Gates", id: 14 },
        { name: "Don Henderson & Linda Larson", id: 15 },
        { name: "Dennis & Sachiko Humenik", id: 16 },
        { name: "Marc & Lynn Kaplan", id: 17 },
        { name: "Jim & Leslie Kellenberger", id: 18 },
        { name: "Ron & Linda Long", id: 19 },
        { name: "Bob & Marsha Luhrs", id: 20 },
        { name: "Bob & Marlene Miller", id: 21 },
        { name: "Mark & Sarah Risso", id: 22 },
        { name: "Bob & Stacey Taylor", id: 23 },
        { name: "Darrell Wiard & Nancy Crain", id: 24 },
        { name: "Dave & Judy Wickersham", id: 25 },
        { name: "Dan & Leslie Allen", id: 26 },
        { name: "Carman Avery", id: 27 },
        { name: "Paula Beattie", id: 28 },
        { name: "Fay M. Bond", id: 29 },
        { name: "Doug & Janci Cahoon", id: 30 },
        { name: "John & Ellen Chappell", id: 31 },
        { name: "Creative Kitchen & Bath", id: 32 },
        { name: "Doug Daniele & Mindy Schmitz", id: 33 },
        { name: "Bill & Debbie Deighton", id: 34 },
        { name: "Delamar & Delamar, PLLS", id: 35 },
        { name: "Bob Dillard & Cecily Lohmar", id: 36 },
        { name: "George & Marjorie D. Dufek", id: 37 },
        { name: "Ned Ferris", id: 38 },
        { name: "Dick & Penny Flaherty", id: 39 },
        { name: "Jim & MaryAnn Hartmeyer", id: 40 },
        { name: "Gordon & Ann Kellogg", id: 41 },
        { name: "Rod & Sue Lee", id: 42 },
        { name: "Ralph & Sue McCaughan", id: 43 },
        { name: "Tom McElroy & Alice Petree", id: 44 },
        { name: "Christine Mele", id: 45 },
        { name: "Wayne & Sharon Mulligan", id: 46 },
        { name: "Francis J. Murphy", id: 47 },
        { name: "Dick & Dottie Osmun", id: 48 },
        { name: "Bill & Cindy Porter", id: 49 },
        { name: "Richard Preble & Lori Smith", id: 50 },
        { name: "Betsy Quitkin", id: 51 },
        { name: "Jim & Marilyn Ragan", id: 52 },
        { name: "Glen & Rolayne Schwendy", id: 53 },
        { name: "Lew & Peggi Smith", id: 54 },
        { name: "Dr. Marilyn Stern", id: 55 },
        { name: "Jeff & Ellen Troeltzsch", id: 56 },
        { name: "Art & Lynn Whalen", id: 57 },
        { name: "Stephen & Linda Adams", id: 58 },
        { name: "Stanley & Ellen Aeschleman", id: 59 },
        { name: "Sam Alitto", id: 60 },
        { name: "Martin & Belinda Barrow", id: 61 },
        { name: "Ken & Sally Belangia", id: 62 },
        { name: "Ellen Blackmon", id: 63 },
        { name: "John & Jayne Bloom", id: 64 },
        { name: "Bill & Sharon Breitling", id: 65 },
        { name: "Warren & Kathy Bruce", id: 66 },
        { name: "Charles Carpenter & Rosemary Miner", id: 67 },
        { name: "Thomas & Linda Caroon", id: 68 },
        { name: "Chaz & Nelda Coats", id: 69 },
        { name: "Carl & Donna Crothers", id: 70 },
        { name: "Jayne Demers", id: 71 },
        { name: "John & Chris Dustman", id: 72 },
        { name: "Kathy Enzerink", id: 73 },
        { name: "Mac & Sheila Ernest", id: 74 },
        { name: "First Citizens Bank – Oriental", id: 75 },
        { name: "John & Vonda Flanagan", id: 76 },
        { name: "Grant & Christine Garman", id: 77 },
        { name: "Arthur & Terry Halpern", id: 78 },
        { name: "Bill & Lynn Hines", id: 79 },
        { name: "Katherine Hudson", id: 80 },
        { name: "Richard & Melinda Hughes", id: 81 },
        { name: "Larry & Roberta Jones", id: 82 },
        { name: "Isabel Keppner", id: 83 },
        { name: "Ed & Nancy Kress", id: 84 },
        { name: "Ken Laser & Wendy Osserman", id: 85 },
        { name: "Richard & Carol McAdoo", id: 86 },
        { name: "John Messer & Pat Thomaier", id: 87 },
        { name: "Tom & Marilyn Nevison", id: 88 },
        { name: "Anne Parker", id: 89 },
        { name: "Greg & Nancy Piner", id: 90 },
        { name: "Ray’s Creekside Marina, Inc.", id: 91 },
        { name: "Sid & Terell Scott", id: 92 },
        { name: "Diane Silimperi", id: 93 },
        { name: "Ken & Carol Small", id: 94 },
        { name: "Alice Sontag", id: 95 },
        { name: "David & Ursula Stevenson", id: 96 },
        { name: "Wally Umbach", id: 97 },
        { name: "Mark & LuAnn Weinheimer", id: 98 },
        { name: "Corbin & George Ann Wellford", id: 99 },
        { name: "David & Jean White", id: 100 },
        { name: "Don & D Wogaman", id: 101 },
        { name: "World Wide Marine Training, LLC", id: 102 },
        { name: "Priscilla Wormell", id: 103 },
        { name: "Gordon & Patty Allison", id: 104 },
        { name: "Maureen K. Anderson", id: 105 },
        { name: "Tim Balfour & Jennifer Smart", id: 106 },
        { name: "Catherine Baxley", id: 107 },
        { name: "Christopher & Jamie Behre", id: 108 },
        { name: "David & Helen Bland", id: 109 },
        { name: "Ed & Sandy Braun", id: 110 },
        { name: "Kent & Beth Carter", id: 111 },
        { name: "Wyatt & Conis Cutler", id: 112 },
        { name: "Ray & Cherry D’Angelo", id: 113 },
        { name: "Dove Landing Kennels, LLC", id: 114 },
        { name: "Ed & Lee Duer", id: 115 },
        { name: "Steve & Nancy Duttry", id: 116 },
        { name: "Anne Eastman", id: 117 },
        { name: "Howard & Phyllis Garfinkel", id: 118 },
        { name: "Charles & Marguerite Garrett", id: 119 },
        { name: "James, Addrean & Wyatt Hahn", id: 120 },
        { name: "George & Joanne Hurley", id: 121 },
        { name: "Richard & Joan Johnen", id: 122 },
        { name: "Jeff & Pat Kenyon", id: 123 },
        { name: "Steve & Geri LaBreck", id: 124 },
        { name: "Don & Phyllis Lane", id: 125 },
        { name: "Dorothy Lord", id: 126 },
        { name: "Peggy MacDonald", id: 127 },
        { name: "Ted & Trish Mead", id: 128 },
        { name: "Joe Meadows", id: 129 },
        { name: "Hugh & Dixie Midyette", id: 130 },
        { name: "Nelle Murphy", id: 131 },
        { name: "Hans W. Nickstadt", id: 132 },
        { name: "Ol’ Front Porch Music Festival", id: 133 },
        { name: "Bruce & Linda Perkins", id: 134 },
        { name: "Reg & Dianne Piland", id: 135 },
        { name: "Mick & Claire Roberts", id: 136 },
        { name: "Pete & Cathy Roche", id: 137 },
        { name: "Ray & Kathy Ruppert", id: 138 },
        { name: "Jim & Annette Schneider", id: 139 },
        { name: "Anthony & Evelyn Scozzafava", id: 140 },
        { name: "Doug Sligh & Mary Ann Parham", id: 141 },
        { name: "Russ Stevenson", id: 142 },
        { name: "Oliver & Diana Street", id: 143 },
        { name: "Julia Talley", id: 144 },
        { name: "Alfred & Joanne Ulvog", id: 145 },
        { name: "Bob & Gay Webster", id: 146 },
        { name: "Lee Frederick Werth", id: 147 },
        { name: "Larry & Carol Whalen", id: 148 },
      ],
    };
  },
  methods: {
    initAnimation() {
      this.people = this.shuffleData(this.people);
      this.members = this.groupData(this.people);

      setTimeout(
        function () {
          this.animateNames();
        }.bind(this),
        1000
      );
    },
    animateNames() {
      let count = 0;
      const targets = document.querySelectorAll(".box");
      gsap.set(targets, { xPercent: 100 });
      gsap.set(targets[0], { xPercent: 0 });

      function slideIt() {
        gsap.to(targets[count], { xPercent: -100 });
        count = count < targets.length - 1 ? ++count : 0;
        gsap.fromTo(targets[count], { xPercent: 100 }, { xPercent: 0 });
        gsap.to({}, { duration: 7, onComplete: slideIt });
      }

      gsap.delayedCall(2, () => slideIt());
    },
    shuffleData(array) {
      let counter = array.length;

      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },

    // TODO: refactor the below to use 1 method and minimize code duplication
    groupData(data) {
      let count = 0;
      let now = Date.now();
      let dataSet = [];
      let group = [];
      data.forEach((element) => {
        group.push(element);
        console.log("grp", group);
        if (group.length === this.groupDataBy) {
          let g = {};
          g.names = Object.assign({}, group);
          g.gid = now + "-" + count;
          count++;
          console.log("g is:", g);
          dataSet.push(g);
          group = [];
        }
      });

      if (group.length > 0) {
        let g = {};
        g.names = Object.assign({}, group);
        g.gid = now + "-" + count;
        count++;
        console.log("g is:", g);
        dataSet.push(g);
      }

      return dataSet;
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
      return result
    }
  },
  created: function () {
    this.$bus.$on("resize-window", (e) => {
      if (this.hasLayoutChanged()) {
        this.initAnimation();
      } 
    });
  },
  mounted: function () {
    this.hasLayoutChanged();
    this.initAnimation();
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
  /* grid-template-columns: 1fr 1fr 1fr; */
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
