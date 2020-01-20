const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {},
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
};
