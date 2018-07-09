const webpackConfig = require('./webpack.js');

module.exports = function (config) {
  config.set({
    basePath: './app',
    browsers: ['PhantomJS'],
    coverageIstanbulReporter: {
      fixWebpackSourcePaths: true,
    },
    coverageReporter: {
      reporters: [
        // these reporters can only be used with `v0.2.0` of istanbul-instrumenter-loader
        { type: 'html' },
        { type: 'lcov' },
      ],
      dir: '../coverage',
    },
    singleRun: false,
    frameworks: ['jasmine'],
    files: [
      '../node_modules/babel-polyfill/dist/polyfill.js',
      '../tests.webpack.js',
    ],
    preprocessors: {
      '../tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots', 'coverage'],
    webpack: webpackConfig('karma-coverage'),
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
