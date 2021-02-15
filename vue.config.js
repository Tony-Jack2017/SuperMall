module.exports = {
    configureWebpack: {
        resolve: {
            // extensions: [] 可以不写路径名。（默认内部配置了）
            alias: {
                // '@': 'src' （默认内部配置了）[vue-cli3可以vue-cli2没有]
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}