module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: '广联达大前端中心',
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
	loading: {
		color: '#0175fd',
		height: '3px'
	},
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
		},
		{
			src: '~plugins/nuxt-video-player-plugin.js',
			ssr: false,
		},
		{

			src: '~plugins/localStorage',
			ssr: false,
		}
	],

	// // some nuxt config...
	css: [
		//全局css
		{
			src: '~assets/css/main.less',
			lang: 'less',
		},
		//iconfont字体配置
		{
			src: '~static/iconfont/iconfont.css',
			lang: 'css',
		},
		//elementUI配置
		'element-ui/lib/theme-chalk/index.css',
		//videoJS配置
		'video.js/dist/video-js.css',
		//首页
		{
			src: '~assets/css/home-page.less',
			lang: 'less',
		},
		//列表页
		{
			src: '~assets/css/category-page.less',
			lang: 'less',
		},
		//视频播放页
		{
			src: '~assets/css/video-page.less',
			lang: 'less',
		},
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
	],
	axios: {
		proxy: true
	},
	proxy: {
		'/api': {
		  	target: 'http://10.1.83.101:18080',
		}
	},
}

