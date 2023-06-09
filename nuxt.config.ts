// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Bisnis Di Dubai',
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
          content: 'Dubai, Bisnis di Dubai, Moving to Dubai, Visiting Dubai, Real Estate, Investing, Investing in Dubai'
        }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  i18n: {
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    locales: [
      {
        code: 'en',
        name: 'English(US)',
        file: 'en-US.json'
      },
      {
        code: 'id',
        name: 'Indonesia',
        file: 'id-ID.json'
      }
    ],
    vueI18n: './i18n.config.js' // if you are using custom path, default 
  },
  // Recommended 
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://bisnisdidubai.com',
    }
  },
});
