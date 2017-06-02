const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',

    'webpack-dev-server/client?http://localhost:8080',

    'webpack/hot/only-dev-server',

    './src/main.js'
  ],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/'
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
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
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
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin(),

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
