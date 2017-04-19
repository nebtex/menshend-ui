const webpack = require("webpack");
const path = require("path");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = webpackMerge(commonConfig, {
  entry: {
    bundle: "./src/landing/index.tsx"
  },
  devtool: "none",
  output: {
    path: path.resolve(__dirname, "dist_landing/static"),
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: "../index.html" }
    ]),
    new UglifyJSPlugin()
  ]
});

module.exports = config;