<template>
  <div class="antialiased text-gray-900 bg-white"> 
    <div class="pt-12">
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

