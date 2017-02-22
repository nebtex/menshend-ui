var path = require("path");

var config = {
  devtool: 'inline-source-map',
  entry: ["./src/app.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat",
      "react-addons-css-transition-group": "rc-css-transition-group"
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, /__tests__/]
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = config;