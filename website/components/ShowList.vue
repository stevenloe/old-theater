<template>
  <div>
    <div
      
      v-for="(show, index) of shows"
      :key="show.title"
    >

    <ShowCard :show="show" :backgroundColor="showsBgColors[index]" />

    </div>
  </div>
</template>

<script>


import ShowCard from './ShowCard'

export default {
  data() {
    return {
      showsBgColors: ['bisque', 'gainsboro', 'lemonchiffon', 'mistyrose', 'powderblue', 'seashell', 'wheat', 'whitesmoke', 'brown' , 'orange' ]
    }
  },
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
