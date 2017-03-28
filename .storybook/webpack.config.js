const path = require('path');
// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  // Make whatever fine-grained changes you need
  var config = genDefaultConfig(storybookBaseConfig, configType);

  config.module.loaders.push({
    test: /.scss$/,
    loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "sass"],
    include: path.resolve(__dirname, '../')
  },
  {
    test: /\.tsx?$/,
    loaders: ["awesome-typescript-loader"],
    include: path.resolve(__dirname, '../')
  });
  
  config.resolve.extensions.push(".tsx")
  config.resolve.extensions.push(".ts")

  // Return the altered config
  return config;
};