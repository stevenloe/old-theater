<template>
  <div class="antialiased text-gray-900 bg-gray-200"> 
    <NavBar class="sm:mb-8" />
    <div class="pt-24 mb-12">
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

