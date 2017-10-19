const webpack = require('webpack');
const { default: Config } = require('webpack-config');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const isProduction = process.env['NODE_ENV'] === 'production';

const clientConfig = {
  target: 'web',
  entry: {
    client: ['core-js/shim', ...(!isProduction ? ['react-hot-loader/patch'] : []), './src/client.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../'),
  },
  plugins: isProduction ? [new MinifyPlugin()] : [new webpack.HotModuleReplacementPlugin()],
};

if (!isProduction) {
  clientConfig.devServer = {
    contentBase: path.join(__dirname, '../'),
    hot: true,
    host: 'localhost',
    port: 3000,
    disableHostCheck: true,
    publicPath: '/',
    proxy: {
      '/': 'http://localhost:8000',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
}

module.exports = new Config().extend('webpack/base.js').merge(clientConfig);
