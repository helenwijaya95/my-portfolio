export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Helen Wijaya | Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vuetimeline.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // {
    //   icons: true,
    // },
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faWrench'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faFileCode'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faCodeBranch'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faSearch'],
      },
    ],
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  // scss config
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
  googleFonts: {
    families: {
      'Press+Start+2P': true,
      Dosis: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },
  // loading: '~/components/LoadingBar.vue',
}
