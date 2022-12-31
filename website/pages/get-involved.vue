<template>
  <div>
    <WaveTextGallery v-for="item of items" :item="item"
        :key="item.title" />


    <client-only>
      <MemberCarousel bgcolor="688890" />
    </client-only>
  </div>
</template>
<script>
import UiHeadline from "@/components/ui/UiHeadline";
import MemberList from "@/components/MemberList";
import BasePicture from "@/components/BasePicture";
import WaveTextGallery from "../components/WaveTextGallery.vue";

import MemberCarousel from "../components/MemberCarousel.vue";

export default {

  async asyncData({ $content, params }) {
    const [members, items] = await Promise.all(
      [
        $content("data/members/members2").fetch(),
        $content("involved", { text: true }).sortBy('order', 'asc').fetch(),
      ]
    );
  

    console.log( "items", items)
    return {
      members, 
      items
    }
  },

  layout: "NewLayout",
  components: {
    UiHeadline,
    MemberList,
    BasePicture,
    WaveTextGallery,
 
    MemberCarousel,
  },
};
</script>