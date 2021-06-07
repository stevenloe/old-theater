<template>
  <div>
    <h1>AXIOS TEST PAGE !</h1>

    <client-only>
      <axios-test />
    </client-only>
  </div>
</template>


<script>
import AxiosTest from "@/components/AxiosTest";
export default {
  components: {
    AxiosTest,
  },
};
</script>