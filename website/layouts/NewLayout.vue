<template>
  <div>
    <NavBar />
    <main>
      <div @click="onContentClick">
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
  methods: {
    onContentClick() {
      this.$bus.$emit("hide-search", "hide");
    }
  }
};
</script>

