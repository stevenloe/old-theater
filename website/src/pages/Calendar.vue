<template>
  <ContentLayout>
    <div class="container md:mx-auto max-w-3xl">

      <div class="mb-4">
        <h1 class="text-3xl font-semibold">Calendar</h1>
        <img src="/temp/january-caledar.jpg" class=" w-full mr-3  " alt="">
      </div>
    </div>

  </ContentLayout>
</template>

<script>
import ContentLayout from "~/layouts/Content.vue";
export default {
  metaInfo: {
    title: "About us",
  },
  components: {

    ContentLayout,
  },
};
</script>
