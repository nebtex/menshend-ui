const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const config = webpackMerge(commonConfig, {
  entry: {
    bundle: "./src/landing/index.tsx"
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/static',
    port: 8081,
    inline: true,
    historyApiFallback: {
      index: 'templates/landing.html',
      disableDotRule: true
    }
  },
  output: {
    filename: "[name].js",
    publicPath: '/static'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor',
      filename: 'vendor.js', 
      minChunks: Infinity
    })
  ]
});

module.exports = config;