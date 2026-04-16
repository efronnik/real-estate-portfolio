// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        // Polling avoids unstable fs watchers that can trigger EMFILE/IPC failures on some macOS + Node setups.
        usePolling: true,
        interval: 500,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.nuxt/**', '**/dist/**', '**/tmp_frames/**']
      }
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-v4.ico?v=4' },
        { rel: 'icon', type: 'image/png', href: '/images/favicon-logo-v4.png?v=4' },
        { rel: 'shortcut icon', href: '/favicon-v4.ico?v=4' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ]
    }
  }
})
