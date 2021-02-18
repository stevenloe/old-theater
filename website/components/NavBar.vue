<template>
  <div>
    <header :class="headerClass">
      <div class="flex justify-between items-center md:p-0 md:mr-3 md:py-2">
        <div>
          <!-- logo & text -->
          <nuxt-link to="/">
            <div
              class="text-left md:text-center flex md:block hover:bg-gray-200 rounded"
            >
              <img
                class="hidden md:inline-block h-10 md:h-12 md:-mb-3"
                src="~/assets/img/old-theater-logo-final.svg"
                alt="The Old Theater, Oriental North Carolina"
              />
              <h2 class="font-serif text-lg tracking-wide rounded">
                <div class="-mb-2 tracking-wide flex-no-wrap md:mx-4">
                  The Old Theater
                </div>
                <div class="text-xs text-gray-600 tracking-widest md:mx-4">
                  ORIENTAL, NC
                </div>
              </h2>
            </div>
          </nuxt-link>
        </div>

        <div class="md:hidden">
          <!-- mobile menu open/close buttons -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isMobileMenuOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isMobileMenuOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="items-center md:justify-between flex md:items-end">
        <!-- Nav items -->
        <div class="md:overflow-visible w-full">
          <nav
            :class="isMobileMenuOpen ? 'block' : 'hidden'"
            class="px-4 pt-2 pb-4 md:flex md:p-0 w-full"
          >
            <!-- Search field on mobile menu -->
            <div class="md:hidden w-full">
              <AppSearchInput :isMobile="true" isAnimated="false" />
            </div>
            <!-- 
            <nuxt-link to="/" :class="itemStyle">Home</nuxt-link> -->
            <nuxt-link to="/community-education" :class="itemStyle"
              >Community<span class="tracking-tighter"> &amp; </span
              >Education</nuxt-link
            >

            <SubMenu :menuData="supportMenuItems" :isMobile="isMobile" />
            <SubMenu :menuData="aboutMenuItems" :isMobile="isMobile" />

            <nuxt-link to="/get-involved/" :class="itemStyle"
              >Get Involved</nuxt-link
            >

            <div class="mr-2 rounded hover:bg-gray-200">
              <nuxt-link to="/calendar/">
                <div
                  v-if="isMobileMenuOpen"
                  :class="itemStyle"
                  class="md:hidden"
                >
                  Calendar
                </div>
                <svg
                  class="hidden md:block h-6 w-8 ml-3 mb-1 pr-3 mt-3 fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="48"
                  height="48"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"
                    />
                  </g>
                </svg>
              </nuxt-link>
            </div>
          </nav>
        </div>
      </div>

      <!-- footer for mobile navbar -->
      <div
        :class="isMobileMenuOpen ? 'block' : 'hidden'"
        class="ml-4 md:hidden text-center"
      >
        <hr />
        <div class="mt-12">
          <img
            class="inline-block h-20 md:h-24"
            src="~/assets/img/old-theater-logo-final.svg"
            alt="The Old Theater, Oriental North Carolina"
          />
        </div>
        <address class="-mt-1 font-serif not-italic pb-20">
          The Old Theater
          <br />609 Broad Street <br />Oriental, NC 28571 <br />(252) 249
          &ndash; 0477
          <br />
        </address>
      </div>

      <!-- search icon on medium screens-->
      <div class="hidden absolute top-0 right-0 md:flex">
        <AppSearchInput
          class="w-0 bg-purple-800"
          :isMobile="isMobile"
          isAnimated="true"
        />

        <a href="#" class="text-gray-700 bg-gray-300 hover:text-black hover:bg-gray-400 focus:outline-none focus:shadow-outline pl-1 pr-3 rounded-bl-2xl" @click="toggle">
          <svg
            class="h-8 w-10 px-1 pt-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="48"
            height="48"
            fill="currentColor"
          >
            <g>
              <path
                d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
              />
            </g>
          </svg>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
import SubMenu from "~/components/SubMenu.vue";
import AppSearchInput from "~/components/AppSearchInput.vue";
export default {
  data() {
    return {
      isSearchOpen: null,
      isMobileMenuOpen: null,
      isMobile: null,
      aboutMenuItems: {
        title: "About",
        items: [
          { text: "Venue", link: "/about/venue/", id: 1 },
          { text: "Rent the Theater", link: "/about/rent-the-theater", id: 2 },
          { text: "Our History", link: "/about/history", id: 3 },
          {
            text: "Volunteers & Board",
            link: "/about/volunteers-and-board",
            id: 4,
          },
        ],
      },
      supportMenuItems: {
        title: "Support",
        items: [
          { text: "Membership", link: "/support/membership", id: 11 },
          {
            text: "Sponsor a Show or Production",
            link: "/support/sponsor",
            id: 12,
          },
          { text: "Donate", link: "/support/donate", id: 13 },
          { text: "Our Fundraisers", link: "/support/fundraisers", id: 14 },
          { text: "Other Ways to Support", link: "/support/other", id: 15 },
        ],
      },
      itemStyle:
        "mt-1 block px-2 py-2 text-2xl rounded hover:bg-gray-200 md:text-lg",
    };
  },
  methods: {
    debounce(func, wait, immediate) {
      let timeout;
      return function () {
        let context = this,
          args = arguments,
          later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          },
          call_now = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (call_now) func.apply(context, args);
      };
    },
    onResize() {
      console.log("-- onResize() --");
      this.isMobileMenuOpen = false;
      this.isMobile = this.isSearchOpen = window.innerWidth < 768;
      console.log("ON RESIZE", window.innerWidth, this.isMobile);
      this.$bus.$emit("resize-window");
    },
    toggle() {
      this.$bus.$emit("toggle-search");
    },
  },
  mounted: function () {
    this.onResize();
    window.addEventListener("resize", this.debounce(this.onResize, 25));
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    headerClass() {
      // display menu at full viewport height on mobile:
      const full = this.isMobileMenuOpen ? "h-full overflow-y-scroll" : "";
      // return `${full} bg-white fixed items-end w-full md:flex md:justify-between md:items-end md:px-4 md:pr-8 z-20 top-0 `;
      return `${full} bg-white fixed w-full px-4 py-2 md:flex md:justify-start md:p-0 md:pl-8 z-20 top-0`;
    },
  },
  created: function () {
    // `this` points to the vm instance
    console.log("------- CREATED ----------");
  },
  components: {
    SubMenu,
    AppSearchInput,
  },
};
</script>

<style lang="postcss">
/* .top-space {
  top: 50px;
} */
</style>