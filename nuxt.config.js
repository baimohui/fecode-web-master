const path = require('path');
module.exports = {
    srcDir: 'src/',
    head: {
        title: '预见网络科技',
        link: [
            {rel: 'stylesheet', href: '/base.css'},
            {rel: 'stylesheet', href: '/script/lib/weui/weui.min.css'},
            {rel: 'favicon', href: 'favicon.ico'}
        ],
        script: [
            {src: '/base.js', defer: 'defer'},
            {src: '/response.js', defer: 'defer'},
            {src: '/common.js', defer: 'defer'},
            {src: '/xui.js', defer: 'defer'},
            {src: '/script/lib/jquery.min.js', defer: 'defer'},
            {src: '/script/lib/weui/weui.min.js', defer: 'defer'},
        ],
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
    },
    plugins: [
        '~/plugins/global.js',
        '~/plugins/vue-inject.js',
        '~/plugins/ctx-inject.js'
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/api/': 'http://api.example.com',
        '/api2/': 'http://api.another-website.com'
    },
    build: {
        extend(config, {isDev, isClient}) {
            Object.assign(config.resolve.alias, {
                'U': path.resolve('src/common/utils'),
            });
        }
    }
};