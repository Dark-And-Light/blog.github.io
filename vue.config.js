
module.exports = {
  css: {
    sourceMap: true
  },
  //启动运行时编译
  runtimeCompiler: true,// 是否使用包含运行时编译器的 Vue 构建版本
  devServer:{
    open: true,
    host: 'localhost',
    port: 8080
  },

  chainWebpack: config => {
    // 修复HMR
      config.resolve.symlinks(true);
  },
  publicPath:'./',
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
}