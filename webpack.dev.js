const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path')
const config = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/static/',
    port: 8081,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  output: {
    filename: "[name].js",
    publicPath: '/static/'

  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'node_modules/monaco-editor/min/vs',
      to: '/static/vs',
    }])
  ]
});

module.exports = config;