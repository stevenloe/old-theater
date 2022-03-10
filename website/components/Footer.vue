<template>
  <div class="wave-section">
    <svg class="wave" viewBox="0 0 1442 102" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1442 102H0V0l.037 63.975C138.699 25.665 276.653 6.51 413.897 6.51c240.77 0 397.382 48.349 605.515 48.349 138.754-.002 279.617-16.117 422.577-48.349L1442 0Z"
        :fill="`#${bgcolor}`"
      />
    </svg>

    <div class="p-12 wave-content" :style="bgColor">
      <div class="flex justify-center mt-12 mb-8">
        
        <Logo class="w-full sm:w-10/12" />
        
      </div>

      <div class="content-center mx-auto mb-32">
        <!-- col 1 -->

        <!-- row 2 -->
        <div class="flex flex-wrap justify-center">
          <!-- Column 3 -->
          <div class="flex justify-start w-1/2 sm:w-1/3">
            <ul class="px-0">
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/calendar"
                  class="tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >CALENDAR</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/shows"
                  class="justify-start tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >SHOWS</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/news"
                  class="justify-start tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >NEWS</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/about/rent-the-theater"
                  class="tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >RENT THE THEATER</nuxt-link
                >
              </li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div class="flex justify-end w-1/2 sm:w-1/3">
            <ul class="px-0">
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/support/donate"
                  class="tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >DONATE</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/get-involved"
                  class="tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >GET INVOLVED</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <nuxt-link
                  to="/contact"
                  class="justify-start tracking-wider footer-link md:text-lg lg:text-xl hover:text-black"
                  >CONTACT US</nuxt-link
                >
              </li>
              <li class="list-none cursor-pointer">
                <a
                  class="block pt-2 pl-2"
                  href="https://www.facebook.com/TheOldTheaterOrientalNC"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 408.788 408.788"
                  >
                    <path
                      d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                      fill="#333"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div class="flex justify-center pt-16 pl-4 pr-4">
          <address class="pt-2 pl-3 text-sm not-italic text-center md:text-xl xl:text-xl">
            <p class="mb-1">The Old Theater</p>
            <p class="mb-1">609 Broad Street</p>
            <p class="mb-1">Oriental, NC 28571</p>
            <p class="mb-1">(252) 249 &ndash; 0477</p>
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "./ui/ButtonLink";
import BasePicture from "./BasePicture.vue";
import UiHeadline from "./ui/UiHeadline.vue";
import Logo from "./Logo.vue";

export default {
  data() {
    return {
      bgcolor: "B4B2A6",
    };
  },
  computed: {
    bgColor() {
      return `background-color: #${this.bgcolor}`;
    },
  },
  components: {
    BasePicture,
    ButtonLink,
    UiHeadline,
    Logo,
  },
};
</script>