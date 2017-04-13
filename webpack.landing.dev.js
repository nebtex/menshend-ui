const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path')
const config = webpackMerge(commonConfig, {
  entry: {
    bundle: "./src/landing/index.tsx"
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    port: 8081,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  output: {
    filename: "[name].js",
    publicPath: '/'
  }
});

module.exports = config;