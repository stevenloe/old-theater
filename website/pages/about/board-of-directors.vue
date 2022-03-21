<template>
   <div>
    <WaveBoardWidget :info="content.board.executives.info" :team="content.board.executives.team"/>
    <WaveBoardWidget :info="content.board.managers.info" :team="managers"/>
    
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
  computed: {
        managers() {
      let items = this.content.board.managers.team;

      items.sort((a, b) => {
        let fa = a.role.toLowerCase(),
          fb = b.role.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      console.log(" MANAGERS ____________________________", items);
      return items;
    },
  },
  layout: "NewLayout",
  components: {
    WaveBoardWidget
  }
};
</script>