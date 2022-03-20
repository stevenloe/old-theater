<template>
  <div>
      
    <WaveHeadline :info="headlineInfo" />
      <WaveText v-for="(info, index) in posts" :key="index" :info="info" />



      <section class="flex justify-end" v-if="nextPage">
        <nuxt-link class="font-medium" v-if="nextPage" to="/news/page/2"
          >Older Posts <span aria-hidden="true">→</span></nuxt-link
        >
      </section>

  </div>
</template>


<script>
import UiHeadline from "@/components/ui/UiHeadline";
import {formatShowDate} from '@/utils/dates.js'
// import {sortByDate} from '@/utils/sort.js'
import WaveText from "../../components/WaveText.vue";
import WaveHeadline from "../../components/WaveHeadline.vue";

export default {
  async asyncData({ $content }) {
    let posts = await $content("news")
      .sortBy("date", "desc")
      //.limit(10)
      .fetch();

      //posts = sortByDate(posts)

      let headlineInfo =  
      {
        title: "News",
        bgcolor: posts[0].bgcolor
      }
        
  

    const nextPage = posts.length === 10;
    return { nextPage, posts, headlineInfo };
  },
  data() {
    return {
      bgcolor: 'ffffff'
    }
  },
  computed: {
    headlineInfo() {
      let foo =  {
        bgcolor: this.info[0].bgcolor,
        title: "News"
      }
      console.log("FOO", foo)
      return foo
    }
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    },
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    WaveText,
    WaveHeadline
},

};
</script>


methods: {

},
