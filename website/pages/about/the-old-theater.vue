<template>
  <div>
    <WaveText :info="content" />
    <WaveImageGallery :info="imageData" bgcolor="9492aa" />
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
import BasePicture from "@/components/BasePicture";
import WaveText from "../../components/WaveText.vue";
import WaveImageGallery from "../../components/WaveImageGallery.vue";
export default {
  async asyncData({ $content, params }) {
    const [content, imageData] = await Promise.all([
      $content("abouts/the-old-theater", params.slug).fetch(),
      $content("data/about/theater-photos", params.slug).fetch(),
    ]);

    return {
      content,
      imageData,
    };
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    BasePicture,
    WaveText,
    WaveImageGallery,
  },
};
</script>