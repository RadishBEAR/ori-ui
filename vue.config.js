// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'website/main.ts', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 website
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('website'))
      .set('~', path.resolve('packages'));
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/website/).end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
};
