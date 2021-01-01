<template>
  <!-- image card-->
  <div class="m-8 md:mr-4 md:flex border border-red-900">
    <div class="relative pb-5/6 md:w-2/3 border border-white">
      <img class="h-full w-full object-cover rounded-lg shadow-md" :src="item.imageUrl" :alt="item.imageAlt">
    </div>

    <!-- details card-->
    <div class="relative  px-4 -mt-4 md:-ml-4 md:mt-6 md:mb-6 md:flex md:w-1/3 border md:p-0 border-green-500">
      <div class="bg-gray-200 p-6 rounded-lg shadow-lg w-full">
        <div class="">
          <div class="inline-block  bg-red-200 text-teal-900 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{{item.category}}</div>

          <h4 class="ml-2 mt-1 font-semibold text-lg leading-tight truncate">{{ item.title }}</h4>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ item.date }} &bull; {{ item.time}} &bull; ${{ item.formattedPrice }}
          </div>
          <!-- <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">At {{ item.location}}</div> -->
        </div>

        <p class="ml-2 block truncate md:break-normal border border-blue-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid minima ipsum sint perspiciatis expedita autAssumenda aliquid minima ipsum sint perspiciatis expedita aut ullam sed ut inventore vitae cupiditate labore eos doloribus, optio cum tempore facere officia.</p>

        <!-- <div v-bind:style="styleObject"></div> -->

        <div class="flex w-full mt-2 md:inline-block border border-green-400 ">
          <button class="w-1/2 bg-yellow-200 md:w-full text-gray-800 font-bold py-1 px-4 border border-gray-800 rounded-lg shadow hover:bg-yellow-300 hover:text-gray-900">Buy Tickets</button>
          <button class="w-1/2 ml-3 md:ml-0 md:mt-3 md:w-full bg-white  text-gray-700 font-semibold py-1 px-4 border border-gray-600 rounded-lg shadow hover:bg-gray-100 hover:text-gray-900">Learn More</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    // classObject: function () {
    //   return {
    //     // active: this.isActive && !this.error,
    //     // 'text-danger': this.error && this.error.type === 'fatal'
    //     "foo"
    //   }
    // }
  },
};
</script>
