const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/main.ts'),
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'timer.js',
    chunkFilename: '[name].chunk.js',
    library: 'Timer',
  },
});
