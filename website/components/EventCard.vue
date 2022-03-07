<template>
  <div>
    <div class="relative pb-5/6">
      <img class="absolute object-cover w-full h-full rounded-lg shadow-md" :src="bookData.imageUrl" :alt="bookData.imageAlt">
    </div>
    <div class="relative px-4 -mt-16">
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">New</span>
          <div class="ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            {{ bookData.beds }} beds &bull; {{ bookData.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 text-lg font-semibold leading-tight truncate">{{ bookData.title }}</h4>
        <div class="mt-1">
          {{ bookData.price }}
          <span class="text-sm text-gray-600"> / wk</span>
        </div>
        <div class="flex items-center mt-2">
          <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" :class="i <= bookData.rating ? 'text-teal-500' : 'text-gray-400'" class="w-4 h-4 fill-current">
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
          </svg>
          <span class="ml-2 text-sm text-gray-600">{{ bookData.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    computePreviewSlug() {
      return (
        this.bookData.title.split(" ").join("-") + "-" + 
        this.bookData.author.split(" ").join("-")
      );
    },
    mounted() {
      console.log("Mounted!!")    },
  },
  computed: {
    previewSlug() {
      return this.computePreviewSlug();
    },
  },
};
</script>
