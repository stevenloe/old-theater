<template>
   <div>
    <!-- <WaveBoardWidget :info="content.board.executives.info" :team="content.board.executives.team"/>
    <WaveBoardWidget :info="content.board.managers.info" :team="content.board.managers.team"/> -->
    <WaveText :info="content"/>
   </div>

</template>

<script>


import WaveText from "../../components/WaveText.vue";
export default {
  async asyncData({ $content, params }) {
    const content = await $content("/abouts/rent-the-theater", params.slug).fetch();

    //  console.log("BOARD CONTENT", JSON.stringify(content.board.executives.info));
    return { content };
  },
  layout: "NewLayout",
  components: {
  
    WaveText
}
};
</script>