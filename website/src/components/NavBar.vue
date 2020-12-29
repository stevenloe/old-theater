<template>
  <header class="bg-gray-100 md:flex md:justify-between md:items-center md:px-4 md:py-3">
    
    <div class="flex items-center justify-between px-4 py-3 md:p-0">
      <h2 class="font-serif text-lg tracking-wide rounded hover:bg-gray-200">
        <a class="px-2 py-1" href="#"> The Old Theater </a>
      </h2> 
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-700 hover:text-gray-900 focus:text-gray-900">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>

    <div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-4 pt-2 pb-4 md:flex md:p-0">
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Shows</a>
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Community</a>
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Get Involved</a>
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Support</a>
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">Calendar</a>
        <a href="#" class="mt-1 block px-1 py-1 text-2xl rounded hover:bg-gray-200 md:text-base md:mt-0 md:ml-2">About</a>
      </nav>

      <div :class="isOpen ? 'block' : 'hidden'"  class="ml-4 md:hidden">
        <hr>
        <div class="mt-12">
          <img class="h-20" src="/img/old-theater-logo-final.svg" alt="The Old Theater, Oriental North Carolina">
        </div>
        <address class="-mt-3 font-serif not-italic">
          The Old Theater<br>
          609 Broad Street<br>
          Oriental, NC 28571<br>
          (252) 249 &ndash; 0477<br>
        </address>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
