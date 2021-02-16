<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>

    <div
      class="container md:mx-auto max-w-3xl pl-8 pr-8 md:pl-0 md:pr-0 pt-16 md:pt-24"
    >
      <h1 class="text-3xl font-semibold mb-4">Thank you!</h1>
      <p class="text-lg pb-8">
        We've received your message. We'll get back to you soon.
      </p>
      <p class="text-lg pb-64">
        Need to reach someone quickly? Call The Old Theater at (252) 249-0477.
      </p>

    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "SuccessContact",
  },
  layout: "default",
};
</script>
