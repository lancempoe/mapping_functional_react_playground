const getWebpackConfig = require('./webpack.js');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    frameworks: ['jasmine'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js',
    ],
    preprocessors: {
      './tests.webpack.js': [ 'webpack', 'sourcemap' ],
    },
    reporters: ['dots'],
    webpack: getWebpackConfig('karma'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
