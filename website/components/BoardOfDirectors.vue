<template>
  <div>
    <!-- <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${leftContent.bgcolor}`"
      />
    </svg> -->

    <div class="p-12 pb-48 wave-content" :style="bgColor">
      <div>
        <UiHeadline
          class="mb-4 text-center"
          level="1"
          style="line-height: 1.08em"
        >
          Meet Our Board
        </UiHeadline>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <!-- Left Column -->

        <div class="mb-4">
          <div>
            <UiHeadline class="mb-4" level="3" style="line-height: 1.08em">
              Executive Officers
            </UiHeadline>

            <div
              v-for="member of content.board.executives.team"
              :key="member.name"
              class="flex w-full"
            >
              <div class="pl-2 mb-1 text-base sm:text-lg xl:text-2xl">
                <span class="mr-2 font-bold">{{ member.role }}:</span>
                <span>{{ member.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column-->

        <div class="mb-4">
          <div>
            <UiHeadline class="mb-4" level="3" style="line-height: 1.08em">
              Department Managers
            </UiHeadline>

            <div
              v-for="member of content.board.managers.team"
              :key="member.name"
              class="flex w-full"
            >
              <div class="pl-2 mb-1 text-base sm:text-lg xl:text-2xl">
                <span class="mr-2 font-bold">{{ member.role }}:</span>
                <span>{{ member.name }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import BasePicture from "./BasePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bgcolor: '93A38B',
    };
  },
  computed: {
    bgColor() {
      return `background-color: #${this.bgcolor}`;
    },
  },
  mounted: function () {
    console.log(" M O U NT ____________________________", this.boardData);
  },
  components: {
    BasePicture,
    ButtonLink,
    UiHeadline,
  },
};
</script>