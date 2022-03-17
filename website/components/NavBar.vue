<template>
  <div :style="heroClass">
    <header
      v-show="isMounted"
      class="z-10 home-hero-wave josefin-bold sm:text-xs md:text-base"
      :class="headerClass"
      :style="waveClass"
    >
      <div class="header-container">
        <div class="flex">
          <nuxt-link to="/" class="w-7/12">
            <Logo
              @click.native="onNavItemClick"
              class="bg-yellow-200 sm:bg-orange-400 md:bg-red-300 lg:bg-purple-300 xl:bg-blue-300 hover:bg-gray-200"
            />
          </nuxt-link>

Path is:
          {{$nuxt.$route.path}}
          
          <div class="hidden pl-6 md:flex md:w-5/12" aria-label="Search menu button">
            <SearchDesktop
              class="w-0 mb-6 place-self-end"
              :isMobile="isMobile"
              isAnimated="true"
            />
            <a
              href="#"
              class="pl-1 pr-0 mb-6 text-gray-900 hover:bg-gray-600 focus:outline-none place-self-end"
              @click="toggleSearch"
            >
              <!-- Search Icon -->
              <svg
                class="h-8 px-1 pt-1 fill-current w-100"
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

          <!-- mobile menu open/close buttons -->
          <div class="flex items-center justify-end w-5/12 md:hidden">
            <button
              @click="onMenuBtnClick"
              type="button"
              aria-label="Open / Close Navigation Menu"
              class="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <svg
                class="w-8 h-8 fill-current sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
              >
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

              <!-- MENU ITEMS-->
              <div
                v-if="!isMobile || (isMobile && noSearchResults)"
                :class="menuClass"
              >
                <nuxt-link
                  to="/"
                  @click.native="onNavItemClick"
                  :class="itemStyle"
                  >HOME</nuxt-link
                >
                <nuxt-link
                  to="/calendar"
                  @click.native="onNavItemClick"
                  :class="itemStyle"
                  >CALENDAR</nuxt-link
                >
                <SubMenu
                  :menuData="supportMenuItems"
                  :isMobile="isMobile"
                  @click.native="onNavItemClick"
                />
                <nuxt-link
                  to="/get-involved"
                  @click.native="onNavItemClick"
                  :class="itemStyle"
                  >GET INVOLVED</nuxt-link
                >
                <nuxt-link
                  to="/community-partners"
                  @click.native="onNavItemClick"
                  :class="itemStyle"
                  >COMMUNITY PARTNERS</nuxt-link
                >
                <SubMenu
                  :menuData="aboutMenuItems"
                  :isMobile="isMobile"
                  @click.native="onNavItemClick"
                />
                <nuxt-link
                  to="/news"
                  @click.native="onNavItemClick"
                  :class="itemStyle"
                  >NEWS</nuxt-link
                >

                <!-- Contact -->
                <div class="mr-2 rounded hover:bg-gray-200 md:hidden">
                  <nuxt-link to="/contact/" @click.native="onNavItemClick">
                    <div v-if="isMobileMenuOpen" :class="itemStyle">
                      CONTACT US
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <FooterMobile :isMobileMenuOpen="isMobileMenuOpen" />

        <!-- search icon on medium screens-->
        <!-- <div class="hidden md:flex" aria-label="Search menu button" style="border: solid 2px pink">
        <SearchDesktop
          class="w-0 "
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
      </div> -->
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
import backgroundImagePath from "~/assets/img/hero/home-old-theater-drawing.jpg";

import { debounce } from "@/utils/debounce.js";
export default {
  data() {
    return {
      isMounted: false,
      isSearchOpen: null,
      isMobileMenuOpen: false,
      noSearchResults: true,
      isMobile: null,
      backgroundImagePath,
      selectedHeaderImage: {},
      headerImages: {
        "/": [
          {
            img: "old-theater-drawing.webp",
            height: "0.8",
            opacity: "0.4",
          },
        ],
        "/get-involved": [
          {
            img: "get-involved.webp",
            height: "0.7",
            opacity: "0.8",
          },
        ],
        "/calendar": [
          {
            img: " ",
            height: "0.3",
            opacity: "1",
            bgcolor:  'c8ecf7'        },
        ],
        "/support/membership": [
          {
            img: "membership.webp",
            height: "0.7",
            opacity: "0.75",
          },
        ],
        "/support/sponsor": [
          {
            img: "support/back-to-the-future.webp",
            height: "0.66",
            opacity: "0.75",
          },
          {
            img: "support/goldfinger.webp",
            height: "0.75",
            opacity: "0.6",
          },
          {
            img: "support/nunsense.webp",
            height: "0.65",
            opacity: "0.6",
          },
          {
            img: "support/master-and-commander.webp",
            height: "0.65",
            opacity: "0.6",
          },
          {
            img: "support/zookeepers-wife.webp",
            height: "0.65",
            opacity: "0.6",
          },
        ],
        "/support/donate": [
          {
            img: "donate.webp",
            height: "0.8",
            opacity: "0.8",
          },
        ],
        "/fundraisers": [
          {
            img: " ",
            height: "0.3",
            opacity: "1",
            bgcolor:  'c8ecf7'        },
        ],
        "/support/other": [
          {
            img: " ",
            height: "0.3",
            opacity: "1",
            bgcolor:  'eeecf7'        },
        ],
        "/community-partners": [
          {
            img: "community-partners-placeholder.webp",
            height: "0.65",
            opacity: "0.6",
          },
        ],
      
     "/about/rent-the-theater": [
          {
            img: " ",
            height: "0.3",
            opacity: "1",
            bgcolor:  'c8ecf7'        },
        ],
     "/about/history": [
          {
            img: " ",
            height: "0.3",
            opacity: "1",
            bgcolor:  'F3F6AC'        },
        ],
        "/about/board-of-directors": [
          {
            img: "board-placeholder.webp",
            height: "0.6",
            opacity: "0.8",
          },
        ],
        "/about/the-old-theater/": [
          {
            img: "old-theater-drawing.webp",
            height: "0.8",
            opacity: "0.4",
          },
        ],
        default: [
          {
            img: " ",
            height: "0.8",
            opacity: "0.9",
          },
        ],
        "/news": [
          {
            img: "/news.webp",
            height: "0.8",
            opacity: "0.6",
          },
          {
            img: "news2.webp",
            height: "0.8",
            opacity: "0.6",
          },
        ],
      },
      aboutMenuItems: {
        title: "ABOUT US",
        items: [
          { text: "ABOUT US", link: "/about/the-old-theater/", id: 0 },
          // { text: "Venue", link: "/about/venue/", id: 1 },
          { text: "RENT THE THEATER", link: "/about/rent-the-theater", id: 2 },
          { text: "OUR HISTORY", link: "/about/history", id: 3 },
          {
            text: "BOARD OF DIRECTORS",
            link: "/about/board-of-directors",
            id: 4,
          },
        ],
      },
      supportMenuItems: {
        title: "SUPPORT US",
        items: [
          { text: "MEMBERSHIP", link: "/support/membership", id: 11 },
          {
            text: "SPONSOR A SHOW",
            link: "/support/sponsor",
            id: 12,
          },
          { text: "DONATE", link: "/support/donate", id: 13 },
          { text: "OUR FUNDRAISERS", link: "/fundraisers", id: 14 },
          { text: "OTHER WAYS TO SUPPORT US", link: "/support/other", id: 15 },
        ],
      },
      itemStyle: "mt-1 block px-2 py-2  rounded hover:bg-gray-200 ",
    };
  },
  methods: {
    onResize() {
      console.log("--- onResize() ---");
      this.isMobileMenuOpen = false;
      this.isMobile = window.innerWidth < 980;
      this.isSearchOpen = false;
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
      console.log("hideMenu()");
      this.isMobileMenuOpen = false;
    },
    setHeroImage() {
     
      // on every route change, load the hero image for the new page
      let path = this.$nuxt.$route.path;

      if (this.headerImages[path]) {
        this.selectedHeaderImage =
          this.headerImages[path][
            Math.floor(Math.random() * this.headerImages[path].length)
          ];
          console.log(">>>>>>>> typeof(this.selectedHeaderImage)", typeof(this.selectedHeaderImage))
      } else {
        this.selectedHeaderImage = this.headerImages["default"];
      }

      console.log("---------- SET HERO IMAGE ----------->> path ", path, "selected image:",  this.selectedHeaderImage);
    },
  },

  mounted: function () {
    this.setHeroImage();

    this.isMounted = true;
    this.onResize();
    window.addEventListener("resize", debounce(this.onResize, 10));
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    headerClass() {
      // display menu at full viewport height on mobile:
      const full = this.isMobileMenuOpen ? "h-full " : "";
      return `${full} `;
    },
    waveClass() {
      let bgcolor = this.selectedHeaderImage.bgcolor ? `background-color: #${this.selectedHeaderImage.bgcolor};` : '';
      console.log("BGCOLOR ------ ", bgcolor)
      return `background-image: url("data:image/svg+xml,%3Csvg  viewBox='0 0 1151 234' fill='%23eee8aa'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath  opacity='${this.selectedHeaderImage.opacity}' fill-rule='evenodd' clip-rule='evenodd' d='M0.591553 0.00100708V233.859C111.126 203.295 221.095 188.013 330.5 188.013C522.428 188.013 647.271 226.586 813.184 226.586C923.792 226.585 1036.08 213.728 1150.04 188.013V4.57764e-05L0.591553 0.00100708Z' fill='white'/%3E%3C/svg%3E"); background-repeat: no-repeat; ${bgcolor}` ;
    },
    fooClass() {
      return "bar";
    },
    menuClass() {
      const base =
        "justify-between w-full px-4 pt-2 pb-4 text-base md:flex md:p-0";
      const mobi = " bg-white";
      let result = this.isMobile ? base + mobi : base;
      return `${result} `;
    },
    routePath() {
      return this.$nuxt.$route.path;
    },
    heroClass() {
      console.log("HEADER IMAGE 2", this.selectedHeaderImage.height);
      let bgImage = this.selectedHeaderImage.img
        ? ` backgroundImage: url(/images/hero/${this.selectedHeaderImage.img});
       height: calc(100vw * ${this.selectedHeaderImage.height}); `
        : "";

      console.log("------------  bgImage:", bgImage);
      return ` ${bgImage}
      grid-column: 1 / -1;
      grid-row: 3;
      display: grid;
      background-repeat: no-repeat;
      background-size: 100vw auto;
      grid-gap: 7%;`;
    },
  },
  watch: {
    $route() {
      console.log("------ CHANGE ROUTE----");
      this.$bus.$emit("toggle-search", "close");
      this.setHeroImage();
    },
  },
  created: function () {
    this.$bus.$on("no-search-results", (e) => {
      this.noSearchResults = e;
      console.log("this.noSearchResults:", this.noSearchResults);
    });
    this.$bus.$on("close-mobile-menu", (e) => {
      console.log("ON close-mobile-menu");
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

<style scoped>
.josefin-bold {
  font-family: JosefinSansBold;
  letter-spacing: 0.03rem;
}

/* Height of Navbar must be calculated per page. It must be set to the desired height of the hero image */
/* .hero {
  grid-column: 1 / -1;
  grid-row: 3;
  display: grid;
  background-repeat: no-repeat;
  background-size: 100vw auto;
  grid-gap: 7%;
} */

.header-container {
  width: 93vw;
  margin: auto;
  margin-top: calc(100vw * 0.02);
}

/* .home-hero-wave {
  background-image: url("data:image/svg+xml,%3Csvg  viewBox='0 0 1151 234' fill='%23eee8aa'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath  opacity='0.4' fill-rule='evenodd' clip-rule='evenodd' d='M0.591553 0.00100708V233.859C111.126 203.295 221.095 188.013 330.5 188.013C522.428 188.013 647.271 226.586 813.184 226.586C923.792 226.585 1036.08 213.728 1150.04 188.013V4.57764e-05L0.591553 0.00100708Z' fill='white'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
} */

.home-hero-mask {
  height: calc(100vw * 0.24);
}
</style>
