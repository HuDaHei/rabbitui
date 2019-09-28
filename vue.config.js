const path = require('path');
module.exports = {
  pages: {
    index: './examples/main.js',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname)
      },
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/package/style/global_class.scss";
        @import "@/package/style/global_var.scss";
        `
      }
    }
  }
}