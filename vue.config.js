const path = require('path')
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
let config = {};
if(process.env.NODE_ENV === 'production') {
  config = pconfig;
} else {
  config = dconfig;
}
module.exports = config