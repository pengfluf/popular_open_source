const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader?name=[name].[ext]&limit=4096']
      }
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};
