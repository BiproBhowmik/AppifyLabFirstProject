export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/static/css/bootstrap.css" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "http://unpkg.com/view-design/dist/styles/iview.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "iview/dist/styles/iview.css",
    "~/assets/css/bootstrap.css",
    "~/assets/css/common.css",
    "~/assets/css/main.css",
    "~/assets/css/responsive.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/iview"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:3333/",
    credentials: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    port: 8000, // default: 3000
    host: "localhost" // default: localhost
  },
  auth: {
    strategies: {
      local: {
        // token: {
        //   required: false,
        //   type: false
        // },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" }
        }
      }
    }
  }
};
