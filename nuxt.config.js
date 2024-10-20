export default {
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  head: {
    title: "mycontacts",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS
  css: ["@/static/css/tailwind.css"],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration
  build: {},

  axios: {
    baseURL: "http://localhost:3000/api", // Set your API base URL here
  },
};
