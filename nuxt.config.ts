export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
