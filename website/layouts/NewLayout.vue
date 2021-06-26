<template>
  <div>
    <NavBar />
    <main class="pt-5 bg-gray-400 borderborder-gray-300">
      <div class="p-4 mx-auto" @click="onContentClick">
        <Nuxt />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "NewLayout",
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
