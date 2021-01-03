<template>
  <div class="antialiased text-gray-900 bg-gray-300"> 
    <NavBar/>
   
    <slot/>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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


<style >
  body {
    /* background: #c8c8c8;
    background: #335;
    background: #00336a; */
  }
</style>