import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Mono'],
      mono: ['IBM Plex Mono'],
    },
  },
})
