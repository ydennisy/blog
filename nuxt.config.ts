// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Enable SSG (Static Site Generation)
  ssr: true,
  
  modules: [
    '@nuxt/content'
  ],

  // Nuxt Content configuration
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  // Tailwind v4 configuration via PostCSS
  css: ['~/assets/css/tailwind.css', '~/assets/css/content.css'],
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  // Prerendering configuration for SSG
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
