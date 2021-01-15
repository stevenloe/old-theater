<template>
  <ContentLayout>
    <img class="h-full w-full object-cover" :src="$page.show.image.src" alt="">
    <div v-html="$page.show.content"/>
  </ContentLayout>
</template>

<page-query>
query Show($path: String!) {
  show: show (path: $path) {
    title
    image
    content
  }
}
</page-query>

<script>
import ContentLayout from '~/layouts/Content.vue'
export default {
  metaInfo() {
    return {
      title: this.$page.show.title,
      posterArt: this.$page.show.image
    }
  },
    components: {
    ContentLayout
  }
  
};
</script>