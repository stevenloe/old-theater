<template>
  <div>
    <WaveText :info="getInvolvedIntro" />
    <VolunteersInAction :info="volunteersActionText" />

    <WaveText :info="playYourPartText" />
    <WeNeedYou :info="weNeedYouText" />

    <client-only>
      <MemberCarousel bgcolor="486870" />
    </client-only>
  </div>
</template>
<script>
import UiHeadline from "@/components/ui/UiHeadline";
import MemberList from "@/components/MemberList";
import BasePicture from "@/components/BasePicture";
import WaveText from "../components/WaveText.vue";
import VolunteersInAction from "../components/VolunteersInAction.vue";
import WeNeedYou from "../components/WeNeedYou.vue";
import MemberCarousel from "../components/MemberCarousel.vue";

export default {
  async asyncData({ $content, params }) {
    const [
      getInvolvedIntro,
      volunteersActionText,
      playYourPartText,
      weNeedYouText,
      memberList,
    ] = await Promise.all([
      $content("supports/get-involved-intro", params.slug).fetch(),
      $content(
        "supports/get-involved-volunteers-in-action",
        params.slug
      ).fetch(),
      $content("supports/get-involved-play-your-part", params.slug).fetch(),
      $content("supports/get-involved-we-need-you", params.slug).fetch(),
      $content("data/members/members2").fetch(),
    ]);

    return {
      getInvolvedIntro,
      volunteersActionText,
      playYourPartText,
      weNeedYouText,
      memberList,
    };
  },

  layout: "NewLayout",
  components: {
    UiHeadline,
    MemberList,
    BasePicture,
    WaveText,
    VolunteersInAction,
    WeNeedYou,
    MemberCarousel,
  },
};
</script>