const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  output: {
    filename: '[name].js',

    library: {
      name: 'largeNumber',
      type: 'umd', // 将库暴露的方式。
      export: 'default', // 指定哪一个导出应该被暴露为一个库。
    },
    // 未来可能被弃用
    // library: 'largeNumber',
    // libraryTarget: 'umd',
    // libraryExport: 'default',
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ include: /\.min\.js$/ })],
  },
};
