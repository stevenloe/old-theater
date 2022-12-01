<template>
   <div>
    <WaveShow :show="content"/>
   </div>

</template>

<script>


import WaveShow from "../../components/WaveShow.vue";
export default {
   async asyncData({ $content, params }) {
    const content = await $content("bonafides", params.slug).fetch();
    console.log("Show is:", content);
    return { content };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    }
  },
  computed: {
    isFutureShow() {
      return isFutureDate(this.show.date)
    },
    showType() {
      console.log("SHowType()", this.show.showtype);
       return this.isFutureShow ? this.show.showtype : "Past Show"
    },
    formattedPrice() {
      return formatPrice(this.show.price) 
    }
  },
  layout: "NewLayout",
  components: {
  
    WaveShow
}
};
</script>