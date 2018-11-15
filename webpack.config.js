const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  mode: 'production',
  entry: './src/',
  output: {
    library: 'ImgSwipe',
    libraryTarget: 'commonjs2',
    filename: 'img-swipe.js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // extractCSS: true
          extractCSS: false
        }
      },
      { test: /\.js$/,
        loader: 'babel-loader'
      },
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
      },
    ]
  },
  plugins: [
    // new ExtractTextPlugin('img-swipe.css')
  ]
};
