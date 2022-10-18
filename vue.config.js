module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module
        .rule('ts')
        .test(/\.tsx?$/).use('babel-loader')
        .loader('babel-loader')
        .end()
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
