export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clientAnyTime Docs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap", rel:"stylesheet"},
      {rel:"stylesheet", href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.2/styles/atom-one-dark.min.css"},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"},
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/theme.css',
    '@/assets/css/main.css',
    '@/assets/plugins/simplelightbox/simple-lightbox.min.css',
    '@/assets/fontawesome/js/all.min.js',
    '@/assets/plugins/popper.min.js',
    // '@/assets/plugins/bootstrap/js/bootstrap.min.js',
    '@/assets/plugins/smoothscroll.min.js',
    // '@/assets/js/highlight-custom.js',
    '@/assets/plugins/simplelightbox/simple-lightbox.min.js',
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
