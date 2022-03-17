<template>
   <div>
    <WaveText :info="content"/>
   </div>

</template>

<script>


import WaveText from "../../components/WaveText.vue";
export default {
  async asyncData({ $content, params }) {
    const content = await $content("/abouts/history", params.slug).fetch();

    //  console.log("BOARD CONTENT", JSON.stringify(content.board.executives.info));
    return { content };
  },
  layout: "NewLayout",
  components: {
  
    WaveText
}
};
</script>