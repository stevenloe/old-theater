<template>
  <div style="border:solid 2px red">
    <NavBar />
    <main class="pt-5 bg-gray-400" style="border:solid 2px orange">
      <div class="p-4 mx-auto" @click="onContentClick">
        <Nuxt />
      </div>
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBarRedesign";
import Footer from "@/components/Footer";

export default {
  name: "Redesign",
  components: {
    NavBar,
    Footer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    onContentClick() {
      this.$bus.$emit("hide-search", "hide");
    }
  }
};
</script>

