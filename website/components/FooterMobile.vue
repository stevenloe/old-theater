  <!-- footer for mobile navbar -->
<template>
  <div
    :class="isMobileMenuOpen ? 'block' : 'hidden'"
    class="ml-4 text-center md:hidden"
  >
    <!-- <hr />
    <div class="mt-12">
      <img
        class="inline-block h-20 md:h-24"
        src="~/assets/img/old-theater-logo-final.svg"
        alt="The Old Theater, Oriental North Carolina"
      />
    </div> -->
    <!-- <address class="pb-20 -mt-1 font-serif not-italic">
      The Old Theater
      <br />609 Broad Street <br />Oriental, NC 28571 <br />(252) 249 &ndash;
      0477
      <br />
    </address> -->
  </div>
</template>

<script>
export default {
  props: ['isMobileMenuOpen']
};
</script>