<template>
  <div class="antialiased text-gray-900 bg-gray-100 "> 
    <div class="mb-12">
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

