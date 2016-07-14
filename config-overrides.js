const webpack = require('webpack');
module.exports = function override(config) {
  const modules = config.resolve.modules || {};
  Object.assign(modules, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  });
  config.resolve.modules = modules;
  config.plugins = (config.plugins || [    "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-syntax-optional-chaining"]).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  config.module.rules.push({
    test: /node_modules[\\/]@web3-react[\\/]walletconnect-v2/,
    loader: require.resolve('esbuild-loader')
  });
  return config;
};