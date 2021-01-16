<template>
  <header class="bg-white md:flex md:justify-between md:items-start md:px-4 md:py-3">
    <div class="flex items-center justify-between px-4 py-3 md:p-0">
      <h2 class="font-serif text-lg tracking-wide rounded hover:bg-gray-200 sm:bg-red-300 md:bg-orange-300 lg:bg-yellow-300 xl:bg-indigo-400 2xl:bg-red-600">
        <nuxt-link to="/" class>
          <div class="-mb-2 tracking-wide">The Old Theater</div>
          <div class="text-xs text-gray-600 tracking-widest">ORIENTAL, NC</div>
        </nuxt-link>
      </h2>

      <!-- menu / menu-close buttons -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-700 hover:text-gray-900 focus:text-gray-900">
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
          <input class="shadow w-full rounded-xl text-lg p-2 border border-gray-400 focus:shadow-none" type="text" placeholder="Search oldtheater.org" />
          <button class="ml-2 underline text-blue-600 text-lg">Search</button>
        </div>
        <nuxt-link to="/" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Shows</nuxt-link>
        <nuxt-link to="/community-education/" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Community &amp; Education</nuxt-link>
        <nuxt-link to="/support/" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Support</nuxt-link>

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
        <a href="#" class="text-gray-700 hidden md:inline-block">
          <svg class="h-6 w-6 ml-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="48" height="48" fill="currentColor">
            <g>
              <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
            </g>
          </svg>
        </a>
      </nav>

      <!-- logo  -->
      <div :class="isOpen ? 'block' : 'hidden'" class="ml-4 md:hidden">
        <hr />
        <div class="mt-12">
          <img class="h-20" src="/img/old-theater-logo-final.svg" alt="The Old Theater, Oriental North Carolina" />
        </div>
        <address class="-mt-3 font-serif not-italic">
          The Old Theater
          <br />609 Broad Street
          <br />Oriental, NC 28571
          <br />(252) 249 &ndash; 0477
          <br />
        </address>
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
      aboutMenuItems: {
        title: "About",
        items: [
          { text: "Venue", link: "/about/venue/", id: 1 },
          { text: "Rent the Theater", link: "/about/rent-the-theater", id: 2 },
          { text: "Our History", link: "/about/history", id: 3 },
          { text: "Volunteers & Board", link: "/about/volunteers-and-board", id: 4 },
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
