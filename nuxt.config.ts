// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/variables.css", "~/assets/css/base.css"],
  compatibilityDate: "2024-08-14",
  app: {
    head: {
      title: "Dev Tools",
      bodyAttrs: {
        class: ["dark:bg-gray-900"],
      },
    },
  },
  ssr: false,
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear();
    },
  },
});
