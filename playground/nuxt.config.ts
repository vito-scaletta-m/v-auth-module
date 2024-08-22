export default defineNuxtConfig({
  modules: [
    '../src/module',
    "@pinia/nuxt"
  ],
  srcDir: 'src/',
  devServer: {
    port: 8081
  },
  vAuth: {
  },
  devtools: { enabled: true },
})
