module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
        },
        enforce: 'post',
        exclude: [/node_modules/, /.test/],
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react-addons-test-utils': 'react-dom',
  },
};
