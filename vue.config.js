const path = require('path')
const merge = require('webpack-merge')
const pconfig = {
  pages: {
    index: './src/index.js'
  },
  outputDir: path.resolve(__dirname,'lib'),
  configureWebpack: {
    output: {
      library: 'rabbit',
      libraryTarget: "umd",
      umdNamedDefine: true
    }
  }
}
const dconfig = {
  pages: {
    index: './examples/main.js',
  }
}
let config = {
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
};
if(process.env.NODE_ENV === 'production') {
  config = merge(config,pconfig);
} else {
  config = merge(config,dconfig);
}
module.exports = config