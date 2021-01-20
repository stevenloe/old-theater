<template>
  <header class="bg-white md:flex md:justify-between md:items-start md:px-4 md:py-3">
    <div class="flex items-center justify-between px-4 py-3 md:p-0">
      <img class="inline-block h-10 md:mr-2 md:h-12" src="~/assets/img/old-theater-logo-final.svg" alt="The Old Theater, Oriental North Carolina">
      <!-- <h2 class="font-serif text-lg tracking-wide rounded hover:bg-gray-200 sm:bg-red-300 md:bg-orange-300 lg:bg-yellow-300 xl:bg-indigo-400 2xl:bg-red-600"> -->
      <h2 class="font-serif text-lg tracking-wide rounded hover:bg-gray-200 ">
        <nuxt-link to="/" class>
          <div class="-mb-2 tracking-wide">The Old Theater</div>
          <div class="text-xs text-gray-600 tracking-widest">ORIENTAL, NC</div>
        </nuxt-link>
      </h2>

      <!-- menu / menu-close buttons -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-700 hover:text-gray-900 focus:text-gray-900" name="mobile menu navigation open/close">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>

    <div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-4 pt-2 pb-4 md:flex md:p-0">
        <AppSearchInput />
        
        <div class="flex mb-4 md:hidden">
          <!-- <input class="shadow w-full rounded-xl text-lg p-2 border border-gray-400 focus:shadow-none" type="text" placeholder="Search oldtheater.org" />
          <button class="ml-2 underline text-blue-600 text-lg">Search</button> -->
        </div>
        <nuxt-link to="/" class="mt-1 block px-1 py-1 text-2xl rounded  hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Home</nuxt-link>
        <nuxt-link to="/community-education" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Community &amp; Education</nuxt-link>
        <!-- <nuxt-link to="/support/" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Support</nuxt-link> -->

        <SubMenu v-bind:menuData='supportMenuItems' />
        <SubMenu v-bind:menuData='aboutMenuItems' />

        <nuxt-link to="/get-involved/" class="mt-1 block px-0 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Get Involved</nuxt-link>

        <nuxt-link to="/calendar/">
          <div v-if="isOpen" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:hidden">Calendar</div>
          <svg class="hidden md:inline-block h-6 w-6 ml-2 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="48" height="48" fill="currentColor">
            <g>
              <path d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z" />
            </g>
          </svg>
        </nuxt-link>

        <!-- search  icon-->
        <!-- <a href="#" class="text-gray-700 hidden md:inline-block">
          <svg class="h-6 w-6 ml-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="48" height="48" fill="currentColor">
            <g>
              <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
            </g>
          </svg>
        </a> -->
      </nav>

      <!-- logo  -->
      <div :class="isOpen ? 'block' : 'hidden'" class="text-center ml-4 md:hidden ">
        <hr />
        <div class="mt-12 ">
          <img class="inline-block h-20 md:h-24" src="~/assets/img/old-theater-logo-final.svg" alt="The Old Theater, Oriental North Carolina">
        </div>
        <address class="-mt-1 font-serif not-italic pb-20">
          The Old Theater
          <br />609 Broad Street
          <br />Oriental, NC 28571
          <br />(252) 249 &ndash; 0477
          <br />
        </address>
        <!-- decorative rule -->
            <!-- <svg class="fill-current text-gray-600 h-5" xmlns="http://www.w3.org/2000/svg" width="134" height="12">
              <path d="M90.367 5.46l43.21.41v.297l-43.21.297c-.197 1.586-.853 2.892-1.967 3.919-1.115 1.03-2.441 1.543-3.978 1.543-1.858 0-3.527-.632-5.014-1.896C77.7 11.344 75.951 12 74.168 12c-1.66 0-3.23-.582-4.717-1.746C68.016 11.418 66.342 12 64.436 12c-1.214 0-2.439-.335-3.677-1.003-1.238-.669-2.328-1.623-3.27-2.861a9.935 9.935 0 01-3.269 2.824c-1.288.693-2.6 1.04-3.938 1.04-1.684 0-3.165-.526-4.439-1.578-1.277-1.054-2.039-2.372-2.287-3.958L.424 6.167V5.87l43.132-.41c.198-1.584.886-2.89 2.064-3.919C46.795.515 48.163 0 49.723 0c1.66 0 3.344.656 5.053 1.969.966-.743 1.778-1.257 2.435-1.542C57.867.144 58.63 0 59.496 0c1.733 0 3.33.656 4.79 1.969C66.022.656 67.793 0 69.6 0c2.353 0 4.707 1.288 7.058 3.863C78.986 1.288 81.326 0 83.68 0c1.783 0 3.289.508 4.517 1.523 1.225 1.015 1.948 2.329 2.17 3.938zm-35.145-.073C53.142 2.563 51.06 1.15 48.98 1.15c-1.238 0-2.297.397-3.175 1.19-.881.792-1.393 1.832-1.542 3.12l10.959-.074zM44.338 6.464c.223 1.19.922 2.187 2.1 2.992 1.175.805 2.531 1.207 4.067 1.207 1.164 0 2.378-.29 3.641-.874 1.263-.581 2.254-1.281 2.972-2.099-.075-.074-.237-.26-.485-.557-.247-.297-.42-.47-.52-.52l-11.775-.15zm20.395-1.077c-1.288-1.61-2.378-2.718-3.27-3.325-.891-.606-1.857-.91-2.898-.91-1.114 0-2.253.396-3.418 1.189.942.767 1.982 1.783 3.121 3.046h6.465zm-5.499 1.226c1.164 1.461 2.254 2.527 3.27 3.195 1.015.669 2.055 1.004 3.12 1.004 1.263 0 2.392-.311 3.382-.93-.99-.817-2.069-1.906-3.233-3.269h-6.539zm15.528-1.226c-1.362-1.56-2.506-2.644-3.434-3.251a5.445 5.445 0 00-3.03-.91c-1.163 0-2.352.347-3.565 1.04 1.065.99 1.623 1.523 1.673 1.597.396.397.704.73.927 1.003.223.274.347.422.372.447l7.057.074zm4.275 4.272c-1.09-.793-2.13-1.807-3.121-3.046l-7.023.074c1.287 1.486 2.421 2.558 3.402 3.214.976.657 1.947.985 2.914.985 1.016 0 2.291-.41 3.828-1.227zM89.7 5.461c-.248-1.238-.922-2.23-2.023-2.972-1.104-.743-2.412-1.115-3.922-1.115-2.379 0-4.633.967-6.762 2.898l.371.428c.1.11.297.34.594.687l11.742.074zm.074 1.003l-10.81.15c1.46 1.733 2.586 2.877 3.379 3.436.793.555 1.722.836 2.787.836 1.266 0 2.316-.41 3.158-1.227s1.338-1.882 1.486-3.195z"/>
            </svg> -->
      </div>
    </div>
  </header>
</template>

<script>
import SubMenu from "~/components/SubMenu.vue";
import AppSearchInput from "~/components/AppSearchInput.vue";
export default {
  data() {
    return {
      isOpen: false,
      isSearchOpen: false,
      aboutMenuItems: {
        title: "About",
        items: [
          { text: "Venue", link: "/about/venue/", id: 1 },
          { text: "Rent the Theater", link: "/about/rent-the-theater", id: 2 },
          { text: "Our History", link: "/about/history", id: 3 },
          { text: "Volunteers & Board", link: "/about/volunteers-and-board", id: 4 },
        ],
      },
      supportMenuItems: {
        title: "Support",
        items: [
          { text: "Membership", link: "/support/membership", id: 11 },
          { text: "Sponsor a Show or Production", link: "/support/sponsor", id: 12 },
          { text: "Donate", link: "/support/donate", id: 13 },
          { text: "Our Fundraisers", link: "/support/fundraisers", id: 14 },
          { text: "Other Ways to Support", link: "/support/other", id: 15 },
        ],
      },
    };
  },
  methods: {},
  components: {
    SubMenu,
    AppSearchInput,
  },
};
</script>
