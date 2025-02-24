// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["/assets/css/base.css"],
  modules: ["@pinia/nuxt"],
  compatibilityDate: "2024-07-12",
  imports: {
    dirs: [
      "utils/**"
    ]
  },
  pinia: {
    storesDirs: ["stores/**"]
  }
})