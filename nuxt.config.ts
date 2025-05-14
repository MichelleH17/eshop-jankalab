// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint"
  ],
  devtools: { enabled: true },
  image: {
    dir: "public",
  },
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      standalone: false,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#0a0a0f",
            gray_light: "#f5f5f5",
            gray_dark: "#9d9d9d",
            gray: "#f9f9f9",
            accent: "#e8e1d4",
          },
          fontFamily: {
            youth: ["Youth", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
          },
        },
      },
    },
  },
});
