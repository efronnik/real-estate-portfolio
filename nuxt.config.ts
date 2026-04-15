// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-v4.ico?v=4' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon-logo-v4.png?v=4' },
        { rel: 'shortcut icon', href: '/favicon-v4.ico?v=4' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Niconne&display=swap' }
      ]
    }
  }
})
