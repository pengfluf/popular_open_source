const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js'
  ],

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:7]',
            'postcss-loader?sourceMap',
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ]
        })
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader?name=[name].[ext]&limit=4096']
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [

    new webpack.NamedModulesPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),

    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),

    new htmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
