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
    alias: {
      '@core': path.resolve(__dirname, '../src/app/core/'),
      '@model': path.resolve(__dirname, '../src/app/model/'),
      '@services': path.resolve(__dirname, '../src/app/services/'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
};
