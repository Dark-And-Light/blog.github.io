const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  css: {
    sourceMap: true
  },
  //启动运行时编译
  runtimeCompiler: true,
  devServer:{
    open: true,
    host: 'localhost',
    port: 8080
  },

  chainWebpack: config => {
    // 修复HMR
      config.resolve.symlinks(true);
  },
}