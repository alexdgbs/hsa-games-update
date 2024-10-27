export default {
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  head: {
    title: 'hsa-games',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  
  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/postcss8', 
    '@nuxtjs/tailwindcss'
  ],

  modules: [],

  build: {},

  target: 'static', 

  generate: {
    dir: 'dist'
  },

  server: {
    port: process.env.PORT || 3000, // Usa la variable de entorno o el puerto 3000 por defecto
    host: '0.0.0.0' // Escucha en todas las interfaces de red
  },
  serverMiddleware: [
    { path: '/api', handler: '~/index.js' } // Cambia la ruta para que apunte a la raíz
  ],
}

