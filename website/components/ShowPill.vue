<template>
  <div
  class="block px-2 py-1 mb-1 mr-2 text-xs font-bold uppercase rounded-full"
    :class="colorClass"
  >{{ showtype }}</div>
</template>


<script>
export default {
   name: "ShowPill",
  props: {
    showtype: {
      type: String,
      required: true
    }
  },

  computed: {
    colorClass() {

      let color = ''
      switch (this.showtype.toUpperCase()) {
        case 'FRIDAY FLICK' :
           color = " bg-pink-300 "
          break;
        case 'LIVE MUSIC' :
           color = " bg-green-300 "
          break;
        case 'LIVE THEATER' :
          color = " bg-blue-200 "
          break;
      
        default:
          color = " bg-yellow-300 "
          break;
      }

      
      return  color
    }
  }
};
</script>

</script>