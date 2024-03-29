export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The Old Theater',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Old Theater, Oriental. The building first opened as a movie theater in 1945 and served as a social and entertainment center until the late 1950s. It was revitalized and reopened in 1995 and today provides a venue where performing arts can thrive in Pamlico County ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      { rel: 'apple-touch-icon', type: ' ', href: '/apple-touch-icon.png' }
    ],
    htmlAttrs: {
      lang: "en",  // it sets the language English
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/format-date.js',
    '~/plugins/format-time.js',
    '~/plugins/bus'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // docs: https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', 
    // docs: https://image.nuxtjs.org/
    '@nuxt/image',
  ],
  image: {
      // Generate images to `/_nuxt/image/file.png`
      staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {

    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
  ],

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 150,
      sm: 225,
      md: 338,
      lg: 830,
      xl: 762,
      xxl: 1143,
      '2xl': 1715
    },
  },

  axios: {baseURL: '/'},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  content: {
    liveEdit: false
  },
  
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    URL: 'FOOBAR'
  },
  
 
}
