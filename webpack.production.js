const webpack = require("webpack");
const path = require("path");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

const config = webpackMerge(commonConfig, {
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    })
  ],
  externals: {
    reactstrap: 'reactstrap'
  }
});

module.exports = config;