const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const config = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    colors: true,
    inline: true,
    historyApiFallback: true
  },
  output: {
    filename: "[name].js"
  }
});

module.exports = config;