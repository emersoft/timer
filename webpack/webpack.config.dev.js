const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: {
    dev: path.resolve(__dirname, '../src/dev/dev.ts'),
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/dev/index.html'),
    }),
  ],
});
