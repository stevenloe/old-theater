<template>
  <div class="">
    <!-- <NavBar class="sm:mb-8" /> -->
    <article>
      <div v-if="alert.img" class="sm:rounded-lg sm:ml-8 sm:mr-8 overflow-hidden shadow-lg mb-6 max-w-6xl mx-auto">
        <img :src="require(`~/assets/img/${alert.img}`)" :alt="alert.imgAlt" />
      </div>

      <div class="pl-8 pr-8 sm:max-w-lg  md:max-w-xl md:text-4xl lg:max-w-3xl  xl:max-w-4xl   sm:bg-red-200  md:bg-orange-200 lg:bg-yellow-400 mx-auto">
        <nuxt-content :document="alert" class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8" />
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
};
</script>

<style >
p {
  margin-bottom: 2em !important;
}
</style>

