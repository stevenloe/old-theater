<template>
  <h1>This is Prop Me {{ }}</h1>
</template>

<script>
export default {
  props: {
    peeps: {
      type: Object,
      required: true,
      default: {}
    },
    memberData: {
        type: Array,
        default: () => []
    }
  },
  mounted() {
    console.log("MOUNTED PROP ME", this.peeps[0].body);
    console.log("MOUNTED: PROP ME :: memberData", this.memberData);
  },
}
</script>