<template>
  <div>
    <li v-for="event in eventsToday" :key="event.name">
      <NuxtLink
        :to="event.url"
        class="block p-2 mx-2 my-1 text-sm md:text-base rounded-xl hover:bg-gray-300"
      >
        <span class="pl-4 italic font-semibold md:pl-0"> {{ event.name }}</span
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

