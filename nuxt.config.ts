// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/css/base.css"],
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/i18n"],
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {code: "ja", language: "ja-JP", name: "日本語", file: "ja-JP.ts"},
      {code: "en", language: "en-US", name: "English (US)", file: "en-US.ts"},
    ],
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: false,
    },
    lazy: true,
  },
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