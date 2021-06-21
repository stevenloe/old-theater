<template>
  <div>
    <NavBar />

    <div
      class="container max-w-3xl pt-16 pl-8 pr-8 md:mx-auto md:pl-0 md:pr-0 md:pt-24"
    >
      <UiHeadline level="1">Thank you!</UiHeadline>
      <p class="pb-8 text-lg">
        Thank you for contacting The Old Theater. We'll get back to you soon.
      </p>
      <p class="pb-64 text-lg">
        Need to reach someone quickly? Call The Old Theater at (252) 249-0477.
      </p>
    </div>
  </div>
</template>

<script>
import UiHeadline from "@/components/ui/UiHeadline";
export default {
  metaInfo: {
    title: "SuccessContact",
  },
  layout: "NewLayout",
  components: {
    UiHeadline,
  },
};
</script>
