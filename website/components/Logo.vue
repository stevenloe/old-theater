<template>
  <div>
    <!-- logo & text -->
    <nuxt-link to="/">
      <div
        class="flex text-left rounded md:text-center md:block hover:bg-gray-200"
      >
        <img
          class="hidden h-10 md:inline-block md:h-12 md:-mb-3"
          src="~/assets/img/old-theater-logo-final.svg"
          alt="The Old Theater, Oriental North Carolina"
        />
        <h2 class="font-serif text-lg tracking-wide rounded">
          <div class="flex-no-wrap -mb-2 tracking-wide md:mx-1">
            The Old Theater
          </div>
          <div class="text-xs tracking-widest text-gray-600 md:mx-4">
            ORIENTAL, NC
          </div>
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>
