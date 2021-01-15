<template>
  <div class="antialiased text-gray-900 bg-gray-500"> 
    <NavBar/>
    <div>
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