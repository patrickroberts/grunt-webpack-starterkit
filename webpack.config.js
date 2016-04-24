'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractCSS = new ExtractTextPlugin('css/style.css');

let PRODUCTION = (process.env.NODE_ENV == 'production') || false;

module.exports = {
  entry: {
    'app': './src/app.jsx',
  },
  output: {
    filename: 'js/[name].js',
    path: './client',
  },
  module: {
    loaders: [
      {
        include: './src',
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract('style', 'css'),
      },
      {
        test: /\.less$/,
        loader: extractCSS.extract('style', 'css!less'),
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract('style', 'css!sass'),
      },
    ],
  },
  plugins: [
    extractCSS,
  ].concat(PRODUCTION ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: true,
      output: {
        comments: false,
      },
    }),
  ] : []),
};
