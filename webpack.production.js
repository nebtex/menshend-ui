const webpack = require("webpack");
const path = require("path");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

const config = webpackMerge(commonConfig, {
  entry: {
    bundle: "./src/index.tsx"
  },
  devtool: "",
  output: {
    path: path.resolve(__dirname, "dist/static"),
    filename: "[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: "../index.html" }
    ]),
    new BabiliPlugin()
  ]
});

module.exports = config;