<template>
  <div>
    <NavBarNew1 />
    <main class="pt-5 bg-gray-400 borderborder-gray-300">
      <div class="p-4 mx-auto">
        <Nuxt />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBarNew1 from "@/components/NavBarNew1";
import Footer from "@/components/Footer";

export default {
  name: "NewLayout",
  components: {
    NavBarNew1,
    Footer,
  },
};
</script>
