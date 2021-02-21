<template>
  <div class="antialiased text-gray-900 bg-gray-100 mb-12"> 
    <div class="container ">
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
  },
}
</script>