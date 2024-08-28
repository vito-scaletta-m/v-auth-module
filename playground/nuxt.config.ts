import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
    '../src/module',
    "@pinia/nuxt",
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './src/configs/i18n.config.ts', // if you are using custom path, default
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'fr',
        name: 'France'
      },
    ]
  },
  vAuth: {
    redirectWithI18n: true
  },
  css: [
    'primeicons/primeicons.css'
  ],
  srcDir: 'src/',
  devServer: {
    port: 8081
  },
  primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.darkmode'
                }
            }
        }
    },
  devtools: { enabled: true },
})
