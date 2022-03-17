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
        <UiHeadline v-if="info.title" class="mb-2" level="2">{{
          info.title
        }}</UiHeadline>
        <UiHeadline v-if="info.subhead" class="mb-4" level="4">{{
          info.subhead
        }}</UiHeadline>

        <div>
          <div>
            <img
              src="/images/volunteer/villians_with_horses.jpg"
              class="w-full mr-3"
              loading="lazy"
              alt=""
            />
            <p class="p-1 mb-3 text-sm italic text-blue">
              Villians with Horses - How The West Was Dun
            </p>
          </div>

          <div class="lg:flex">
            <div class="w-full m-2 lg:w-1/3">
              <img
                src="/images/volunteer/popcorn.jpg"
                class="w-full"
                alt="lots of free popcorn for a Friday Night Flick"
                loading="lazy"
              />
              <p class="p-1 mb-3 text-sm italic text-blue">
                Making & serving free popcorn.
              </p>
            </div>
            <div class="w-full m-2 lg:w-1/3">
              <img
                src="/images/volunteer/tickets.jpg"
                class="w-full"
                alt="Annual member meeting at The Old Theater"
                loading="lazy"
              />
              <p class="p-1 mb-3 text-sm italic text-blue">The Box office</p>
            </div>
            <div class="w-full m-2 lg:w-1/3">
              <img
                src="/images/volunteer/chili_cookoff.jpg"
                class="w-full"
                alt="Fresh popcorn at the Old theater"
                loading="lazy"
              />
              <p class="p-1 mb-3 text-sm italic text-blue">
                The Chili Cookoff fundraiser
              </p>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex">
              <div class="w-1/2 mr-4">
                <img
                  src="/images/volunteer/nunsense.jpg"
                  class="w-full"
                  loading="lazy"
                  alt="Nunsense at the Old Theater, Oriental, NC"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  Cast of Nunsense
                </p>
              </div>
              <div class="w-1/2">
                <img
                  src="/images/volunteer/bo-and_sal.jpg"
                  class="w-full"
                  alt="Bo and Sal at the Old Theater Oriental NC"
                  loading="lazy"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  How The West Was Dun
                </p>
              </div>
            </div>
          </div>

          <div class="">
            <div class="flex mb-4">
              <div class="w-1/2 mr-4">
                <img
                  src="/images/volunteer/community_youth_performance.jpg"
                  class="w-full"
                  loading="lazy"
                  alt="Children's Theater Workshop"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  Children's Theater Workshop
                </p>
              </div>
              <div class="w-1/2">
                <img
                  src="/images/volunteer/polar_express.jpg"
                  class="w-full"
                  alt="The Polar Express"
                  loading="lazy"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  The Polar Express
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/volunteer/on_stage.jpg"
                class="w-full mr-3"
                loading="lazy"
                alt=""
              />
              <p class="p-1 mb-3 text-sm italic text-blue">
                Production of Radio Show
              </p>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex">
              <div class="w-1/2 mr-4">
                <img
                  src="/images/volunteer/storytelling_tom.jpg"
                  class="w-full"
                  loading="lazy"
                  alt="Storytelling Tom at the Old Theater, Oriental, NC"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  Storytelling Tom
                </p>
              </div>
              <div class="w-1/2">
                <img
                  src="/images/volunteer/ladies_of_theater.jpg"
                  class="w-full"
                  alt="Ladies of Theater at the Old Theater Oriental NC"
                  loading="lazy"
                />
                <p class="p-1 mb-3 text-sm italic text-blue">
                  Ladies of Theater
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="info.buttonurl" class="flex">
          <ButtonLink
            :url="info.buttonurl"
            :color="info.buttoncolor"
            :text="info.buttontext"
          />
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