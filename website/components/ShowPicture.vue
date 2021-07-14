<template>
  <figure class="h-full">
    <nuxt-picture
      v-if="img"
      :fit="fit"
      :src="img"
      :alt="alt"
      sizes=" xs:100vw sm:100vw md:100vw lg:100vw"
      quality="85"
      loading="lazy"
    >
    </nuxt-picture>

    <figcaption class="py-2 mb-6 text-base italic text-gray-700" v-if="caption">
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
    fit: {
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

<style scoped>
picture {
  width: 100%;
  height: 100%;
  display: flex;
}
picture img {
  object-fit: cover;
  height: auto;
  width: 100%;
}
</style>