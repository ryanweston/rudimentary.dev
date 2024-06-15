// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/fonts',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/main.css',
  ],
  fonts: {
    families: [
      { name: 'IBM Plex Mono', provider: 'bunny' },
    ],
    experimental: {
      addPreloadLinks: true,
    },
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      langs: [
        'javascript',
        'bash',
      ],
    },
  },
  ogImage: {
    fonts: [
      'IBM+Plex+Mono',
    ],
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/blog',
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },
})
