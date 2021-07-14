<template>
  <div class="mb-12 md:mb-20">
    <header class="bg-gray-400 shadow-lg sm:bg-blue-400 md:bg-green-400 lg:bg-red-400 xl:bg-orange-200" :class="headerClass">
      <div class="flex items-center justify-between md:p-0 md:mr-3 md:py-2">
        <Logo @click.native="onNavItemClick" />

        <!-- mobile menu open/close buttons -->
        <div class="md:hidden">
          <button
            @click="onMenuBtnClick"
            type="button"
            aria-label="Open / Close Navigation Menu"
            class="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
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

      <div class="flex items-center md:justify-between md:items-end">
        <!-- Nav items -->
        <div class="w-full md:overflow-visible">
          <nav :class="!isMobile || isMobileMenuOpen ? 'block' : 'hidden'">
            <!-- Search field on mobile menu -->
            <div class="w-full md:hidden">
              <SearchMobile :isMobile="true" isAnimated="false" />
            </div>

            <!-- Hide mobile menu items when we have search results -->
            <div
              v-if="!isMobile || (isMobile && noSearchResults)"
              class="w-full px-4 pt-2 pb-4 md:flex md:p-0"
            >
              <nuxt-link
                to="/"
                @click.native="onNavItemClick"
                :class="itemStyle"
                >Home</nuxt-link
              >
              <nuxt-link
                to="/community-partners"
                @click.native="onNavItemClick"
                :class="itemStyle"
                >Community Partners</nuxt-link
              >

              <SubMenu
                :menuData="supportMenuItems"
                :isMobile="isMobile"
                @click.native="onNavItemClick"
              />
              <SubMenu
                :menuData="aboutMenuItems"
                :isMobile="isMobile"
                @click.native="onNavItemClick"
              />

              <nuxt-link
                to="/get-involved"
                @click.native="onNavItemClick"
                :class="itemStyle"
                >Get Involved</nuxt-link
              >

              <!-- calendar -->
              <div class="rounded hover:bg-gray-200" aria-label="Calendar menu button">
                <nuxt-link to="/calendar/" title="Calendar" @click.native="onNavItemClick">
                  <div
                    v-if="isMobileMenuOpen"
                    :class="itemStyle"
                    class="md:hidden"
                  >
                    Calendar
                  </div>
                  <svg
                    class="hidden w-8 h-6 pr-3 mt-3 mb-1 ml-2 text-gray-700 fill-current md:block"
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

              <!-- news -->
              <div class="mr-2 rounded hover:bg-gray-200" aria-label="News menu button">
                <nuxt-link to="/news/" title="News" @click.native="onNavItemClick">
                  <div
                    v-if="isMobileMenuOpen"
                    :class="itemStyle"
                    class="md:hidden"
                  >
                    News
                  </div>
                  <svg
                    class="hidden w-8 h-6 pr-3 mt-3 mb-1 ml-2 text-gray-700 fill-current md:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="44"
                    height="44"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"
                      />
                    </g>
                  </svg>
                </nuxt-link>
              </div>
              
              <!-- Contact -->
              <div class="mr-2 rounded hover:bg-gray-200">
                <nuxt-link to="/contact/" @click.native="onNavItemClick">
                  <div
                    v-if="isMobileMenuOpen"
                    :class="itemStyle"
                    class="md:hidden"
                  >
                    Contact Us
                  </div>
                </nuxt-link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <FooterMobile :isMobileMenuOpen="isMobileMenuOpen" />

      <!-- search icon on medium screens-->
      <div class="absolute top-0 right-0 hidden md:flex" aria-label="Search menu button">
        <SearchDesktop
          class="w-0 bg-purple-800"
          :isMobile="isMobile"
          isAnimated="true"
        />

        <a
          href="#"
          class="pl-1 pr-3 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none"
          @click="toggleSearch"
        >
          <svg
            class="w-10 h-8 px-1 pt-1 fill-current"
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
import Logo from "~/components/Logo.vue";
import FooterMobile from "~/components/FooterMobile.vue";
import SubMenu from "~/components/SubMenu.vue";
import SearchMobile from "~/components/SearchMobile.vue";
import SearchDesktop from "~/components/SearchDesktop.vue";

import { debounce } from "@/utils/debounce.js";
export default {
  data() {
    return {
      isSearchOpen: null,
      isMobileMenuOpen: null,
      noSearchResults: true,
      isMobile: null,
      aboutMenuItems: {
        title: "About",
        items: [
          { text: "About Us", link: "/about/the-old-theater/", id: 0 },
          // { text: "Venue", link: "/about/venue/", id: 1 },
          { text: "Rent the Theater", link: "/about/rent-the-theater", id: 2 },
          { text: "Our History", link: "/about/history", id: 3 },
          {
            text: "Board of Directors",
            link: "/about/board-of-directors",
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
          { text: "Our Fundraisers", link: "/fundraisers", id: 14 },
          { text: "Other Ways to Support", link: "/support/other", id: 15 },
        ],
      },
      itemStyle:
        "mt-1 block px-2 py-2 text-2xl rounded hover:bg-gray-200 md:text-lg",
    };
  },
  methods: {
    onResize() {
      this.isMobileMenuOpen = false;
      this.isMobile = this.isSearchOpen = window.innerWidth < 768;
      this.$bus.$emit("resize-window");
    },
    toggleSearch() {
      this.$bus.$emit("toggle-search");
    },
    onMenuBtnClick() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.$bus.$emit("toggle-mobile-menu");
    },
    onNavItemClick() {
      setTimeout(this.hideMenu, 100);
    },
    hideMenu() {
      this.isMobileMenuOpen = false;
    },
  },
  mounted: function () {
    this.onResize();
    window.addEventListener("resize", debounce(this.onResize, 10));
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    headerClass() {
      // display menu at full viewport height on mobile:
      const full = this.isMobileMenuOpen ? "h-full overflow-y-scroll" : "";
      return `${full} bg-white fixed w-full px-4 py-2 md:flex md:justify-start md:p-0 md:pl-8 z-20 top-0`;
    },
  },
  watch: {
    $route() {
      this.$bus.$emit("toggle-search", "close");
    },
  },
  created: function () {
    this.$bus.$on("no-search-results", (e) => {
      this.noSearchResults = e;
    });
    this.$bus.$on("close-mobile-menu", (e) => {
      this.hideMenu();
    });
  },
  components: {
    SubMenu,
    SearchMobile,
    SearchDesktop,
    Logo,
    FooterMobile,
  },
};
</script>
