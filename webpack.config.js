const getWebpackConfig = require('./webpack.js');

const config = getWebpackConfig('dev-server');
module.exports = config;
