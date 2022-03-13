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
      <div class="w-full max-w-4xl mx-auto lg:text-xl xl:text-2xl">
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div class="flex justify-between">
            <div class="w-4/5">
              <UiHeadline v-if="info.title" level="1">{{ info.title }}</UiHeadline>
              <UiHeadline v-if="info.subhead" class="mb-4" level="4">{{ info.subhead }}</UiHeadline>
            </div>
            <div class="flex">
              <img v-if="info.logo"
                class="object-contain mt-2 mb-2 ml-2"
                :class="info.logoheight"
                :src="info.logo"
                :alt="info.logoalt"
              />
            </div>
          </div>
          <div v-if="info.img" class="mb-8">
            <base-picture :img="info.img" :alt="info.alt"></base-picture>
          </div>

          <nuxt-content
            class="mx-auto mb-8 prose-xl xl:prose-2xl"
            :document="info"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasePicture from "./BasePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    info: {
      type: Object,
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
  },
};
</script>