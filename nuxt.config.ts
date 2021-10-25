import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: './',
  ssr: false,
  plugins: [
    { src: '~/plugins/vueLazyLoad.ts', mode: 'client' }
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  }
})
