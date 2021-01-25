<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>

    <article class="pt-4 sm:pt-8 md:pt-16">
      <div v-if="about.img" class="sm:rounded-lg sm:ml-8 sm:mr-8 overflow-hidden shadow-lg mb-6 max-w-6xl mx-auto">
        <img :src="require(`~/assets/img/about/${about.img}`)" :alt="about.imgAlt" />
      </div>
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

