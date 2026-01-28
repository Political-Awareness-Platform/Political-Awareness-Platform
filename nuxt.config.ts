// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2026-01-28",
  ssr: true,
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/turkiye", "/deutschland", "/newzealand"],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/image", "nuxt-security"],
  css: ["~/assets/css/main.css"],
  colorMode: { preference: "light" },
  app: {
    head: {
      title: "Political Awareness Platform",
      meta: [
        { name: "description", content: "Political Awareness Platform" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // { rel: "manifest", href: "/manifest.json" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  image: {
    dir: "assets/logos",
  },
  i18n: {
    lazy: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
    langDir: "../locales",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en-GB",
        name: "🇬🇧 English (UK)",
        file: "en-GB.json",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        name: "🇩🇪 Deutsch",
        file: "de-DE.json",
      },
      {
        code: "tr-TR",
        iso: "tr-TR",
        name: "🇹🇷 Türkçe",
        file: "tr-TR.json",
      },
    ],
    defaultLocale: "en",
  },
});
