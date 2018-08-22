module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '123',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'FEStudy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: './components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'element-ui'],
  },
  plugins: [
    {
      src: '~plugins/ElementUI',
      ssr: true,
    }
  ],
  
  // // some nuxt config...
  css: [
    '~assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
}

