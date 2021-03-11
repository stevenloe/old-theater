<template>
  <div class="mx-auto">
    <div
      class="w-full mx-auto md:w-3/4 lg:w-9/12 xl:3/4 lg:text-xl xl:text-2xl"
    >
    <UiHeadline id="level-1-headline" level="2" @click="shout('h1')">{{content.title}} - UIHeadline</UiHeadline>
      <article class="p-6 mt-6 bg-white rounded shadow lg:p-8">
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
    const content = await $content("supports", params.slug).fetch();
    return { content };
  },
  layout: "NewLayout",
  methods: {
    shout(val) {
      console.log("Shout", val);
      
    }
  }
};
</script>