const webpack = require('webpack');
const { default: Config } = require('webpack-config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const isProduction = process.env['NODE_ENV'] === 'production';

const serverConfig = {
  target: 'node',
  watch: !isProduction,
  entry: {
    server: ['./src/server.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../'),
    library: 'server',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
};

module.exports = new Config().extend('webpack/base.js').merge(serverConfig);
