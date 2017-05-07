const webpack = require("webpack");
const path = require("path");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = webpackMerge(commonConfig, {
  entry: {
    bundle: "./src/landing/index.tsx"
  },
  devtool: "none",
  output: {
    path: path.resolve(__dirname, "dist_landing"),
    filename: "static/[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/landing.html',
      excludeChunks: ['bundle', 'vendor']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor',
      filename: 'static/vendor.js', 
      minChunks: Infinity
    })
  ]
});

module.exports = config;