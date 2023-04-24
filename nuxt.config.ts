// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      title: 'Rellocate Dubai',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content: 'Moving to Dubai, Invesing to Dubai, Visiting Dubai'
        },
        {
          name: 'keywords',
          content: 'Dubai, Moving to Dubai, Visiting Dubai, Real Estate, Investing, Investing in Dubai'
        }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
});
