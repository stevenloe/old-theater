<template>
  <div>
    <h1>This is Prop Me {{peeps[0].body[0].lastName}}</h1>

    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    peeps: {
      type: Object,
      required: true,
      default: {},
    },
    memberData: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    // console.log("MOUNTED PROP ME", this.document[0].body);
    console.log("----- MOUNTED: PROP ME :: memberData", this.peeps[0].body[0].lastName, "------");
    console.log("MOUNTED: PROP ME :: memberData", this.peeps[0].body);
  },
};
</script>