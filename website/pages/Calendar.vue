<template>
<div>
  <client-only>
    <NavBar/>
  </client-only>
  
  <div class="container md:mx-auto max-w-3xl  pl-8 pr-8 md:p-0">

    <div class="mb-4">
      <h1 class="text-3xl font-semibold">Calendar</h1>
      
      <div class="text-lg font-semibold text-white mb-5">
        This a placeholder image. Actual calendar has yet to be created.
      </div>

      <img :src="require(`~/assets/temp/january-caledar.jpg`)" alt="" />
    </div>
  </div>

</div>
</template>

<script>

export default {
  metaInfo: {
    title: "Calendar",
  },
    layout: "home",
};
</script>
