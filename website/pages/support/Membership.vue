<template>
  <div>
    <WaveText :info="membershipDoc" />
    <WaveText :info="poweredBy" />
    <client-only>
      <MemberList :memberData="memberList" :info="info"/>
    </client-only>
  </div>
</template>
<script>
import UiHeadline from "@/components/ui/UiHeadline";
import MemberList from "@/components/MemberList";
import BasePicture from "@/components/BasePicture";
import WaveText from "../../components/WaveText.vue";

export default {
  async asyncData({ $content, params }) {
    const [membershipDoc, poweredBy, memberList] = await Promise.all([
      $content("membership/membership", params.slug).fetch(),
      $content("membership/powered-by", params.slug).fetch(),
      // $content("data/members/members2").fetch(),
      $content("data/members/members-2022").fetch(),
    ]);

    return {
      membershipDoc,
      poweredBy,
      memberList
    };
  },
  data() {
    return {
      content: {
        img: "/images/support/my-theater-pic-1100w.jpg",
        alt: "Drawing of The Old Theater by Betty Brown",
        caption: "The Old Theater",
      },
      info: {
        bgcolor: "D1D5F0",
      },
    };
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    MemberList,
    BasePicture,
    WaveText,
  },
};
</script>