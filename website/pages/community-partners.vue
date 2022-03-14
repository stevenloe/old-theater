<template>
  <div>
    <PageIntro :info="intro"/>

 

    <div v-for="partner of partners" :key="partner.title">
      <PartnerCard :info="partner" />
    </div>







    <client-only>
      <member-carousel bgcolor="8B7B2A" />
    </client-only>
  </div>
</template>

<script>
import MemberCarousel from "@/components/MemberCarousel";
import UiHeadline from "@/components/ui/UiHeadline";
import BasePicture from "@/components/BasePicture.vue";
import PartnerCard from "@/components/PartnerCard.vue";
import PageIntro from "@/components/PageIntro.vue";
export default {
  metaInfo: {
    title: "About us",
  },
  data() {
    return {

    };
  },
  components: {
    MemberCarousel,
    UiHeadline,
    PartnerCard,
    BasePicture,
    PageIntro
  },
  layout: "NewLayout",



   async asyncData({ $content, params }) {
    const [intro, partners] = await Promise.all(
      [
        $content("page-intros/community-partners").fetch(),
        $content("partners", { text: true }).sortBy('order', 'asc').fetch(),
      ]
    );
  
    return {
      intro, 
      partners
    };
  }
};
</script>