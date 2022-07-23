<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${info.bgcolor}`"
      />
    </svg>

    <div
      class="grid grid-cols-1 gap-8 pt-12 pb-48 pl-8 pr-8 md:pl-12 md:pr-12 wave-content"
      :style="bgColor"
    >
      <div class="w-full max-w-6xl mx-auto lg:text-xl xl:text-2xl">
        <!-- Top info section and body text -->
        <UiHeadline
          v-if="info.title"
          class="w-full mb-2 text-center"
          level="2"
          >{{ info.title }}</UiHeadline
        >
        <UiHeadline v-if="info.subhead" class="mb-4" level="4">{{
          info.subhead
        }}</UiHeadline>

        <div class="grid gap-8 sm:grid-cols-2 green-300">
          <div v-for="member of team" :key="member.name" class="flex w-full">
            <div
              class="flex justify-center w-24 h-24 overflow-hidden rounded-full placeholder"
            >
              <img v-if="member.img"
                class="w-24 h-24 overflow-hidden rounded-full alt"
                :src="member.img"
                :alt="member.name"
              />
            </div>
            <div
              class="flex flex-wrap items-center flex-grow-0 w-2/3 pl-2 justify-left"
            >
              <div class="pl-2">
                <div class="mr-2 font-bold"> {{ member.role }}</div>
                <div>{{ member.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasePicture from "./BasePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";
import ButtonLink from "./ui/ButtonLink.vue";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    team: {
      type: Array,
      required: true,
    },
  },

  computed: {
    bgColor() {
      return `background-color: #${this.info.bgcolor}`;
    },
  },
  components: {
    BasePicture,
    UiHeadline,
    ButtonLink,
  },
};
</script>

<style scoped>
.placeholder {
  background-image: url(~/assets/img/person-placeholder.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #ccc;
}

.alt {
  color: #d9d9d9;
  font: 10px "sans-serif";
}
</style>