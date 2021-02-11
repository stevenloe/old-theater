<template>
  <div>
    <li v-for="item in items" :key="item.name">
      <NuxtLink :to="item.url" class="mx-2 my-1 block p-2 rounded-xl hover:bg-gray-200">
        <span class="font-semibold">
          {{ item.name }} 
          </span>: {{ item.time }}
      </NuxtLink>
    </li>
  </div>
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

