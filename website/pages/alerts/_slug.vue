<template>
  <div class="mx-auto">
    <!-- <NavBar class="sm:mb-8" /> -->
    <article class="w-full mx-auto content-column lg:text-xl xl:text-2xl">
      <div v-if="alert.img" class="max-w-6xl mx-auto mb-6 overflow-hidden shadow-lg sm:rounded-lg sm:ml-8 sm:mr-8">
        <img :src="require(`~/assets/img/${alert.img}`)" :alt="alert.imgAlt" />
      </div>

      <div class="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
        <nuxt-content :document="alert" class="mb-8 prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl" />
      </div>
    </article>

  </div>
</template>





<script>
import NavBar from "@/components/NavBar";
export default {
  async asyncData({ $content, params }) {
    const alert = await $content("alerts", params.slug).fetch();
    return { alert };
  },
  components: {
    NavBar,
  },
  layout: "NewLayout"
};
</script>

<style >
p {
  margin-bottom: 2em !important;
}
</style>

