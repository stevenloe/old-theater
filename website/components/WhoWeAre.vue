<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${item.bgcolor}`"
      />
    </svg>

    <div
      class="p-12 pb-48 wave-content"
      :style="bgColor"
    >

      <nuxt-content
          :document="leftParagraphs"
          class="m-8 mb-4 prose max-w-none md:prose-lg"
        />
    <div class="grid grid-cols-1 gap-8 pb-48 md:grid-cols-2 ">
      <!-- image card -->
      <div class="relative">
        <h3 class="mb-8 -mt-1 text-6xl font-bold leading-none text-white">
              <nuxt-link :to="item.url">
                {{ item.title }}
              </nuxt-link>
            </h3>
        
         <p v-for="textL, index in leftParagraphs" :key="index"
              class="mb-4 text-xl leading-relaxed tracking-wide"
            >
             {{ textL }}
            </p>

      </div>

      <!-- details card -->
      <div class="relative">
        <nuxt-link :to="item.url">
          <base-picture class="mb-10" :img="item.img" alt="item.alt"></base-picture>
        </nuxt-link>
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            
               

            <p v-for="text, index in rightParagraphs" :key="index"
              class="mb-4 text-xl leading-relaxed tracking-wide"
            >
             {{ text }}
            </p>

           
          </div>

          <!-- Learn More Button -->
          <div class="flex justify-end">
            <ButtonLink :url="item.url" text="LEARN MORE" />
          </div>
        </div>
      </div>
    </div></div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import BasePicture from "./BasePicture.vue";
import { formatShowDate } from "@/utils/dates.js";
import { formatPrice } from "@/utils/format.js";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
    mounted() {

      console.log(" MOUNTED 0", JSON.stringify(this.item.body.children[0].children[0], null, 2))
      console.log(" MOUNTED 2", JSON.stringify(this.item.body.children[2].children[0], null, 2))
      console.log(" MOUNTED 4", JSON.stringify(this.item.body.children[4].children[0], null, 2))

      
      console.log(" -------------------- WE BE Mounted" , JSON.stringify(this.item.body.children[0].children[0].value, null, 2));
    

      this.item.body.children.forEach((element, i) => {
        // this.rightParagraphs.push(element.body.children[0].value)

        if ( i % 2 === 0) {
          if (i < 6) {
            this.leftParagraphs.push(element.children[0].value)
          } else {
            this.rightParagraphs.push(element.children[0].value)
          }
           console.log ("I is:", i, element.children[0].value)


           console.log("this.leftParagraphs", this.leftParagraphs)
           
        }

        // console.log(" EACH" , i,  element);
      });

      
    },
    data() {
      return {
        leftParagraphs: [],
        rightParagraphs: []
      }
    },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date");
    },
    showTime(date) {
      return formatShowDate(date, "time");
    },
  
  },
  computed: {
    // formattedPrice() {
    //   return formatPrice(this.item.price);
    // },
    bgColor() {
      return `background-color: #${this.item.bgcolor}`;
    },
    presentedBy() {
      if (this.item.presentedby == "PMS") {
        return '<img src="/logos/pms-logo-300-flat.jpg" alt="Pamlico Musical Society Logo">';
      } else {
        console.log(" NOT PMS");
        return this.item.presentedby;
      }
    },
  },
  components: {
   BasePicture,
    ButtonLink,
  },
};
</script>