<template>
  <div class="antialiased text-gray-900">  
    <div class="bg-red-700">
     
    <NavBar/>
    </div>
    <slot/>
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

export default {
  components: {
    NavBar
  }
  
}
</script>


<style >
  body {
    background: #c8c8c8;
    background: #335;
    background: #00336a;
  }
</style>