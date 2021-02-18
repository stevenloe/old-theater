<template>
  <div>
    <li v-for="event in eventsToday" :key="event.name">
      <NuxtLink
        :to="event.url"
        class="text-sm md:text-base my-1 block p-2 rounded-xl hover:bg-gray-200"
      >
        <span class="font-semibold italic pl-4 md:pl-0">
          {{ event.name }} </span
        >: {{ event.time }}
      </NuxtLink>
    </li>
  </div>
</template>


<script>
export default {
  props: {
    eventsToday: {
      type: Array,
      required: true,
    },
  },
};
</script>

