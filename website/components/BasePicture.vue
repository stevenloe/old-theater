<template>
  <figure class="mb-6">
    <nuxt-picture
      v-if="img"
      class="cover-image"
      :src="img"
      :alt="alt"
      sizes=" xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
    >
    </nuxt-picture>
    
    <figcaption v-if="caption" class="italic">
      {{ caption }}
    </figcaption>
  </figure>
</template>


<script>
export default {
  props: {
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>