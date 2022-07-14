export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'netlifycms',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        scr: "assets/vendor/purecounter/purecounter.js",
        src: "assets/vendor/aos/aos.js",
        src: "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        src: "assets/vendor/glightbox/js/glightbox.min.js",
        src: "assets/vendor/isotope-layout/isotope.pkgd.min.js",
        src: "assets/vendor/swiper/swiper-bundle.min.js",
        src: "assets/vendor/waypoints/noframework.waypoints.js",
        src: "assets/vendor/php-email-form/validate.js",
        scr: "assets/js/main.js"
      },],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  },
  target: 'static',
}
