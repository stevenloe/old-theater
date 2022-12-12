<template>
  <div>
    
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
              v-for="member, index of executives"
              :key="index"
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
              v-for="member, index of managers"
              :key="index"
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
    executives: {
      type: Array,
      required: true,
    },
    managers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bgcolor: "93A38B",
      executiveInfo: {
			title: "Meet Our Board",
			subhead: "Executive Officers",
			bgcolor: "677949"
		},
    managerInfo: {
			title: "",
			subhead: "Department Managers",
			bgcolor: "62506D"
		}
    };
  },
  computed: {
    bgColor() {
      return `background-color: #${this.bgcolor}`;
    },
  },
  mounted: function () {


    console.log( " COMPONENT EXECUTIVES", this.executives);

  },
  components: {
    BasePicture,
    ButtonLink,
    UiHeadline,
  },
};
</script>