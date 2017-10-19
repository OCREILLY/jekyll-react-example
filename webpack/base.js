const webpack = require('webpack');
const { default: Config } = require('webpack-config');
const path = require('path');

const isProduction = process.env['NODE_ENV'] === 'production';

const config = new Config().merge({
  devtool: isProduction ? 'nosources-source-map' : 'source-map',
  output: {
    publicPath: '/',
    filename: 'scripts/[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env['NODE_ENV']),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 7'],
                  },
                  modules: false,
                  exclude: ['transform-regenerator'],
                },
              ],
            ],
            plugins: [['transform-react-jsx']],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              camelCase: true,
              importLoaders: 1,
              sourceMap: !isProduction,
              minimize: isProduction,
            },
          },
        ],
      },
      {
        test: /\.ejs$/,
        use: 'raw-loader',
      },
    ],
  },
});

module.exports = config;
