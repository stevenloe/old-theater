<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${content.bgcolor}`"
      />
    </svg>
    <div
      class="grid grid-cols-1 gap-8 p-12 pb-48 md:grid-cols-2 wave-content"
      :style="bgColor"
    >
      <!-- Content Start-->
      <!-- CTA Text -->
      <div class="p-12 bg-white">
        <!-- Top info section and body text -->
        <div class="flex flex-col justify-between w-full h-full">
          <div>
            <h3
              class="mb-2 text-3xl font-bold leading-tight md:mt-12 sm:mt-18 sm:text-4xl md:text-4xl"
            >
              <!-- TODO: Use UI Headline here. Adjust sizes to work with  new design -->
              <!-- <UiHeadline class="mb-3 text-white" level="1">{{ content.title }}</UiHeadline>  -->
              <nuxt-link :to="content.url">
                {{ content.title }}
              </nuxt-link>
            </h3>

            <div
              class="my-6 text-lg leading-tight tracking-wide lg:block lg:mt-6"
            >
              {{ content.subhead }}
            </div>
          </div>

          <!-- Learn More / Buy Tickets buttons -->
          <div class="flex justify-between">
            <ButtonLink :url="content.url" text="LEARN MORE" />
          </div>
        </div>
      </div>

      <!-- Image -->
      <div>
        <nuxt-link :to="content.url">
          <ShowPicture :img="content.img" :alt="content.alt"></ShowPicture>
        </nuxt-link>
      </div>
      <!-- Content End -->
    </div>
  </div>
</template>


<script>
import ButtonLink from "./ui/ButtonLink";
import ShowPicture from "./ShowPicture.vue";

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bgColor() {
      return `background-color: #${this.content.bgcolor}`;
    },
  },
  components: {
    ButtonLink,
    ShowPicture,
  },
};
</script>


