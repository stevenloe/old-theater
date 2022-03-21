<template>
  <div>
    <WaveNewsText :info="post" />
  </div>
</template>


<script>
import UiHeadline from "@/components/ui/UiHeadline";
import {formatShowDate} from '@/utils/dates.js'
import WaveNewsText from "../../components/WaveNewsText.vue";

export default {
  async asyncData({ $content, params }) {
    const post = await $content("news", params.slug).fetch();
console.log("POST IS", post)
    return { post, params };
  },
  methods: {
    showDate(date) {
      return formatShowDate(date, "date")
    },
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    WaveNewsText
}
};
</script>


