<template>
   <div>
    <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
    <UiHeadline id="level-1-headline" level="1">{{content.title}}</UiHeadline>
      <article class="p-6 mt-6 bg-white rounded shadow-lg lg:p-8 content-border">
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
export default {
  async asyncData({ $content, params }) {
    const content = await $content("abouts", params.slug).fetch();
    return { content };
  },
  layout: "NewLayout",
  components: {
    UiHeadline
  }
};
</script>