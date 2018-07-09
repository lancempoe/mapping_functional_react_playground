const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

module.exports = env => {
  return {
    entry: [
      path.resolve(__dirname, '..', 'src/index.js'),
    ],
    output: {
      path: path.resolve(__dirname, '..', 'public'),
      publicPath: '/public/',
      filename: 'bundle.js',
    },

    devtool: '#inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        '../node_modules',
        path.resolve(__dirname, '..', 'src/index.js'),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader'],
          })),
        }],
    },
    devServer: {
      historyApiFallback: true,
      publicPath: '/public/',
    },
    plugins: [
      new WriteFilePlugin(),
      new ExtractTextWebpackPlugin('all.css'),
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        ASSET_BASE_URL: '/public',
        template: 'index.html',
      }),
    ],
  };
}
