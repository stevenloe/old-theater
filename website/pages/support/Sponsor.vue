<template>
  <div>
    <WaveText :info="membershipDoc" />
    <WaveText :info="sponsorMovie" />
    <WaveText :info="sponsorPerformance" />
    <client-only>
    </client-only>
  </div>
</template>
<script>
import UiHeadline from "@/components/ui/UiHeadline";
import BasePicture from "@/components/BasePicture";
import WaveText from "../../components/WaveText.vue";

export default {
  async asyncData({ $content, params }) {
    const [membershipDoc, sponsorMovie, sponsorPerformance] = await Promise.all([
      $content("sponsorship/sponsorship", params.slug).fetch(),
      $content("sponsorship/sponsor-a-performance", params.slug).fetch()
    
    ]);

    return {
      membershipDoc,
      sponsorMovie,
      sponsorPerformance
    };
  },

  layout: "NewLayout",
  components: {
    UiHeadline,

    BasePicture,
    WaveText,
  },
};
</script>