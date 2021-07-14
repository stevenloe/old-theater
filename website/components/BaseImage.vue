<template>
  <figure>
    <nuxt-img
      v-if="img"
      class="overflow-hidden rounded-lg shadow cover-image"
      :src="img"
      :alt="alt"
      sizes=" xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      quality="85"
      loading="lazy"
    >
    </nuxt-img>
    <figcaption class="mb-6 text-base italic text-gray-700" v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      required: false,
    },
    caption: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
  },
};
</script>