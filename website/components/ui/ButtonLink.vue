<template>
<div class="mt-2">
  
  <nuxt-link :to='url'>
    <!--  Any color prop with lentgh procuces a Transparent Button w/ black hover state -->
    <div v-if="color" class="block px-4 pt-2 pb-2 mb-3 text-base font-bold tracking-wide text-center text-black uppercase border-2 border-gray-900 justify-self-end hover:text-white hover:shadow-md hover:border-black hover:bg-black ">
    {{ text }}
    </div>

    <!-- Defaut Black Button w/ b??? hover state -->
    <div v-else class="block px-6 pt-2 pb-2 text-base font-light tracking-wide text-center text-white uppercase bg-gray-900 border border-gray-900 sm:text-lg hover:text-white hover:shadow-md hover:border-white hover:bg-black ">
    {{ text }}
    </div>
    </nuxt-link>
</div>
</template>

<script>
export default {
  props: ['url', 'text', 'color']
}
</script>