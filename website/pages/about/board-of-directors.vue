<template>
   <div>
    <WaveBoardWidget :info="content.board.executives.info" :team="content.board.executives.team"/>
    <WaveBoardWidget :info="content.board.managers.info" :team="content.board.managers.team"/>
    
   </div>

</template>

<script>

import WaveBoardWidget from "@/components/WaveBoardWidget";
export default {
  async asyncData({ $content, params }) {
    const content = await $content("data/board/board-of-directors", params.slug).fetch();

    //  console.log("BOARD CONTENT", JSON.stringify(content.board.executives.info));
    return { content };
  },
  layout: "NewLayout",
  components: {
    WaveBoardWidget
  }
};
</script>