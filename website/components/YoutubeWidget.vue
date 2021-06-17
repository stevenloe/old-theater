<template>
  <div class="relative h-0 mt-4" style="padding-bottom: 56.25%">
  <iframe :src="fullUrl" class="absolute top-0 left-0 w-full h-full" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "YoutubeWidget",
  props: ['videoUrl'],
  computed: {
    fullUrl () {
      return `https://www.youtube.com/embed/${this.videoUrl}`
    }
  },
}
</script>