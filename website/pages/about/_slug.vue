<template>
   <div>
    <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
    <UiHeadline id="level-1-headline" level="1">{{content.title}}</UiHeadline>
      <article class="p-6 mt-6 bg-white rounded-lg shadow-lg lg:p-8 content-border">
        
        <base-picture class="mb-6" :v-if="content.img" :caption="content.caption" :img="content.img" :alt="content.imgAlt"></base-picture>
        
        <nuxt-content
          class="mx-auto mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="content"
        />
      </article>
    </div>
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
import BasePicture from "@/components/BasePicture";
export default {
  async asyncData({ $content, params }) {
    const content = await $content("abouts", params.slug).fetch();

    // console.log("CONTENT", content);
    return { content };
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
    BasePicture
  }
};
</script>