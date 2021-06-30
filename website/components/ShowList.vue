<template>
  <div>
    <div
      
      v-for="show of shows"
      :key="show.title"
    >

    <ShowCard :show="show" />

    
      
    </div>
  </div>
</template>

<script>


import ShowCard from './ShowCard'

export default {
  props: {
    shows: {
      type: Array,
      required: true
    }
  },
  components: {
    ShowCard
  },
}
</script>
