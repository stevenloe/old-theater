<template>
  <div class="antialiased text-gray-900 bg-gray-500"> 
    <div class="pt-20">
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
  
}
</script>

