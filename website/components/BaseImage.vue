<template>
  <nuxt-img v-if="img" class="cover-image" :src="img" :alt="alt" sizes=" xs:100vw sm:100vw md:100vw lg:100vw xl:100vw">
        </nuxt-img>
</template>


<script>
export default {
  props: {
    alt: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>