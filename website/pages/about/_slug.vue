<template>
  <div class="">
    <NavBar class="sm:mb-8" />
    <article>
      <div v-if="about.img" class="sm:rounded-lg sm:ml-8 sm:mr-8 overflow-hidden shadow-lg mb-6 max-w-6xl mx-auto">
        <img :src="require(`~/assets/img/about/${about.img}`)" :alt="about.imgAlt" />
      </div>
<!-- 
        <div class="pl-8 pr-8 pt-8  sm:max-w-lg  md:max-w-xl md:text-4xl lg:max-w-3xl  xl:max-w-4xl   sm:bg-red-200  md:bg-orange-200 lg:bg-yellow-400 mx-auto"> -->
      <div class="pl-8 pr-8 pt-8 sm:pt-0 sm:max-w-lg  md:max-w-xl md:text-4xl lg:max-w-3xl  xl:max-w-4xl mx-auto">
        <nuxt-content :document="about" class="prose max-w-none md:prose-lg lg:prose-xl lg:prose-2xl mb-8" />
      </div>
    </article>

  </div>
</template>


<script>
import NavBar from "@/components/NavBar";
export default {
  async asyncData({ $content, params }) {
    const about = await $content("abouts", params.slug).fetch();
    return { about };
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

