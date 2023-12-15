// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n","@nuxt/image"],
  colorMode: { preference: "light"},
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
  tailwindcss: { viewer: false },
  image: {
    dir: 'assets/logos',
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "root", // recommended
    },
    locales: [
      {
        code: "en-GB",
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
    defaultLocale: "en-GB",
  }
});
