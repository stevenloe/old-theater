<template>
  <div class="layout">
    <NavBar/>
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
