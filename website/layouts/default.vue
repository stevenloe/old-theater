<template>
  <div class="antialiased text-gray-900 bg-gray-100 "> 
    <NavBar/>
    <div class="m-8 mb-12">
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