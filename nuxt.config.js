import i18n from './assets/i18n/config_i18n.js'

export default {

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/firebaseConfig.js', mode: 'client' }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/svg', '@nuxtjs/pwa', 
    ['nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'tr',
            name: 'Turkce'
          },
          {
            code: 'de',
            name: 'Deutsche'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
  
  },
  env: {
    APIKEY: process.env.APIKEY,
    PROJECTID: process.env.PROJECTID,
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  pwa: {
    manifest: {
      name: "Political Awareness Platform",
      short_name: "PAP",
      display: "standalone",
    }
  }
}
