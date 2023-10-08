export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true,
        'Overpass Mono': [400, 700],
        'Source Code Pro': true,
        'Rozha One': true
      }
    }]
  ],
})
