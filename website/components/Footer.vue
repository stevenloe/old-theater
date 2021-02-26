<template>
  <footer class="bg-gray-100 p-8">
    <div class="mt-0 text-center sm:w-3/4 md:w-8/12 lg:w-1/2 xl:w-5/12 mx-auto">
      <nuxt-link to="/" class="focus:outline-none">
        <img
          class="inline-block h-20 md:h-24 px-4 hover:bg-gray-300 rounded"
          src="~/assets/img/old-theater-logo-final.svg"
          alt="The Old Theater, Oriental North Carolina"
        />
      </nuxt-link>
      <address
        class="-mt-2 mb-8 not-italic font-serif md:text-xl w-full xl:text-xl"
      >
        The Old Theater<br />
        609 Broad Street<br />
        Oriental, NC 28571<br />
        (252) 249 &ndash; 0477<br />
        <div class="flex justify-center mt-3">
          <!-- decorative rule -->
          <svg
            class="fill-current text-gray-600 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="12"
          >
            <path
              d="M90.367 5.46l43.21.41v.297l-43.21.297c-.197 1.586-.853 2.892-1.967 3.919-1.115 1.03-2.441 1.543-3.978 1.543-1.858 0-3.527-.632-5.014-1.896C77.7 11.344 75.951 12 74.168 12c-1.66 0-3.23-.582-4.717-1.746C68.016 11.418 66.342 12 64.436 12c-1.214 0-2.439-.335-3.677-1.003-1.238-.669-2.328-1.623-3.27-2.861a9.935 9.935 0 01-3.269 2.824c-1.288.693-2.6 1.04-3.938 1.04-1.684 0-3.165-.526-4.439-1.578-1.277-1.054-2.039-2.372-2.287-3.958L.424 6.167V5.87l43.132-.41c.198-1.584.886-2.89 2.064-3.919C46.795.515 48.163 0 49.723 0c1.66 0 3.344.656 5.053 1.969.966-.743 1.778-1.257 2.435-1.542C57.867.144 58.63 0 59.496 0c1.733 0 3.33.656 4.79 1.969C66.022.656 67.793 0 69.6 0c2.353 0 4.707 1.288 7.058 3.863C78.986 1.288 81.326 0 83.68 0c1.783 0 3.289.508 4.517 1.523 1.225 1.015 1.948 2.329 2.17 3.938zm-35.145-.073C53.142 2.563 51.06 1.15 48.98 1.15c-1.238 0-2.297.397-3.175 1.19-.881.792-1.393 1.832-1.542 3.12l10.959-.074zM44.338 6.464c.223 1.19.922 2.187 2.1 2.992 1.175.805 2.531 1.207 4.067 1.207 1.164 0 2.378-.29 3.641-.874 1.263-.581 2.254-1.281 2.972-2.099-.075-.074-.237-.26-.485-.557-.247-.297-.42-.47-.52-.52l-11.775-.15zm20.395-1.077c-1.288-1.61-2.378-2.718-3.27-3.325-.891-.606-1.857-.91-2.898-.91-1.114 0-2.253.396-3.418 1.189.942.767 1.982 1.783 3.121 3.046h6.465zm-5.499 1.226c1.164 1.461 2.254 2.527 3.27 3.195 1.015.669 2.055 1.004 3.12 1.004 1.263 0 2.392-.311 3.382-.93-.99-.817-2.069-1.906-3.233-3.269h-6.539zm15.528-1.226c-1.362-1.56-2.506-2.644-3.434-3.251a5.445 5.445 0 00-3.03-.91c-1.163 0-2.352.347-3.565 1.04 1.065.99 1.623 1.523 1.673 1.597.396.397.704.73.927 1.003.223.274.347.422.372.447l7.057.074zm4.275 4.272c-1.09-.793-2.13-1.807-3.121-3.046l-7.023.074c1.287 1.486 2.421 2.558 3.402 3.214.976.657 1.947.985 2.914.985 1.016 0 2.291-.41 3.828-1.227zM89.7 5.461c-.248-1.238-.922-2.23-2.023-2.972-1.104-.743-2.412-1.115-3.922-1.115-2.379 0-4.633.967-6.762 2.898l.371.428c.1.11.297.34.594.687l11.742.074zm.074 1.003l-10.81.15c1.46 1.733 2.586 2.877 3.379 3.436.793.555 1.722.836 2.787.836 1.266 0 2.316-.41 3.158-1.227s1.338-1.882 1.486-3.195z"
            />
          </svg>
        </div>
      </address>
      <nav class="flex border-t pt-1 pb-1 mb-10 border-b border-gray-500">
        <div class="w-1/2 text-left">
          <nuxt-link
            to="/news"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >NEWS</nuxt-link
          >
          <nuxt-link
            to="/about/history"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >OUR HISTORY</nuxt-link
          >
          <nuxt-link
            to="/contact"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >CONTACT US</nuxt-link
          >
        </div>
        <div class="w-1/2 text-right">
          <nuxt-link
            to="/support/donate"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >DONATE</nuxt-link
          >
          <nuxt-link
            to="/calendar"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >CALENDAR</nuxt-link
          >
          <nuxt-link
            to="/about/venue"
            class="footer-link tracking-wider md:text-lg hover:text-black"
            >VENUE</nuxt-link
          >
        </div>
      </nav>

      <a
        href="https://stevenloe.com"
        class="w-full text-gray-700 hover:text-gray-900 mb-16 text-sm sm:text-base"
        >Website by Steven Loe</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>



