<template>
  <div>
    <NavBar />
    <main class="pt-5 bg-gray-300 border-t border-gray-300 sm:bg-green-200 md:bg-blue-200 lg:bg-orange-200 xl:bg-red-200">
      <div class="p-4 mx-auto">
        <Nuxt />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'NewLayout',
  components: {
    NavBar,
    Footer,
  },
};
</script>
